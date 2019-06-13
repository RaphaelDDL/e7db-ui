function errorHandler() {}

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
            this.$axios
                .get("artifact")
                .then(r => r.data.results)
                .catch(error => {
                    errorHandler({ dispatch, reject }, error, "artifact list");
                })
                .then(artifacts => {
                    if (artifacts && artifacts.length) {
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
    getSingle({ dispatch }, { fileId }) {
        return new Promise((resolve, reject) => {
            this.$axios
                .get(`artifact/${fileId}`)
                .then(r => r.data.results)
                .catch(error => {
                    errorHandler({ dispatch, reject }, error, "artifact detail");
                })
                .then(artifact => {
                    if (artifact && artifact.length) {
                        resolve(artifact[0]);
                    } else {
                        const error = {
                            stack: `results.length === 0 for ${fileId}`,
                            message: "Error loading detail",
                        };
                        errorHandler({ dispatch, reject }, error, "artifact detail");
                    }
                });
        });
    },
};
