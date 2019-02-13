module.exports = {
    root: false,
    env: {
        es6: true,
        browser: true,
    },
    extends: ['plugin:vue/essential', 'plugin:prettier/recommended', '@vue/prettier'],
    plugins: ['prettier', 'vue'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
