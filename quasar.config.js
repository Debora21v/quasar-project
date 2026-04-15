// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from "#q-app/wrappers";

export default defineConfig((/* ctx */) => {
  return {
    // app boot file (/src/boot)
    boot: ["pinia"],
    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#css
    css: ["app.css"],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: ["roboto-font", "material-icons"],

    build: {
      target: {
        browser: "baseline-widely-available",
        node: "node22",
      },
      vueRouterMode: "hash",
    },

    devServer: {
      open: true,
    },

    // --- CORREÇÃO AQUI ---
    framework: {
      plugins: ["LocalStorage", "Notify"],
      // config: {
      //   notify: { /* opções globais do notify se quiser */ }
      // }
    },
    // ---------------------

    animations: [],

    ssr: {
      prodPort: 3000,
      middlewares: ["render"],
      pwa: false,
    },

    pwa: {
      workboxMode: "GenerateSW",
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      preloadScripts: ["electron-preload"],
      inspectPort: 5858,
      bundler: "packager",
      packager: {},
      builder: {
        appId: "quasar-project",
      },
    },

    bex: {
      extraScripts: [],
    },
  };
});
