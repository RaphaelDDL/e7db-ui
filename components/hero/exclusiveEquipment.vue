<template>
    <section class="section-container">
        <Tabs :options="{ useUrlFragment: false }" class="section-tabs ex-equip-tabs">
            <Tab
                v-for="exEquip in exclusiveEquipmentList"
                :id="exEquip._id"
                :key="exEquip._id"
                :name="exEquip.name"
                class="hero-ex-equip section-box"
            >
                <h1>{{ $t("ex_equip.name") }}</h1>
                <hr />
                <div class="skill-icon">
                    <img
                        v-lazy="{
                            src: `${assetsUrl}/exclusive-equipment/${exEquip._id}.png`,
                            error: `${assetsUrl}/hero/_placeholder/sk_missing.png`,
                        }"
                        alt
                    />
                </div>
                <h1 class="skill-name">{{ exEquip.name }}</h1>
                <div class="skill-sub-desc">
                    <div v-if="exEquip.stat" class="skill-soul-acquire">
                        <!-- class="skill-soul-acquire" -->
                        <div class="column is-half hero-stats-type">
                            <span :class="heroStatsClass(exEquip.stat.type)"></span>
                            {{ $t(`heroes.attributes.${exEquip.stat.type}`) }}: {{ exEquip.stat.min | toPercent }}~{{
                                exEquip.stat.max | toPercent
                            }}
                        </div>
                    </div>
                </div>
                <div v-if="exEquip.description" class="skill-desc">{{ exEquip.description }}</div>
                <!-- <hr /> -->
                <template v-if="exEquip.enhancements && exEquip.enhancements.length">
                    <div
                        v-for="(exEquipEnhancement, exEquipEnhancementIndex) in exEquip.enhancements"
                        :id="`exEquipEnhancement_${exEquipEnhancementIndex}`"
                        :key="`exEquipEnhancement_${exEquipEnhancementIndex}`"
                        class="ex-equip-enhancements"
                    >
                        <hr class="skill-desc" />
                        <div :class="skillClasses(exEquipEnhancement.slot)" class="skill-icon">
                            <img v-lazy="skillIcon(exEquipEnhancement)" alt />
                        </div>
                        <h3 class="skill-name">{{ skillsList[exEquipEnhancement.slot - 1].name }}</h3>
                        <div v-if="exEquipEnhancement.description" class="skill-sub-desc">
                            {{ exEquipEnhancement.description }}
                        </div>
                    </div>
                </template>
            </Tab>
        </Tabs>
    </section>
</template>

<script>
import { Tabs, Tab } from "vue-tabs-component";

export default {
    inject: ["assetsUrl"],
    components: {
        Tabs,
        Tab,
    },
    props: {
        exclusiveEquipmentList: {
            type: Array,
            default: () => [],
        },
        skillsList: {
            type: Array,
            default: () => [],
        },
        heroStatsClass: {
            type: Function,
        },
        id: {
            type: String,
            default: "",
        },
    },
    methods: {
        skillClasses(skillSlot = 1) {
            const awakenUpgrade = this.skillsList[skillSlot - 1].awakenUpgrade == true; // eslint-disable-line eqeqeq
            const isPassive = this.skillsList[skillSlot - 1].isPassive == true; // eslint-disable-line eqeqeq

            return {
                "upgrade-passive": awakenUpgrade && isPassive,
                "upgrade-active": awakenUpgrade && !isPassive,
            };
        },
        skillIcon(exEquipEnhancement = { slot: 1 }) {
            const isPassive = this.skillsList[exEquipEnhancement.slot - 1].isPassive == true; // eslint-disable-line eqeqeq

            return {
                src: `${this.assetsUrl}/hero/${this.id}/sk_${exEquipEnhancement.slot}${isPassive ? "p" : ""}.png`,
                error: `${this.assetsUrl}/hero/_placeholder/sk_missing.png`,
            };
        },
    },
};
</script>
