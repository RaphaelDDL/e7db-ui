import Vue from "vue";
import VueLazyLoad from "vue-lazyload";

Vue.use(VueLazyLoad, {
    attempt: 1,
    lazyComponent: false,

    observer: true,
    // optional
    observerOptions: {
        rootMargin: "0px",
        threshold: 0.1,
    },
});
