import type { Languages } from "@/i18n/ui";

type I18nStrings = {
  [key in keyof Languages]: string;
};

type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: I18nStrings;
  description: I18nStrings;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "guilhermejcgois@gmail.com",
  title: {
    en: "Hi, I’m Guilherme 👋",
    pt: "Oi, sou Guilherme 👋",
  },
  description: {
    en: 'I\'m a fullstack developer skilled on front end development, passionate about designing and developing amazing products that deliver real value for real people. "Man should not live by code alone", agile and lean process enthusiast and continually improving leadership skills.',
    pt: "Desenvolvedor fullstack com experiência em desenvolvimento front-end, apaixonado por projetar e desenvolver produtos incríveis que agreguem valor real para pessoas reais. “O homem não deveria viver apenas de código”, entusiasta de processos lean e ágeis, em constante aprimoramento de habilidades de liderança.",
  },
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/guilhermejcgois",
    },
    {
      label: "Github",
      link: "https://github.com/guilhermejcgois",
    },
  ],
};

export default presentation;
