import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";


export default hopeTheme({
  hostname: "https://yuribecker.com.br",
  fullscreen: true,
  author: {
    name: "Boloko",
    url: "https://yuribecker.com.br",
  },

  iconAssets: "iconfont",

  logo: "https://engebeck.com.br/_nuxt/img/TETRAHEDRON.efd7c2a.png",

  repo: "bolokoz/blog3",

  docsDir: "docs",

  editLink: true,
  contributors: true,
  lastUpdated: true,
  titleIcon: true,

  themeColor: { blue: '#2196f3', red: '#f26d6d', green: '#3eaf7c', orange: '#fb9b5f' },

  blog: {
    medias: {
      GitHub: "https://example.com",
      Gmail: "mailto:info@example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
    },

  },

  navbar: enNavbar,
  // sidebar: {
  //   "/projetos/": "structure",

  //   "/posts/": "structure",

  //   // fallback
  //   "/": [
  //     "" /* / */,
  //     "projetos" /* /contact.html */,
  //     "about" /* /about.html */,
  //   ],
  // },

  sidebar: enSidebar,

  // locales: {
  //   "/": {
  //     // navbar
  //     navbar: enNavbar,

  //     // sidebar
  //     sidebar: enSidebar,

  //     footer: "Default footer",

  //     displayFooter: true,

  //     blog: {
  //       description: "Boloko's mind",
  //       intro: "/intro.html",
  //     },

  //     metaLocales: {
  //       editLink: "Editar no GitHub",
  //     },
  //   },

  //   // /**
  //   //  * Chinese locale config
  //   //  */
  //   // "/zh/": {
  //   //   // navbar
  //   //   navbar: zhNavbar,

  //   //   // sidebar
  //   //   sidebar: zhSidebar,

  //   //   footer: "默认页脚",

  //   //   displayFooter: true,

  //   //   blog: {
  //   //     description: "一个前端开发者",
  //   //     intro: "/zh/intro.html",
  //   //   },

  //   //   // page meta
  //   //   metaLocales: {
  //   //     editLink: "在 GitHub 上编辑此页",
  //   //   },
  //   // },
  // },

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //     // "/zh/demo/encrypt.html": ["1234"],
  //   },
  // },
  plugins: {
    blog: true,

    // comment: {
    //   // @ts-expect-error: You should generate and use your own comment service
    //   provider: "Giscus",
    // },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      // align: true,
      // attrs: true,
      // chart: true,
      // codetabs: true,
      // demo: true,
      // echarts: true,
      // figure: true,
      // flowchart: true,
      // gfm: true,
      imgLazyload: true,
      // imgSize: true,
      // include: true,
      // katex: true,
      // mark: true,
      // mermaid: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // presentation: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      // stylize: [
      //   {
      //     matcher: "Recommended",
      //     replacer: ({ tag }) => {
      //       if (tag === "em")
      //         return {
      //           tag: "Badge",
      //           attrs: { type: "tip" },
      //           content: "Recommended",
      //         };
      //     },
      //   },
      // ],
      // sub: true,
      // sup: true,
      // tabs: true,
      // vPre: true,
      // vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
