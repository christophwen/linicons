import { NuxtOptionsHead } from "@nuxt/types/config/head"

const head: NuxtOptionsHead = {
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap",
    }
  ],
}

export default head
