<template>
    <div id="app" class="content">
        <NavBar />
        <div class="container main-container">
            <div class="columns">
                <div class="column is-12">
                    <GlobalError />
                </div>
            </div>
            <nuxt :key="$route.fullPath" />
        </div>
        <div class="app-version">{{ $t("home.version") }} {{ version }}</div>

        <LanguageSelector />
    </div>
</template>

<script>
import NavBar from "~/components/layout/NavBar.vue";
import LanguageSelector from "~/components/layout/LanguageSelector.vue";
import GlobalError from "~/components/general/GlobalError.vue";

export default {
    name: "EpicSevenDBCom",
    components: { NavBar, GlobalError, LanguageSelector },
    provide() {
        return {
            assetsUrl: this.$store.getters.assetsUrl,
        };
    },
    computed: {
        version() {
            return this.$store.getters.version;
        },
    },
};
</script>
