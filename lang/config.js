// https://medium.com/@ale_colombo/a-simple-multilanguage-site-with-nuxt-js-and-nuxt-i18n-43cce9f9f0fe
module.exports = {
    locales: [
        {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "en-US.js",
            countries: ["United-States-of-America", "United-Kingdom"],
        },
        {
            name: "한국어",
            code: "kr",
            iso: "kr-KR",
            file: "kr-KR.js",
            countries: ["Korea,-South"],
        },
        {
            name: "Português",
            code: "pt",
            iso: "pt-BR",
            file: "pt-BR.js",
            countries: ["Brazil", "Portugal"],
        },
        {
            name: "Español",
            code: "es",
            iso: "es-AR",
            file: "es-AR.js",
            countries: ["Spain", "Argentina"],
        },
    ],
    langDir: "lang/",
    defaultLocale: "en",
    lazy: true,
    seo: true,
    baseUrl: "https://epicsevendb.com",
};
