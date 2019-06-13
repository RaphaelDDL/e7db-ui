import { errorHandler } from "~/util/Utils";

export const state = () => ({ hero: [], artifact: [] });

export const getters = {
    all: state => state,
    latestHeroes: state => state.hero,
    latestArtifacts: state => state.artifact,
};

export const mutations = {
    SET_LATEST(state, latest) {
        state.hero = latest.hero;
        state.artifact = latest.artifact;
    },
};

export const actions = {
    getList({ dispatch, commit }) {
        return new Promise((resolve, reject) => {
            const listGetter = this.getters["latest/all"];
            if (listGetter && listGetter.length) {
                resolve(listGetter);
                return;
            }
            this.$axios
                .get("latest")
                .then(r => r.data.results)
                .catch(error => {
                    errorHandler({ dispatch, reject }, error, "latest list");
                })
                .then(latest => {
                    if (latest && latest.length) {
                        commit("SET_LATEST", latest[0]);
                        resolve(latest);
                    } else {
                        const error = {
                            stack: `results.length === 0 for latest list`,
                            message: "Error loading list",
                        };
                        errorHandler({ dispatch, reject }, error, "latest list");
                    }
                });
        });
    },
};
