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
                    if (!policy) {
                        const error = {
                            stack: `policy empty`,
                            message: "Error loading policy",
                        };
                        errorHandler({ dispatch, reject }, error, "get policy");
                    }
                    const placeholder = policy ?? "Error fetching policy data";
                    commit("SET_POLICY", placeholder);
                    resolve(placeholder);
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
                .then((tos = "Error fetching ToS data") => {
                    commit("SET_TOS", tos);
                    if (!tos) {
                        const error = {
                            stack: `tos empty`,
                            message: "Error loading tos",
                        };
                        errorHandler({ dispatch, reject }, error, "get tos");
                    }
                    resolve(tos);
                });
        });
    },
};
