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
                                {{ $t(`classes.${role}`) }}
                            </div>
                        </li>
                    </ul>
                    <hr />
                    <div class="columns is-full is-mobile">
                        <div class="column is-one-third is-text-left">
                            <button @click="currLevel = 1">
                                <!-- <img :src="`${this.assetsUrl}/level/hero_lv.png`" alt=""> -->
                                <img :src="`${this.assetsUrl}/level/hero_lv_1.png`" alt="" />
                            </button>
                        </div>
                        <div class="column is-one-third is-text-center">
                            <button @click="currLevel = 15">
                                <!-- <img :src="`${this.assetsUrl}/level/hero_lv.png`" alt=""> -->
                                <img :src="`${this.assetsUrl}/level/hero_lv_1.png`" alt="" />
                                <img :src="`${this.assetsUrl}/level/hero_lv_5.png`" alt="" />
                            </button>
                        </div>
                        <div class="column is-one-third is-text-right">
                            <button @click="currLevel = 30">
                                <!-- <img :src="`${this.assetsUrl}/level/hero_lv.png`" alt=""> -->
                                <img :src="`${this.assetsUrl}/level/hero_lv_max.png`" alt="" />
                            </button>
                        </div>
                    </div>
                    <div class="columns is-full is-mobile">
                        <div class="column  is-text-left">
                            <button @click="currLevel > 1 ? currLevel-- : false">
                                <img :src="`${this.assetsUrl}/level/hero_lv_bar.png`" alt="" />
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
                                <img :src="`${this.assetsUrl}/level/hero_lv_p.png`" alt="" />
                            </button>
                        </div>
                    </div>
                    Level {{ currLevel }} {{ $t("artifacts.stats") }}:
                    <br />
                    <span :class="heroStatsClass('atk')"></span>
                    {{ $t("heroes.attributes.atk") }}
                    {{ statusByLevel.attack }}
                    |
                    <span :class="heroStatsClass('hp')"></span>

                    {{ $t("heroes.attributes.hp") }}
                    {{ statusByLevel.health }}
                    <hr />
                    Level {{ enhancementLevel }} {{ $t("artifacts.skill") }}:
                    <br />
                    <p style="white-space: pre-wrap;">{{ skillDescriptionModel }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { toPercent } from "~/util/Utils";

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
            currLevel: 1,
        };
    },
    computed: {
        starRating() {
            return `star-rating-${this.rarity}`;
        },
        heroRole() {
            const { role } = this;

            if (!role) {
                return "";
            }
            return `${role} hero-class-${role}`;
        },
        statusByLevel() {
            const { attack, health } = this.stats;
            if (this.currLevel === 1) {
                return {
                    attack,
                    health,
                };
            }
            return {
                attack: Math.round(attack + attack * 0.4 * this.currLevel),
                health: Math.round(health + health * 0.4 * this.currLevel),
            };
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
            return Math.round(this.currLevel / 3) + 1;
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
                        acc.push(toPercent(enhancementLevel[i]));
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
