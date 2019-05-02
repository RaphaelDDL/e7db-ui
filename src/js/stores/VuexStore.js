import { assetsUrl, projectVersion } from '@/js/util/Constants';
import Vue from 'vue';
import Vuex from 'vuex';
import hero from '@/js/stores/modules/HeroesStore';
import artifact from '@/js/stores/modules/ArtifactsStore';
import item from '@/js/stores/modules/ItemsStore';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        globalError: {
            stack: '',
            message: '',
        },
        version: projectVersion,
        assetsUrl,
    },
    getters: {
        version: (state) => state.version,
        globalError: (state) => state.globalError,
        assetsUrl: (state) => state.assetsUrl,
    },
    modules: {
        hero,
        artifact,
        item,
    },
    mutations: {
        addGlobalError(state, { error = {}, when = 'action' }) {
            state.globalError = {
                stack: `${error.message}`,
                message: `API Error @ ${when}`,
            };
            return;
        },
        removeGlobalError(state) {
            state.globalError = {
                stack: '',
                message: '',
            };
            return;
        },
    },
    actions: {
        globalError({ commit }, errorObject) {
            return commit('addGlobalError', errorObject);
        },
        globalErrorClear({ commit }) {
            return commit('removeGlobalError');
        },
    },
});
