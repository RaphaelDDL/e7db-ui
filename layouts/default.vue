<template>
    <div id="app" class="content">
        <NavBar />
        <div class="container main-container">
            <div class="column is-12">
                <section class="globalError section-box">
                    <div class="header">
                        <h4>&#9733; EpicSevenDB {{ $t("important") }} &#9733;</h4>
                        <div class="errorMessage white">
                            <p>Dear Heirs,</p>
                            <p>
                                As we've
                                <a
                                    class="skillEnhanceFontColor"
                                    href="https://twitter.com/EpicSevenDB/status/1418291607074480130"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >shared on our Twitter (link to thread)</a
                                >
                                in July, the game security was changed, therefore it must be bypassed yet again in order
                                to get latest data for you. Since we made the choice of making our data source being
                                mined data (E7DB API v2, as v1 was manual entry), there's nothing much to be done at the
                                moment.
                            </p>
                            <p>
                                There are some ways of acquiring data but they don't allow to easily extract all data
                                and all languages to feed the API properly, so it would be troublesome and incomplete.
                            </p>
                            <p>
                                We apologize for the inconvenience, but until we find a viable solution, the website
                                will not be updated.
                            </p>
                            <p>
                                In the meantime, we are working on both making a new layout and DBs for other games.
                                E7DB will also move to the new layout.
                            </p>
                            <p>
                                It'll be hosted on
                                <a class="skillEnhanceFontColor" href="https://gacha.center/" target="_blank"
                                    >https://gacha.center</a
                                >
                                (work in progress).
                            </p>
                            <p>
                                <small>Best Regards,<br />RaphaelDDL<br />E7DB Dev / Gacha.Center Dev</small>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <!-- <div v-show="globalError && globalError.stack && globalError.message" class="columns">
                <div class="column is-12">
                    <GlobalError :global-error="globalError" />
                </div>
            </div> -->
            <!-- <div v-if="$i18n.locale !== 'en'" class="columns">
                <div class="column is-12">
                    <section class="globalWarning section-box">
                        <div class="header">
                            <div class="warningMessage">
                                <p>
                                    <em>{{ $t("translationWIP") }}</em>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div> -->
            <nuxt :key="$route.fullPath" />
        </div>
        <div class="app-version">{{ $t("home.version") }} {{ version }}</div>
        <LanguageSelector />

        <HorizontalAd />
    </div>
</template>

<script>
import ChartJsPluginDataLabels from "chartjs-plugin-datalabels";
import NavBar from "~/components/layout/NavBar.vue";
import LanguageSelector from "~/components/layout/LanguageSelector.vue";
// import GlobalError from "~/components/general/GlobalError.vue";
import HorizontalAd from "~/components/ads/horizontal.vue";

export default {
    name: "EpicSevenDBCom",
    components: { NavBar, /* GlobalError, */ LanguageSelector, HorizontalAd },
    provide() {
        return {
            assetsUrl: this.$store.getters.assetsUrl,
        };
    },
    computed: {
        version() {
            return this.$store.getters.version;
        },
        globalError() {
            return this.$store.getters.globalError;
        },
    },
    mounted() {
        window?.Chart?.plugins?.unregister(ChartJsPluginDataLabels);
    },
};
</script>
