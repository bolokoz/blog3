import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "pt-BR",
      title: "Bolokos mind",
      description: "A boloko blog ",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
