# GH Lavagens - Site Oficial

Site profissional para a **GH Lavagens** — empresa de limpeza e impermeabilização de estofados, automotiva e hidratação de couro, baseada em São Bernardo do Campo - SP.

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
auto/
├── index.html      # Página principal (2386 linhas)
├── style.css       # Estilos completos (780+ linhas)
├── script.js       # JavaScript interativo (240+ linhas)
├── logo.svg        # Logo vetorial da GH Lavagens
└── README.md       # Esta documentação
```

## 🎨 Design System

### Cores

| Variável | Valor | Uso |
|---|---|---|
| `--primary` | `#d62828` | Vermelho principal (marca) |
| `--primary-dark` | `#a81f1f` | Vermelho escuro (hover) |
| `--primary-light` | `#ff4d4d` | Vermelho claro (acentos) |
| `--secondary` | `#1a1a2e` | Azul escuro (footer) |
| `--accent` | `#f77f00` | Laranja (detalhes) |
| `--dark` | `#0f0f23` | Texto principal |
| `--light` | `#ffffff` | Fundo branco |

### Tipografia

- **Fonte:** Poppins (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700, 800
- **Tamanhos:** `clamp()` responsivo de `0.85rem` a `3.5rem`

### Espaçamento

- **Container:** max-width `1200px`, padding `0 24px`
- **Seções:** padding `100px 0` vertical

## 📄 Seções do Site

| Seção | ID | Descrição |
|---|---|---|
| Navbar | — | Menu fixo com scroll effect e menu mobile |
| Hero | `#inicio` | Banner principal com CTA e estatísticas |
| Sobre | `#sobre` | Apresentação da empresa |
| Serviços | `#servicos` | 4 cards: Estofados, Automotiva, Couro, Impermeabilização |
| Galeria | `#galeria` | Antes e depois com placeholders para imagens |
| Depoimentos | `#depoimentos` | 3 cards de avaliações de clientes |
| Contato | `#contato` | Informações + formulário que envia ao WhatsApp |
| CTA Final | — | Call-to-action para WhatsApp |
| Footer | — | Links, serviços e redes sociais |

## ⚡ Funcionalidades

- **Responsivo:** Mobile-first (480px, 768px, 1024px+)
- **Menu mobile:** Hamburger com overlay animado
- **Scroll reveal:** Elementos aparecem ao rolar a página
- **Contador animado:** Estatísticas do hero com animação numérica
- **Máscara de telefone:** Formata automaticamente `(11) 95830-0600`
- **Formulário → WhatsApp:** Envia dados formatados para o bot
- **Botão flutuante WhatsApp:** Com animação pulse
- **Back to top:** Aparece ao rolar mais de 400px
- **Navbar dinâmica:** Muda estilo ao scroll
- **Efeito tilt 3D:** Nos cards de serviço ao hover
- **Smooth scroll:** Navegação suave entre seções
- **Active nav link:** Destaca seção atual no menu

## 🔗 Links Configurados

| Recurso | Link |
|---|---|
| WhatsApp (orçamento) | `https://wa.me/5511958300600` |
| WhatsApp (serviços) | `https://wa.me/5511958300600?text=...` |
| Instagram | `https://www.instagram.com/ghlavagens/` |

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

- **Title:** `GH Lavagens | Limpeza & Impermeabilização`
- **Meta description:** `Especialistas em limpeza e impermeabilização de estofados, automóveis e hidratação de couro.`
- **Tags semânticas:** `<nav>`, `<section>`, `<footer>`
- **Aria labels:** Nos elementos interativos

## 📝 Manutenção

### Atualizar telefone/WhatsApp

Buscar e substituir `5511958300600` por novo número em todos os arquivos.

### Atualizar Instagram

Buscar e substituir `ghlavagens` por novo username.

### Adicionar imagens reais

Substituir os `before-placeholder` e `after-placeholder` por tags `<img>` com fotos reais dos trabalhos.

### Alterar cores

Modificar as variáveis CSS no `:root` do `style.css`.

## 📜 Licença

Todos os direitos reservados © GH Lavagens 2024.
