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
  repo: string;
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
      pt: "Desenvolvo e mantenho soluções para processos digitais do DETRAN, com Groovy/Grails e Java no back-end e React/TypeScript no front-end. Implemento integrações com serviços externos para fluxos como primeiro emplacamento e transferência de veículos, corrijo bugs em produção e evoluo módulos considerando regras de negócio e impactos entre camadas. Também participo de code reviews e da manutenção da qualidade do código.",
      en: "I build and maintain solutions for DETRAN digital services using Groovy/Grails and Java on the back end and React/TypeScript on the front end. I integrate external services for workflows such as first vehicle registration and ownership transfers, fix production issues and evolve modules while accounting for business rules and cross-layer impact. I also take part in code reviews and code-quality maintenance.",
    },
    stack: ["Java", "Groovy", "Grails", "React", "TypeScript", "Docker", "Swagger"],
  },
  {
    period: { pt: "set/2023 – set/2025", en: "Sep 2023 – Sep 2025" },
    role: { pt: "Desenvolvedor full-stack", en: "Full-stack developer" },
    org: "Crase Sigma",
    description: {
      pt: "Desenvolvi e mantive sistemas web com Laravel no back-end e Angular no front-end, implementando funcionalidades, corrigindo bugs e modelando dados em PostgreSQL. Criei recursos para gestão e locação de imóveis e trabalhei também com PHP, TypeScript, Python, HTML e CSS na evolução do produto e de aplicações legadas.",
      en: "I built and maintained web systems with Laravel on the back end and Angular on the front end, shipping features, fixing bugs and modelling data in PostgreSQL. I delivered property-management and rental features and also used PHP, TypeScript, Python, HTML and CSS to evolve both the product and legacy applications.",
    },
    stack: ["Laravel", "Angular", "PHP", "TypeScript", "Python", "PostgreSQL"],
  },
  {
    period: { pt: "2022 – 2023", en: "2022 – 2023" },
    role: { pt: "Estagiário de informática", en: "IT intern" },
    org: "Atlanticont LTDA",
    description: {
      pt: "Suporte técnico remoto e presencial, manutenção de hardware e software, instalação de sistemas e resolução de problemas em equipamentos e impressoras. A experiência fortaleceu minha base em suporte ao usuário e diagnóstico técnico.",
      en: "Remote and on-site technical support, hardware and software maintenance, system installs and troubleshooting for devices and printers. It strengthened my foundation in user support and technical diagnosis.",
    },
  },
  {
    period: { pt: "2019 – 2022", en: "2019 – 2022" },
    role: { pt: "Jovem aprendiz", en: "Apprentice" },
    org: "Bené Herzl",
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
    items: ["Groovy", "Grails", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    title: { pt: "Ferramentas e integrações", en: "Tools and integrations" },
    items: ["Git", "Docker", "Swagger", "Insomnia", "REST APIs", "AWS", "IntelliJ IDEA", "DataGrip"],
  },
];

/** Textos fixos da interface. */
export const ui = {
  pt: {
    metaTitle: "Artur Mineiro, desenvolvedor web full-stack",
    metaDescription:
      "Portfólio de Artur Mineiro, desenvolvedor full-stack com experiência em Java, Spring Boot, Groovy/Grails, React, TypeScript, Laravel e Angular.",
    skip: "Pular para o conteúdo",
    nav: { path: "Trajetória", projects: "Projetos", skills: "Tecnologias", contact: "Contato" },
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    langLabel: "Idioma",
    role: "Desenvolvedor web full-stack",
    intro:
      "Desenvolvedor full-stack com 3+ anos de experiência. Construo e evoluo sistemas de produção com Java, Groovy/Grails e React, integro serviços externos e transformo regras de negócio complexas em aplicações confiáveis.",
    seeProjects: "Ver projetos",
    downloadCv: "Baixar currículo (PDF)",
    photoAlt: "Artur Mineiro sorrindo, de camiseta azul, em frente a uma parede escura com plantas",
    pathTitle: "Trajetória",
    experience: "Experiência",
    education: "Formação",
    current: "Atual",
    projectsTitle: "Projetos",
    projectsIntro: "Sistemas que automatizam rotinas administrativas e financeiras. Clique numa imagem para ampliar.",
    viewCode: "Ver código no GitHub",
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
    nav: { path: "Background", projects: "Projects", skills: "Skills", contact: "Contact" },
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langLabel: "Language",
    role: "Full-stack web developer",
    intro:
      "Full-stack developer with 3+ years of experience. I build and evolve production systems with Java, Groovy/Grails and React, integrate external services and turn complex business rules into reliable applications.",
    seeProjects: "See projects",
    downloadCv: "Download résumé (PDF)",
    photoAlt: "Artur Mineiro smiling in a blue T-shirt, in front of a dark wall with plants",
    pathTitle: "Background",
    experience: "Experience",
    education: "Education",
    current: "Current",
    projectsTitle: "Projects",
    projectsIntro: "Systems that automate administrative and financial routines. Click an image to enlarge it.",
    viewCode: "View code on GitHub",
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
