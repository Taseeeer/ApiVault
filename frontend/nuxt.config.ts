import { resolve } from "path";

export default defineNuxtConfig({
  components: true,
  runtimeConfig: {
    public: {
      apiUrl: process.env.STRAPI_URL || "http://localhost:9001/"
    }
  },
  alias: {
    '@': resolve(__dirname, "/")
  },
  plugins: [
    '@/plugins/fontawesome',
  ],
  modules: ['@nuxtjs/color-mode'],
  css: [
    '~/assets/styles/bootstrap.scss',
    '~/assets/styles/main.css', 
    '~/assets/styles/normalize.css',
    '~/assets/styles/animations.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  app: {
    head: {
      title: "A free API database list for developers",
      bodyAttrs: {
        'data-theme': 'dark'
      },
      meta: [
        { name: "keywords", content: "free api, apivault, api list, open-source, public APIs, software developer" },
        { name: "description", content: "ApiVault - The largest collection of free public APIs, categorized for easy search." },
        { name: "author", content: "exifly"},
        { name: "twitter:title", content: "A free API database list for developers"},
        { name: "twitter:description", content: "ApiVault - The largest collection of free public APIs, categorized for easy search."},
        { name: "twitter:url", content: "https://apivault.dev/"},
        { name: "twitter:card", content: "summary_large_image"},
        { name: "twitter:site", content: "apivault"},
        { name: "twitter:keywords", content: "public APIs list, public APIs database, public APIs website, public APIs search, api, free api, database api, api list, list api, free api list, free api database, devresources, dev resources, developer resources, programming"},
        { name: "twitter:image", content: "https://raw.githubusercontent.com/Exifly/ApiVault/main/assets/Hero.jpg"},
        { property: "og:title", content: "A free API database list for developers"},
        { property: "og:description", content: "ApiVault - The largest collection of free public APIs, categorized for easy search."},
        { property: "og:site_name", content: "APIVault"},
        { property: "og:url", content: "https://apivault.dev/"},
        { property: "og:image", content: "https://raw.githubusercontent.com/Exifly/ApiVault/main/assets/Hero.jpg" },
        { property: "og:type", content: "website"}
      ]
    }
  }
})
