import HTTP, { errorHandler } from '@/js/stores/HTTP';

export default {
    namespaced: true,
    state: { artifactList: [] },
    mutations: {
        SET_ARTIFACTS(state, artifacts) {
            state.artifactList = artifacts;
        },
    },
    getters: {
        list: (state) => state.artifactList,
        // list: (state) => (filters) => {
        //     // debugger;
        //     if (!filters || (filters && typeof filters !== 'object')) {
        //         return state.artifactList;
        //     }
        //     const currentFiltersNames = Object.keys(filters);

        //     currentFiltersNames.forEach(arrayName => {

        //     });

        //     return state.artifactList.filter((artifact) => rarity.includes(artifact.rarity));
        // },
    },
    actions: {
        // filterArtifactList({ commit, state }, filters) {
        //     debugger;
        //     const isFirstFilter = !state.filteredArtifactList.length;

        //     let filteredArtifactList = state.filteredArtifactList.length ? state.filteredArtifactList : [];
        //     const currentFiltersNames = Object.keys(filters);

        //     currentFiltersNames.forEach((arrayName, index) => {
        //         let currentFilterMap;

        //         if (!index) {
        //             currentFilterMap = isFirstFilter ? state.artifactList : state.filteredArtifactList;
        //         } else {
        //             currentFilterMap = filteredArtifactList;
        //         }
        //         currentFilterMap = currentFilterMap.filter((artifact) => {
        //             if (Array.isArray(artifact[arrayName])) {
        //                 return filters[arrayName].includes(...artifact[arrayName]);
        //             } else {
        //                 return filters[arrayName].includes(artifact[arrayName]);
        //             }
        //         });

        //         if (currentFilterMap && currentFilterMap.length) {
        //             filteredArtifactList.push(...currentFilterMap);
        //         }
        //     });

        //     return filteredArtifactList.length
        //         ? commit('SET_FILTERED_ARTIFACTS', filteredArtifactList)
        //         : commit('CLEAR_FILTERED_ARTIFACTS');
        // },
        getList({ dispatch, commit }) {
            return new Promise(async (resolve, reject) => {
                try {
                    let getArtifactsListResponse = await HTTP.getArtifactsList();
                    let { data: { results: artifacts = [] } = {} } = getArtifactsListResponse;
                    if (!artifacts.length) {
                        throw new Error('results.length === 0 for artifacts list');
                    }
                    commit('SET_ARTIFACTS', artifacts);
                    return resolve(artifacts);
                } catch (error) {
                    return errorHandler({ dispatch, reject }, error, 'artifacts list');
                }
            });
        },
        // getList({ dispatch, commit }) {
        //   return new Promise((resolve, reject) => {
        //     HTTP.getArtifactsList()
        //       .then(r => r.data.results)
        //       .catch(error => {
        //         errorHandler({ dispatch, reject }, error, "artifact list");
        //       })
        //       .then(artifacts => {
        //         if (artifacts && artifacts.length) {
        //           commit("SET_ARTIFACTS", artifacts);
        //           resolve(artifacts);
        //         } else {
        //           let error = {
        //             stack: `results.length === 0 for artifacts list`,
        //             message: "Error loading list"
        //           };
        //           errorHandler({ dispatch, reject }, error, "artifact list");
        //         }
        //       });
        //   });
        // },
        getSingle({ dispatch }, { fileId }) {
            return new Promise((resolve, reject) => {
                HTTP.getSingleArtifact(fileId)
                    .then((r) => r.data.results)
                    .catch((error) => {
                        errorHandler({ dispatch, reject }, error, 'artifact detail');
                    })
                    .then((artifact) => {
                        if (artifact && artifact.length) {
                            resolve(artifact[0]);
                        } else {
                            let error = {
                                stack: `results.length === 0 for ${fileId}`,
                                message: 'Error loading detail',
                            };
                            errorHandler({ dispatch, reject }, error, 'artifact detail');
                        }
                    });
            });
        },
    },
};
