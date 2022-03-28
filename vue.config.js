const { defineConfig } = require("@vue/cli-service");
const { presetAttributify, presetUno, presetIcons } = require("unocss");

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
      require("@unocss/webpack").default({
        theme: {
          fontFamily: {
            sans: '"Inter", Inter var,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
          },
        },
        presets: [
          presetIcons({
            extraProperties: {
              display: "inline-block",
              height: "1.2em",
              width: "1.2em",
              "vertical-align": "text-bottom",
            },
          }),
          presetAttributify(),
          presetUno(),
        ],
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
