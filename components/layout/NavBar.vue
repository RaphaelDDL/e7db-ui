<template>
    <nav class="top-nav-bar">
        <!-- <div class="container"> -->
        <a class="nav-back" @click="goBack">{{ $t("links.back") }}</a>

        <nuxt-link class="nav-logo" :to="localePath('index')" @click.native="trackNavInteractions">
            <img :src="`${assetsUrl}/website/E7_logo_vector_gradient.svg`" alt="EpicSevenDB.com" />
            <span class="sr-only">home e7 logo</span>
        </nuxt-link>

        <SectionLinks :key="$i18n.locale" is-mobile-nav="false" @nav-click="trackNavInteractions" />

        <ul :class="{ active: menuIsActive }" class="nav-links nav-touch" @click="trackNavInteractions">
            <li>
                <a aria-expanded="false" href="#" @click="toggleMobileNav">
                    <span class="sr-only">mobile menu</span>
                </a>
            </li>
        </ul>
        <div class="nav-touch-links">
            <SectionLinks :key="$i18n.locale" is-mobile-nav="true" @nav-click="trackNavInteractions" />
        </div>
        <!-- </div> -->
    </nav>
</template>

<script>
import SectionLinks from "~/components/layout/SectionLinks.vue";

export default {
    name: "NavBar",
    components: {
        SectionLinks,
    },
    inject: ["assetsUrl"],
    props: {
        errorTitle: Boolean,
    },
    data() {
        return {
            windowHistory: false,
            menuIsActive: false,
        };
    },
    watch: {
        $route() {
            this.toggleMobileNav({}, false);
        },
    },
    mounted() {
        this.$router.afterEach((/* to, from */) => {
            this.menuIsActive = false;
        });
    },
    methods: {
        trackNavInteractions(mouseEvent) {
            const linkName = mouseEvent.currentTarget
                ? (mouseEvent.currentTarget.textContent + "").trim().toLowerCase()
                : "";
            this.$ga.event({
                eventCategory: "nav",
                eventAction: "click",
                eventLabel: linkName,
                // eventValue: 123
            });
        },
        goBack(e) {
            e.preventDefault();
            this.trackNavInteractions(e);
            return window.history && window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
        },
        toggleMobileNav(ev = {}, forcedState = null) {
            if ("preventDefault" in ev) {
                ev.preventDefault();
            }
            if (ev.target && ev.target.nodeName.toLowerCase() !== "a") {
                return;
            }
            this.menuIsActive = forcedState !== null ? forcedState : !this.menuIsActive;
        },
    },
};
</script>
