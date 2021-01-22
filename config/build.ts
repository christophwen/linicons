import path from "path"
import { NuxtOptionsBuild } from "@nuxt/types/config/build"
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"

const build: NuxtOptionsBuild = {
  extend(config) {
    // create object/array if it doesnt exist
    if (!config.resolve) {
      config.resolve = {}
    }
    if (!config.resolve.plugins) {
      config.resolve.plugins = []
    }
    // add tsconfig paths plugin
    config.resolve.plugins?.push(new TsconfigPathsPlugin())
  },
  loaders: {
    scss: {
      sassOptions: {
        // include assets path as absolute path for scss imports
        includePaths: [path.resolve(__dirname, "../src/assets")],
      },
    },
  },
}

export default build
