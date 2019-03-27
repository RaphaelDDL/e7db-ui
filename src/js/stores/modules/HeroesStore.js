import HTTP, { errorHandler } from '@/js/stores/HTTP';
import { stripText } from '@/js/util/Utils';

export default {
    namespaced: true,
    state: { heroList: [] },
    mutations: {
        SET_HEROES(state, heroes) {
            state.heroList = heroes;
        },
    },
    getters: {
        list: (state) => state.heroList,
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
                HTTP.getHeroesList()
                    .then((r) => r.data.results)
                    .catch((error) => {
                        errorHandler({ dispatch, reject }, error, 'hero list');
                    })
                    .then((heroes) => {
                        if (heroes && heroes.length) {
                            heroes.forEach((h) => (h.trimmedName = stripText(h.name)));

                            commit('SET_HEROES', heroes);
                            resolve(heroes);
                        } else {
                            let error = {
                                stack: `results.length === 0 for heroes list`,
                                message: 'Error loading list',
                            };
                            errorHandler({ dispatch, reject }, error, 'heroes list');
                        }
                    });
            });
        },
        getSingle({ dispatch }, { fileId }) {
            return new Promise((resolve, reject) => {
                HTTP.getSingleHero(fileId)
                    .then((r) => r.data.results)
                    .catch((error) => {
                        errorHandler({ dispatch, reject }, error, 'hero detail');
                    })
                    .then((hero) => {
                        if (hero && hero.length) {
                            resolve(hero[0]);
                        } else {
                            let error = {
                                stack: `results.length === 0 for ${fileId}`,
                                message: 'Error loading detail',
                            };
                            errorHandler({ dispatch, reject }, error, 'hero detail');
                        }
                    });
            });
        },
    },
};
