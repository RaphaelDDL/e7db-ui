<template>
    <section class="section-container">
        <Tabs :options="{ useUrlFragment: false }" class="section-tabs awakening-tabs">
            <Tab
                v-for="awakening in zodiac_tree"
                :id="awakening._id"
                :key="awakening._id"
                class="hero-awakening section-box"
                name=" "
            >
                <h1>{{ $t("heroes.awakening") }}</h1>
                <hr />
                <div class="hero-stats columns">
                    <div class="column is-full hero-stats-base">
                        <h3>{{ awakening.name }}</h3>
                        <p>{{ awakening.description }}</p>
                        <h4>{{ $t("heroes.statsIncrease") }}</h4>
                        <ul>
                            <li v-if="awakening.skill_enhanced">
                                <div class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">
                                        <img v-lazy="`${assetsUrl}/stat/game_hud_element_good.png`" class="stat-icon" />
                                        {{ $t("heroes.skillUpgrade", [awakening.skill_enhanced]) }}
                                    </div>
                                    <div class="column is-half hero-stats-value">
                                        {{ $t("heroes.skillUpgradeApplied") }}
                                    </div>
                                </div>
                            </li>
                            <li
                                v-for="(improvementObject, improvementIndex) in awakening.stats"
                                :key="improvementIndex"
                                class="columns is-mobile"
                            >
                                <div
                                    class="column is-half hero-stats-type"
                                    :class="heroStatsClass(improvementObject.stat)"
                                >
                                    {{ $t(`heroes.attributes.${heroStatsKey(improvementObject.stat, true)}`) }}
                                </div>
                                <div class="column is-half hero-stats-value">
                                    {{ improvementObject.value | toPercent }}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <h4>{{ $t("heroes.resources") }}</h4>
                <div v-if="awakening.costs && awakening.costs.length" class="awakening-resources resource-item-list">
                    <ItemPopover v-for="costs in awakening.costs" :key="costs._id" :resource="costs" />
                </div>
            </Tab>
        </Tabs>
    </section>
</template>

<script>
import { Tabs, Tab } from "vue-tabs-component";
import { heroStatsClass, heroStatsKey } from "~/util/Utils";
import ItemPopover from "~/components/items/ItemPopover";

export default {
    components: {
        Tabs,
        Tab,
        ItemPopover,
    },
    inject: ["assetsUrl"],
    props: {
        zodiac_tree: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        heroStatsClass,
        heroStatsKey,
    },
};
</script>
