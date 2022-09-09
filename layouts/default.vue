<template>
    <div id="app" class="content">
        <NavBar />
        <div class="container main-container">
            <div class="column is-12">
                <section class="globalError section-box">
                    <div class="header">
                        <h4>&#9733; EpicSevenDB {{ $t("important") }} &#9733;</h4>
                        <div class="errorMessage white">
                            <p>
                                E7DB hasn't been updated since June 2021 due to impossibility to datamine directly from
                                game data.
                                <a
                                    class="skillEnhanceFontColor"
                                    href="https://twitter.com/GachaCenter/status/1418291607074480130"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >See explanation on our Twitter</a
                                >.
                            </p>
                            <hr />
                            We are
                            <h2 style="display: inline">LOOKING FOR DATAMINERS</h2>
                            to help us (E7 and other gacha games) to release
                            <a class="skillEnhanceFontColor" href="https://gacha.center/" target="_blank"
                                >https://gacha.center</a
                            >. <br />
                            If you are a dataminer, please contact RaphaelDDL#5150 on Discord or @GachaCenter in Twitter
                            :-)
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
