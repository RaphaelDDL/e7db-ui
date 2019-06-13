function errorHandler({ dispatch, reject }, error, apiType) {
    console.log(apiType);
    console.log(error);
    reject();
}

export const state = () => ({ itemList: [] });

export const getters = {
    list: state => state.itemList,
    single: state => _id => {
        return state.itemList.filter(a => a._id === _id)[0] || {};
    },
    singleRarity: (state, getters) => _id => {
        const singleItem = getters.single(_id);
        return singleItem.rarity ? singleItem.rarity : 0;
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
            if (listGetter && listGetter.length) {
                resolve(listGetter);
                return;
            }

            this.$axios
                .get("item")
                .then(r => r.data.results)
                .catch(error => {
                    errorHandler({ dispatch, reject }, error, "item list");
                })
                .then(items => {
                    if (items && items.length) {
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
            if (getters.list.length) {
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
