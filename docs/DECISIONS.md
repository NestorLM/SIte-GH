# DECISIONS — GH Lavagens

**Criado em:** 2026-10-15  
**Última atualização:** 2026-10-15

---

## Decisão: Manter HTML/CSS/JS vanilla (não React)

**Contexto:** O briefing menciona preferências por React com TypeScript e Vite.

**Decisão:** Manter a stack atual (HTML + CSS + JS vanilla).

**Justificativa:**
1. O site é comercial e predominantemente estático — sem necessidade de estado complexo, roteamento ou componentes dinâmicos
2. React adicionaria complexidade desnecessária: build step, dependências, configuração
3. Para um site institucional com formulário que envia para WhatsApp, vanilla é mais simples e performático
4. A equipe pode não ter familiaridade com React/Vite
5. Deploy é trivial (qualquer hospedagem estática)
6. Manutenção futura é acessível para não-developers

**Quando React seria justificado:** Se houvesse painel admin, autenticação, CMS, ou funcionalidades dinâmicas complexas — o que não é o caso.

---

## Decisão: Sem banco de dados nem backend

**Contexto:** O formulário de orçamento precisa funcionar.

**Decisão:** Enviar dados do formulário via WhatsApp API (`wa.me`).

**Justificativa:**
1. Não há necessidade de armazenar dados em banco
2. WhatsApp é o canal principal de contato da empresa
3. Sem backend = menos complexidade, menos custos, mais segurança
4. O briefing diz: "Não adicione banco de dados, autenticação, painel administrativo ou dependências complexas sem uma necessidade real"

**Risco:** Se a empresa quiser gerenciar orçamentos internamente no futuro, será necessário um backend. Documentar isso para evolução futura.

---

## Decisão: Imagens externas como placeholders

**Contexto:** Não há imagens reais de antes/depois disponíveis.

**Decisão:** Manter imagens de Unsplash/Pexels como placeholders temporários, claramente marcadas.

**Justificativa:**
1. O briefing diz: "Não inventar" e "Não apresentar imagens ilustrativas como se fossem trabalhos reais"
2. Imagens externas são aceitáveis como placeholder enquanto não houver imagens reais
3. Quando a empresa fornecer imagens reais, substituir imediatamente
4. Adicionar comentário no código indicando que são placeholders

---

## Decisão: Remover dados inventados

**Contexto:** O código atual contém estatísticas (500+ clientes, 3 anos), depoimentos com nomes falsos e avaliação 5.0 Google.

**Decisão:** Remover todos os dados inventados. Marcar como "pendente de confirmação" onde aplicável.

**Justificativa:**
1. O briefing é explícito: "Não inventar avaliações, certificações, garantias, números de clientes ou anos de experiência"
2. Dados falsos comprometem a confiança do site
3. Se a empresa fornecer dados reais posteriormente, adicionar com marcação clara

---

## Decisão: Depoimentos — ocultar até ter dados reais

**Contexto:** A seção de depoimentos contém 3 avaliações inventadas.

**Decisão:** Ocultar a seção de depoimentos ou substituir por espaço neutro preparado para conteúdo futuro.

**Justificativa:**
1. O briefing diz: "Se não houver depoimentos fornecidos, não inventar nomes, fotografias, notas ou avaliações"
2. "Nesse caso, ocultar a seção ou apresentar um espaço neutro preparado para conteúdo futuro"

---

## Decisão: Paleta de cores

**Contexto:** O README.md descreve paleta "Azul Marinho + Dourado". O briefing pede "Azul profundo + Azul-turquesa + Verde-água".

**Decisão:** Seguir o briefing (cores do logo): azul profundo, azul-turquesa, verde-água. Remover dourado da paleta principal.

**Justificativa:**
1. O briefing é a fonte oficial de requisitos
2. O logo usa azuis e verde, não dourado
3. Dourado pode ser mantido como cor de acento sutil se presente no logo real

---

## Decisão: WhatsApp como configuração central

**Contexto:** Múltiplos links de WhatsApp espalhados pelo código.

**Decisão:** Centralizar o número e mensagem do WhatsApp em uma variável/configuração única.

**Justificativa:**
1. Facilita manutenção — alterar um lugar só
2. O briefing diz: "Centralizar o número comercial em uma configuração única"
3. Reduz risco de links inconsistentes

---

## Decisão: Política de Privacidade

**Contexto:** LGPD se aplica ao projeto (empresa brasileira).

**Decisão:** Criar página/seção de política de privacidade básica, compatível com a operação real.

**Justificativa:**
1. O briefing exige: "Implementar política de privacidade compatível com a operação real e com a legislação aplicável"
2. Não declarar o site "legalmente conforme" — apenas documentar os controles implementados
3. Política deve ser honesta sobre o que é coletado (nome, telefone, mensagem via WhatsApp)
