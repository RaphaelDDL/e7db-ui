<template>
    <section class="section-container">
        <Tabs :options="{ useUrlFragment: false }" class="section-tabs">
            <Tab
                v-for="(skill, index) in skillsList"
                :key="skill.name"
                :name="`${$t('heroes.skill')} #${index + 1}`"
                class="skill-card section-box"
            >
                <div :class="skillClasses(skill)" class="skill-icon">
                    <img
                        v-lazy="{
                            src: `${skill.assets.icon}`,
                            error: `${assetsUrl}/hero/_placeholder/sk_missing.png`,
                        }"
                        alt
                    />
                </div>
                <h1 v-lazy-container="{ selector: 'img' }" class="skill-name">
                    <img
                        v-for="buff in skill.buff"
                        :key="buff"
                        :alt="buffDebuffIDToName(buff).name"
                        :data-src="`${assetsUrl}/_source/buff/${buffDebuffIDToName(buff).icon}.png`"
                        :title="buffDebuffIDToName(buff).name"
                    />
                    <img
                        v-for="debuff in skill.debuff"
                        :key="debuff"
                        :alt="buffDebuffIDToName(debuff).name"
                        :data-src="`${assetsUrl}/_source/buff/${buffDebuffIDToName(debuff).icon}.png`"
                        :title="buffDebuffIDToName(debuff).name"
                    />
                    {{ skill.name }}
                </h1>
                <div class="skill-sub-desc">
                    <div v-if="skill.soul_gain" class="skill-soul-acquire">
                        {{ $t("heroes.acquire") }} {{ skill.soul_gain }} {{ $t("heroes.soul") }}
                    </div>
                    <div v-if="!skill.soul_gain && skill.isPassive == true" class="skill-soul-acquire">
                        {{ $t("heroes.passive") }}
                    </div>
                    <div v-if="skillCooldown(skill)" class="skill-cooldown">
                        {{ skill.cooldown }} {{ $t("heroes.turns") }}
                    </div>
                </div>
                <!-- <div v-if="selfSkillBarName && skill.selfSkillBarValue && skill.selfSkillBarValue !== 0">
                    <div class="skill-sub-desc">
                        <div class="skill-selfskillbar">
                            <span v-if="skill.selfSkillBarValue > 0">{{ $t("heroes.acquire") }}</span>
                            <span v-if="skill.selfSkillBarValue < 0">{{ $t("heroes.consume") }}</span>
                            {{ skill.selfSkillBarValue | noUnderscore }} {{ selfSkillBarName | noUnderscore(true) }}
                        </div>
                    </div>
                </div> -->
                <div
                    v-if="skill.description"
                    class="skill-desc"
                    v-html="skillVariableDescription(skill.description, skill.values)"
                ></div>
                <h5 v-if="skill.enhanced_description" class="skill-enhance">Skill Upgrade</h5>
                <div
                    class="skill-desc"
                    v-html="skillVariableDescription(skill.enhanced_description, skill.values)"
                ></div>
                <div v-if="skill.soul_requirement && skill.soul_description">
                    <hr />
                    <div class="skill-sub-desc">
                        <div class="skill-soul-acquire">{{ $t("heroes.soulBurnEffect") }}</div>
                        <div class="skill-soul-burn">
                            {{ $t("heroes.consume") }} {{ skill.soul_requirement }} {{ $t("heroes.soul") }}
                        </div>
                    </div>
                    <div class="skill-desc">{{ skill.soul_description }}</div>
                </div>
                <div v-if="skill.simpleDmgMod && skill.simpleDmgMod.simplified">
                    <hr />
                    <div class="skill-sub-desc skill-multi-desc">
                        <div>
                            <p>
                                <span class="skill-mult-title"
                                    >{{ $t("heroes.multipliers.multSimplified") }}
                                    {{ $t("heroes.multipliers.mult") }}</span
                                >
                                <br />
                                <strong>{{ skill.simpleDmgMod.simplified }}</strong>
                            </p>
                            <p v-if="skill.simpleDmgMod.simplified !== skill.simpleDmgMod.simplifiedSoulburn">
                                <span class="skill-mult-title"
                                    >{{ $t("heroes.soulBurn") }} {{ $t("heroes.multipliers.mult") }}</span
                                >
                                <br />
                                <strong>{{ skill.simpleDmgMod.simplifiedSoulburn }}</strong>
                            </p>
                            <p class="skill-multi-notes" tabindex="-1">-Click/Tap for Multiplier Notes-</p>
                            <p class="skill-multi-note">
                                NOTE#1: Arrays (square brackets <strong class="white">[]</strong>) mean some sort of
                                scaling, for example, Blood Blade Karin multiplier increases if her S2 conditions are
                                met. Please see current hero's skill effects to understand better.
                            </p>
                            <p class="skill-multi-note">
                                NOTE#2: We are still working on the multipliers; Some might be presented wrongly when
                                they scale off different things than attributes, like number of buffs or debuffs, etc.
                                For a complete data while we still fixing all, consult
                                <a
                                    href="https://docs.google.com/spreadsheets/d/1aqL0Uj26PRW_jAUj8pYaSls_DOuFq30fvwQh8ol74-E/edit#gid=0"
                                    rel="noopener"
                                    target="_blank"
                                    >buttreynold's Spreadsheet</a
                                >.
                            </p>
                        </div>
                    </div>
                </div>

                <hr />
                <div v-if="skill.enhancements && skill.enhancements.length">
                    <div class="skill-enhance">
                        {{ $t("heroes.skillEnhance") }}
                    </div>
                    <ol class="skill-enhance-list">
                        <li
                            v-for="enhancement in skill.enhancements"
                            :key="enhancement._id"
                            :class="{
                                'has-resource': enhancement && enhancement.resources && enhancement.resources.length,
                            }"
                        >
                            {{ enhancement.string }}
                            <div
                                v-if="enhancement && enhancement.costs && enhancement.costs.length"
                                class="resource-item-list"
                            >
                                <ItemPopover v-for="costs in enhancement.costs" :key="costs._id" :resource="costs" />
                            </div>
                        </li>
                    </ol>
                </div>
            </Tab>
        </Tabs>
    </section>
</template>

<script>
import { Tabs, Tab } from "vue-tabs-component";
import { toPercent } from "~/util/Utils";
import ItemPopover from "~/components/items/ItemPopover";

export default {
    inject: ["assetsUrl"],
    components: {
        Tabs,
        Tab,
        ItemPopover,
    },
    props: {
        skillsList: {
            type: Array,
            default: () => [],
        },
        buffs: {
            type: Array,
            default: () => [],
        },
        debuffs: {
            type: Array,
            default: () => [],
        },
        common: {
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
        // selfSkillBarName: {
        //     type: String,
        // },
    },
    computed: {
        buffDebuffCommonList() {
            return this.buffs.concat(this.debuffs, this.common);
        },
    },
    methods: {
        buffDebuffIDToName(id) {
            const buffDebuffObject = this.buffDebuffCommonList.find(buff => buff.id === id);
            if (!buffDebuffObject) {
                return {};
            }
            return buffDebuffObject;
        },
        skillClasses(skill) {
            const soulBurnNum = parseInt(skill.soul_requirement, 10);
            const soulsIcons = !isNaN(soulBurnNum) && soulBurnNum / 10 ? soulBurnNum / 10 : 0;
            const consumeSoulClass = soulsIcons ? `consume-soul-${soulsIcons}` : "";
            const awakenUpgrade = !!skill.can_enhance;
            const isPassive = !!skill.passive;

            return {
                "upgrade-passive": awakenUpgrade && isPassive,
                "upgrade-active": awakenUpgrade && !isPassive,
                [consumeSoulClass]: !!soulsIcons,
            };
        },
        skillCooldown(skill = {}) {
            const cdNum = parseInt(skill.cooldown, 10);
            return !!(!isNaN(cdNum) && cdNum);
        },
        skillVariableDescription(description = "", values = []) {
            description = description.replace("\\n", "\n");

            const descArray = description?.split("{{variable}}");
            if (descArray.length < 2) {
                return description;
            }
            if (!values?.length) {
                return description;
            }
            const prepareString = descArray.reduce((acc, curr, i) => {
                acc.push(curr);
                if (i < descArray.length - 1 && !Array.isArray(values[i])) {
                    acc.push("<span class='white strong'>" + toPercent(values[i]) + "</span>");
                }
                return acc;
            }, []);

            return prepareString.join("");
        },
    },
};
</script>
