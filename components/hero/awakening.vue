<template>
    <section class="section-container">
        <Tabs :options="{ useUrlFragment: false }" class="section-tabs awakening-tabs">
            <Tab
                v-for="(awakening, index) in awakeningList"
                :id="`awakening-${index + 1}`"
                :key="awakening.rank"
                class="hero-awakening section-box"
                name=" "
            >
                <h1>{{ $t("heroes.awakening") }}</h1>
                <hr />
                <div class="hero-stats columns">
                    <div class="column is-full hero-stats-base">
                        <h4>{{ $t("heroes.statsIncrease") }}</h4>
                        <ul>
                            <li v-if="awakening.skillUpgrade">
                                <div class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">
                                        <img v-lazy="`${assetsUrl}/stat/game_hud_element_good.png`" class="stat-icon" />
                                        {{ $t("heroes.skillUpgrade") }}
                                    </div>
                                    <div class="column is-half hero-stats-value">
                                        {{ $t("heroes.skillUpgradeApplied") }}
                                    </div>
                                </div>
                            </li>
                            <li
                                v-for="(improvementObject, improvementIndex) in awakening.statsIncrease"
                                :key="improvementIndex"
                            >
                                <div
                                    v-for="(improvementObjectValue, improvementObjectKey) in improvementObject"
                                    :key="improvementObjectKey"
                                    class="columns is-mobile"
                                >
                                    <div
                                        class="column is-half hero-stats-type"
                                        :class="heroStatsClass(improvementObjectKey)"
                                    >
                                        {{ improvementObjectKey | statusName }}
                                    </div>
                                    <div class="column is-half hero-stats-value">
                                        {{ improvementObjectValue | toPercent }}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <h4>{{ $t("heroes.resources") }}</h4>
                <div
                    v-if="awakening.resources && awakening.resources.length"
                    class="awakening-resources resource-item-list"
                >
                    <ItemPopover
                        v-for="(resource, resourceindex) in awakening.resources"
                        :key="`${index}_${resourceindex}`"
                        :resource="resource"
                    />
                </div>
            </Tab>
        </Tabs>
    </section>
</template>

<script>
import { Tabs, Tab } from "vue-tabs-component";
import ItemPopover from "~/components/items/ItemPopover";

export default {
    inject: ["assetsUrl"],
    components: {
        Tabs,
        Tab,
        ItemPopover,
    },
    props: {
        awakeningList: {
            type: Array,
            default: () => [],
        },
        heroStatsClass: {
            type: Function,
        },
    },
    methods: {},
};
</script>
