<template>
    <section class="section-container">
        <Tabs :options="{ useUrlFragment: false }" class="section-tabs ex-equip-tabs">
            <Tab
                v-for="exEquip in exclusiveEquipmentList"
                :id="exEquip._id"
                :key="exEquip._id"
                :name="$t('ex_equip.name')"
                class="hero-ex-equip section-box"
            >
                <!-- <h1>{{ $t("ex_equip.name") }}</h1> -->
                <!-- <hr /> -->
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
                        <div class="column is-full hero-stats-type">
                            <span :class="heroStatusIconClass(exEquip)"></span>
                            {{ $t(`heroes.attributes.${heroStatusType(exEquip)}`) }}:
                            {{ exEquip.stat.value | toPercent }}~{{ (exEquip.stat.value * 2) | toPercent }}
                        </div>
                    </div>
                </div>
                <div v-if="exEquip.description" class="skill-desc">{{ exEquip.description }}</div>
                <hr />
                <ul v-if="exEquip.skills && exEquip.skills.length" class="bullets">
                    <li
                        v-for="(exEquipEnhancement, exEquipEnhancementIndex) in exEquip.skills"
                        :id="`exEquipEnhancement_${exEquipEnhancementIndex}`"
                        :key="`exEquipEnhancement_${exEquipEnhancementIndex}`"
                        class="ex-equip-enhancements white"
                    >
                        {{ exEquipEnhancement.description }}
                    </li>
                </ul>
                <!-- <template v-if="exEquip.skills && exEquip.skills.length">
                    <div
                        v-for="(exEquipEnhancement, exEquipEnhancementIndex) in exEquip.skills"
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
                </template> -->
            </Tab>
        </Tabs>
    </section>
</template>

<script>
import { Tabs, Tab } from "vue-tabs-component";
import { heroStatsClass, heroStatsKey } from "~/util/Utils";

export default {
    components: {
        Tabs,
        Tab,
    },
    inject: ["assetsUrl"],
    props: {
        exclusiveEquipmentList: {
            type: Array,
            default: () => [],
        },
        skillsList: {
            type: Array,
            default: () => [],
        },
        id: {
            type: String,
            default: "",
        },
        cid: {
            type: String,
            default: "",
        },
    },
    methods: {
        heroStatusIconClass(exEquip) {
            return heroStatsClass(exEquip.stat?.type);
        },
        heroStatusType(exEquip) {
            return heroStatsKey(exEquip.stat?.type, true);
        },
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
