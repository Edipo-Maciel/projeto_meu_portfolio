import { asset } from '../lib/asset'

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
  { href: '#topo', label: 'Início' },
  { href: '#capacidades', label: 'O que entrego' },
  { href: '#como-trabalho', label: 'Como trabalho' },
  { href: '#case', label: 'Case' },
  { href: '#contato', label: 'Contato' },
] as const

export const hero = {
  brand: 'Maciel Sistemas',
  eyebrow: 'Sistemas sob medida',
  headline: 'Sistemas feitos sob medida',
  headlineAccent: 'para o seu negócio',
  support:
    'Você não precisa de um software pronto e que não resolve seu problema, você precisa de um sistema para resolver o SEU PROBLEMA REAL!',
  ctaPrimary: 'Quero conversar agora →',
  ctaSecondary: 'Ver como trabalho',
  location: 'Manaus – AM',
  mockupSrc: asset('/case/painel-entregas.png'),
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
        src: asset('/ramos/stories/transportadora-antes.jpg'),
        alt: 'Planejamento de entregas em quadro físico com mockups e anotações',
        label: 'Antes',
        caption: 'Controle no quadro e no papel',
      },
      after: {
        src: asset('/ramos/stories/transportadora-depois.jpg'),
        alt: 'Operação de armazém com tablet e logística digital',
        label: 'Depois',
        caption: 'Operação acompanhada no digital',
      },
    },
    {
      id: 'acessorios',
      type: 'story' as const,
      headline: 'Quer automatizar as vendas da sua loja de acessórios?',
      support:
        'Quer um sistema de vendas de capinhas e acessórios? Sai do caos das mensagens. Controle estoque, pedidos e atendimento em um sistema só.',
      before: {
        src: asset('/ramos/stories/celular-antes.jpg'),
        alt: 'Atendente lidando com celular e laptop ao mesmo tempo',
        label: 'Antes',
        caption: 'Atendimento espalhado no celular',
      },
      after: {
        src: asset('/ramos/stories/celular-depois.jpg'),
        alt: 'Venda no balcão com pagamento digital e atendimento organizado',
        label: 'Depois',
        caption: 'Venda fluindo no balcão',
      },
    },
    {
      id: 'oficina',
      type: 'story' as const,
      headline: 'Quer organizar a fila da sua oficina mecânica?',
      support:
        'Quer um sistema para automatizar a fila da sua oficina? Menos espera, ordem de serviço no fluxo — e cliente saindo satisfeito.',
      before: {
        src: asset('/ramos/stories/oficina-antes.jpg'),
        alt: 'Mecânico trabalhando no motor sem apoio digital de fila',
        label: 'Antes',
        caption: 'Oficina no improviso',
      },
      after: {
        src: asset('/ramos/stories/oficina-depois.jpg'),
        alt: 'Mecânico usando tablet de diagnóstico na oficina',
        label: 'Depois',
        caption: 'Fila e serviço no tablet',
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
  eyebrow: 'Para quem é',
  title: 'Para empresas que já sentem que planilha e quadro não dão conta',
  titleAccent: 'não dão conta',
  text: 'Se a sua operação cresceu e o controle ficou espalhado (WhatsApp, Excel, papel), dá para organizar isso em um sistema só — feito para a sua rotina, não o contrário.',
} as const

export const capabilities = {
  id: 'capacidades',
  eyebrow: 'Capacidades',
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
  eyebrow: 'Método',
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
  coverSrc: asset('/case/painel-entregas.png'),
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
      src: asset('/case/login.png'),
      alt: 'Tela de acesso do sistema de logística',
      category: 'geral' as ShotCategory,
      label: 'Login e áreas de acesso',
    },
    {
      src: asset('/case/painel-entregas.png'),
      alt: 'Painel das entregas em tempo real',
      category: 'operacao' as ShotCategory,
      label: 'Painel das entregas',
    },
    {
      src: asset('/case/clientes.png'),
      alt: 'Cadastro de clientes',
      category: 'cadastros' as ShotCategory,
      label: 'Cadastro de clientes',
    },
    {
      src: asset('/case/motoristas.png'),
      alt: 'Cadastro de motoristas',
      category: 'cadastros' as ShotCategory,
      label: 'Cadastro de motoristas',
    },
    {
      src: asset('/case/veiculos.png'),
      alt: 'Cadastro de veículos',
      category: 'cadastros' as ShotCategory,
      label: 'Cadastro de veículos',
    },
    {
      src: asset('/case/propostas.png'),
      alt: 'Gestão de propostas comerciais',
      category: 'cadastros' as ShotCategory,
      label: 'Propostas',
    },
    {
      src: asset('/case/importacoes.png'),
      alt: 'Programação de importações',
      category: 'operacao' as ShotCategory,
      label: 'Importações',
    },
    {
      src: asset('/case/relatorios.png'),
      alt: 'Relatório de serviços por motorista',
      category: 'relatorios' as ShotCategory,
      label: 'Relatório por motorista',
    },
    {
      src: asset('/case/faturamento.png'),
      alt: 'Faturamento para clientes',
      category: 'faturamento' as ShotCategory,
      label: 'Faturamento',
    },
  ],
} as const

export const contact = {
  id: 'contato',
  eyebrow: 'Fale comigo',
  title: 'Se o sistema da sua operação faz sentido,',
  titleAccent: 'a próxima etapa é simples.',
  text: 'Uma conversa. Sem proposta no primeiro contato e sem compromisso. Me conta como a operação funciona hoje — a gente vê o que faz sentido automatizar.',
  cta: 'Quero conversar agora →',
  microcopy: 'Sem spam. Prometemos.',
} as const
