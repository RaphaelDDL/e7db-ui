module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: "babel-eslint",
    },
    extends: ["@nuxtjs", "plugin:nuxt/recommended", "plugin:prettier/recommended", "prettier"],
    plugins: ["prettier"],
    // add your custom rules here
    rules: {
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "nuxt/no-cjs-in-config": "off",
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    },
};
