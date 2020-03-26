import { errorHandler } from "~/util/Utils";

export const state = () => ({ itemList: [], lang: 'en' });

export const getters = {
    lang: state => state.lang,
    list: state => state.itemList,
    single: state => _id => {
        return state.itemList.filter(a => a._id === _id)[0] || {};
    },
    singleRarity: (state, getters) => _id => {
        const singleItem = getters.single(_id);
        return singleItem.grade ? singleItem.grade : 0;
    },
};

export const mutations = {
    SET_LANG(state, lang){
        state.lang = lang;
    },
    SET_ITEMS(state, items) {
        state.itemList = items;
    },
};

export const actions = {
    getList({ dispatch, commit }) {
        return new Promise((resolve, reject) => {
            const listGetter = this.getters["item/list"];
            const itemLangGetter = this.getters["item/lang"];
            if (listGetter?.length && itemLangGetter === this.$i18n?.locale) {
                resolve(listGetter);
                return;
            }

            this.$axios
                .get("item", { headers: { "x-e7db-lang": this.$i18n.locale }, params: { lang: this.$i18n.locale } })
                .then(r => r.data.results)
                .catch(error => {
                    errorHandler({ dispatch, reject }, error, "item list");
                })
                .then(items => {
                    commit("SET_LANG", this.$i18n.locale);
                    if (items?.length) {
                        commit("SET_ITEMS", items);
                        resolve(items);
                    } else {
                        const error = {
                            stack: `results.length === 0 for items list`,
                            message: "Error loading list",
                        };
                        errorHandler({ dispatch, reject }, error, "items list");
                    }
                });
        });
    },
    getSingle({ dispatch, getters }, { _id }) {
        return new Promise((resolve, reject) => {
            const listGetter = this.getters["item/list"];
            const itemLangGetter = this.getters["item/lang"];
            if (listGetter?.length && itemLangGetter === this.$i18n?.locale) {
                return resolve(getters.single(_id));
            } else {
                return dispatch("getList")
                    .then(() => {
                        resolve(getters.single(_id));
                    })
                    .catch(error => {
                        errorHandler({ dispatch, reject }, error, "item detail");
                    });
            }
        });
    },
};
