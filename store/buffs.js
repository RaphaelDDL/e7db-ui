import { errorHandler } from "~/util/Utils";

export const state = () => ({ buffList: [] });

export const getters = {
    list: (state) => state.buffList,
    single: (state) => (_id) => {
        return state.buffList.filter((a) => a._id === _id)[0] || {};
    },
};

export const mutations = {
    SET_BUFFS(state, buffs) {
        state.buffList = buffs;
    },
};

export const actions = {
    getList({ dispatch, commit }) {
        return new Promise((resolve, reject) => {
            const listGetter = this.getters["buffs/list"];
            if (listGetter?.length && this.getters?.locale === this.$i18n.locale) {
                resolve(listGetter);
                return;
            }

            this.$axios
                .get("buffs", { headers: { "x-e7db-lang": this.$i18n.locale }, params: { lang: this.$i18n.locale } })
                .then((r) => {
                    commit("SET_I18N", this.$i18n.locale, { root: true });
                    return r.data.results;
                })
                .catch((error) => {
                    errorHandler({ dispatch, reject }, error, "buffs list");
                })
                .then((buffs) => {
                    if (buffs?.length) {
                        commit("SET_BUFFS", buffs);
                        resolve(buffs);
                    } else {
                        const error = {
                            stack: `results.length === 0 for buffs list`,
                            message: "Error loading list",
                        };
                        errorHandler({ dispatch, reject }, error, "buffs list");
                    }
                });
        });
    },
    getSingle({ dispatch, getters }, { _id }) {
        return new Promise((resolve, reject) => {
            const listGetter = this.getters["buffs/list"];
            if (listGetter?.length && this.getters.locale === this.$i18n.locale) {
                return resolve(getters.single(_id));
            } else {
                return dispatch("getList")
                    .then(() => {
                        resolve(getters.single(_id));
                    })
                    .catch((error) => {
                        errorHandler({ dispatch, reject }, error, "buffs detail");
                    });
            }
        });
    },
};
