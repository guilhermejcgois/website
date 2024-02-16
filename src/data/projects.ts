export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Fibonacci Clock",
    techs: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/guilhermejcgois/Fibonacci-Clock",
  },
  {
    title: "Personal ZShell env setup",
    techs: ["ZShell"],
    link: "https://github.com/guilhermejcgois/.zsh",
  },
  {
    title: "SPA built with PugJS",
    techs: ["Experimental"],
    link: "https://github.com/guilhermejcgois/f5",
  },
];

export default projects;
