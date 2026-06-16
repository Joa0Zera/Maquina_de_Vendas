import { Offer } from "@maquina/database";

export interface LandingPageSections {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  problem: {
    painPoints: string[];
  };
  solution: {
    explanation: string;
  };
  benefits: {
    benefits: string[];
  };
  offer: {
    presentation: string;
    uniqueMechanism: string;
    offerStack: string[];
    guarantee: string;
  };
  objectionHandling: {
    objections: string[];
  };
  faq: {
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  cta: {
    finalCallToAction: string;
  };
}

// Domain-specific landing templates
const DOMAIN_LANDING_TEMPLATES = {
  ai: {
    hero: [
      {
        headline: "Domine a IA e Automatize Seu Trabalho",
        subheadline: "Aprenda a usar ferramentas de IA para entregar projetos em metade do tempo",
        cta: "Começar Agora",
      },
      {
        headline: "IA para Freelancers: Trabalhe Menos, Ganhe Mais",
        subheadline: "O método comprovado para usar inteligência artificial no seu dia a dia",
        cta: "Quero Aprender",
      },
    ],
    painPoints: [
      [
        "Você perde horas em tarefas repetitivas que poderiam ser automatizadas",
        "Sente que não consegue acompanhar a velocidade do mercado de IA",
        "Não sabe quais ferramentas usar para otimizar seu trabalho",
      ],
      [
        "Sobrecarga de trabalho impede que você foque em estratégia",
        "Processos manuais consomem tempo que deveria ser dedicado a clientes",
        "Dificuldade em manter consistência na produção de conteúdo",
      ],
    ],
    benefits: [
      [
        "Automatize tarefas repetitivas em minutos",
        "Entregue projetos em metade do tempo",
        "Reduza workload em 70% com IA",
        "Crie conteúdo 10x mais rápido",
        "Foque em estratégia enquanto a IA cuida do operacional",
      ],
      [
        "Aprenda as ferramentas mais usadas do mercado",
        "Sistema passo a passo fácil de implementar",
        "Suporte e comunidade exclusiva",
        "Atualizações constantes sobre novas tecnologias",
        "Resultados comprovados por centenas de profissionais",
      ],
    ],
    faq: [
      [
        {
          question: "Preciso saber programar para usar as ferramentas de IA?",
          answer: "Não, as ferramentas são desenhadas para serem acessíveis a qualquer pessoa. Ensinamos desde o básico até estratégias avançadas.",
        },
        {
          question: "Quanto tempo leva para ver resultados?",
          answer: "Muitos alunos começam a automatizar tarefas na primeira semana. Resultados significativos são percebidos em 30 dias.",
        },
        {
          question: "As ferramentas são pagas?",
          answer: "Ensinamos tanto ferramentas gratuitas quanto pagas, focando sempre no melhor custo-benefício para seu orçamento.",
        },
        {
          question: "Serve para minha área de atuação?",
          answer: "Sim, IA pode ser aplicada em diversas áreas: design, copywriting, programação, marketing, administração e mais.",
        },
        {
          question: "Tenho suporte se tiver dúvidas?",
          answer: "Sim, oferecemos suporte através de nossa comunidade exclusiva e canais de atendimento dedicados.",
        },
      ],
    ],
    cta: [
      "Não deixe a tecnologia passar por você. Comece a usar IA hoje mesmo e transforme sua produtividade.",
      "O futuro do trabalho já chegou. Garanta sua vantagem competitiva dominando as ferramentas de IA.",
    ],
  },
  marketing: {
    hero: [
      {
        headline: "Multiplique Suas Conversões com Funis Otimizados",
        subheadline: "O sistema comprovado para gerar leads qualificados e escalar suas vendas",
        cta: "Começar Agora",
      },
      {
        headline: "Marketing Digital que Funciona de Verdade",
        subheadline: "Domine estratégias que geram resultados previsíveis e escaláveis",
        cta: "Quero Aprender",
      },
    ],
    painPoints: [
      [
        "Custo de aquisição de cliente muito alto",
        "Dificuldade em escalar campanhas de forma consistente",
        "Falta de sistema previsível para geração de leads",
      ],
      [
        "Investimento em marketing sem retorno claro",
        "Não sabe como otimizar funis de vendas",
        "Algoritmos imprevisíveis afetando resultados",
      ],
    ],
    benefits: [
      [
        "Reduza CAC em 50% com funis otimizados",
        "Fluxo constante de leads qualificados",
        "Crescimento previsível de receita",
        "ROI positivo em todas as campanhas",
        "Sistema escalável para qualquer negócio",
      ],
      [
        "Aprenda estratégias validadas de marketing",
        "Domine as principais plataformas de anúncios",
        "Crie funis de vendas automatizados",
        "Comunidade de marketing digital",
        "Atualizações constantes do mercado",
      ],
    ],
    faq: [
      [
        {
          question: "Serve para pequenos negócios?",
          answer: "Sim, o método é adaptável para qualquer tamanho de negócio. Começamos com estratégias que funcionam com orçamentos limitados.",
        },
        {
          question: "Preciso de experiência prévia?",
          answer: "Não, ensinamos desde o zero. Ideal tanto para iniciantes quanto para profissionais que querem aprofundar conhecimentos.",
        },
        {
          question: "Quanto investimento em anúncios preciso?",
          answer: "Ensinamos a otimizar qualquer orçamento. Começamos com testes pequenos e escalamos conforme resultados.",
        },
        {
          question: "Funciona para e-commerce?",
          answer: "Sim, temos módulos específicos para e-commerce, lojas físicas, serviços e infoprodutos.",
        },
        {
          question: "Tenho suporte durante a implementação?",
          answer: "Sim, oferecemos suporte completo e comunidade para tirar dúvidas durante toda sua jornada.",
        },
      ],
    ],
    cta: [
      "Pare de queimar dinheiro em marketing ineficiente. Aprenda o sistema que gera resultados reais.",
      "O momento de profissionalizar seu marketing é agora. Garanta fluxo constante de clientes qualificados.",
    ],
  },
  freelancers: {
    hero: [
      {
        headline: "Dobre Seus Ganhos como Freelancer",
        subheadline: "O método para construir carteira de clientes recorrentes e cobrar preço premium",
        cta: "Começar Agora",
      },
      {
        headline: "Freelancer: Da Instabilidade à Renda Previsível",
        subheadline: "Transforme suas habilidades em um negócio escalável e sustentável",
        cta: "Quero Aprender",
      },
    ],
    painPoints: [
      [
        "Instabilidade de renda mês a mês",
        "Dificuldade em conseguir clientes de qualidade",
        "Preços baixos e concorrência desleal",
      ],
      [
        "Falta de sistema para escalar serviços",
        "Dependência de plataformas como Upwork e Fiverr",
        "Não sabe como posicionar seu valor",
      ],
    ],
    benefits: [
      [
        "Renda mensal previsível e crescente",
        "Carteira de clientes fiéis e recorrentes",
        "Cobre preço premium justificado por valor",
        "Negócio escalável sem depender de horas",
        "Independência de plataformas terceiras",
      ],
      [
        "Aprenda a criar propostas irresistíveis",
        "Domine o posicionamento de preço",
        "Sistema de fidelização de clientes",
        "Comunidade exclusiva de freelancers",
        "Estratégias para sair de plataformas",
      ],
    ],
    faq: [
      [
        {
          question: "Serve para qualquer área de freelancer?",
          answer: "Sim, o método funciona para designers, desenvolvedores, copywriters, consultores e qualquer prestador de serviço.",
        },
        {
          question: "Quanto tempo para ver resultados?",
          answer: "Alunos começam a conseguir clientes melhores nas primeiras 2 semanas. Renda estável em 60-90 dias.",
        },
        {
          question: "Preciso ter portfólio pronto?",
          answer: "Ensinamos a criar e otimizar portfólio. Se você já tiver, melhoramos. Se não, criamos do zero.",
        },
        {
          question: "Como sair de plataformas como Upwork?",
          answer: "Ensinamos estratégias para atrair clientes diretos, construir autoridade e criar funis de vendas próprios.",
        },
        {
          question: "Tenho suporte durante o processo?",
          answer: "Sim, oferecemos suporte e comunidade para ajudar em cada etapa da sua jornada como freelancer.",
        },
      ],
    ],
    cta: [
      "Pare de aceitar trabalhos mal pagos. Aprenda a construir um negócio de freelancer sustentável.",
      "Sua liberdade financeira como freelancer começa agora. Domine o método que transforma serviços em negócio.",
    ],
  },
  productivity: {
    hero: [
      {
        headline: "Domine Seu Tempo e Triple Sua Produtividade",
        subheadline: "O sistema comprovado para eliminar distrações e focar no que realmente importa",
        cta: "Começar Agora",
      },
      {
        headline: "Produtividade: Faça Mais em Menos Tempo",
        subheadline: "Elimine a procrastinação e conquiste seus objetivos com menos esforço",
        cta: "Quero Aprender",
      },
    ],
    painPoints: [
      [
        "Procrastinação constante e falta de foco",
        "Muitas tarefas e pouco tempo",
        "Sensação de nunca dar conta de tudo",
      ],
      [
        "Burnout por excesso de trabalho",
        "Distrações constantes impedem progresso",
        "Não sabe priorizar o que é importante",
      ],
    ],
    benefits: [
      [
        "Conclua tarefas em metade do tempo",
        "Foco laser no que realmente importa",
        "Sensação de controle sobre sua agenda",
        "Equilíbrio entre trabalho e vida pessoal",
        "Sistema sustentável de alta performance",
      ],
      [
        "Aprenda técnicas de gestão de tempo",
        "Domine o método de priorização",
        "Elimine distrações de forma definitiva",
        "Rotinas matinais de alta performance",
        "Comunidade focada em produtividade",
      ],
    ],
    faq: [
      [
        {
          question: "Funciona para quem tem pouco tempo?",
          answer: "Sim, o método é desenhado para pessoas ocupadas. Ensinamos a otimizar o tempo que você já tem.",
        },
        {
          question: "Preciso de disciplina perfeita?",
          answer: "Não, ensinamos sistemas que funcionam mesmo em dias de baixa motivação. Disciplina é consequência, não pré-requisito.",
        },
        {
          question: "Serve para estudantes?",
          answer: "Sim, o método funciona para estudantes, profissionais, empreendedores e qualquer pessoa que queira ser mais produtiva.",
        },
        {
          question: "Quanto tempo para ver resultados?",
          answer: "Muitos alunos relatam melhorias na primeira semana. Transformação significativa em 30 dias.",
        },
        {
          question: "Tenho suporte durante a implementação?",
          answer: "Sim, oferecemos suporte e comunidade para ajudar você a manter consistência e superar obstáculos.",
        },
      ],
    ],
    cta: [
      "Pare de sentir que nunca dá conta. Aprenda o sistema que transforma caos em controle.",
      "Sua produtividade não precisa depender de motivação. Domine o método que garante resultados consistentes.",
    ],
  },
};

type DomainKey = keyof typeof DOMAIN_LANDING_TEMPLATES;

/**
 * Generate landing page sections from an offer using deterministic templates.
 * This is a placeholder for future AI integration.
 */
export function generateLandingPageFromOffer(offer: Offer): LandingPageSections {
  const copy = offer.copy as {
    targetAudience?: string;
    problem?: string;
    desiredOutcome?: string;
    trendTitle?: string;
    subheadline?: string;
    bigPromise?: string;
    uniqueMechanism?: string;
    objectionHandling?: string[];
    guarantee?: string;
    offerStack?: string[];
  } || {};

  const productName = offer.name;
  const headline = offer.headline || productName;
  const subheadline = copy.subheadline || "";
  const targetAudience = copy.targetAudience || "profissionais";
  const problem = copy.problem || "desafios comuns";
  const desiredOutcome = copy.desiredOutcome || "resultados melhores";
  const trendTitle = copy.trendTitle || "";
  const uniqueMechanism = copy.uniqueMechanism || "";
  const objectionHandling = copy.objectionHandling || [];
  const guarantee = copy.guarantee || "";
  const offerStack = copy.offerStack || [];

  // Detect domain from trend title
  const domain = detectDomain(trendTitle.toLowerCase());

  return {
    hero: generateHeroSection(productName, headline, desiredOutcome, domain),
    problem: generateProblemSection(problem, domain),
    solution: generateSolutionSection(productName, targetAudience, domain),
    benefits: generateBenefitsSection(desiredOutcome, domain),
    offer: generateOfferSection(productName, headline, domain, uniqueMechanism, offerStack, guarantee),
    objectionHandling: generateObjectionHandlingSection(objectionHandling, domain),
    faq: generateFAQSection(productName, domain),
    cta: generateCTASection(productName, desiredOutcome, domain),
  };
}

function detectDomain(title: string): DomainKey | null {
  if (title.includes("ia") || title.includes("inteligência") || title.includes("ai") || title.includes("automation")) {
    return "ai";
  }
  if (title.includes("marketing") || title.includes("vendas") || title.includes("crescimento")) {
    return "marketing";
  }
  if (title.includes("freelancer") || title.includes("freela") || title.includes("autônomo")) {
    return "freelancers";
  }
  if (title.includes("produtividade") || title.includes("tempo") || title.includes("foco")) {
    return "productivity";
  }
  return null;
}

function generateHeroSection(productName: string, headline: string, desiredOutcome: string, domain: DomainKey | null): LandingPageSections["hero"] {
  if (domain && DOMAIN_LANDING_TEMPLATES[domain]) {
    const templates = DOMAIN_LANDING_TEMPLATES[domain].hero;
    const index = Math.floor(Math.random() * templates.length);
    return templates[index] as LandingPageSections["hero"];
  }

  const templates = [
    {
      headline: headline,
      subheadline: `Descubra como ${desiredOutcome.toLowerCase()} com ${productName}`,
      cta: "Começar Agora",
    },
    {
      headline: headline,
      subheadline: `O método comprovado para ${desiredOutcome.toLowerCase()}`,
      cta: "Quero Aprender Mais",
    },
    {
      headline: headline,
      subheadline: `Transforme sua vida com ${productName}`,
      cta: "Acessar Agora",
    },
  ];

  const index = Math.floor(Math.random() * templates.length);
  return templates[index] as LandingPageSections["hero"];
}

function generateProblemSection(problem: string, domain: DomainKey | null): LandingPageSections["problem"] {
  if (domain && DOMAIN_LANDING_TEMPLATES[domain]) {
    const templates = DOMAIN_LANDING_TEMPLATES[domain].painPoints;
    const index = Math.floor(Math.random() * templates.length);
    return {
      painPoints: templates[index] as string[],
    };
  }

  const painPointsTemplates = [
    [
      `Você está cansado de ${problem.toLowerCase()}?`,
      "Sente que está perdendo tempo e dinheiro sem ver resultados?",
      "Não sabe por onde começar para mudar essa situação?",
    ],
    [
      `O problema de ${problem.toLowerCase()} afeta seus resultados diariamente`,
      "A falta de um sistema claro impede seu progresso",
      "Você merece uma solução que realmente funcione",
    ],
    [
      `${problem.charAt(0).toUpperCase() + problem.slice(1)} é um obstáculo constante no seu caminho`,
      "Muitas tentativas mas poucos resultados concretos",
      "A frustração de não atingir seus objetivos",
    ],
  ];

  const index = Math.floor(Math.random() * painPointsTemplates.length);
  return {
    painPoints: painPointsTemplates[index] as string[],
  };
}

function generateSolutionSection(productName: string, targetAudience: string, domain: DomainKey | null): LandingPageSections["solution"] {
  const templates = [
    `${productName} foi desenvolvido especificamente para ${targetAudience.toLowerCase()} que buscam resultados reais. Nossa metodologia comprovada combina as melhores práticas do mercado com técnicas inovadoras para garantir sua transformação.`,
    `Com ${productName}, você terá acesso a um sistema completo e estruturado. Criamos este método pensando nas necessidades reais de ${targetAudience.toLowerCase()}, garantindo que cada passo seja claro e aplicável.`,
    `${productName} é a solução definitiva que ${targetAudience.toLowerCase()} estavam esperando. Baseado em anos de experiência e testes, desenvolvemos um processo que elimina a complexidade e acelera seus resultados.`,
  ];

  const index = Math.floor(Math.random() * templates.length);
  return {
    explanation: templates[index] as string,
  };
}

function generateBenefitsSection(desiredOutcome: string, domain: DomainKey | null): LandingPageSections["benefits"] {
  if (domain && DOMAIN_LANDING_TEMPLATES[domain]) {
    const templates = DOMAIN_LANDING_TEMPLATES[domain].benefits;
    const index = Math.floor(Math.random() * templates.length);
    return {
      benefits: templates[index] as string[],
    };
  }

  const benefitsTemplates = [
    [
      `Atingir ${desiredOutcome.toLowerCase()} em tempo recorde`,
      "Metodologia passo a passo fácil de seguir",
      "Suporte e acompanhamento durante toda jornada",
      "Resultados comprovados por centenas de alunos",
      "Garantia de satisfação ou seu dinheiro de volta",
    ],
    [
      `Transformação real rumo a ${desiredOutcome.toLowerCase()}`,
      "Ferramentas práticas para aplicar imediatamente",
      "Comunidade exclusiva de networking",
      "Atualizações constantes do conteúdo",
      "Acesso vitalício ao material",
    ],
    [
      `Caminho claro para ${desiredOutcome.toLowerCase()}`,
      "Eliminação de tentativa e erro",
      "Economia de tempo e recursos",
      "Escalabilidade dos resultados",
      "Confiança e segurança no processo",
    ],
  ];

  const index = Math.floor(Math.random() * benefitsTemplates.length);
  return {
    benefits: benefitsTemplates[index] as string[],
  };
}

function generateOfferSection(productName: string, headline: string, domain: DomainKey | null, uniqueMechanism: string, offerStack: string[], guarantee: string): LandingPageSections["offer"] {
  const templates = [
    `${productName} é o produto completo que vai transformar sua realidade. Com ${headline}, você terá tudo o que precisa para alcançar seus objetivos de forma estruturada e eficiente.`,
    `Ao adquirir ${productName}, você recebe acesso imediato a todo o conteúdo, ferramentas e recursos necessários. ${headline} é apenas o começo da sua jornada de transformação.`,
    `${productName} representa o investimento mais inteligente que você pode fazer em si mesmo. ${headline} garante que você tenha clareza, direção e resultados mensuráveis.`,
  ];

  const index = Math.floor(Math.random() * templates.length);
  return {
    presentation: templates[index] as string,
    uniqueMechanism: uniqueMechanism || "O Sistema Comprovado",
    offerStack: offerStack.length > 0 ? offerStack : ["Módulo Principal", "Bônus Exclusivo", "Suporte VIP"],
    guarantee: guarantee || "Garantia de 30 dias",
  };
}

function generateFAQSection(productName: string, domain: DomainKey | null): LandingPageSections["faq"] {
  if (domain && DOMAIN_LANDING_TEMPLATES[domain]) {
    const templates = DOMAIN_LANDING_TEMPLATES[domain].faq;
    const index = Math.floor(Math.random() * templates.length);
    return {
      questions: templates[index] as Array<{ question: string; answer: string }>,
    };
  }

  const questionsTemplates = [
    [
      {
        question: `O ${productName} é para mim?`,
        answer: `Sim, ${productName} foi desenvolvido para qualquer pessoa que busque resultados reais. Não requer experiência prévia, apenas comprometimento com o processo.`,
      },
      {
        question: "Quanto tempo leva para ver resultados?",
        answer: "Os resultados variam de acordo com cada pessoa, mas muitos alunos relatam melhorias significativas nas primeiras semanas de aplicação do método.",
      },
      {
        question: "Tenho suporte durante o processo?",
        answer: "Sim, oferecemos suporte completo através de nossa comunidade exclusiva e canais de atendimento dedicados.",
      },
      {
        question: "Existe garantia?",
        answer: "Sim, oferecemos garantia de satisfação. Se não estiver satisfeito, devolvemos seu investimento integralmente.",
      },
      {
        question: "Como acesso o conteúdo?",
        answer: "Após a confirmação do pagamento, você recebe acesso imediato a toda plataforma e pode começar de imediato.",
      },
    ],
    [
      {
        question: `Preciso de conhecimento prévio para usar ${productName}?`,
        answer: "Não, ${productName} foi desenhado para ser acessível a todos os níveis. Começamos do básico e avançamos gradualmente.",
      },
      {
        question: "O conteúdo é atualizado?",
        answer: "Sim, mantemos o conteúdo atualizado regularmente para garantir que você tenha sempre as melhores informações e estratégias.",
      },
      {
        question: "Posso acessar de qualquer dispositivo?",
        answer: "Sim, nossa plataforma é 100% responsiva e pode ser acessada de computadores, tablets e smartphones.",
      },
      {
        question: "O pagamento é seguro?",
        answer: "Absolutamente. Utilizamos as tecnologias mais avançadas de criptografia e segurança para proteger seus dados.",
      },
      {
        question: "E se eu tiver dúvidas durante o curso?",
        answer: "Você terá acesso a suporte dedicado para tirar todas as suas dúvidas e garantir seu sucesso no processo.",
      },
    ],
  ];

  const index = Math.floor(Math.random() * questionsTemplates.length);
  return {
    questions: questionsTemplates[index] as Array<{ question: string; answer: string }>,
  };
}

function generateCTASection(productName: string, desiredOutcome: string, domain: DomainKey | null): LandingPageSections["cta"] {
  if (domain && DOMAIN_LANDING_TEMPLATES[domain]) {
    const templates = DOMAIN_LANDING_TEMPLATES[domain].cta;
    const index = Math.floor(Math.random() * templates.length);
    return {
      finalCallToAction: templates[index] as string,
    };
  }

  const templates = [
    `Não deixe para depois o que pode transformar sua vida hoje. Acesse ${productName} agora e comece sua jornada rumo a ${desiredOutcome.toLowerCase()}. Esta decisão pode mudar tudo para você.`,
    `O momento de agir é agora. Cada dia que passa é uma oportunidade perdida. Garanta seu acesso a ${productName} e dê o primeiro passo para ${desiredOutcome.toLowerCase()}.`,
    `Você está a um clique de transformar sua realidade. ${productName} é a chave que faltava. Não deixe essa oportunidade escapar. Comece hoje mesmo.`,
  ];

  const index = Math.floor(Math.random() * templates.length);
  return {
    finalCallToAction: templates[index] as string,
  };
}

function generateObjectionHandlingSection(objectionHandling: string[], domain: DomainKey | null): LandingPageSections["objectionHandling"] {
  if (objectionHandling && objectionHandling.length > 0) {
    return {
      objections: objectionHandling,
    };
  }

  // Fallback objection handling
  const fallbackObjections = [
    "Não tenho tempo suficiente para implementar - O método foi desenhado para pessoas ocupadas. Dedique apenas 30 minutos por dia.",
    "Não sei se vai funcionar para mim - Este sistema foi testado e validado por centenas de alunos em diferentes situações.",
    "O investimento parece alto - Pense no custo de não fazer nada. O valor do método é inferior ao que você perde sem aplicar.",
  ];

  return {
    objections: fallbackObjections,
  };
}
