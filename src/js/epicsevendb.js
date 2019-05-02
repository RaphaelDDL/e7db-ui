import Vue from 'vue';
import router from '@/js/routers/VueRouter';
import store from '@/js/stores/VuexStore';
import Footer from '@/js/layout/Footer.vue';
import ApplicationBody from '@/js/layout/ApplicationBody.vue';
import VueLazyLoad from 'vue-lazyload';
import VueAnalytics from 'vue-analytics';
import VTooltip from 'v-tooltip';
import '@/js/util/vueFilters';
import { analyticsId } from '@/js/util/Constants';

Vue.config.productionTip = false;

Vue.use(VueLazyLoad, {
    attempt: 1,
});

Vue.use(VueAnalytics, {
    id: analyticsId,
    autoTracking: false,
});

Vue.use(VTooltip);

document.querySelector('html').classList.remove('no-js');

new Vue({
    render: (h) => h(Footer),
}).$mount('#footer');

new Vue({
    store,
    router,
    render: (h) => h(ApplicationBody),
}).$mount('#app');
