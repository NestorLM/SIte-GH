# GH Lavagens - Site Oficial

Site profissional para a **GH Lavagens** — empresa de higienização e impermeabilização de estofados baseada em São Bernardo do Campo - SP.

## 📞 Contato

- **WhatsApp:** (11) 95830-0600
- **Instagram:** [@ghlavagens](https://www.instagram.com/ghlavagens/)
- **Localização:** São Bernardo do Campo - SP

## 🚀 Tecnologias

| Tecnologia | Descrição |
|---|---|
| HTML5 | Estrutura semântica do site |
| CSS3 | Estilos com variáveis, grid, flexbox e animações |
| JavaScript (Vanilla) | Interatividade, scroll reveal, máscaras e integração WhatsApp |
| SVG | Logo vetorial escalável |
| Font Awesome 6.5 | Ícones |
| Google Fonts (Poppins) | Tipografia |

## 📁 Estrutura de Arquivos

```
SIte Guillherme/
├── index.html          # Página principal (835 linhas)
├── style.css           # Estilos completos (1547 linhas)
├── script.js           # JavaScript interativo (346 linhas)
├── config.js           # Configuração centralizada (95 linhas)
├── logo.svg            # Logo vetorial da GH Lavagens
├── logo4k.png          # Logo em alta resolução
├── sitemap.xml         # Mapa do site para SEO
├── robots.txt          # Instruções para crawlers
├── politica-privacidade.html  # Documento legal
└── README.md           # Esta documentação
└── docs/
    ├── PROJECT_STATUS.md       # Status atual do projeto
    ├── IMPLEMENTATION_PLAN.md  # Plano de execução
    ├── ARCHITECTURE.md         # Arquitetura e decisões técnicas
    ├── DESIGN_SYSTEM.md        # Cores, tipografia, componentes
    ├── TESTING.md              # Estrutura para testes
    └── DECISIONS.md            # Decisões técnicas justificadas
```

## 🎨 Design System

### Cores (baseadas no logo real)

| Variável | Valor | Uso |
|---|---|---|
| `--blue-deep` | `#0d47a1` | Azul profundo (títulos, footer) |
| `--blue-medium` | `#1565c0` | Azul médio (gradientes) |
| `--blue-turquoise` | `#1e88e5` | Azul-turquesa (links, acentos) |
| `--blue-light` | `#42a5f5` | Azul claro (ícones, hovers) |
| `--blue-very-light` | `#90caf9` | Azul muito claro (texto sobre azul) |
| `--green-water` | `#4caf50` | Verde-água (checkmarks, acentos) |
| `--whatsapp` | `#25d366` | WhatsApp (CTAs principais) |
| `--white` | `#ffffff` | Fundo branco |
| `--gray-50` | `#f8f9fa` | Fundo cinza claro |
| `--gray-100` | `#e8e8e8` | Bordas e divisores |
| `--gray-300` | `#8a8a8a` | Texto secundário |
| `--gray-400` | `#4a4a4a` | Texto principal |
| `--black-soft` | `#0f1a30` | Footer background |

### Tipografia

- **Fonte:** Poppins (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700, 800
- **Tamanhos:** `clamp()` responsivo de `0.82rem` a `3.6rem`

### Espaçamento

- **Container:** max-width `1280px`, padding `0 32px`
- **Seções:** padding `120px 0` vertical

## 📄 Seções do Site

| Seção | ID | Descrição |
|---|---|---|
| Navbar | — | Menu fixo com scroll effect e menu mobile hamburger |
| Hero | `#inicio` | Banner principal com CTA e placeholder para imagem |
| Sobre Nós | `#sobre` | Apresentação da empresa com features |
| Serviços | `#servicos` | 4 cards: Higienização, Impermeabilização, Colchões, Poltronas/Cadeiras |
| Benefícios | `#beneficios` | 6 cards de benefícios da higienização |
| Antes e Depois | `#resultados` | Galeria com placeholders antes/depois |
| Como Funciona | `#como-funciona` | Processo em 5 etapas |
| Depoimentos | `#depoimentos` | Seção oculta (placeholder para depoimentos reais) |
| FAQ | `#faq` | 7 perguntas com accordion acessível |
| Contato | `#contato` | Informações + formulário funcional → WhatsApp |
| CTA Final | — | Call-to-action para WhatsApp |
| Footer | — | Links, serviços, contato, redes sociais |

## ⚡ Funcionalidades

- **Responsivo:** Mobile-first (480px, 768px, 1024px+)
- **Menu mobile:** Hamburger com overlay animado e acessibilidade por teclado
- **Scroll reveal:** Elementos aparecem ao rolar a página (respeita `prefers-reduced-motion`)
- **Máscara de telefone:** Formata automaticamente `(11) 00000-0000`
- **Formulário → WhatsApp:** Validação + envio formatado para o bot
- **Links WhatsApp contextualizados:** Mensagens diferentes por serviço (centralizado em `config.js`)
- **Botão flutuante WhatsApp:** Com animação pulse
- **Back to top:** Aparece ao rolar mais de 400px
- **Navbar dinâmica:** Muda estilo ao scroll
- **Smooth scroll:** Navegação suave entre seções
- **Active nav link:** Destaca seção atual no menu
- **FAQ Accordion:** Acessível por teclado (Enter/Space)

## 🔗 Links Configurados

Todos os links estão centralizados em `config.js`:

| Recurso | Configuração |
|---|---|
| WhatsApp (número) | `CONFIG.whatsapp.number` → `5511958300600` |
| WhatsApp (mensagens) | `CONFIG.whatsapp.messages.{estofados,impermeabilizacao,colchao,poltrona,cadeira,outro}` |
| Instagram | `CONFIG.social.instagram` → `https://www.instagram.com/ghlavagens/` |

## 📝 Como Atualizar Informações

### Atualizar telefone/WhatsApp

Editar apenas `config.js`:
```js
whatsapp: {
  number: '5511999999999',  // <-- alterar aqui
  messages: { ... }
}
```

### Atualizar Instagram

Editar apenas `config.js`:
```js
social: {
  instagram: 'https://www.instagram.com/novo-perfil/',  // <-- alterar aqui
}
```

### Adicionar imagens reais

Substituir os placeholders no HTML por tags `<img>` com fotos reais:
- **Hero:** `.hero-img-placeholder` → substituir por `<img>` de estofado higienizado
- **Sobre:** `.about-img-placeholder` → substituir por foto de profissional em ação
- **Galeria:** imagens externas temporárias → substituir por fotos antes/depois reais

### Alterar cores

Modificar as variáveis CSS no `:root` do `style.css`.

## 🛠️ Como Usar

### Visualizar localmente

```bash
# Abrir o index.html diretamente no navegador
# ou usar um servidor local:

# Python 3
python -m http.server 8000

# Node.js (live-server)
npx live-server .
```

### Deploy

O site é estático — pode ser hospedado em qualquer lugar:

- **Vercel:** `vercel deploy`
- **Netlify:** arrastar a pasta para netlify.com/drop
- **GitHub Pages:** configurar branch `gh-pages`
- **Firebase Hosting:** `firebase deploy`

## 📱 Breakpoints

| Breakpoint | Dispositivo |
|---|---|
| `480px` | Telas pequenas (iPhone SE) |
| `768px` | Tablets (iPad portrait) |
| `1024px` | Laptops / Desktop pequeno |

## 🎯 SEO

- **Title:** `GH Lavagens | Higienização & Impermeabilização de Estofados`
- **Meta description:** `Especialistas em higienização e impermeabilização de estofados. Limpeza profissional de sofás, poltronas, cadeiras e colchões em São Bernardo do Campo e região.`
- **Tags semânticas:** `<header>`, `<nav>`, `<section>`, `<footer>`
- **Aria labels:** Nos elementos interativos
- **Schema.org JSON-LD:** Dados estruturados para LocalBusiness
- **Sitemap.xml** e **robots.txt** incluídos

## 📜 Manutenção

### Informações pendentes (precisam confirmação da empresa)
- [ ] Número de WhatsApp confirmado
- [ ] E-mail comercial confirmado
- [ ] Endereço físico completo
- [ ] Horário de funcionamento
- [ ] Serviços confirmados (estofados, automotiva, couro?)
- [ ] Estatísticas reais (nº clientes, anos experiência)
- [ ] Depoimentos reais
- [ ] Imagens reais antes/depois

### Checklist de publicação
- [ ] Todas as informações pendentes confirmadas
- [ ] Placeholders substituídos por imagens reais
- [ ] Estatísticas preenchidas com dados reais
- [ ] Canonical URL definida em `index.html` e `config.js`
- [ ] Testes visuais em navegadores
- [ ] Testes de acessibilidade por teclado
- [ ] Links WhatsApp verificados

## 📜 Licença

Todos os direitos reservados © GH Lavagens.
