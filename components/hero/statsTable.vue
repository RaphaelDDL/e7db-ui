<template>
    <ul>
        <li class="columns is-mobile">
            <div class="column is-half hero-stats-type">
                <span :class="heroStatsClass('cp')"></span>
                {{ $t("heroes.attributes.cp") }}
            </div>
            <div class="column is-half hero-stats-value">
                {{ statsTable.cp }}
            </div>
        </li>
        <li class="columns is-mobile">
            <div class="column is-half hero-stats-type">
                <span :class="heroStatsClass('atk')"></span>
                {{ $t("heroes.attributes.atk") }}
            </div>
            <div class="column is-half hero-stats-value">
                {{ statsTable.atk }}
            </div>
        </li>
        <li class="columns is-mobile">
            <div class="column is-half hero-stats-type">
                <span :class="heroStatsClass('def')"></span>
                {{ $t("heroes.attributes.def") }}
            </div>
            <div class="column is-half hero-stats-value">
                {{ statsTable.def }}
            </div>
        </li>
        <li class="columns is-mobile">
            <div class="column is-half hero-stats-type">
                <span :class="heroStatsClass('hp')"></span>
                {{ $t("heroes.attributes.hp") }}
            </div>
            <div class="column is-half hero-stats-value">
                {{ statsTable.hp }}
            </div>
        </li>
        <li class="columns is-mobile">
            <div class="column is-half hero-stats-type">
                <span :class="heroStatsClass('spd')"></span>
                {{ $t("heroes.attributes.spd") }}
            </div>
            <div class="column is-half hero-stats-value">
                {{ statsTable.spd }}
            </div>
        </li>
        <li class="columns is-mobile">
            <div class="column is-half hero-stats-type">
                <span :class="heroStatsClass('chc')"></span>
                {{ $t("heroes.attributes.chc") }}
            </div>
            <div class="column is-half hero-stats-value">
                {{ statsTable.chc | toPercent }}
            </div>
        </li>
        <li class="columns is-mobile">
            <div class="column is-half hero-stats-type">
                <span :class="heroStatsClass('chd')"></span>
                {{ $t("heroes.attributes.chd") }}
            </div>
            <div class="column is-half hero-stats-value">
                {{ statsTable.chd | toPercent }}
            </div>
        </li>
        <li class="columns is-mobile">
            <div class="column is-half hero-stats-type">
                <span :class="heroStatsClass('eff')"></span>
                {{ $t("heroes.attributes.eff") }}
            </div>
            <div class="column is-half hero-stats-value">
                {{ statsTable.eff | toPercent }}
            </div>
        </li>
        <li class="columns is-mobile">
            <div class="column is-half hero-stats-type">
                <span :class="heroStatsClass('efr')"></span>
                {{ $t("heroes.attributes.efr") }}
            </div>
            <div class="column is-half hero-stats-value">
                {{ statsTable.efr | toPercent }}
            </div>
        </li>
        <li class="columns is-mobile">
            <div class="column is-half hero-stats-type">
                <span :class="heroStatsClass('dac')"></span>
                {{ $t("heroes.attributes.dac") }}
            </div>
            <div class="column is-half hero-stats-value">
                {{ statsTable.dac | toPercent }}
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        statsTable: {
            type: Object,
            default: () => {},
        },
        heroStatsClass: {
            type: Function,
        },
    },
};
</script>
