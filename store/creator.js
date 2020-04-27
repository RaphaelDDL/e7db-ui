import { errorHandler } from "~/util/Utils";

export const state = () => ({ creators: [] });

export const getters = {
    list: state => state.creators,
};

export const mutations = {
    SET_CREATORS(state, creators) {
        state.creators = creators;
    },
};

export const actions = {
    getList({ dispatch, commit }) {
        return new Promise((resolve, reject) => {
            const listGetter = this.getters["creators/list"];
            if (listGetter && listGetter.length) {
                resolve(listGetter);
                return;
            }
            this.$axios
                .get("api/creator", {
                    headers: { "x-e7db-lang": this.$i18n.locale },
                    params: { lang: this.$i18n.locale },
                })
                .then(r => r.data.results)
                .catch(error => {
                    errorHandler({ dispatch, reject }, error, "creators list");
                })
                .then(creators => {
                    if (creators && creators.length) {
                        commit("SET_CREATORS", creators);
                        resolve(creators);
                    } else {
                        const error = {
                            stack: `results.length === 0 for creators list`,
                            message: "Error loading list",
                        };
                        errorHandler({ dispatch, reject }, error, "creators list");
                    }
                });
        });
    },
};
