import { errorHandler } from "~/util/Utils";

export const state = () => ({ itemList: [] });

export const getters = {
    list: (state) => state.itemList,
    single: (state) => (_id) => {
        return state.itemList.filter((a) => a._id === _id)[0] || {};
    },
    singleRarity: (state, getters) => (_id) => {
        const singleItem = getters.single(_id);
        return singleItem.grade ?? 0;
    },
};

export const mutations = {
    SET_ITEMS(state, items) {
        state.itemList = items;
    },
};

export const actions = {
    getList({ dispatch, commit }) {
        return new Promise((resolve, reject) => {
            const listGetter = this.getters["item/list"];
            if (listGetter?.length && this.getters?.locale === this.$i18n.locale) {
                resolve(listGetter);
                return;
            }

            this.$axios
                .get("item", { headers: { "x-e7db-lang": this.$i18n.locale }, params: { lang: this.$i18n.locale } })
                .then((r) => {
                    commit("SET_I18N", this.$i18n.locale, { root: true });
                    return r?.data?.results;
                })
                .catch((error) => {
                    errorHandler({ dispatch, reject }, error, "item list");
                })
                .then((items = []) => {
                    commit("SET_ITEMS", items);
                    if (!items?.length) {
                        const error = {
                            stack: `results.length === 0 for items list`,
                            message: "Error loading list",
                        };
                        errorHandler({ dispatch, reject }, error, "items list");
                    }
                    resolve(items);
                });
        });
    },
    getSingle({ dispatch, getters }, { _id }) {
        return new Promise((resolve, reject) => {
            const listGetter = this.getters["item/list"];
            if (listGetter?.length && this.getters.locale === this.$i18n.locale) {
                return resolve(getters.single(_id));
            } else {
                return dispatch("getList")
                    .then(() => {
                        resolve(getters.single(_id));
                    })
                    .catch((error) => {
                        errorHandler({ dispatch, reject }, error, "item detail");
                    });
            }
        });
    },
};
