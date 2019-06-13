import Vue from "vue";
import VueAnalytics from "vue-analytics";
import { analyticsId } from "~/util/Constants";

Vue.use(VueAnalytics, {
    id: analyticsId,
    autoTracking: false,
});
