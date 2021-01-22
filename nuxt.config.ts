import { NuxtConfig } from "@nuxt/types"

import build from "./config/build"
import head from "./config/head"

const config: NuxtConfig = {
  target: "static",
  srcDir: "src/",
  router: {
    base: "/linicons/",
  },
  build,
  buildModules: ["@nuxt/typescript-build"],
  modules: ["@nuxtjs/svg"],
  head,
  server: {
    port: 8080,
  },
}

export default config
