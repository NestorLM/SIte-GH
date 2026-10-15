// ============================================
// GH Lavagens — JavaScript Profissional
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // 1. Navbar Scroll Effect
    // ==========================================
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // ==========================================
    // 2. Back to Top
    // ==========================================
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==========================================
    // 3. Mobile Menu Toggle
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const overlay = document.getElementById('navOverlay');

    function openMenu() {
        menuToggle.classList.add('active');
        navLinks.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.setAttribute('aria-label', 'Fechar menu de navegação');
    }

    function closeMenu() {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    }

    menuToggle.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener('click', closeMenu);

    // Fechar menu com Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
            menuToggle.focus();
        }
    });

    // ==========================================
    // 4. Smooth Scroll & Close Menu on Link Click
    // ==========================================
    const navLinksItems = document.querySelectorAll('.nav-link[href^="#"]');

    navLinksItems.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });

                    closeMenu();

                    // Atualizar URL sem scroll
                    history.pushState(null, null, href);
                }
            }
        });
    });

    // ==========================================
    // 5. Active Nav Link on Scroll
    // ==========================================
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinksItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // ==========================================
    // 6. Scroll Reveal Animations
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    function checkReveal() {
        const windowHeight = window.innerHeight;

        // Respeitar prefers-reduced-motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            revealElements.forEach(el => el.classList.add('visible'));
            return;
        }

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Run on load

    // ==========================================
    // 7. FAQ Accordion
    // ==========================================
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answerId = question.getAttribute('aria-controls');
            const answer = document.getElementById(answerId);
            const isOpen = question.getAttribute('aria-expanded') === 'true';

            // Fechar todos os outros (opcional — comportamento accordion)
            faqQuestions.forEach(otherQ => {
                if (otherQ !== question) {
                    otherQ.setAttribute('aria-expanded', 'false');
                    const otherAnswerId = otherQ.getAttribute('aria-controls');
                    const otherAnswer = document.getElementById(otherAnswerId);
                    if (otherAnswer) otherAnswer.classList.remove('open');
                }
            });

            // Toggle atual
            question.setAttribute('aria-expanded', !isOpen);
            answer.classList.toggle('open');
        });

        // Suporte a teclado (Enter/Space já funcionam em <button>)
    });

    // ==========================================
    // 8. WhatsApp Links (configuração centralizada)
    // ==========================================
    function initWhatsAppLinks() {
        const waLinks = document.querySelectorAll('[data-whatsapp]');

        waLinks.forEach(link => {
            const serviceKey = link.getAttribute('data-whatsapp');
            const href = getWhatsAppLink(serviceKey);
            if (href) {
                link.setAttribute('href', href);
            }
        });
    }

    initWhatsAppLinks();

    // ==========================================
    // 9. Phone Mask
    // ==========================================
    const phoneInput = document.getElementById('phone');

    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length > 11) {
                value = value.slice(0, 11);
            }

            if (value.length > 6) {
                value = `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7)}`;
            } else if (value.length > 2) {
                value = `(${value.slice(0,2)}) ${value.slice(2)}`;
            } else if (value.length > 0) {
                value = `(${value}`;
            }

            e.target.value = value;
        });
    }

    // ==========================================
    // 11. Instagram Links (configuração centralizada)
    // ==========================================
    function initSocialLinks() {
        if (CONFIG && CONFIG.social) {
            const instaLink = document.getElementById('instagramLink');
            const instaContact = document.getElementById('instagramContactLink');
            const footerInsta = document.getElementById('footerInstagram');

            if (instaLink && CONFIG.social.instagram) {
                instaLink.setAttribute('href', CONFIG.social.instagram);
            }
            if (instaContact && CONFIG.social.instagram) {
                instaContact.setAttribute('href', CONFIG.social.instagram);
            }
            // Instagram no footer tem ID específico para evitar ambiguidade
            if (footerInsta && CONFIG.social.instagram) {
                footerInsta.setAttribute('href', CONFIG.social.instagram);
            }
        }
    }

    initSocialLinks();

    // ==========================================
    // 12. Current Year no Footer
    // ==========================================
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

});
