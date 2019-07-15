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
                            src: skillImage(skill, index + 1),
                            error: `${assetsUrl}/hero/_placeholder/sk_missing.png`,
                        }"
                        alt
                    />
                </div>
                <h1 v-lazy-container="{ selector: 'img' }" class="skill-name">
                    <img
                        v-for="buff in skill.buffs"
                        :key="buff"
                        :alt="buffDebuffKeyToName(buff) ? buffDebuffKeyToName(buff).name : buff"
                        :data-src="`${assetsUrl}/buff/${buff}.png`"
                        :title="buffDebuffKeyToName(buff) ? buffDebuffKeyToName(buff).name : buff"
                    />
                    <img
                        v-for="debuff in skill.debuffs"
                        :key="debuff"
                        :alt="buffDebuffKeyToName(debuff) ? buffDebuffKeyToName(debuff).name : debuff"
                        :data-src="`${assetsUrl}/buff/${debuff}.png`"
                        :title="buffDebuffKeyToName(debuff) ? buffDebuffKeyToName(debuff).name : debuff"
                    />
                    {{ skill.name }}
                </h1>
                <div class="skill-sub-desc">
                    <div v-if="skill.soulAcquire" class="skill-soul-acquire">
                        {{ $t("heroes.acquire") }} {{ skill.soulAcquire }} {{ $t("heroes.soul") }}
                    </div>
                    <div v-if="!skill.soulAcquire && skill.isPassive == true" class="skill-soul-acquire">
                        {{ $t("heroes.passive") }}
                    </div>
                    <div v-if="skillCooldown(skill)" class="skill-cooldown">
                        {{ skill.cooldown }} {{ $t("heroes.turns") }}
                    </div>
                </div>

                <div v-if="skill.description" class="skill-desc">{{ skill.description }}</div>
                <div v-if="skill.soulBurn && skill.soulBurnEffect">
                    <hr />
                    <div class="skill-sub-desc">
                        <div class="skill-soul-acquire">{{ $t("heroes.soulBurnEffect") }}</div>
                        <div class="skill-soul-burn">
                            {{ $t("heroes.consume") }} {{ skill.soulBurn }} {{ $t("heroes.soul") }}
                        </div>
                    </div>
                    <div class="skill-desc">{{ skill.soulBurnEffect }}</div>
                </div>

                <hr />
                <div v-if="skill.enhancement && skill.enhancement.length">
                    <div class="skill-enhance">
                        {{ $t("heroes.skillEnhance") }}
                    </div>
                    <ol class="skill-enhance-list">
                        <li
                            v-for="(enhancement, enhancementindex) in skill.enhancement"
                            :key="enhancementindex"
                            :class="{
                                'has-resource': enhancement && enhancement.resources && enhancement.resources.length,
                            }"
                        >
                            {{ enhancement.description }}
                            <div
                                v-if="enhancement && enhancement.resources && enhancement.resources.length"
                                class="resource-item-list"
                            >
                                <ItemPopover
                                    v-for="(resource, resourceindex) in enhancement.resources"
                                    :key="`${skill.name}_${enhancementindex}_${resourceindex}`"
                                    :resource="resource"
                                />
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
import { buffDebuffKeyToName } from "~/util/Utils";
import ItemPopover from "~/components/items/ItemPopover";

export default {
    inject: ["assetsUrl"],
    components: {
        Tabs,
        Tab,
        ItemPopover,
    },
    props: {
        skillDescription: {
            type: Object,
            default: () => {},
        },
        skillsList: {
            type: Array,
            default: () => [],
        },
        id: {
            type: String,
        },
    },
    methods: {
        buffDebuffKeyToName,
        skillClasses(skill) {
            const soulBurnNum = parseInt(skill.soulBurn, 10);
            const soulsIcons = !isNaN(soulBurnNum) && soulBurnNum / 10 ? soulBurnNum / 10 : 0;
            const consumeSoulClass = soulsIcons ? `consume-soul-${soulsIcons}` : "";
            const awakenUpgrade = skill.awakenUpgrade == true; // eslint-disable-line eqeqeq
            const isPassive = skill.isPassive == true; // eslint-disable-line eqeqeq

            return {
                "upgrade-passive": awakenUpgrade && isPassive,
                "upgrade-active": awakenUpgrade && !isPassive,
                [consumeSoulClass]: !!soulsIcons,
            };
        },
        skillImage(skill = {}, skillPos = 1) {
            const passive = skill.isPassive == true ? "p" : ""; // eslint-disable-line eqeqeq
            return `${this.assetsUrl}/hero/${this.id}/sk_${skillPos}${passive}.png`;
        },
        skillCooldown(skill = {}) {
            const cdNum = parseInt(skill.cooldown, 10);
            return !!(!isNaN(cdNum) && cdNum);
        },
    },
};
</script>
