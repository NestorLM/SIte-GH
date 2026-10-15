// ============================================
// GH Lavagens — Configuração Centralizada
// ============================================
// ATENÇÃO: Todos os dados comerciais estão aqui.
// Altere apenas neste arquivo se precisar atualizar
// telefone, mensagem ou outras informações.
// ============================================

const CONFIG = {
  // Dados da empresa
  company: {
    name: 'GH Lavagens',
    subtitle: 'Higienização & Impermeabilização de Estofados',
    city: 'São Bernardo do Campo',
    state: 'SP',
    region: 'São Bernardo do Campo e região'
  },

  // WhatsApp — centralizar número e mensagens aqui
  whatsapp: {
    // Número com código do país (55) + DDD + número
    // Exemplo: 5511958300600
    number: '5511958300600',

    // Mensagem padrão para orçamento
    defaultMessage: 'Olá! Gostaria de solicitar um orçamento.',

    // Mensagens contextualizadas por serviço
    messages: {
      estofados: 'Olá! Gostaria de solicitar um orçamento para higienização de estofados.',
      impermeabilizacao: 'Olá! Gostaria de solicitar um orçamento para impermeabilização de estofados.',
      colchao: 'Olá! Gostaria de solicitar um orçamento para higienização de colchão.',
      poltrona: 'Olá! Gostaria de solicitar um orçamento para higienização de poltrona.',
      cadeira: 'Olá! Gostaria de solicitar um orçamento para higienização de cadeiras.',
      outro: 'Olá! Gostaria de solicitar um orçamento.'
    }
  },

  // Redes sociais
  social: {
    instagram: 'https://www.instagram.com/ghlavagens/',
    // Adicionar outras redes quando confirmadas:
    // facebook: 'https://www.facebook.com/ghlavagens/',
    // youtube: 'https://www.youtube.com/@ghlavagens/'
  },

  // SEO
  seo: {
    title: 'GH Lavagens | Higienização & Impermeabilização de Estofados',
    description: 'Especialistas em higienização e impermeabilização de estofados. Limpeza profissional de sofás, poltronas, cadeiras e colchões em São Bernardo do Campo e região.',
    keywords: 'higienização de estofados, limpeza de sofá, impermeabilização, limpeza de colchão, poltrona, São Bernardo do Campo',
    canonical: '' // Definir URL do site antes da publicação (ex: https://ghlavagens.com.br)
  },

  // Esclarecimentos legais
  disclaimers: {
    hygiene: 'Os resultados de limpeza variam conforme o tipo de tecido, estado de conservação e tipo de mancha. Não garantimos remoção total de manchas ou eliminação completa de microrganismos.',
    waterproofing: 'A impermeabilização aumenta a repelência do tecido a líquidos, mas não torna o estofado completamente à prova d\'água.',
    testimonials: 'Depoimentos de clientes serão adicionados quando disponíveis.'
  }
};

// Funções auxiliares para gerar links WhatsApp
function getWhatsAppLink(serviceKey, customMessage) {
  let message;
  if (customMessage) {
    message = customMessage;
  } else if (CONFIG.whatsapp.messages[serviceKey]) {
    message = CONFIG.whatsapp.messages[serviceKey];
  } else {
    message = CONFIG.whatsapp.defaultMessage;
  }
  return `https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

function getContactWhatsApp(name, phone, service, message) {
  const serviceNameMap = {
    'estofados': 'higienização de estofados',
    'impermeabilizacao': 'impermeabilização de estofados',
    'colchao': 'higienização de colchão',
    'poltrona': 'higienização de poltrona',
    'cadeira': 'higienização de cadeiras',
    'outro': 'orçamento'
  };

  let text = `Olá! Meu nome é *${name}*.%0A`;
  text += `%0A📱 Telefone: ${phone}%0A`;
  text += `🔧 Serviço: ${serviceNameMap[service] || service}%0A`;

  if (message) {
    text += `%0A💬 Mensagem:%0A${message}`;
  }

  return `https://wa.me/${CONFIG.whatsapp.number}?text=${text}`;
}
