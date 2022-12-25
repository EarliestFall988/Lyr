// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-headlessui", "@nuxtjs/tailwindcss", "@pinia/nuxt" ],
  app: {
    head: {
      title: "Lyr",
      charset: "utf8",
      meta: [{ name: "theme-color", content: "#111" }],
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap",
          rel: "stylesheet",
        },
        { hid: "icon", rel: "icon", type: "image/png", href: "/icon.png" },
        {
          hid: "apple-touch-icon",
          rel: "apple-touch-icon",
          href: "/icon.png",
        },
        { rel: "manifest", href: "/manifest.json" },
      ],
    },
  },
});
