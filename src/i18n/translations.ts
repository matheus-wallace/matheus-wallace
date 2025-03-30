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
    en: `Technology's`,
  },
  contact: {
    pt: "Contato",
    en: `Contact`,
  },
  experience: {
    pt: "Experiência",
    en: `Experience`,
  },
  formation: {
    pt: "Formação",
    en: `Qualification`,
  },
  projects: {
    pt: "Projetos",
    en: `Projects`,
  },
} as const;

export type TranslationKeys = keyof typeof translations;
