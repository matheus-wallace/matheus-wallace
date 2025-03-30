import updateAge from "@/utils/updateAge";

const age = updateAge();
export const translations = {
  aboutMeTitle: {
    pt: "Sobre mim",
    en: "About Me",
  },
  aboutMeDescription: {
    pt: `Olá, meu nome é @@Matheus@@ e tenho @@${age} anos@@, em @@2018@@ conheci o mundo da @@engenharia de software@@ e atualmente trabalhando como desenvolvedor full stack na @@Solistica@@,  @@análise e desenvolvimento de sistemas@@. Meu objetivo é realizar a transição de carreira e me tornar um @@desenvolvedor front-end@@.`,
    en: `Hello, my name is @@Matheus@@ and I'm @@${age} years old@@. In @@2018@@, I discovered the world of @@software engineering@@, and I'm currently pursuing a degree in @@Systems Analysis and Development@@. My goal is to transition careers and become a @@front-end developer@@.`,
  },
  techs: {
    pt: "Tecnologias",
    en: "Technology's",
  },
  contact: {
    pt: "Contato",
    en: "Contact",
  },
  experience: {
    pt: "Experiência",
    en: "Experience",
  },
  formation: {
    pt: "Formação",
    en: "Qualification",
  },
  projects: {
    pt: "Projetos",
    en: "Projects",
  },
  helpdesk: {
    pt: "Técnico Helpdesk",
    en: "Helpdesk Technician",
  },
  helpdeskAnalist: {
    pt: "Analista Helpdesk",
    en: "Helpdesk Analyst",
  },
  devFrontend: {
    pt: "Dev. Frontend",
    en: "Frontend Developer",
  },
  FullStackDeveloper: {
    pt: "Dev. Fullstack",
    en: "Fullstack developer",
  },
  tecHelpdeskDescription: {
    pt: "Iniciei minha trajetória profissional como Técnico de Helpdesk, onde fui responsável pelo suporte técnico aos usuários, realizando formatação e manutenção de máquinas, solucionando problemas de instalação de sistemas corporativos e configurando coletores de dados para operações em centros de distribuição. Também executei manutenção preventiva e corretiva em impressoras e periféricos, garantindo o pleno funcionamento dos equipamentos. Essa experiência me permitiu desenvolver habilidades essenciais em resolução de problemas técnicos, atendimento ao cliente e gestão de ativos de TI, estabelecendo uma base sólida para minha carreira na área de tecnologia.",
    en: "I began my career as a Help Desk Technician, providing comprehensive technical support to users. My responsibilities included formatting and maintaining computer systems, troubleshooting corporate software installations, and configuring data collection devices for distribution center operations. I also performed preventive and corrective maintenance on printers and peripherals to ensure optimal equipment functionality. This role enabled me to develop essential skills in technical problem-solving, customer service, and IT asset management, establishing a strong foundation for my technology career.",
  },
  analystHelpdeskDescription: {
    pt: "Após dois anos como Técnico de Helpdesk, fui promovido a Analista de Helpdesk, assumindo novas responsabilidades estratégicas. Nesta posição, passei a gerenciar os backups semanais da infraestrutura de TI, realizar a manutenção preventiva nos racks de distribuição de rede e coordenar com empresas terceirizadas a implementação de novos projetos tecnológicos. Um dos meus principais desafios foi a de infraestrutura de TI em novos centros de distribuição, incluindo a especificação e aquisição de equipamentos junto aos fornecedores. Esta experiência ampliou significativamente minhas competências em gestão de infraestrutura e projetos de TI.",
    en: "After two years as a Help Desk Technician, I was promoted to Help Desk Analyst, taking on strategic responsibilities. In this role, I managed weekly IT infrastructure backups, performed preventive maintenance on network distribution racks, and coordinated with third-party vendors to implement new technology projects. A key achievement was leading end-to-end IT infrastructure deployment for new distribution centers, including hardware specification and procurement. This experience significantly expanded my IT infrastructure management and project coordination competencies.",
  },
  frontendDescription: {
    pt: "Após quatro anos atuando com suporte técnico, realizei minha transição de carreira para o desenvolvimento front-end, onde passei a trabalhar com Redux para gerenciamento de estado compartilhado entre telas com dados provenientes de APIs REST. Minhas responsabilidades incluíram a implementação de consultas a APIs utilizando Axios, o desenvolvimento de novas funcionalidades e a criação de interfaces para o sistema WMS (Warehouse Management System), sempre visando a melhoria da experiência do usuário e a otimização dos fluxos de trabalho.",
    en: "After four years working in technical support, I successfully transitioned to front-end development, where I implemented Redux for shared state management across screens using data from REST APIs. My responsibilities included executing API calls with Axios, developing new features, and creating interfaces for the WMS (Warehouse Management System), consistently focusing on enhancing user experience and optimizing workflows.",
  },
  fullstackDescription: {
    pt: "Atualmente atuo como Desenvolvedor Fullstack, utilizando o framework Laravel no backend para manutenção e criação de novos endpoints, integração de ferramentas como o OneSignal para envio de notificações push, gerenciamento de conexões com pastas de rede, comunicação com bancos de dados através do ORM Eloquent, manutenção de ambientes locais com Docker e documentação de APIs utilizando Swagger para garantir a qualidade e consistência dos serviços desenvolvidos.",
    en: "I currently work as a Fullstack Developer, leveraging the Laravel framework for backend operations including maintenance and creation of new API endpoints, integration of push notification services like OneSignal, network folder connectivity management, database communication via Eloquent ORM, local environment maintenance using Docker, and comprehensive API documentation with Swagger to ensure service quality and consistency in all developed solutions.",
  },
} as const;

export type TranslationKeys = keyof typeof translations;
