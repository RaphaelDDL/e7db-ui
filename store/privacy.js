import { errorHandler } from "~/util/Utils";

export const state = () => ({ policy: "", tos: "" });

export const getters = {
    policy: (state) => state.policy,
    tos: (state) => state.tos,
};

export const mutations = {
    SET_POLICY(state, policy) {
        state.policy = policy;
    },
    SET_TOS(state, tos) {
        state.tos = tos;
    },
};

export const actions = {
    getPolicy({ dispatch, commit }) {
        return new Promise((resolve, reject) => {
            const policy = this.getters["privacy/policy"];
            if (policy) {
                resolve(policy);
                return;
            }
            this.$axios({
                method: "get",
                url: "privacy-policy/83074028/only-legal",
                baseURL: "https://www.iubenda.com/api/",
            })
                .then((r, b, c) => {
                    return r?.data?.content;
                })
                .catch((error) => {
                    errorHandler({ dispatch, reject }, error, "policy");
                })
                .then((policy) => {
                    if (policy) {
                        commit("SET_POLICY", policy);
                        resolve(policy);
                    } else {
                        const error = {
                            stack: `policy empty`,
                            message: "Error loading policy",
                        };
                        errorHandler({ dispatch, reject }, error, "get policy");
                    }
                });
        });
    },
    getTos({ dispatch, commit }) {
        return new Promise((resolve, reject) => {
            const tos = this.getters["privacy/tos"];
            if (tos) {
                resolve(tos);
                return;
            }

            this.$axios({
                url: "terms-and-conditions/83074028",
                baseURL: "https://www.iubenda.com/api/",
            })
                .then((r) => {
                    return r.content;
                })
                .catch((error) => {
                    errorHandler({ dispatch, reject }, error, "tos");
                })
                .then((tos) => {
                    if (tos) {
                        commit("SET_TOS", tos);
                        resolve(tos);
                    } else {
                        const error = {
                            stack: `tos empty`,
                            message: "Error loading tos",
                        };
                        errorHandler({ dispatch, reject }, error, "get tos");
                    }
                });
        });
    },
};
