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
            if (listGetter && listGetter.length) {
                resolve(listGetter);
                return;
            }

            this.$axios
                .get("api/hero",{ headers: { "x-e7db-lang": this.$i18n.locale }, params: { lang: this.$i18n.locale } })
                .then(r => r.data.results)
                .catch(error => {
                    errorHandler({ dispatch, reject }, error, "hero list");
                })
                .then(heroes => {
                    if (heroes && heroes.length) {
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
    getSingle({ dispatch }, { fileId }) {
        return new Promise((resolve, reject) => {
            this.$axios
                .get(`hero/${fileId}`,{ headers: { "x-e7db-lang": this.$i18n.locale }, params: { lang: this.$i18n.locale } })
                .then(r => r.data.results)
                .catch(error => {
                    errorHandler({ dispatch, reject }, error, "hero detail");
                })
                .then(hero => {
                    if (hero && hero.length) {
                        resolve(hero[0]);
                    } else {
                        const error = {
                            stack: `results.length === 0 for ${fileId}`,
                            message: "Error loading detail",
                        };
                        errorHandler({ dispatch, reject }, error, "hero detail");
                    }
                });
        });
    },
};
