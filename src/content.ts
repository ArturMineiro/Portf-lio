export type Lang = "pt" | "en";

/** Texto com versão em português e inglês. */
type T = Record<Lang, string>;

export interface Shot {
  src: string;
  width: number;
  height: number;
  caption: T;
}

export interface Project {
  id: string;
  title: T;
  summary: T;
  highlights: T[];
  /** Endereço do sistema no ar, quando houver. */
  site?: string;
  repo?: string;
  shots: Shot[];
}

export interface TimelineEntry {
  period: T;
  current?: boolean;
  role: T;
  org: string;
  description: T;
  stack?: string[];
}

export interface SkillGroup {
  title: T;
  items: { name: string; years: number; plus?: boolean }[];
}

export interface ToolGroup {
  title: T;
  items: string[];
}

const shot = (file: string, width: number, height: number, pt: string, en: string): Shot => ({
  src: `/imagens/${file}`,
  width,
  height,
  caption: { pt, en },
});

export const profile = {
  name: "Artur Mineiro",
  email: "arturmineiro2@gmail.com",
  photo: "/imagens/artur.jpeg",
  cv: "/arquivos/curriculo_artur.pdf",
  links: {
    github: "https://github.com/ArturMineiro",
    linkedin: "https://www.linkedin.com/in/artur-mineiro/",
    instagram: "https://www.instagram.com/artur_mineiro",
  },
};

export const experience: TimelineEntry[] = [
  {
    period: { pt: "set/2025 – atual", en: "Sep 2025 – present" },
    current: true,
    role: { pt: "Desenvolvedor full-stack", en: "Full-stack developer" },
    org: "Solution TI",
    description: {
      pt: "Desenvolvo e sustento o sistema de emplacamento digital do Detran-PE em produção e integro o emplacamento de outros estados, com Groovy/Grails e Java no back-end e React/TypeScript no front-end. Implemento os fluxos de primeiro emplacamento e transferência de veículos usados: validações, geração e assinatura de documentos digitais e comunicação direta com endpoints governamentais, adequando o sistema às regras de cada estado. Analiso logs e corrijo falhas em produção e trabalho em Scrum, com code review.",
      en: "I build and support the Detran-PE digital vehicle registration system in production and integrate registration for other Brazilian states, using Groovy/Grails and Java on the back end and React/TypeScript on the front end. I implement the first-registration and used-vehicle transfer flows: validations, digital document generation and signing, and direct integration with government endpoints, adapting the system to each state's rules. I analyse logs, fix production issues and work in Scrum with code reviews.",
    },
    stack: ["Java", "Groovy", "Grails", "React", "TypeScript", "Docker", "Jira", "Bitbucket"],
  },
  {
    period: { pt: "set/2023 – set/2025", en: "Sep 2023 – Sep 2025" },
    role: { pt: "Desenvolvedor web júnior (trainee até ago/2024)", en: "Junior web developer (trainee until Aug 2024)" },
    org: "Crase Sigma",
    description: {
      pt: "Desenvolvi e mantive funcionalidades de sistema web com Laravel (PHP) no back-end e Angular no front-end, com modelagem de dados e otimização de consultas em PostgreSQL. Mantive integrações críticas com sistemas legados em COBOL e a troca de arquivos via FTP com parceiros externos, criei recursos de gestão e locação de imóveis e automatizei tarefas repetitivas com scripts em Python.",
      en: "I built and maintained web features with Laravel (PHP) on the back end and Angular on the front end, with data modelling and query optimization in PostgreSQL. I maintained critical integrations with legacy COBOL systems and FTP file exchange with external partners, delivered property-management and rental features and automated repetitive tasks with Python scripts.",
    },
    stack: ["Laravel", "Angular", "PHP", "PostgreSQL", "Python", "COBOL"],
  },
  {
    period: { pt: "jul/2022 – set/2023", en: "Jul 2022 – Sep 2023" },
    role: { pt: "Estagiário de informática", en: "IT intern" },
    org: "Atlanticont",
    description: {
      pt: "Suporte técnico presencial e remoto, instalação e manutenção de impressoras multifuncionais em clientes e configuração de dispositivos em rede LAN/Wi-Fi. A experiência fortaleceu minha base em suporte ao usuário e diagnóstico técnico.",
      en: "On-site and remote technical support, installing and maintaining multifunction printers at client sites and configuring LAN/Wi-Fi network devices. It strengthened my foundation in user support and technical diagnosis.",
    },
  },
  {
    period: { pt: "2019 – 2021", en: "2019 – 2021" },
    role: { pt: "Auxiliar administrativo (aprendiz)", en: "Administrative assistant (apprentice)" },
    org: "Lar de Ipanema Bené Herzl",
    description: {
      pt: "Rotinas administrativas que desenvolveram organização, disciplina, responsabilidade e comunicação profissional.",
      en: "Administrative routines that built organization, discipline, responsibility and professional communication.",
    },
  },
];

export const education: TimelineEntry[] = [
  {
    period: { pt: "2023 – 2025", en: "2023 – 2025" },
    role: { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis and Development" },
    org: "Universidade Veiga de Almeida (UVA)",
    description: {
      pt: "Graduação com foco em desenvolvimento de software, banco de dados e arquitetura de sistemas.",
      en: "Degree focused on software development, databases and system architecture.",
    },
  },
  {
    period: { pt: "2021 – 2023", en: "2021 – 2023" },
    role: { pt: "Técnico em Desenvolvimento Web", en: "Web Development technician" },
    org: "Colégio Santo Inácio (CSI)",
    description: {
      pt: "Lógica de programação, estruturação de sistemas e desenvolvimento web com HTML, CSS e JavaScript.",
      en: "Programming logic, system design and web development with HTML, CSS and JavaScript.",
    },
  },
];

export const projects: Project[] = [
  {
    id: "rota-financeira",
    title: { pt: "Rota Financeira", en: "Rota Financeira" },
    summary: {
      pt: "App de gestão financeira para motoristas e entregadores que mostra quanto realmente sobra depois de combustível, manutenção e custos por km. Feito em equipe de três e no ar desde dez/2025; fiquei à frente da infraestrutura, do deploy e da autenticação.",
      en: "Finance app for drivers and couriers that shows what is really left after fuel, maintenance and per-km costs. Built by a team of three and live since Dec 2025; I led infrastructure, deployment and authentication.",
    },
    highlights: [
      { pt: "VPS com Docker, HTTPS automático com Caddy e CI/CD que testa e publica a cada push", en: "Docker on a VPS, automatic HTTPS with Caddy and CI/CD that tests and ships on every push" },
      { pt: "Login com Google, confirmação de e-mail e PWA com notificações push", en: "Google sign-in, email confirmation and a PWA with push notifications" },
      { pt: "Painel admin com financeiro, cupons e jornada de cada usuário", en: "Admin panel with revenue, coupons and each user's journey" },
      { pt: "React Native + Expo, Node.js, Sequelize e PostgreSQL", en: "React Native + Expo, Node.js, Sequelize and PostgreSQL" },
    ],
    site: "https://rotafinanceira.app",
    shots: [shot("rotafinanceira1.jpg", 1200, 630, "Rota Financeira: finanças inteligentes para quem dirige", "Rota Financeira: smart finances for drivers")],
  },
  {
    id: "afinances",
    title: { pt: "aFinances", en: "aFinances" },
    summary: {
      pt: "Controle financeiro multiusuário com contas, cartões, parcelas, recorrências e investimentos. Construído com agentes de IA (Claude Code) no fluxo, com testes de ponta a ponta e deploy automático só quando tudo passa.",
      en: "Multi-user personal finance app with accounts, cards, installments, recurring entries and investments. Built with AI agents (Claude Code) in the loop, end-to-end tests and automatic deploys only when everything passes.",
    },
    highlights: [
      { pt: "Visão do mês com saldo atual, previsto e contas a vencer", en: "Monthly view with current and projected balance and upcoming bills" },
      { pt: "Relatórios por categoria, fluxo de caixa e comparativo", en: "Reports by category, cash flow and comparisons" },
      { pt: "React 19, Node/Express, Prisma, PostgreSQL, Docker e GitHub Actions", en: "React 19, Node/Express, Prisma, PostgreSQL, Docker and GitHub Actions" },
    ],
    site: "https://afinances.forgedevapps.com",
    shots: [
      shot("afinances1.jpg", 1200, 769, "Visão geral do mês com saldos e vencimentos", "Monthly overview with balances and due items"),
      shot("afinances2.jpg", 1200, 769, "Lista de lançamentos", "Transactions list"),
      shot("afinances3.jpg", 1200, 769, "Relatório de despesas por categoria", "Expenses by category report"),
      shot("afinances4.jpg", 1200, 769, "Calendário de pagamentos e recebimentos", "Payments and receipts calendar"),
    ],
  },
  {
    id: "bateu-a-fome",
    title: { pt: "Bateu a Fome", en: "Bateu a Fome" },
    summary: {
      pt: "Cardápio online multiloja para pequenos negócios de comida: o cliente monta o pedido e ele chega pronto no WhatsApp da loja, sem aplicativo para baixar e sem comissão por venda. Em uso por lojas reais.",
      en: "Multi-store online menu for small food businesses: customers build their order and it arrives ready in the store's WhatsApp, with no app to install and no per-order fee. Used by real stores.",
    },
    highlights: [
      { pt: "Loja própria com link, categorias, busca e horário de funcionamento", en: "Each store gets its own link, categories, search and opening hours" },
      { pt: "Pedido formatado direto no WhatsApp", en: "Formatted order sent straight to WhatsApp" },
    ],
    site: "https://bateuafomeapp.forgedevapps.com",
    shots: [
      shot("bateuafome1.jpg", 1200, 600, "Página inicial do Bateu a Fome", "Bateu a Fome home page"),
      shot("bateuafome2.jpg", 1200, 600, "Cardápio de uma loja real", "A real store's menu"),
    ],
  },
  {
    id: "cobranca",
    title: { pt: "Sistema de cobrança e cartas", en: "Billing and letter system" },
    summary: {
      pt: "Cadastro de clientes e prédios, associação de unidades e geração de cartas de cobrança em PDF com envio direto por e-mail. Automatiza o trabalho de montar e enviar cada carta.",
      en: "Client and building records, unit assignments and PDF billing letters sent straight by email. It automates writing and sending each letter.",
    },
    highlights: [
      { pt: "Cartas em PDF geradas a partir de modelos editáveis", en: "PDF letters generated from editable templates" },
      { pt: "Envio por e-mail com anexos", en: "Email delivery with attachments" },
      { pt: "Vínculo entre cliente, prédio, unidade e bloco", en: "Links between client, building, unit and block" },
    ],
    repo: "https://github.com/ArturMineiro/gerar_carta",
    shots: [
      shot("gerar-carta6.png", 800, 378, "Painel com gestão de clientes, prédios e geração de cartas", "Dashboard for clients, buildings and letter generation"),
      shot("gerar-carta5.png", 800, 467, "Formulário para gerar e enviar uma carta", "Form to generate and send a letter"),
      shot("gerar-carta1.png", 800, 467, "Relações entre clientes e prédios com filtro por prédio", "Client and building relations filtered by building"),
      shot("gerar-carta3.png", 800, 467, "Lista de clientes com ações de editar e excluir", "Client list with edit and delete actions"),
      shot("gerar-carta7.png", 800, 467, "Associação de cliente a prédio, unidade e bloco", "Assigning a client to a building, unit and block"),
      shot("gerar-carta2.png", 800, 467, "Cadastro de prédio", "Building registration"),
      shot("gerar-carta4.png", 800, 467, "Cadastro de cliente", "Client registration"),
    ],
  },
  {
    id: "contabilidade",
    title: { pt: "Sistema de contabilidade", en: "Accounting system" },
    summary: {
      pt: "Cálculo de débitos condominiais corrigidos pela UFIR-RJ, com juros, multa e honorários, gerando o demonstrativo em PDF usado em execuções judiciais.",
      en: "Calculates condominium debts adjusted by the UFIR-RJ index, with interest, fines and fees, producing the PDF statement used in court collections.",
    },
    highlights: [
      { pt: "Correção monetária automática por ano", en: "Automatic yearly monetary adjustment" },
      { pt: "Gestão de devedores com paginação e baixa em lote", en: "Debtor management with pagination and bulk updates" },
      { pt: "Demonstrativo em PDF pronto para o processo", en: "PDF statement ready for filing" },
    ],
    repo: "https://github.com/Davidtimbo/contabilidade",
    shots: [
      shot("contabilidade7.png", 800, 501, "Demonstrativo em PDF com valores corrigidos pela UFIR-RJ", "PDF statement with values adjusted by UFIR-RJ"),
      shot("contabilidade5.png", 800, 467, "Administração de devedores agrupados por unidade", "Debtors grouped by unit"),
      shot("contabilidade1.png", 800, 479, "Formulário para gerar a UFIR de um cliente", "Form to generate a client's UFIR statement"),
      shot("contabilidade6.png", 800, 355, "Painel de UFIR, lançamentos e geração de PDF", "Dashboard for UFIR, entries and PDF generation"),
      shot("contabilidade4.png", 800, 479, "Cadastro de lançamento", "New entry form"),
      shot("contabilidade3.png", 800, 479, "Tabela de valores da UFIR por ano", "UFIR values by year"),
      shot("contabilidade2.png", 800, 479, "Cadastro de UFIR", "UFIR registration"),
    ],
  },
  {
    id: "ecommerce",
    title: { pt: "E-commerce", en: "E-commerce" },
    summary: {
      pt: "Loja virtual com painel administrativo, cadastro de produtos, banners e categorias, autenticação de usuários e lista de favoritos, integrando front-end e API.",
      en: "Online store with an admin panel, product, banner and category management, user authentication and favorites, connecting front end and API.",
    },
    highlights: [
      { pt: "Painel com indicadores de vendas, produtos e pedidos", en: "Admin panel with sales, product and order metrics" },
      { pt: "Login, cadastro e favoritos por usuário", en: "Login, sign-up and per-user favorites" },
    ],
    repo: "https://github.com/ArturMineiro/e-commerce",
    shots: [
      shot("ecommerce1.png", 800, 367, "Painel administrativo com indicadores", "Admin dashboard with metrics"),
      shot("ecommerce3.png", 800, 402, "Página inicial com banners e produtos", "Home page with banners and products"),
      shot("ecommerce4.png", 800, 367, "Lista de produtos favoritos", "Favorite products"),
      shot("ecommerce2.png", 800, 367, "Tela de login", "Login screen"),
    ],
  },
];

/** Como trabalho com agentes de IA, em etapas. */
export const aiWorkflow: { title: T; text: T }[] = [
  {
    title: { pt: "Eu defino o escopo", en: "I set the scope" },
    text: {
      pt: "Descrevo a tarefa, as regras de negócio e o critério de pronto. O agente lê o código do projeto e propõe um plano antes de mexer em qualquer arquivo.",
      en: "I describe the task, the business rules and what done means. The agent reads the codebase and proposes a plan before touching any file.",
    },
  },
  {
    title: { pt: "O agente implementa e testa", en: "The agent builds and tests" },
    text: {
      pt: "O Claude Code implementa em uma branch isolada, roda testes e checagem de tipos e só então propõe o commit.",
      en: "Claude Code implements on an isolated branch, runs tests and type checks and only then proposes the commit.",
    },
  },
  {
    title: { pt: "Eu reviso cada mudança", en: "I review every change" },
    text: {
      pt: "Leio cada diff, peço correções e só aceito o que entendo. A responsabilidade pelo código continua sendo minha.",
      en: "I read every diff, ask for fixes and only accept what I understand. I stay accountable for the code.",
    },
  },
  {
    title: { pt: "A produção fica protegida", en: "Production stays safe" },
    text: {
      pt: "O CI/CD só publica quando build, tipos e testes passam, com migrações de banco e backups automáticos.",
      en: "CI/CD only ships when build, types and tests pass, with automatic database migrations and backups.",
    },
  },
];

export const skills: SkillGroup[] = [
  {
    title: { pt: "Front-end", en: "Front end" },
    items: [
      { name: "Angular", years: 2, plus: true },
      { name: "React", years: 2, plus: true },
      { name: "TypeScript", years: 2, plus: true },
      { name: "HTML/CSS", years: 3, plus: true },
      { name: "Bootstrap", years: 2 },
    ],
  },
  {
    title: { pt: "Back-end", en: "Back end" },
    items: [
      { name: "Java", years: 3 },
      { name: "Spring Boot", years: 3 },
      { name: "Laravel", years: 3, plus: true },
      { name: "PHP", years: 3, plus: true },
    ],
  },
  {
    title: { pt: "Banco de dados", en: "Databases" },
    items: [
      { name: "PostgreSQL", years: 3, plus: true },
      { name: "MySQL", years: 3, plus: true },
    ],
  },
];

export const tools: ToolGroup[] = [
  {
    title: { pt: "Ecossistema e linguagens", en: "Ecosystem and languages" },
    items: ["Groovy", "Grails", "Node.js", "Express", "React Native", "Expo", "JavaScript", "Python", "Flask", "HTML", "CSS"],
  },
  {
    title: { pt: "IA e produção", en: "AI and production" },
    items: ["Claude Code", "Docker", "GitHub Actions (CI/CD)", "Linux/VPS", "Nginx", "Caddy", "Vitest", "Playwright"],
  },
  {
    title: { pt: "Ferramentas e integrações", en: "Tools and integrations" },
    items: ["Git", "Jira", "Bitbucket", "Scrum", "Swagger", "Insomnia", "REST APIs", "AWS", "Prisma", "IntelliJ IDEA", "DataGrip"],
  },
];

/** Textos fixos da interface. */
export const ui = {
  pt: {
    metaTitle: "Artur Mineiro, desenvolvedor web full-stack",
    metaDescription:
      "Portfólio de Artur Mineiro, desenvolvedor full-stack com experiência em Java, Spring Boot, Groovy/Grails, React, TypeScript, Laravel e Angular.",
    skip: "Pular para o conteúdo",
    nav: { path: "Trajetória", ai: "IA", projects: "Projetos", skills: "Tecnologias", contact: "Contato" },
    aiTitle: "IA no meu fluxo",
    aiIntro:
      "Trabalho com agentes de IA no dia a dia para entregar mais rápido sem abrir mão de qualidade. O agente escreve e testa; eu decido, reviso e respondo pelo que vai para produção.",
    aiParallel:
      "Com o Orca, rodo vários agentes ao mesmo tempo, cada um na sua worktree, em tarefas diferentes do mesmo projeto. Uso esse fluxo em 7 projetos meus, entre eles o Rota Financeira, o aFinances e este portfólio.",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    langLabel: "Idioma",
    role: "Desenvolvedor web full-stack",
    intro:
      "Desenvolvedor full-stack com 3+ anos de experiência. Hoje atuo no emplacamento digital do Detran-PE com Java, Groovy/Grails e React, e coloco no ar meus próprios produtos com Docker e CI/CD. Uso agentes de IA (Claude Code) no dia a dia, sempre com testes automatizados e revisão humana.",
    seeProjects: "Ver projetos",
    downloadCv: "Baixar currículo (PDF)",
    photoAlt: "Artur Mineiro sorrindo, de camiseta azul, em frente a uma parede escura com plantas",
    pathTitle: "Trajetória",
    experience: "Experiência",
    education: "Formação",
    current: "Atual",
    projectsTitle: "Projetos",
    projectsIntro: "Produtos no ar e sistemas que automatizam rotinas administrativas e financeiras. Clique numa imagem para ampliar.",
    viewCode: "Ver código no GitHub",
    viewSite: "Ver no ar",
    openShot: (n: number, total: number) => `Ampliar imagem ${n} de ${total}`,
    showShot: (n: number) => `Mostrar imagem ${n}`,
    gallery: "Galeria",
    prev: "Imagem anterior",
    next: "Próxima imagem",
    close: "Fechar",
    counter: (n: number, total: number) => `${n} de ${total}`,
    skillsTitle: "Tecnologias",
    years: (y: number, plus?: boolean) => `${plus ? "+" : ""}${y} ${y === 1 ? "ano" : "anos"}`,
    contactTitle: "Vamos conversar",
    contactIntro: "Estou aberto a vagas, freelas e conversas sobre desenvolvimento web. Respondo por e-mail ou LinkedIn.",
    rights: "Feito com React e TypeScript.",
  },
  en: {
    metaTitle: "Artur Mineiro, full-stack web developer",
    metaDescription:
      "Portfolio of Artur Mineiro, a full-stack developer experienced with Java, Spring Boot, Groovy/Grails, React, TypeScript, Laravel and Angular.",
    skip: "Skip to content",
    nav: { path: "Background", ai: "AI", projects: "Projects", skills: "Skills", contact: "Contact" },
    aiTitle: "AI in my workflow",
    aiIntro:
      "I work with AI agents every day to ship faster without giving up quality. The agent writes and tests; I decide, review and own what goes to production.",
    aiParallel:
      "With Orca I run several agents at once, each in its own worktree, on different tasks in the same project. I use this workflow in 7 of my projects, including Rota Financeira, aFinances and this portfolio.",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langLabel: "Language",
    role: "Full-stack web developer",
    intro:
      "Full-stack developer with 3+ years of experience. I currently work on the Detran-PE digital vehicle registration system with Java, Groovy/Grails and React, and I ship my own products with Docker and CI/CD. I use AI agents (Claude Code) every day, always backed by automated tests and human review.",
    seeProjects: "See projects",
    downloadCv: "Download résumé (PDF)",
    photoAlt: "Artur Mineiro smiling in a blue T-shirt, in front of a dark wall with plants",
    pathTitle: "Background",
    experience: "Experience",
    education: "Education",
    current: "Current",
    projectsTitle: "Projects",
    projectsIntro: "Live products and systems that automate administrative and financial routines. Click an image to enlarge it.",
    viewCode: "View code on GitHub",
    viewSite: "See it live",
    openShot: (n: number, total: number) => `Enlarge image ${n} of ${total}`,
    showShot: (n: number) => `Show image ${n}`,
    gallery: "Gallery",
    prev: "Previous image",
    next: "Next image",
    close: "Close",
    counter: (n: number, total: number) => `${n} of ${total}`,
    skillsTitle: "Skills",
    years: (y: number, plus?: boolean) => `${plus ? "+" : ""}${y} ${y === 1 ? "year" : "years"}`,
    contactTitle: "Let's talk",
    contactIntro: "I'm open to roles, freelance work and conversations about web development. Reach me by email or LinkedIn.",
    rights: "Built with React and TypeScript.",
  },
} satisfies Record<Lang, unknown>;

export type UI = (typeof ui)["pt"];
