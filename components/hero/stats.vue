<template>
    <section class="section-container">
        <div class="section-box">
            <h1>{{ $t("heroes.stats") }}</h1>
            <hr />
            <div class="hero-stats columns">
                <div class="column is-half hero-stats-container-base">
                    <h4 v-html="$t('heroes.lv1BaseStarNoAwaken')"></h4>
                    <StatsTable
                        v-if="stats.lv1BaseStarNoAwaken"
                        :stats-table="stats.lv1BaseStarNoAwaken"
                        :hero-stats-class="heroStatsClass"
                    />
                </div>
                <div class="column is-half hero-stats-container-50">
                    <h4 v-html="$t('heroes.lv50FiveStarNoAwaken')"></h4>
                    <StatsTable
                        v-if="stats.lv50FiveStarNoAwaken"
                        :stats-table="stats.lv50FiveStarNoAwaken"
                        :hero-stats-class="heroStatsClass"
                    />
                </div>
            </div>
            <div class="hero-stats columns">
                <div class="column is-half hero-stats-container-60">
                    <h4 v-html="$t('heroes.lv60SixStarNoAwaken')"></h4>
                    <StatsTable
                        v-if="stats.lv60SixStarNoAwaken"
                        :stats-table="stats.lv60SixStarNoAwaken"
                        :hero-stats-class="heroStatsClass"
                    />
                </div>
                <div class="column is-half hero-stats-container-max">
                    <h4 v-html="$t('heroes.lv60SixStarFullyAwakened')"></h4>
                    <StatsTable
                        v-if="stats.lv60SixStarFullyAwakened"
                        :stats-table="stats.lv60SixStarFullyAwakened"
                        :hero-stats-class="heroStatsClass"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import StatsTable from "~/components/hero/statsTable";

export default {
    components: {
        StatsTable,
    },
    inject: ["assetsUrl"],
    props: {
        stats: {
            type: Object,
            default: () => {},
        },
        heroStatsClass: {
            type: Function,
        },
    },
};
</script>
