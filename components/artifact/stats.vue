<template>
    <section class="section-container">
        <div class="section-box hero-basics">
            <div class="hero-stats columns">
                <div class="column is-full hero-stats-base">
                    <h1>{{ $t("artifacts.stats") }}</h1>
                    <hr />
                    <ul>
                        <li class="columns is-mobile">
                            <div class="column is-half hero-stats-type">{{ $t("artifacts.grade") }}</div>
                            <div :class="starRating" class="column is-half hero-stats-value"></div>
                        </li>
                        <li v-if="role" class="columns is-mobile">
                            <div class="column is-half hero-stats-type">{{ $t("artifacts.classExclusive") }}</div>
                            <div :class="heroRole" class="column is-half hero-stats-value no-text">
                                {{ $t(`classes.${trueRole}`) }}
                            </div>
                        </li>
                    </ul>
                    <hr />
                    <h3 class="skillEnhanceFontColor">
                        {{ $t("artifacts.level") }} {{ currLevel }} {{ $t("artifacts.stats") }}:
                    </h3>

                    <div class="artifact-slider has-margin-bottom">
                        <div class="columns is-full is-mobile">
                            <div class="column is-one-third is-text-left">
                                <button @click="currLevel = 1">
                                    Lv. 1
                                </button>
                            </div>
                            <div class="column is-one-third is-text-center">
                                <button @click="currLevel = 15">
                                    Lv. 15
                                </button>
                            </div>
                            <div class="column is-one-third is-text-right">
                                <button @click="currLevel = 30">
                                    Lv. Max
                                </button>
                            </div>
                        </div>
                        <div class="columns is-full is-mobile">
                            <div class="column  is-text-left">
                                <button @click="currLevel > 1 ? currLevel-- : false">
                                    -1
                                </button>
                            </div>
                            <div class="column is-three-quarters is-text-center">
                                <input
                                    id="skillrange"
                                    v-model.number="currLevel"
                                    max="30"
                                    min="1"
                                    name="skill"
                                    step="1"
                                    type="range"
                                    class="slider is-fullwidth is-large"
                                />
                            </div>
                            <div class="column  is-text-right">
                                <button @click="currLevel < 30 ? currLevel++ : false">
                                    +1
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="columns is-full is-mobile artifact-status">
                        <div class="column is-text-center">
                            <span :class="heroStatsClass('atk')" class="big" :title="$t('heroes.attributes.atk')"></span
                            ><span class="sr-only">{{ $t("heroes.attributes.atk") }}</span>
                            <span class="white bold">{{ statusByLevel.attack }}</span>
                        </div>
                        <div class="column is-text-center">
                            <span :class="heroStatsClass('hp')" class="big" :title="$t('heroes.attributes.hp')"></span
                            ><span class="sr-only">{{ $t("heroes.attributes.hp") }}</span>
                            <span class="white bold">{{ statusByLevel.health }}</span>
                        </div>
                    </div>
                    <hr />
                    <h3 class="skillEnhanceFontColor">
                        {{ $t("artifacts.level") }} {{ enhancementLevel }} {{ $t("artifacts.skill") }}:
                    </h3>
                    <p v-if="skillDescriptionModel" class="artifact-skill-desc" v-html="skillDescriptionModel"></p>
                    <p v-else class="artifact-skill-desc">{{ $t("artifacts.noDescription") }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { toPercent, trueRole } from "~/util/Utils";

export default {
    inject: ["assetsUrl"],
    props: {
        rarity: {
            type: Number,
            default: 1,
        },
        role: {
            type: String,
            default: "",
        },
        stats: {
            type: Object,
            default: () => ({ attack: 0, health: 0 }),
        },
        skill: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            currLevel: 30,
        };
    },
    computed: {
        starRating() {
            return `star-rating-${this.rarity}`;
        },
        trueRole() {
            const { role } = this;
            return trueRole(role);
        },
        heroRole() {
            return `${this.trueRole} hero-class-${this.trueRole}`;
        },
        statusByLevel() {
            const { attack, health } = this.stats;
            // math.floor(math.floor((base_stat * (0.75 + (0.05 * grade)))) * (1 + 0.40 * level))
            const calcStats = attribute => {
                return Math.floor(Math.floor(attribute * (0.75 + 0.05 * this.rarity)) * (1 + 0.4 * this.currLevel));
            };
            return {
                attack: calcStats(attack),
                health: calcStats(health),
            };

            // return {
            //     attack: Math.round(attack + attack * 0.4 * this.currLevel),
            //     health: Math.round(health + health * 0.4 * this.currLevel),
            // };
        },
        skillDescription() {
            let { description } = this.skill;

            if (!description) {
                return "";
            }
            description = description.replace("\\n", "\n");

            const descArray = description.split("{{variable}}");
            if (descArray.length < 2) {
                return description;
            }
            return descArray;
        },
        enhancementLevel() {
            return Math.floor(this.currLevel / 3) + 1;
        },
        skillDescriptionModel() {
            const { enhancements } = this.skill;
            const skDesc = this.skillDescription;

            // does not contain variables, so it's static
            if (!Array.isArray(skDesc)) {
                return skDesc;
            }

            if (enhancements && enhancements.length) {
                const currentLevel = this.enhancementLevel;
                const prepareString = skDesc.reduce((acc, curr, i) => {
                    acc.push(curr);
                    const enhancementLevel = enhancements[currentLevel - 1];
                    if (enhancementLevel && enhancementLevel.length && enhancementLevel[i]) {
                        acc.push("<span>" + toPercent(enhancementLevel[i]) + "</span>");
                    }
                    return acc;
                }, []);

                return prepareString.join("");
            }

            return skDesc;
        },
    },
    methods: {
        heroStatsClass(type = "") {
            return type ? `stat-icon-${type}` : "";
        },
    },
};
</script>
<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "bulma-slider";
$slider-track-background: $skillEnhanceFontColor;
input[type="range"].slider {
    &::-webkit-slider-runnable-track {
        background: $slider-track-background;
    }
    &::-moz-range-track {
        background: $slider-track-background;
    }
    &::-ms-track {
        background: $slider-track-background;
    }
}
</style>
