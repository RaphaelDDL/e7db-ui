<template>
    <nav class="top-nav-bar">
        <!-- <div class="container"> -->
        <a @click="goBack" class="nav-back">Back</a>

        <router-link class="nav-logo" to="/" @click.native="trackNavInteractions">
            <img :src="`${assetsUrl}/website/E7_logo_vector_gradient.svg`" alt="EpicSevenDB.com" />
            <span class="sr-only">home e7 logo</span>
        </router-link>

        <SectionLinks v-on:nav-click="trackNavInteractions" isMobileNav="false" />

        <ul :class="{ active: menuIsActive }" class="nav-links nav-touch" @click.native="trackNavInteractions">
            <li>
                <a @click="toggleMobileNav" aria-expanded="false" href="#">
                    <span class="sr-only">mobile menu</span>
                </a>
            </li>
        </ul>
        <div class="nav-touch-links">
            <SectionLinks isMobileNav="true" v-on:nav-click="trackNavInteractions" />
        </div>
        <!-- </div> -->
    </nav>
</template>

<script>
import SectionLinks from '@/js/layout/SectionLinks.vue';
import { gaEvent } from '@/js/util/Analytics';

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
        trackNavInteractions(mouseEvent) {
            const linkName = mouseEvent.currentTarget
                ? (mouseEvent.currentTarget.innerText + '').trim().toLowerCase()
                : '';
            gaEvent({
                eventCategory: 'nav',
                eventAction: 'click',
                eventLabel: linkName,
                // eventValue: 123
            });
        },
        goBack(e) {
            e.preventDefault();
            this.trackNavInteractions(e);
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
