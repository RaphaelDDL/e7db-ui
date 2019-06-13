// import Vue from 'vue';

// https://github.com/nuxt-community/analytics-module/issues/8#issuecomment-423095503
export const mountedPageView = {
    mounted() {
        this.$ga.page({
            page: this.$router.currentRoute.path,
            title: this.$metaInfo ? this.$metaInfo.title : document.title,
            location: window.location.href,
        });
    },
};
