const { defineConfig } = require("@vue/cli-service");
const IconsResolver = require("unplugin-icons/resolver");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.extensions.add(".ts");
  },
  configureWebpack: {
    resolve: {
      fallback: {
        http: false,
        https: false,
        url: false,
        timers: false,
      },
    },
    plugins: [
      require("unplugin-icons/webpack")({
        autoInstall: true,
      }),
      require("unplugin-vue-components/webpack")({
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/],

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver({
            componentPrefix: "",
            enabledCollections: ["carbon"],
          }),
        ],

        dts: "src/components.d.ts",
      }),
    ],
  },
  lintOnSave: false,
  pluginOptions: {
    windicss: {
      // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
    },
  },
});
