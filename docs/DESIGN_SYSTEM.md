# DESIGN SYSTEM — GH Lavagens

**Criado em:** 2026-10-15  
**Última atualização:** 2026-10-15

---

## Identidade Visual

### Logo

O logo oficial está disponível em múltiplos formatos:
- `logo.svg` — SVG com imagem base64 embutida (alta resolução)
- `gh-lavagens-logo.svg` — Versão SVG limpa e editável
- `logo.jpg` — JPEG
- `logo4k.png` — PNG 4K

**Regra:** Utilizar `logo.svg` para a maioria dos casos. Utilizar `gh-lavagens-logo.svg` quando precisar editar o logo. **Nunca distorcer, redimensionar arbitrariamente ou alterar o logo.**

---

## Paleta de Cores

Baseada nas cores do logo (azul profundo, azul-turquesa, verde-água):

### Cores Primárias

| Nome | HEX | RGB | Uso |
|------|-----|-----|-----|
| Azul Profundo | `#0d47a1` | `rgb(13, 71, 161)` | Títulos, navbar, footer, CTAs secundários |
| Azul Médio | `#1565c0` | `rgb(21, 101, 192)` | Ícones, elementos de destaque |
| Azul-Turquesa | `#1e88e5` | `rgb(30, 136, 229)` | Links, hovers, gradientes |
| Azul Claro | `#42a5f5` | `rgb(66, 165, 245)` | Detalhes, ondas decorativas |
| Azul Muito Claro | `#90caf9` | `rgb(144, 202, 249)` | Brilhos, acentos sutis |

### Cores Secundárias

| Nome | HEX | RGB | Uso |
|------|-----|-----|-----|
| Verde-Água | `#4caf50` | `rgb(76, 175, 80)` | Detalhes, linhas decorativas, acentos |
| Verde Escuro | `#2e7d32` | `rgb(46, 125, 50)` | Gradientes verde, hover de elementos verdes |
| WhatsApp | `#25d366` | `rgb(37, 211, 102)` | Botões CTA principais, ícone WhatsApp |
| WhatsApp Dark | `#1da851` | `rgb(29, 168, 81)` | Hover do WhatsApp |

### Neutros

| Nome | HEX | RGB | Uso |
|------|-----|-----|-----|
| Branco | `#ffffff` | `rgb(255, 255, 255)` | Fundo principal, cards |
| Cinza Muito Claro | `#f8f9fa` | `rgb(248, 249, 250)` | Fundos de seção alternados |
| Cinza Claro | `#e8e8e8` | `rgb(232, 232, 232)` | Bordas sutis, divisores |
| Cinza Médio | `#8a8a8a` | `rgb(138, 138, 138)` | Textos secundários, labels |
| Cinza Escuro | `#4a4a4a` | `rgb(74, 74, 74)` | Texto de parágrafo |
| Cinza Carvão | `#2d2d2d` | `rgb(45, 45, 45)` | Texto principal |
| Preto Suave | `#0f1a30` | `rgb(15, 26, 48)` | Footer, fundos escuros |

### Cores de Status (para validação)

| Nome | HEX | Uso |
|------|-----|-----|
| Erro | `#b43c3c` | Mensagens de erro, badges "antes" |
| Sucesso | `#2da050` | Mensagens de sucesso, badges "depois" |
| Aviso | `#f77f00` | Alertas (se necessário) |

---

## Tipografia

### Fonte Principal
- **Família:** Poppins (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700, 800
- **Fallback:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

### Escala de Tipografia

| Uso | Tamanho (rem) | Peso | Linha |
|-----|---------------|------|-------|
| H1 (hero) | `clamp(2.4rem, 4.5vw, 3.6rem)` | 800 | 1.12 |
| H2 (seções) | `clamp(2rem, 3.5vw, 2.8rem)` | 800 | 1.2 |
| H3 (cards) | 1.3rem | 700 | 1.4 |
| H4 (labels) | 0.95rem | 700 | 1.4 |
| Corpo de texto | 1rem | 400 | 1.75 |
| Texto secundário | 0.88–0.92rem | 400–500 | 1.7 |
| Label/caption | 0.78–0.85rem | 500–600 | 1.5 |
| Badge | 0.68–0.82rem | 700 | 1.2 |

---

## Espaçamento

### Container
- **Max-width:** `1280px` (ajustável para `1200px`)
- **Padding lateral:** `32px` (desktop), `18px` (mobile)
- **Centralizado:** `margin: 0 auto`

### Seções
- **Padding vertical:** `120px` (desktop), `70–80px` (mobile)
- **Gap entre grids:** `24–28px`

### Cards e Componentes
- **Padding interno:** `36–44px` (desktop), `28px` (mobile)
- **Border-radius:** `12px` (padrão), `20px` (hero cards), `32px` (botões)

---

## Sombras

| Nome | Valor | Uso |
|------|-------|-----|
| `shadow-sm` | `0 1px 4px rgba(26,39,68,0.06)` | Cards leves |
| `shadow-md` | `0 4px 16px rgba(26,39,68,0.08)` | Hover sutil |
| `shadow-lg` | `0 12px 36px rgba(26,39,68,0.10)` | Cards elevados |
| `shadow-xl` | `0 24px 60px rgba(26,39,68,0.12)` | Modal, hero card |
| `shadow-gold` | `0 8px 32px rgba(201,168,76,0.25)` | Elementos dourados (remover se dourado não for da paleta) |

---

## Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `radius-sm` | `6px` | Inputs, ícones pequenos |
| `radius-md` | `12px` | Cards, imagens |
| `radius-lg` | `20px` | Hero cards, containers grandes |
| `radius-xl` | `32px` | Botões, badges |
| `radius-full` | `50%` | Avatares, botões circulares |

---

## Transições

- **Padrão:** `all 0.35s cubic-bezier(0.4, 0, 0.2, 1)`
- **Reveal (scroll):** `0.8s cubic-bezier(0.4, 0, 0.2, 1)`
- **Hover em cards:** `translateY(-6px)` + sombra

---

## Componentes

### Botões

| Tipo | Fundo | Texto | Borda | Hover |
|------|-------|-------|-------|-------|
| Primary (WhatsApp) | Gradiente verde WhatsApp | Branco | Nenhuma | `translateY(-3px)` + sombra |
| Secondary | Branco | Azul Profundo | Cinza Claro | Borda azul-turquesa |
| Outline | Transparente | Azul Profundo | Cinza Claro | Borda azul-turquesa + fundo sutil |

### Cards de Serviço

- Fundo: branco
- Borda: `1px solid #e8e8e8`
- Hover: `translateY(-6px)` + sombra + borda turquesa
- Topo: linha gradiente (azul → turquesa)
- Ícone: quadrado com fundo azul profundo, ícone turquesa

### Seções

- Alternância entre `#ffffff` e `#f8f9fa`
- Header de seção: texto centralizado, tag decorativa, subtítulo

---

## Regras Visuais

1. **Espaçamento generoso** — nunca amontoar elementos
2. **Cantos arredondados com moderação** — usar `radius-md` e `radius-lg` como padrão
3. **Sombras discretas** — nunca sombras pesadas ou chamativas
4. **Gradientes sutis** — apenas quando adicionam profundidade sem chamar atenção
5. **Consistência de ícones** — usar Font Awesome 6.5 em todo o site
6. **Nunca inventar conteúdo** — depoimentos, estatísticas e números devem ser reais ou removidos
7. **Respeitar o logo** — nunca alterar, distorcer ou redesenhar o logo
