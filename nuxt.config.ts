// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt"],
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/css/main.css",
    "~/assets/css/navigation.css",
    "~/assets/css/hero.css",
    "~/assets/css/video.css",
    "~/assets/css/sections.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  nitro: {
    preset: "node",
  },
  app: {
    head: {
      title: "TSUKEYAKIBA Production - Photography & Digital Innovation",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "写真撮影からWebプラットフォーム開発、オーディオビジュアルアートまで、クリエイティブなソリューションを提供しています。",
        },
      ],
    },
  },
});
