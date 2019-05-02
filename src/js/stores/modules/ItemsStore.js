import HTTP, { errorHandler } from '@/js/stores/HTTP';

export default {
    namespaced: true,
    state: { itemList: [] },
    mutations: {
        SET_ITEMS(state, items) {
            state.itemList = items;
        },
    },
    getters: {
        list: (state) => state.itemList,
        single: (state) => (_id) => {
            return state.itemList.filter((a) => a._id === _id)[0] || {};
        },
        singleRarity: (state, getters) => (_id) => {
            const singleItem = getters.single(_id);
            return singleItem.rarity ? singleItem.rarity : 0;
        },
    },
    actions: {
        // async getList({ dispatch, commit }) {
        //     return new Promise((resolve, reject) => {
        //         try {
        //             var getHeroesListResponse = await HTTP.getHeroesList();
        //             let { data: { results: heroes = [] } = {} } = getHeroesListResponse;
        //             if (!heroes.length) {
        //                 throw new Error('results.length === 0 for hero list');
        //             }
        //             commit('SET_HEROES', heroes);
        //             return resolve(heroes);
        //         } catch (error) {
        //             return errorHandler({ dispatch, reject }, error, 'heroes list');
        //         }
        //     });
        // },
        getList({ dispatch, commit }) {
            return new Promise((resolve, reject) => {
                HTTP.getItemsList()
                    .then((r) => r.data.results)
                    .catch((error) => {
                        errorHandler({ dispatch, reject }, error, 'item list');
                    })
                    .then((items) => {
                        if (items && items.length) {
                            commit('SET_ITEMS', items);
                            resolve(items);
                        } else {
                            let error = {
                                stack: `results.length === 0 for items list`,
                                message: 'Error loading list',
                            };
                            errorHandler({ dispatch, reject }, error, 'items list');
                        }
                    });
            });
        },
        getSingle({ dispatch, getters }, { _id }) {
            return new Promise((resolve, reject) => {
                if (getters.list.length) {
                    return resolve(getters.single(_id));
                } else {
                    return dispatch('getList')
                        .then(() => {
                            resolve(getters.single(_id));
                        })
                        .catch((error) => {
                            errorHandler({ dispatch, reject }, error, 'item detail');
                        });
                }
            });
        },
    },
};
