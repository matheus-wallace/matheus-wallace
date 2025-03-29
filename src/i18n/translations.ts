// i18n/translations.ts
export const translations = {
  firstTranslation: {
    pt: "Olá, meu nome é Matheus Wallace",
    en: "Hello, my name is Matheus Wallace",
  },
  welcome: {
    pt: "Bem-vindo",
    en: "Welcome",
  },
  goodbye: {
    pt: "Adeus",
    en: "Goodbye",
  },
} as const;

export type TranslationKeys = keyof typeof translations;
