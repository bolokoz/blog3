import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Projetos",
      prefix: "projetos/",
      link: "projetos/",
      children: "structure",
    },
    {
      text: "Portfolio",
      icon: "note",
      prefix: "portfolio/",
      link: "portfolio/",
      children: "structure",
    },
    {
      text: "Articles",
      icon: "note",
      prefix: "posts/",
      link: "blog",
      children: "structure",
    },
  ],
});
