export const site = {
  brand: 'Maciel Sistemas',
  owner: 'Édipo Maciel',
  location: 'Manaus – AM',
  cnpj: '59.008.058/0001-24',
  email: 'macieledipo@gmail.com',
  phoneDisplay: '(92) 99225-8412',
  whatsappUrl:
    'https://wa.me/5592992258412?text=Ol%C3%A1%20%C3%89dipo%2C%20vim%20pelo%20site%20e%20quero%20conversar%20sobre%20um%20sistema%20para%20minha%20empresa.',
  emailUrl: 'mailto:macieledipo@gmail.com',
  stack: ['React', 'Node.js'],
} as const

export const navLinks = [
  { href: '#topo', label: 'Ramos' },
  { href: '#capacidades', label: 'O que entrego' },
  { href: '#como-trabalho', label: 'Como trabalho' },
  { href: '#case', label: 'Case' },
  { href: '#contato', label: 'Contato' },
] as const

export const hero = {
  brand: 'Maciel Sistemas',
  headline: 'Sistemas feitos sob medida para o seu negócio',
  support:
    'Você não precisa de um software pronto e que não resolve seu problema, você precisa de um sistema para resolver o SEU PROBLEMA REAL!',
  ctaPrimary: 'Quero conversar no WhatsApp',
  ctaSecondary: 'Enviar e-mail',
  location: 'Manaus – AM',
  mockupSrc: '/case/painel-entregas.png',
  mockupAlt: 'Painel das entregas do sistema em tempo real',
} as const

export const heroCarousel = {
  slides: [
    {
      id: 'produto',
      type: 'product' as const,
    },
    {
      id: 'transportadora',
      type: 'story' as const,
      headline: 'Saiu do quadro e do papel. Entrou no sistema.',
      support:
        'Case real: acompanhamento das entregas em tempo real e faturamento automatizado — sem planilha e sem muro.',
      before: {
        src: '/ramos/stories/transportadora-antes.jpg',
        alt: 'Operação de transportadora controlada em quadro e papel',
        label: 'Antes',
        caption: 'Quadro e papel no dia a dia',
      },
      after: {
        src: '/ramos/stories/transportadora-depois.jpg',
        alt: 'Operação de transportadora com sistema de entregas e faturamento',
        label: 'Depois',
        caption: 'Entregas e faturamento no sistema',
      },
    },
    {
      id: 'acessorios',
      type: 'story' as const,
      headline: 'Quer automatizar as vendas da sua loja de acessórios?',
      support:
        'Quer um sistema de vendas de capinhas e acessórios? Sai do caos das mensagens. Controle estoque, pedidos e atendimento em um sistema só.',
      before: {
        src: '/ramos/stories/celular-antes.jpg',
        alt: 'Vendedor sobrecarregado com muitas mensagens na loja de acessórios',
        label: 'Antes',
        caption: 'Vendedor agoniado com tanta mensagem',
      },
      after: {
        src: '/ramos/stories/celular-depois.jpg',
        alt: 'Vendedor finalizando vendas com calma usando o sistema',
        label: 'Depois',
        caption: 'Vendas fluindo com o sistema',
      },
    },
    {
      id: 'oficina',
      type: 'story' as const,
      headline: 'Quer organizar a fila da sua oficina mecânica?',
      support:
        'Quer um sistema para automatizar a fila da sua oficina? Menos espera, ordem de serviço no fluxo — e cliente saindo satisfeito.',
      before: {
        src: '/ramos/stories/oficina-antes.jpg',
        alt: 'Mecânico sobrecarregado e fila de clientes insatisfeitos',
        label: 'Antes',
        caption: 'Fila parada, mecânico sem fôlego',
      },
      after: {
        src: '/ramos/stories/oficina-depois.jpg',
        alt: 'Mecânico aliviado e clientes satisfeitos com o sistema de fila',
        label: 'Depois',
        caption: 'Fila organizada, clientes satisfeitos',
      },
    },
  ],
} as const

export const proofStrip = [
  'Case real em produção',
  'React + NestJS',
  'Manaus – AM',
  'Sistemas sob medida',
] as const

export const audience = {
  id: 'para-quem',
  title: 'Para empresas que já sentem que planilha e quadro não dão conta',
  text: 'Se a sua operação cresceu e o controle ficou espalhado (WhatsApp, Excel, papel), dá para organizar isso em um sistema só — feito para a sua rotina, não o contrário.',
} as const

export const capabilities = {
  id: 'capacidades',
  title: 'O que o seu sistema pode resolver',
  lead: 'Cada módulo nasce da operação real — não de um template genérico.',
  items: [
    {
      title: 'Cadastros e operação',
      text: 'Clientes, motoristas, veículos, propostas, bookings e importações no mesmo fluxo.',
    },
    {
      title: 'Painel em tempo real',
      text: 'Status das entregas na tela (e na TV), com visão clara do que está em andamento.',
    },
    {
      title: 'Relatórios automáticos',
      text: 'Serviços por motorista, operacional unificado e exportação em Excel/PDF.',
    },
    {
      title: 'Faturamento alinhado',
      text: 'Do serviço ao faturamento do cliente — com regras e alertas que evitam erro manual.',
    },
  ],
} as const

export const process = {
  id: 'como-trabalho',
  title: 'Do jeito que o cliente precisa',
  intro: 'Meu diferencial: não é “um sistema pronto”. É o seu sistema.',
  steps: [
    {
      number: '01',
      title: 'Conversamos',
      text: 'Sobre o problema e o fluxo real da empresa.',
    },
    {
      number: '02',
      title: 'Desenho',
      text: 'O sistema com base no que você usa no dia a dia.',
    },
    {
      number: '03',
      title: 'Desenvolvo',
      text: 'E ajusto junto com você, passo a passo.',
    },
    {
      number: '04',
      title: 'Entrego',
      text: 'Pronto para usar — com relatórios e telas que fazem sentido na operação.',
    },
  ],
} as const

export type ShotCategory = 'geral' | 'cadastros' | 'operacao' | 'relatorios' | 'faturamento'

export const caseCategories = [
  { id: 'geral' as const, label: 'Visão geral' },
  { id: 'cadastros' as const, label: 'Cadastros' },
  { id: 'operacao' as const, label: 'Operação' },
  { id: 'relatorios' as const, label: 'Relatórios' },
  { id: 'faturamento' as const, label: 'Faturamento' },
]

export const caseStudy = {
  id: 'case',
  eyebrow: 'Case em produção',
  title: 'Transportadora local — logística de containers em Manaus',
  teaser:
    'Sistema sob medida para rastrear entregas, gerar faturamento e organizar o pagamento dos motoristas — saindo da planilha para a operação em tempo real.',
  coverSrc: '/case/painel-entregas.png',
  coverAlt: 'Painel das entregas em tempo real',
  ctaDetail: 'Ver detalhes do case',
  challenge: {
    title: 'O desafio',
    text: 'A transportadora precisava rastrear entregas, gerar faturamento para clientes e calcular o pagamento dos motoristas — sem depender de planilhas e controle manual.',
  },
  solution: {
    title: 'O que foi feito',
    text: 'Sistema de gestão com cadastros (motoristas, carretas, caminhões, clientes e demais) e acompanhamento das entregas, com relatórios e visão operacional em tempo real.',
  },
  results: {
    title: 'O resultado',
    items: [
      'Menos planilha e menos quadro na parede',
      'Status das entregas na TV, em tempo real e de forma automática',
      'Relatórios gerados pelo próprio sistema',
      'Mais controle no faturamento e no pagamento dos motoristas',
    ],
  },
  tech: ['React.js', 'NestJS'],
  shots: [
    {
      src: '/case/login.png',
      alt: 'Tela de acesso do sistema de logística',
      category: 'geral' as ShotCategory,
      label: 'Login e áreas de acesso',
    },
    {
      src: '/case/painel-entregas.png',
      alt: 'Painel das entregas em tempo real',
      category: 'operacao' as ShotCategory,
      label: 'Painel das entregas',
    },
    {
      src: '/case/clientes.png',
      alt: 'Cadastro de clientes',
      category: 'cadastros' as ShotCategory,
      label: 'Cadastro de clientes',
    },
    {
      src: '/case/motoristas.png',
      alt: 'Cadastro de motoristas',
      category: 'cadastros' as ShotCategory,
      label: 'Cadastro de motoristas',
    },
    {
      src: '/case/veiculos.png',
      alt: 'Cadastro de veículos',
      category: 'cadastros' as ShotCategory,
      label: 'Cadastro de veículos',
    },
    {
      src: '/case/propostas.png',
      alt: 'Gestão de propostas comerciais',
      category: 'cadastros' as ShotCategory,
      label: 'Propostas',
    },
    {
      src: '/case/importacoes.png',
      alt: 'Programação de importações',
      category: 'operacao' as ShotCategory,
      label: 'Importações',
    },
    {
      src: '/case/relatorios.png',
      alt: 'Relatório de serviços por motorista',
      category: 'relatorios' as ShotCategory,
      label: 'Relatório por motorista',
    },
    {
      src: '/case/faturamento.png',
      alt: 'Faturamento para clientes',
      category: 'faturamento' as ShotCategory,
      label: 'Faturamento',
    },
  ],
} as const

export const contact = {
  id: 'contato',
  title: 'Vamos montar o sistema da sua empresa?',
  text: 'Me conta como a operação funciona hoje. A gente vê o que faz sentido automatizar e eu te mostro um caminho claro.',
  cta: 'Chamar no WhatsApp',
} as const
