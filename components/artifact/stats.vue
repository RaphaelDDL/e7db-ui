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
                        <li v-if="exclusive.length" class="columns is-mobile">
                            <div class="column is-half hero-stats-type">
                                {{ $t("artifacts.classExclusive") }}
                            </div>
                            <div :class="heroExclusive" class="column is-half hero-stats-value"></div>
                        </li>
                    </ul>
                    <hr />
                    <div class="hero-stats columns">
                        <div class="column is-half hero-stats-base">
                            <h4>{{ $t("artifacts.baseLevelStats") }} (+0)</h4>
                            <ul v-if="stats.base">
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">
                                        <span :class="heroStatsClass('atk')"></span>
                                        {{ $t("heroes.attributes.atk") }}
                                    </div>
                                    <div class="column is-half hero-stats-value">
                                        {{ stats.base.atk }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">
                                        <span :class="heroStatsClass('hp')"></span>
                                        {{ $t("heroes.attributes.hp") }}
                                    </div>
                                    <div class="column is-half hero-stats-value">
                                        {{ stats.base.hp }}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="column is-half hero-stats-max">
                            <h4>{{ $t("artifacts.maxLevelStats") }} (+30)</h4>
                            <ul v-if="stats.max">
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">
                                        <span :class="heroStatsClass('atk')"></span>
                                        {{ $t("heroes.attributes.atk") }}
                                    </div>
                                    <div class="column is-half hero-stats-value">
                                        {{ stats.max.atk }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">
                                        <span :class="heroStatsClass('hp')"></span>
                                        {{ $t("heroes.attributes.hp") }}
                                    </div>
                                    <div class="column is-half hero-stats-value">
                                        {{ stats.max.hp }}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    inject: ["assetsUrl"],
    props: {
        rarity: {
            type: Number,
            default: 1,
        },
        exclusive: {
            type: Array,
            default: () => [],
        },
        stats: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        starRating() {
            return `star-rating-${this.rarity}`;
        },
        heroExclusive() {
            let heroExclusive = "";
            const { exclusive } = this;

            if (!exclusive || !exclusive.length) {
                return heroExclusive;
            }

            exclusive.forEach(heroClass => {
                heroExclusive = `${heroExclusive} hero-class-${heroClass}`;
            });
            return heroExclusive;
        },
    },
    methods: {
        heroStatsClass(type = "") {
            return type ? `stat-icon-${type}` : "";
        },
    },
};
</script>
