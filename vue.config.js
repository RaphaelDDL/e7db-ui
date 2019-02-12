const path = require("path");

const defaultOptions = {
  template: path.join(__dirname, "src/templates/index.ejs"),
  inject: false,
  googleAnalytics: {
    // trackingId: 'UA-129320031-1',
    trackingId: require(path.join(__dirname, "package.json")).data.analyticsId
  }
};

module.exports = {
  publicPath: "/",
  lintOnSave: false, //process.env.NODE_ENV !== 'production',
  productionSourceMap: true,
  integrity: true,
  css: {
    extract:
      process.env.NODE_ENV === "production"
        ? {
            filename: "css/epicsevendb.[contenthash:8].css"
          }
        : false
  },
  pages: {
    index: Object.assign({}, defaultOptions, {
      entry: "src/js/epicsevendb.js",
      filename: "index.html",
      title: "EpicSevenDB.com - Epic7 Wiki and Database"
    })
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "~": path.resolve(__dirname, "src/"),
        "@": path.resolve("src/"),
        modernizr$: path.resolve(__dirname, ".modernizrrc")
      }
    }
  },
  chainWebpack(config) {
    config.module
      .rule("modernizr")
      .test(/\.modernizrrc$/)
      .use("webpack-modernizr-loader")
      .loader("webpack-modernizr-loader");
  }
};
