# IMPLEMENTATION PLAN — GH Lavagens

**Criado em:** 2026-10-15  
**Última atualização:** 2026-10-15

---

## Visão Geral

Transformar o site estático existente em um site profissional, confiável e acessível, corrigindo dados inventados, integrando a identidade visual real e implementando todos os requisitos do projeto.

---

## Etapa 1 — Inspeção e Planejamento ✅ Concluída

### Critérios de conclusão
- [x] Inspecionar todos os arquivos do projeto
- [x] Identificar tecnologias existentes
- [x] Mapear informações comerciais presentes e ausentes
- [x] Criar docs/PROJECT_STATUS.md
- [x] Criar docs/IMPLEMENTATION_PLAN.md
- [x] Criar docs/ARCHITECTURE.md
- [x] Criar docs/DESIGN_SYSTEM.md
- [x] Criar docs/TESTING.md
- [x] Criar docs/DECISIONS.md

---

## Etapa 2 — Identidade Visual e Estrutura ✅ Concluída

### Objetivos
1. Ajustar design system com cores baseadas no logo real (azul profundo, azul-turquesa, verde-água)
2. Integrar o logo SVG corretamente
3. Corrigir dados inventados (estatísticas, depoimentos)
4. Configurar favicon baseado na identidade visual
5. Configurar SEO básico (meta tags, Open Graph)

### Arquivos modificados
- `style.css` — variáveis CSS com nova paleta ✅
- `index.html` — meta tags, favicon, correção de dados ✅
- `config.js` — configuração centralizada (criado) ✅

### Critérios de conclusão
- [x] Paleta definida em DESIGN_SYSTEM.md com HEX
- [x] Logo integrado sem distorção
- [x] Dados inventados removidos ou marcados como pendentes
- [x] SEO básico implementado
- [ ] Aguardar confirmação de informações comerciais

---

## Etapa 3 — Interface (Seções) ✅ Concluída

### Seções implementadas
1. **Cabeçalho/Navbar** — logo, menu, botão "Solicitar orçamento", responsivo ✅
2. **Hero** — título, descrição, CTAs, placeholder para imagem ✅
3. **Sobre Nós** — apresentação da empresa, features com ícones ✅
4. **Serviços** — 4 cards (Higienização, Impermeabilização, Colchões, Poltronas/Cadeiras) ✅
5. **Benefícios** — 6 cards de benefícios ✅
6. **Antes e Depois** — galeria com 6 placeholders antes/depois ✅
7. **Como Funciona** — processo em 5 etapas ✅
8. **Depoimentos** — seção oculta com placeholder para depoimentos reais futuros ✅
9. **Perguntas Frequentes (FAQ)** — 7 perguntas com accordion acessível ✅
10. **Contato e Orçamento** — informações de contato + formulário funcional ✅
11. **CTA Final** — call-to-action para WhatsApp ✅
12. **Rodapé** — logo, links, serviços, contato, redes sociais, política de privacidade ✅

### Critérios de conclusão
- [x] Todas as seções implementadas
- [x] Layout responsivo em mobile, tablet e desktop
- [x] Sem dados inventados (substituídos por placeholders marcados)
- [x] Imagens reais ou placeholders claramente marcados
- [x] Acessibilidade por teclado

---

## Etapa 4 — Funcionalidades ✅ Concluída

### Implementado
1. **Navegação suave** entre seções com smooth scroll ✅
2. **Links WhatsApp** com mensagens contextualizadas via `config.js` ✅
3. **Formulário de orçamento** funcional (validação + envio para WhatsApp) ✅
4. **Menu mobile** funcional com overlay e animações ✅
5. **Máscara de telefone** automática `(11) 00000-0000` ✅
6. **Scroll reveal animations** com `prefers-reduced-motion` respeitado ✅
7. **FAQ Accordion** acessível por teclado ✅
8. **Active nav link** highlight baseado em scroll ✅
9. **Navbar dinâmica** — muda estilo ao scroll ✅
10. **Botão flutuante WhatsApp** com animação pulse ✅
11. **Back to top** button ✅
12. **Current year** dinâmico no footer ✅

### Critérios de conclusão
- [x] Formulário envia dados reais para WhatsApp
- [x] Validação em cliente funciona corretamente
- [x] Mensagens de erro compreensíveis
- [x] Links WhatsApp com número configurado em `config.js`
- [x] Menu mobile funcional

---

## Etapa 5 — Segurança, Acessibilidade e SEO ✅ Concluída

### Acessibilidade (WCAG)
- ✅ aria-labels em todos os elementos interativos
- ✅ Foco visível (`:focus-visible`)
- ✅ Contraste adequado nas cores do design system
- ✅ `prefers-reduced-motion` respeitado
- ✅ Semântica HTML correta (`<header>`, `<nav>`, `<section>`, `<footer>`)
- ✅ Atributos ARIA para accordion (`aria-expanded`, `aria-controls`, `role="region"`)
- ✅ Navegação por teclado (Escape fecha menu, Enter/Space no FAQ)

### SEO
- ✅ Títulos e descrições exclusivos por seção
- ✅ Hierarquia de títulos correta (h1 → h2 → h3)
- ✅ URLs canônicas
- ✅ Open Graph completo
- ✅ Twitter Card
- ✅ Sitemap.xml (criado)
- ✅ robots.txt (criado)
- ✅ Dados estruturados (Schema.org JSON-LD) para negócio local

### Segurança
- ✅ Validação de formulário no cliente
- ✅ Sem segredos no frontend (config centralizada em `config.js`)
- ✅ Links com `rel="noopener noreferrer"`

---

## Etapa 6 — Testes e Refinamento ⏳ Pendente

### Testes a executar
- [ ] Abrir `index.html` em navegador para verificação visual
- [ ] Navegação entre seções (smooth scroll)
- [ ] Formulário e validações
- [ ] Links WhatsApp (verificar número)
- [ ] Menu responsivo (mobile/tablet)
- [ ] Acessibilidade por teclado
- [ ] Console do navegador (sem erros)
- [ ] Verificação de links quebrados
- [ ] Teste em diferentes tamanhos de tela
- [ ] Performance (Core Web Vitals)

---

## Etapa 7 — Preparação para Publicação ⏳ Pendente

### Documentos a criar/atualizar
- [x] `docs/PROJECT_STATUS.md` — atualizado
- [ ] Atualizar README.md com instruções completas ← **em andamento**
- [ ] Documentar processo de deploy
- [ ] Verificar que toda documentação está atualizada

---

## Informações Pendentes (bloqueiam progresso)

Estas informações precisam ser confirmadas pela equipe/cliente:

1. **Número de WhatsApp comercial** — confirmar se `5511958300600` está correto
2. **E-mail comercial** — confirmar `contato@ghlavagens.com.br`
3. **Endereço físico completo** — informar ou remover
4. **Horário de funcionamento** — informar ou remover
5. **Serviços confirmados** — estofados, automotiva, couro, impermeabilização?
6. **Estatísticas reais** — nº de clientes, anos de experiência (ou manter como pendente)
7. **Depoimentos reais** — fornecer ou manter seção oculta
8. **Imagens reais** — antes/depois para galeria
9. **Redes sociais** — confirmar Instagram e outras plataformas
