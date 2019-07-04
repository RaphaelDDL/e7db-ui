<template>
    <section class="section-container">
        <div class="section-box">
            <h1>{{ $t("heroes.imprint") }}</h1>
            <hr />
            <div class="hero-stats columns">
                <div class="column is-half hero-stats-container-base">
                    <h4>{{ $t("heroes.imprintPosition") }}</h4>
                    <div class="memory-imprint-formation">
                        <template v-if="memoryImprintFormation">
                            <div
                                v-for="(positionActive, formationPosition) in memoryImprintFormation"
                                :key="formationPosition"
                                :class="formationPosition"
                                class="memory-imprint-formation-icon-container"
                            >
                                <div :class="{ disabled: !positionActive }" class="imprint-formation-icon"></div>
                            </div>
                        </template>
                        <template v-else>{{ $t("heroes.noImprint") }}</template>
                    </div>
                </div>
                <div v-if="memoryImprint && memoryImprint.length" class="column is-half hero-stats-container-50">
                    <h4>{{ $t("heroes.imprintBonus") }}</h4>
                    <ul class="imprint-list">
                        <template v-for="(mImprint, memoryImprintIndex) in memoryImprint">
                            <li
                                v-if="mImprint.status.increase"
                                :key="`${mImprint.rank + memoryImprintIndex}`"
                                class="columns is-mobile"
                            >
                                <div
                                    :class="`memory-imprint-rank-${mImprint.rank}`"
                                    class="column is-half hero-stats-type strong"
                                >
                                    <span class="sr-only">{{ mImprint.rank }}</span>
                                </div>
                                <div
                                    class="column is-half hero-stats-value"
                                    :class="heroStatsClass(mImprint.status.type)"
                                >
                                    <strong>{{ mImprint.status.type | statusName }}</strong>
                                    <span>&nbsp;+{{ mImprint.status.increase | toPercent }}</span>
                                </div>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    inject: ["assetsUrl"],
    props: {
        memoryImprintFormation: {
            type: Object,
            default: () => {},
        },
        memoryImprint: {
            type: Array,
            default: () => [],
        },
        heroStatsClass: {
            type: Function,
        },
    },
};
</script>
