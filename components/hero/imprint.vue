<template>
    <section class="section-container">
        <div class="section-box">
            <h1>{{ $t("heroes.imprint") }}</h1>
            <hr />
            <div class="hero-stats columns">
                <div v-if="self_devotion.grades" class="column is-full">
                    <h4>{{ $t("heroes.imprintSelf") }}</h4>
                    <ul class="imprint-list">
                        <template v-for="(gradeLevel, gradeLevelIndex) in grades">
                            <li
                                v-if="self_devotion.grades[gradeLevel]"
                                :key="`selfdev${gradeLevel + gradeLevelIndex}`"
                                class="columns is-mobile"
                            >
                                <div
                                    :class="`memory-imprint-rank-${String(gradeLevel).toLowerCase()}`"
                                    class="column is-half hero-stats-type strong"
                                >
                                    <span class="sr-only">{{ String(gradeLevel).toLowerCase() }}</span>
                                </div>
                                <div
                                    class="column is-half hero-stats-value"
                                    :class="heroStatsClass(self_devotion.type)"
                                >
                                    <strong>{{
                                        $t(`heroes.attributes.${heroStatsKey(self_devotion.type, true)}`)
                                    }}</strong>
                                    <span>&nbsp;+{{ self_devotion.grades[gradeLevel] | toPercent }}</span>
                                </div>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
            <div class="hero-stats columns">
                <div class="column is-half hero-stats-container-base">
                    <h4>{{ $t("heroes.imprintPosition") }}</h4>
                    <div class="memory-imprint-formation">
                        <template v-if="devotion.slots">
                            <div
                                v-for="(positionActive, formationPosition) in formation"
                                :key="formationPosition"
                                :class="positionActive.t"
                                class="memory-imprint-formation-icon-container"
                            >
                                <div
                                    :class="{ disabled: !devotion.slots[positionActive.n] }"
                                    class="imprint-formation-icon"
                                ></div>
                            </div>
                        </template>
                        <template v-else>{{ $t("heroes.noImprint") }}</template>
                    </div>
                </div>
                <div v-if="devotion.grades" class="column is-half hero-stats-container-50">
                    <h4>{{ $t("heroes.imprintBonus") }}</h4>
                    <ul class="imprint-list">
                        <template v-for="(gradeLevel, gradeLevelIndex) in grades">
                            <li
                                v-if="devotion.grades[gradeLevel]"
                                :key="`dev${gradeLevel + gradeLevelIndex}`"
                                class="columns is-mobile"
                            >
                                <div
                                    :class="`memory-imprint-rank-${String(gradeLevel).toLowerCase()}`"
                                    class="column is-half hero-stats-type strong"
                                >
                                    <span class="sr-only">{{ String(gradeLevel).toLowerCase() }}</span>
                                </div>
                                <div class="column is-half hero-stats-value" :class="heroStatsClass(devotion.type)">
                                    <strong>{{ $t(`heroes.attributes.${heroStatsKey(devotion.type, true)}`) }}</strong>
                                    <span>&nbsp;+{{ devotion.grades[gradeLevel] | toPercent }}</span>
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
import { heroStatsClass, statusKeyToIconKey, heroStatsKey } from "~/util/Utils";

export default {
    inject: ["assetsUrl"],
    props: {
        devotion: {
            type: Object,
            default: () => {},
        },
        self_devotion: {
            type: Object,
            default: () => [],
        },
    },
    data() {
        return {
            grades: ["D", "C", "B", "A", "S", "SS", "SSS"],
            formation: [
                { n: 1, t: "east" },
                { n: 2, t: "south" },
                { n: 3, t: "north" },
                { n: 4, t: "west" },
            ],
        };
    },
    methods: {
        heroStatsClass,
        statusKeyToIconKey,
        heroStatsKey,
    },
};
</script>
