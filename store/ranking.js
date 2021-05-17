import { errorHandler, calculateHeroUsage } from "~/util/Utils";

export const state = () => ({ rankingList: [], heroUsage: [] });

export const getters = {
    list: (state) => state.rankingList,
    heroUsage: (state) => state.heroUsage,
};

export const mutations = {
    SET_RANKING(state, rankings) {
        state.rankingList = rankings;
        state.heroUsage = calculateHeroUsage(rankings);
    },
};

export const actions = {
    getList({ dispatch, commit }) {
        return new Promise((resolve, reject) => {
            const listGetter = this.getters["ranking/list"];
            if (listGetter?.length && this.getters?.locale === this.$i18n.locale) {
                resolve(listGetter);
                return;
            }
            this.$axios
                .get("ranking", { headers: { "x-e7db-lang": this.$i18n.locale }, params: { lang: this.$i18n.locale } })
                .then((r) => {
                    commit("SET_I18N", this.$i18n.locale, { root: true });
                    return r?.data?.results;
                })
                .catch((error) => {
                    errorHandler({ dispatch, reject }, error, "ranking list");
                })
                .then((rankings = []) => {
                    commit("SET_RANKING", rankings?.length ? rankings : []);
                    resolve(rankings);
                });
        });
    },
};
