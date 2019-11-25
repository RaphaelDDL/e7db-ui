import { assetsUrl, projectVersion as version } from "~/util/Constants";

export const state = () => ({
    globalError: {
        stack: "",
        message: "",
    },
    version,
    assetsUrl,
    locale: "en",
});

export const getters = {
    version: state => state.version,
    globalError: state => state.globalError,
    assetsUrl: state => state.assetsUrl,
};

export const mutations = {
    addGlobalError(state, { error = {}, when = "action" }) {
        state.globalError = {
            stack: `${error.message}`,
            message: `API Error @ ${when}`,
        };
    },
    removeGlobalError(state) {
        state.globalError = {
            stack: "",
            message: "",
        };
    },
    SET_I18N(state, locale) {
        state.locale = locale;
    },
};

export const actions = {
    globalError({ commit }, errorObject) {
        return commit("addGlobalError", errorObject);
    },
    globalErrorClear({ commit }) {
        return commit("removeGlobalError");
    },
    // nuxtServerInit({ dispatch }) {
    //     return Promise.all([
    //         dispatch("item/getList"),
    //         dispatch("hero/getList"),
    //         dispatch("artifact/getList"),
    //         dispatch("latest/getList"),
    //     ]);
    // },
};
