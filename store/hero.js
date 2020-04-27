import { errorHandler } from "~/util/Utils";

export const state = () => ({ heroList: [] });

export const getters = {
    list: state => state.heroList,
};

export const mutations = {
    SET_HEROES(state, heroes) {
        state.heroList = heroes;
    },
};

export const actions = {
    getList({ dispatch, commit }) {
        return new Promise((resolve, reject) => {
            const listGetter = this.getters["hero/list"];
            if (listGetter?.length && this.getters?.locale === this.$i18n.locale) {
                resolve(listGetter);
                return;
            }

            this.$axios
                .get("hero", { headers: { "x-e7db-lang": this.$i18n.locale }, params: { lang: this.$i18n.locale } })
                .then(r => {
                    commit("SET_I18N", this.$i18n.locale, { root: true });
                    return r.data.results;
                })
                .catch(error => {
                    errorHandler({ dispatch, reject }, error, "hero list");
                })
                .then(heroes => {
                    if (heroes?.length) {
                        commit("SET_HEROES", heroes);
                        resolve(heroes);
                    } else {
                        const error = {
                            stack: `results.length === 0 for heroes list`,
                            message: "Error loading list",
                        };
                        errorHandler({ dispatch, reject }, error, "heroes list");
                    }
                });
        });
    },
    getSingle({ dispatch, commit }, { _id }) {
        return new Promise((resolve, reject) => {
            this.$axios
                .get(`hero/${_id}`, {
                    headers: { "x-e7db-lang": this.$i18n.locale },
                    params: { lang: this.$i18n.locale },
                })
                .then(r => {
                    commit("SET_I18N", this.$i18n.locale, { root: true });
                    return r.data.results;
                })
                .catch(error => {
                    errorHandler({ dispatch, reject }, error, "hero detail");
                })
                .then(hero => {
                    if (hero?.length) {
                        resolve(hero[0]);
                    } else {
                        const error = {
                            stack: `results.length === 0 for ${_id}`,
                            message: "Error loading detail",
                        };
                        errorHandler({ dispatch, reject }, error, "hero detail");
                    }
                });
        });
    },
};
