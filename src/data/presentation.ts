type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "guilhermejcgois@gmail.com",
  title: "Hi, I’m Guilherme 👋",
  description:
    'I\'m a fullstack developer skilled on front end development, passionate about designing and developing amazing products that deliver real value for real people. "Man should not live by code alone", agile and lean process enthusiast and continually improving leadership skills.',
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
