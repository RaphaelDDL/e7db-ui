<template>
    <nav class="top-nav-bar">
        <a @click="goBack" class="nav-back">Back</a>

        <router-link class="nav-logo" to="/">
            <img :src="`${assetsUrl}/website/E7_logo_vector_gradient.svg`" alt="EpicSevenDB.com" />
        </router-link>

        <SectionLinks isMobileNav="false" />

        <ul :class="{ active: menuIsActive }" class="nav-links nav-touch">
            <li>
                <a @click="toggleMobileNav" aria-expanded="false" href="#">&nbsp;</a>
            </li>
        </ul>
        <div class="nav-touch-links">
            <SectionLinks isMobileNav="true" />
        </div>
    </nav>
</template>

<script>
import SectionLinks from '@/js/layout/SectionLinks.vue';

export default {
    name: 'NavBar',
    inject: ['assetsUrl'],
    props: {
        errorTitle: Boolean,
    },
    data() {
        return {
            windowHistory: false,
            menuIsActive: false,
        };
    },
    components: {
        SectionLinks,
    },
    mounted() {
        this.$router.afterEach((/* to, from */) => {
            this.menuIsActive = false;
        });
    },
    methods: {
        goBack(e) {
            e.preventDefault();
            return window.history && window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        },
        toggleMobileNav: function(ev = {}) {
            if ('preventDefault' in ev) {
                ev.preventDefault();
            }
            if (ev.target && ev.target.nodeName.toLowerCase() !== 'a') {
                return;
            }
            this.menuIsActive = !this.menuIsActive;
        },
    },
    // watch: {
    // $route: function() {
    //     this.toggleMobileNav();
    // },
    // },
};
</script>
