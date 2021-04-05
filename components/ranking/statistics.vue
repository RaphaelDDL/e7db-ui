<template>
    <section class="section-container">
        <Tabs :options="{ useUrlFragment: false }" class="section-tabs">
            <Tab
                v-if="heroUsage && heroUsage.byName && heroUsage.byName.length"
                name="Usage"
                class="skill-card section-box"
            >
                <Usage :by-name="heroUsage.byName" :number-of-players="numberOfPlayers" />
            </Tab>
            <Tab
                v-if="heroUsage && heroUsage.byClass && Object.keys(heroUsage.byClass).length"
                :name="`${$t('filters.heroClass')}`"
                class="skill-card section-box"
            >
                <Role
                    :by-class="heroUsage.byClass"
                    :background-color="chartBackgroundColor"
                    :styles="chartStyles"
                    :options="chartOptions"
                />
            </Tab>
            <Tab
                v-if="heroUsage && heroUsage.byElement && Object.keys(heroUsage.byElement).length"
                :name="`${$t('filters.element')}`"
                class="skill-card section-box"
            >
                <Attribute
                    :by-element="heroUsage.byElement"
                    :background-color="chartBackgroundColor"
                    :styles="chartStyles"
                    :options="chartOptions"
                />
            </Tab>
            <Tab
                v-if="heroUsage && heroUsage.byRarity && Object.keys(heroUsage.byRarity).length"
                :name="`${$t('heroes.grade')}`"
                class="skill-card section-box"
            >
                <Rarity
                    :by-rarity="heroUsage.byRarity"
                    :background-color="chartBackgroundColor"
                    :styles="chartStyles"
                    :options="chartOptions"
                />
            </Tab>
        </Tabs>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import { Tabs, Tab } from "vue-tabs-component";
import ChartComponents from "~/components/ranking/charts";

export default {
    components: {
        Tabs,
        Tab,
        ...ChartComponents,
    },
    inject: ["assetsUrl"],
    props: {
        numberOfPlayers: {
            type: Number,
            default: null,
        },
    },
    data() {
        const chartColors = {
            blue: "rgb(54, 162, 235)",
            green: "rgb(75, 192, 192)",
            gray: "rgb(201, 203, 207)",
            orange: "rgb(255, 159, 64)",
            purple: "rgb(153, 102, 255)",
            red: "rgb(255, 99, 132)",
            yellow: "rgb(255, 205, 86)",
        };
        return {
            chartBackgroundColor: [
                chartColors.red,
                chartColors.orange,
                chartColors.yellow,
                chartColors.green,
                chartColors.blue,
                chartColors.purple,
                chartColors.gray,
            ],
            chartStyles: { height: "400px" },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            },
        };
    },
    computed: {
        ...mapGetters("ranking", ["heroUsage"]),
    },
};
</script>
