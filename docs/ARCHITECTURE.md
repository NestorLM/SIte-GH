# ARCHITECTURE — GH Lavagens

**Criado em:** 2026-10-15  
**Última atualização:** 2026-10-15

---

## Arquitetura Atual

### Tipo de Projeto
Site estático (HTML + CSS + JavaScript vanilla) — sem framework, sem build tool, sem banco de dados.

### Justificativa da Escolha
O site é comercial e predominantemente estático. Não há necessidade de:
- Banco de dados
- Autenticação
- Painel administrativo
- Dependências complexas

A abordagem vanilla garante:
- Desempenho máximo (sem overhead de framework)
- Manutenção simples
- Deploy em qualquer hospedagem estática
- Carregamento rápido

### Estrutura de Arquivos

```
SIte Guillherme/
├── index.html              # Página principal (única página)
├── style.css               # Estilos completos com variáveis CSS
├── script.js               # JavaScript interativo
├── logo.svg                # Logo vetorial da GH Lavagens (base64)
├── gh-lavagens-logo.svg    # Versão alternativa do logo (vetor limpo)
├── logo.jpg                # Logo em JPEG
├── logo4k.png              # Logo em PNG 4K
├── README.md               # Documentação do projeto
└── docs/                   # Documentação interna do projeto
    ├── PROJECT_STATUS.md   # Estado atual do projeto
    ├── IMPLEMENTATION_PLAN.md  # Plano de execução
    ├── ARCHITECTURE.md     # Este arquivo
    ├── DESIGN_SYSTEM.md    # Design system
    ├── TESTING.md          # Testes
    └── DECISIONS.md        # Decisões técnicas
```

---

## Componentes Principais

### 1. Navbar (`<nav class="navbar">`)
- Fixa no topo com efeito de scroll
- Menu hamburger para mobile
- Links âncora para seções
- Botão CTA "Contato" (WhatsApp)

### 2. Hero (`<section class="hero">`)
- Banner principal com título, descrição, CTAs
- Estatísticas animadas (precisa de confirmação)
- Imagem de fundo (placeholder por enquanto)

### 3. Sobre (`<section class="about">`)
- Apresentação da empresa
- Ícone + texto
- Features com ícones

### 4. Serviços (`<section class="services">`)
- Grid de 4 cards
- Cada card: ícone, título, descrição, lista, CTA
- Serviços: Estofados, Automotiva, Couro, Impermeabilização

### 5. Galeria (`<section class="gallery">`)
- Filtros por categoria
- Cards antes/depois
- Lightbox modal
- Imagens externas (placeholder)

### 6. Depoimentos (`<section class="testimonials">`)
- Grid de 3 cards
- Estrelas, texto, autor
- **Conteúdo inventado — precisa ser substituído ou removido**

### 7. Contato (`<section class="contact">`)
- Informações de contato
- Formulário → WhatsApp
- Máscara de telefone

### 8. CTA Final (`<section class="cta-final">`)
- Chamada para ação
- Botão WhatsApp

### 9. Footer (`<footer class="footer">`)
- Logo + descrição
- Links rápidos
- Serviços
- Contato
- Redes sociais

---

## Fluxo de Dados

### Formulário de Orçamento
```
Usuário preenche formulário
    → Validação no cliente (HTML5 + JS)
    → Formata mensagem com dados do usuário
    → Abre WhatsApp Web/App com mensagem pré-preenchida
    → Usuário confirma envio
```

### Navegação
```
Clique em link âncora
    → Scroll suave para seção
    → Atualiza nav-link ativo
    → Fecha menu mobile (se aberto)
```

### Menu Mobile
```
Clique no hamburger
    → Toggle classe "active" no menu
    → Mostra overlay
    → Bloqueia scroll do body
```

---

## Decisões Técnicas

### HTML/CSS/JS Vanilla (não React)
- O site é estático e simples — React adicionaria complexidade desnecessária
- Build mais rápido, deploy mais simples
- Manutenção acessível para não-developers

### Sem Banco de Dados
- Não há necessidade de dados dinâmicos
- Formulário envia via WhatsApp (sem backend necessário)

### Imagens Externas (temporário)
- Usando Unsplash/Pexels como placeholders
- Substituir por imagens reais da empresa quando disponíveis

### CSS Custom Properties
- Centralização de tokens de design
- Fácil manutenção e theming

### JavaScript Vanilla
- Sem dependências externas além de Font Awesome e Google Fonts
- Performance máxima
- Código auto-contido
