const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.extensions.add(".ts");
  },
  lintOnSave: false,
  pluginOptions: {
    windicss: {
      // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
    },
  },
});
