const pkg = require("./package");
const I18N = require("./lang/config");

const IS_PROD = !!(process.env.NODE_ENV === "production");

module.exports = {
    telemetry: true,
    mode: "universal",
    modern: IS_PROD,
    server: {
        port: process.env.PORT || 3000, // default: 3000
        host: process.env.HOST || "0.0.0.0", // default: localhost
    },
    env: {
        E7DB_AUTH_KEY: process.env.E7DB_AUTH_KEY || "",
    },
    head: {
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: pkg.description },
            { hid: "og:description", name: "og:description", content: pkg.description },
            { hid: "og:site_name", name: "og:site_name", content: "EpicSevenDB" },
            { hid: "og:image", name: "og:image", content: "https://assets.epicsevendb.com/favicon.png" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    workbox: {
        cacheAssets: false, // for /*
        offline: false, // for /_nuxt/*
    },

    // Customize the progress-bar color
    loading: { color: "#008be6", throttle: 0, height: "4px" },

    // Global CSS
    css: ["~/assets/scss/epicsevendb.scss"],

    // Plugins to load before mounting the App
    plugins: [
        { src: "~/plugins/aPlayer.js", mode: "client" },
        { src: "~/plugins/axios.js" },
        { src: "~/plugins/jsModal.js" },
        { src: "~/plugins/lazyLoad.js", mode: "client" },
        { src: "~/plugins/routerAfterEach.js", mode: "client" },
        { src: "~/plugins/vTooltip.js" },
        { src: "~/plugins/vueFilters.js" },
    ],

    // Nuxt.js modules
    modules: ["@nuxtjs/axios", ["@nuxtjs/pwa", { workbox: false }], "@nuxtjs/google-analytics", ["nuxt-i18n", I18N]],

    // @nuxtjs/google-analytics module configuration
    googleAnalytics: {
        id: pkg.data.analyticsId,
        dev: !IS_PROD,
        autoTracking: {
            pageviewOnLoad: false,
            page: false,
        },
    },
    // @nuxtjs/axios module configuration
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
        progress: true,
        retry: { retries: 1 },
        baseURL: pkg.data.apiEndpoint,
        debug: false,
    },

    // Build configuration
    build: {
        cssSourceMap: !IS_PROD,
        devtools: !IS_PROD,
        babel: {
            babelrc: true,
        },
        // extend webpack config here
        extend(config, ctx) {
            // Run ESLint on save
            // if (ctx.isDev && ctx.isClient) {
            //     config.module.rules.push({
            //         enforce: "pre",
            //         test: /\.(js|vue)$/,
            //         loader: "eslint-loader",
            //         exclude: /(node_modules)/,
            //     });
            // }
            if (!IS_PROD) {
                // config.devtool = '#inline-source-map';
                config.devtool = "eval-source-map";
            }
            // fixing warning for hls of aplayer
            // https://github.com/SevenOutman/vue-aplayer/issues/61
            config.externals = "hls.js";
        },

        // // if I want to switch to core-js@3
        // // npm i -D core-js@3 @babel/runtime-corejs3
        // babel: {
        //     presets({ isServer }) {
        //       return [
        //         [
        //           require.resolve('@nuxt/babel-preset-app'),
        //           // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
        //           {
        //             buildTarget: isServer ? 'server' : 'client',
        //             corejs: { version: 3 }
        //           }
        //         ]
        //       ]
        //     }
        //   }
    },
};
