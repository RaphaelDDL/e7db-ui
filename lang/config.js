// https://medium.com/@ale_colombo/a-simple-multilanguage-site-with-nuxt-js-and-nuxt-i18n-43cce9f9f0fe

// langcodes http://www.lingoes.net/en/translator/langcode.htm
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
            code: "ko",
            iso: "ko-KR",
            file: "ko-KR.js",
            countries: ["Korea,-South"],
        },
        {
            name: "日本語",
            code: "jp",
            iso: "ja-JP",
            file: "ja-JP.js",
            countries: ["Japan"],
        },
        {
            name: "简体中文",
            code: "cn",
            iso: "zh-CN",
            file: "zh-CN.js",
            countries: ["China"],
        },
        {
            name: "繁體中文",
            code: "tw",
            iso: "zh-TW",
            file: "zh-TW.js",
            countries: ["Taiwan"],
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
        {
            name: "Français",
            code: "fr",
            iso: "fr-FR",
            file: "fr-FR.js",
            countries: ["France", "Canada"],
        },
        {
            name: "Deutsch",
            code: "de",
            iso: "de-DE",
            file: "de-DE.js",
            countries: ["Germany", "Austria"],
        },
    ],
    langDir: "lang/",
    defaultLocale: "en",
    fallbackLocale: "en",
    lazy: true,
    seo: false, // we are already calling $nuxtI18nSeo via header in each page
    baseUrl: "https://epicsevendb.com",
    vueI18n: {
        defaultLocale: "en",
        fallbackLocale: "en",
    },
};
