import { errorHandler } from "~/util/Utils";

export const state = () => ({ artifactList: [] });

export const getters = {
    list: state => state.artifactList,
};

export const mutations = {
    SET_ARTIFACTS(state, artifacts) {
        state.artifactList = artifacts;
    },
};

export const actions = {
    getList({ dispatch, commit }) {
        return new Promise((resolve, reject) => {
            const listGetter = this.getters["artifact/list"];
            if (listGetter?.length && this.getters?.locale === this.$i18n.locale) {
                resolve(listGetter);
                return;
            }
            this.$axios
                .get("artifact", { headers: { "x-e7db-lang": this.$i18n.locale }, params: { lang: this.$i18n.locale } })
                .then(r => {
                    commit("SET_I18N", this.$i18n.locale, { root: true });
                    return r.data.results;
                })
                .catch(error => {
                    errorHandler({ dispatch, reject }, error, "artifact list");
                })
                .then(artifacts => {
                    if (artifacts?.length) {
                        commit("SET_ARTIFACTS", artifacts);
                        resolve(artifacts);
                    } else {
                        const error = {
                            stack: `results.length === 0 for artifacts list`,
                            message: "Error loading list",
                        };
                        errorHandler({ dispatch, reject }, error, "artifact list");
                    }
                });
        });
    },
    getSingle({ commit, dispatch }, { _id }) {
        return new Promise((resolve, reject) => {
            this.$axios
                .get(`artifact/${_id}`, {
                    headers: { "x-e7db-lang": this.$i18n.locale },
                    params: { lang: this.$i18n.locale },
                })
                .then(r => {
                    commit("SET_I18N", this.$i18n.locale, { root: true });
                    return r.data.results;
                })
                .catch(error => {
                    errorHandler({ dispatch, reject }, error, "artifact detail");
                })
                .then(artifact => {
                    if (artifact?.length) {
                        resolve(artifact[0]);
                    } else {
                        const error = {
                            stack: `results.length === 0 for ${_id}`,
                            message: "Error loading detail",
                        };
                        errorHandler({ dispatch, reject }, error, "artifact detail");
                    }
                });
        });
    },
};
