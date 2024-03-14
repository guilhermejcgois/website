export type Languages = {
  en: string;
  pt: string;
};
export const languages: Languages = {
  en: "English",
  pt: "Portuguese",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.twitter": "Twitter",
    "posts.latest.title": "Latest posts",
    "posts.latest.empty": "Soon, stay connected 👀...",
    "posts.see-all": "See all posts",
    "projects.featured.title": "Selected projects",
    "projects.featured.empty": "Oops, I must work^^^^^",
    "contact.tilte": "Get in touch",
    "contact.text1": "Email me at",
    "contact.text2": "or follow me via my social links.",
  },
  pt: {
    "nav.home": "Home",
    "nav.about": "Sobre",
    "posts.latest.title": "Ultimos artigos",
    "posts.latest.empty": "Em breve, fique ligado 👀...",
    "posts.see-all": "Mais artigos",
    "projects.featured.title": "Projetos selecionados",
    "projects.featured.empty": "Oops, preciso trabalhar mais^^^^^",
    "contact.tilte": "Entre em contato",
    "contact.text1": "Envie-me um e-mail para",
    "contact.text2": "ou me siga nas redes.",
  },
} as const;
