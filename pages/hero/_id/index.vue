<template>
    <div class="columns">
        <LoadingMessage :is-loading="isLoading" class="column" />

        <main v-if="!isLoading && showDetails" class="column is-three-fifths">
            <nuxt-link :to="localePath('heroes')">&lt; {{ $t("heroes.back") }}</nuxt-link>
            <hr class="boxBorderHr" />

            <section class="section-container hero-title">
                <div class="columns is-mobile">
                    <div class="column is-three-fifths hero-name">
                        <h1>{{ heroDetail.name }}</h1>
                    </div>
                    <div v-lazy-container="{ selector: 'img' }" class="column is-two-fifths hero-thumb">
                        <img
                            :data-error="`${assetsUrl}/hero/_placeholder/small_missing.png`"
                            :data-src="imageUrls.small"
                            alt
                        />
                    </div>
                </div>
            </section>

            <!-- hero basics -->
            <section class="section-container">
                <div class="section-box hero-basics">
                    <div class="hero-stats columns">
                        <div class="column is-full hero-stats-base">
                            <h1>{{ $t("heroes.profile") }}</h1>
                            <hr />
                            <ul>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.grade") }}</div>
                                    <div
                                        :class="`star-rating-${heroDetail.rarity}`"
                                        class="column is-half hero-stats-value"
                                    ></div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.classType") }}</div>
                                    <div
                                        :class="`hero-class-${heroDetail.classType}`"
                                        class="column is-half hero-stats-value"
                                    ></div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("filters.element") }}</div>
                                    <div
                                        :class="`hero-element-${heroDetail.element}`"
                                        class="column is-half hero-stats-value"
                                    ></div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("filters.zodiac") }}</div>
                                    <div
                                        :class="`hero-sign-${heroDetail.zodiac}`"
                                        class="column is-half hero-stats-value"
                                    ></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- hero skills -->
            <section class="section-container">
                <Tabs :options="{ useUrlFragment: false }" class="section-tabs">
                    <Tab
                        v-for="(skill, index) in heroDetail.skills"
                        :key="skill.name"
                        :name="`${$t('heroes.skill')} #${index + 1}`"
                        class="skill-card section-box"
                    >
                        <div v-lazy-container="{ selector: 'img' }" :class="skillClasses(skill)" class="skill-icon">
                            <img
                                :data-error="`${assetsUrl}/hero/_placeholder/sk_missing.png`"
                                :data-src="skillImage(skill, index + 1)"
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
                            <div class="skill-enhance">Skill Enhance</div>
                            <ol class="skill-enhance-list">
                                <li
                                    v-for="(enhancement, enhancementindex) in skill.enhancement"
                                    :key="enhancementindex"
                                    :class="{
                                        'has-resource':
                                            enhancement && enhancement.resources && enhancement.resources.length,
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

            <!-- hero awakening -->
            <section class="section-container">
                <Tabs :options="{ useUrlFragment: false }" class="section-tabs awakening-tabs">
                    <Tab
                        v-for="(awakening, index) in heroDetail.awakening"
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
                                            <div class="column is-half hero-stats-type">
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

            <!-- hero stats -->
            <section class="section-container">
                <div class="section-box">
                    <h1>{{ $t("heroes.imprint") }}</h1>
                    <hr />
                    <div class="hero-stats columns">
                        <div class="column is-half hero-stats-container-base">
                            <h4>{{ $t("heroes.imprintPosition") }}</h4>
                            <div class="memory-imprint-formation">
                                <template v-if="heroDetail.memoryImprintFormation">
                                    <div
                                        v-for="(positionActive, formationPosition) in heroDetail.memoryImprintFormation"
                                        :key="formationPosition"
                                        :class="formationPosition"
                                        class="memory-imprint-formation-icon-container"
                                    >
                                        <div
                                            :class="{ disabled: !positionActive }"
                                            class="imprint-formation-icon"
                                        ></div>
                                    </div>
                                </template>
                                <template v-else>{{ $t("heroes.noImprint") }}</template>
                            </div>
                        </div>
                        <div
                            v-if="heroDetail.memoryImprint && heroDetail.memoryImprint.length"
                            class="column is-half hero-stats-container-50"
                        >
                            <h4>{{ $t("heroes.imprintBonus") }}</h4>
                            <ul class="imprint-list">
                                <template v-for="(memoryImprint, memoryImprintIndex) in heroDetail.memoryImprint">
                                    <li
                                        v-if="memoryImprint.status.increase"
                                        :key="`${memoryImprint.rank + memoryImprintIndex}`"
                                        class="columns is-mobile"
                                    >
                                        <div
                                            :class="`memory-imprint-rank-${memoryImprint.rank}`"
                                            class="column is-half hero-stats-type strong"
                                        >
                                            <span class="sr-only">{{ memoryImprint.rank }}</span>
                                        </div>
                                        <div class="column is-half hero-stats-value">
                                            <strong>{{ memoryImprint.status.type | statusName }}</strong>
                                            <span>&nbsp;+{{ memoryImprint.status.increase | toPercent }}</span>
                                        </div>
                                    </li>
                                </template>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- hero stats -->
            <section class="section-container">
                <div class="section-box">
                    <h1>{{ $t("heroes.stats") }}</h1>
                    <hr />
                    <div class="hero-stats columns">
                        <div class="column is-half hero-stats-container-base">
                            <h4 v-html="$t('heroes.lv1BaseStarNoAwaken')"></h4>
                            <ul v-if="heroDetail.stats.lv1BaseStarNoAwaken">
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.cp") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.cp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.atk") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.atk }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.def") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.def }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.hp") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.hp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.spd") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.spd }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.chc") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.chc | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.chd") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.chd | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.eff") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.eff | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.efr") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.efr | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.dac") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.dac | toPercent }}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="column is-half hero-stats-container-50">
                            <h4 v-html="$t('heroes.lv50FiveStarNoAwaken')"></h4>
                            <ul v-if="heroDetail.stats.lv50FiveStarNoAwaken">
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.cp") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.cp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.atk") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.atk }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.def") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.def }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.hp") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.hp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.spd") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.spd }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.chc") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.chc | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.chd") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.chd | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.eff") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.eff | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.efr") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.efr | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.dac") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.dac | toPercent }}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="hero-stats columns">
                        <div class="column is-half hero-stats-container-60">
                            <h4 v-html="$t('heroes.lv60SixStarNoAwaken')"></h4>
                            <ul v-if="heroDetail.stats.lv60SixStarNoAwaken">
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.cp") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.cp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.atk") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.atk }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.def") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.def }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.hp") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.hp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.spd") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.spd }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.chc") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.chc | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.chd") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.chd | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.eff") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.eff | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.efr") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.efr | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.dac") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.dac | toPercent }}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="column is-half hero-stats-container-max">
                            <h4 v-html="$t('heroes.lv60SixStarFullyAwakened')"></h4>
                            <ul v-if="heroDetail.stats.lv60SixStarFullyAwakened">
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.cp") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.cp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.atk") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.atk }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.def") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.def }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.hp") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.hp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.spd") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.spd }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.chc") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.chc | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.chd") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.chd | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.eff") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.eff | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.efr") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.efr | toPercent }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("heroes.attributes.dac") }}</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.dac | toPercent }}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <aside v-if="!isLoading && showDetails" class="column is-two-fifths">
            <!-- hero specialty -->
            <section v-if="heroDetail.specialtyChangeName" class="section-container">
                <div class="section-box">
                    <h1>{{ $t("heroes.specialty") }}</h1>
                    <hr />
                    <ul class="hero-specialty">
                        <nuxt-link
                            :key="heroDetail.specialtyChangeName._id"
                            v-lazy-container="{ selector: 'img' }"
                            :to="
                                localePath({
                                    name: 'hero-id',
                                    params: {
                                        id: heroDetail.specialtyChangeName._id,
                                    },
                                })
                            "
                            tag="li"
                        >
                            <a class="columns is-mobile">
                                <div class="column hero-specialty-icon">
                                    <img
                                        :data-error="`${assetsUrl}/hero/_placeholder/icon_missing.png`"
                                        :data-src="`${assetsUrl}/hero/${heroDetail.specialtyChangeName._id}/icon.png`"
                                        class="hero-illustration-img hero-illustration-icon"
                                    />
                                </div>
                                <div class="column hero-specialty-description">
                                    <p class="hero-specialty-name">
                                        {{ heroDetail.specialtyChangeName.name || heroDetail.specialtyChangeName._id }}
                                    </p>
                                </div>
                            </a>
                        </nuxt-link>
                    </ul>
                    <hr />
                    <p>
                        <strong class="white">{{ heroDetail.name }}</strong> {{ $t("heroes.specialtyTransition") }}
                        <strong class="white">
                            {{ heroDetail.specialtyChangeName.name || heroDetail.specialtyChangeName._id }} </strong
                        >. {{ $t("heroes.specialtyExplain") }}
                    </p>
                </div>
            </section>

            <!-- hero illustraton -->
            <section class="section-container">
                <div v-lazy-container="{ selector: 'img' }" class="section-box hero-illustration">
                    <h1>{{ $t("heroes.image") }}</h1>
                    <hr />
                    <p>{{ $t("heroes.icon") }}:</p>
                    <img
                        :data-error="`${assetsUrl}/hero/_placeholder/icon_missing.png`"
                        :data-src="imageUrls.icon"
                        class="hero-illustration-img hero-illustration-icon"
                    />
                    <p>{{ $t("heroes.battleArt") }}:</p>
                    <img
                        :data-error="`${assetsUrl}/hero/_placeholder/full_missing.png`"
                        :data-src="imageUrls.full"
                        class="hero-illustration-img hero-illustration-battle-art"
                    />
                </div>
            </section>

            <!-- hero specialty skill -->
            <section v-if="heroDetail.specialtySkill && heroDetail.specialtySkill.name" class="section-container">
                <div class="section-box hero-stats">
                    <h1>{{ $t("heroes.specialtySkill.header") }}</h1>
                    <hr />
                    <div v-lazy-container="{ selector: 'img' }" class="skill-icon">
                        <img :data-src="`${assetsUrl}/hero/_placeholder/sk_missing.png`" />
                        <!-- <img
                            :data-error="`${assetsUrl}/hero/_placeholder/sk_missing.png`"
                            :data-src="skillImage(skill, index + 1)"
                        /> -->
                    </div>
                    <h2 class="skill-name">
                        {{ heroDetail.specialtySkill.name }}
                    </h2>
                    <div class="skill-sub-desc">
                        <div v-if="heroDetail.specialtySkill.dispatch" class="skill-soul-acquire">
                            {{ heroDetail.specialtySkill.dispatch }}
                        </div>
                        <div v-if="heroDetail.specialtySkill.enhancement" class="skill-bonus">
                            {{ heroDetail.specialtySkill.enhancement }}
                        </div>
                    </div>

                    <div v-if="heroDetail.specialtySkill.description" class="skill-desc">
                        {{ heroDetail.specialtySkill.description }}
                    </div>
                    <hr />
                    <ul v-if="heroDetail.specialtySkill.stats">
                        <li class="columns is-mobile">
                            <div class="column is-half hero-stats-type">{{ $t("heroes.specialtySkill.command") }}</div>
                            <div class="column is-half hero-stats-value">
                                {{ heroDetail.specialtySkill.stats.command }}
                            </div>
                        </li>
                        <li class="columns is-mobile">
                            <div class="column is-half hero-stats-type">{{ $t("heroes.specialtySkill.charm") }}</div>
                            <div class="column is-half hero-stats-value">
                                {{ heroDetail.specialtySkill.stats.charm }}
                            </div>
                        </li>
                        <li class="columns is-mobile">
                            <div class="column is-half hero-stats-type">{{ $t("heroes.specialtySkill.politics") }}</div>
                            <div class="column is-half hero-stats-value">
                                {{ heroDetail.specialtySkill.stats.politics }}
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- hero bg -->
            <section v-if="heroDetail.background" class="section-container">
                <div class="section-box">
                    <h1>{{ $t("heroes.lore") }}</h1>
                    <hr />
                    <p class="hero-background">{{ heroDetail.background }}</p>
                </div>
            </section>

            <!-- hero relations -->
            <section v-if="heroDetail.relations.length" class="section-container">
                <div class="section-box">
                    <h1>{{ $t("heroes.relations") }}</h1>
                    <hr />
                    <ul class="hero-relations">
                        <nuxt-link
                            v-for="relation in heroDetail.relations"
                            :key="relation.name"
                            v-lazy-container="{ selector: 'img' }"
                            :to="
                                localePath({
                                    name: 'hero-id',
                                    params: {
                                        id: relation._id,
                                    },
                                })
                            "
                            tag="li"
                        >
                            <a class="columns is-mobile">
                                <div class="column hero-relationship-icon">
                                    <img
                                        :data-error="`${assetsUrl}/hero/_placeholder/icon_missing.png`"
                                        :data-src="`${assetsUrl}/hero/${relation._id}/icon.png`"
                                        class="hero-illustration-img hero-illustration-icon"
                                    />
                                </div>
                                <div class="column hero-relationship-description">
                                    <p class="hero-relationship-name">{{ relation.name }}</p>
                                    <p :class="heroRelationClass(relation.relationType)"></p>
                                </div>
                            </a>
                        </nuxt-link>
                    </ul>
                </div>
            </section>

            <!-- hero voices -->
            <section v-if="heroDetail.voiceList && heroDetail.voiceList.length" class="section-container">
                <div class="section-box">
                    <h1>{{ $t("heroes.voice") }}</h1>
                    <hr />
                    <no-ssr placeholder="Audio files are being rendered..">
                        <ul class="heroes-voice-list">
                            <li v-for="voice in heroDetail.voiceList" :key="voice">
                                <aplayer
                                    :mini="true"
                                    preload="none"
                                    :mutex="true"
                                    :volume="1"
                                    :autoplay="false"
                                    repeat="no-repeat"
                                    :controls="false"
                                    controlslist="nodownload"
                                    theme="#050a13"
                                    :music="generateMusicObject(voice)"
                                />
                                <span>
                                    {{ voice | noUnderscore }}
                                </span>
                            </li>
                        </ul>
                    </no-ssr>
                </div>
            </section>
        </aside>
    </div>
</template>

<script>
// import Modernizr from 'modernizr';
import { Tabs, Tab } from "vue-tabs-component";
import LoadingMessage from "~/components/general/LoadingMessage";
import ItemPopover from "~/components/items/ItemPopover";
import { mountedPageView } from "~/util/vueMixins";
import { buffDebuffKeyToName, headMetaTags } from "~/util/Utils";

export default {
    components: {
        LoadingMessage,
        Tabs,
        Tab,
        ItemPopover,
    },
    mixins: [mountedPageView],
    inject: ["assetsUrl"],
    data() {
        return {
            showDetails: false,
            isLoading: true,
            heroDetail: {
                name: "",
                rarity: "",
                classType: "",
                element: "",
                zodiac: "",
                specialtyChangeName: "",
                selfSkillBarName: "",
                background: "",
                relations: [],
                stats: {
                    base: {
                        cp: 0,
                        atk: 0,
                        hp: 0,
                        spd: 0,
                        def: 0,
                        chc: 0,
                        chd: 0,
                        eff: 0,
                        efr: 0,
                        dac: 0,
                    },
                    max: {
                        cp: 0,
                        atk: 0,
                        hp: 0,
                        spd: 0,
                        def: 0,
                        chc: 0,
                        chd: 0,
                        eff: 0,
                        efr: 0,
                        dac: 5,
                    },
                },
                skills: [],
                specialtySkill: {
                    name: "",
                    description: "",
                    dispatch: [],
                    enhancement: [],
                    stats: {
                        command: 0,
                        charm: 0,
                        politics: 0,
                    },
                },
                memoryImprintFormation: {
                    north: false,
                    south: false,
                    east: false,
                    west: false,
                },
                memoryImprint: [],
                awakening: [],
            },
        };
    },
    computed: {
        imageUrls() {
            return {
                full: `${this.assetsUrl}/hero/${this.heroDetail._id}/full.png`,
                small: `${this.assetsUrl}/hero/${this.heroDetail._id}/small.png`,
                icon: `${this.assetsUrl}/hero/${this.heroDetail._id}/icon.png`,
            };
        },
        // webpSupport() {
        //     return Modernizr.webp && Modernizr.webp.animation;
        // },
    },
    head() {
        const heroName = this.heroDetail && this.heroDetail.name ? this.heroDetail.name : "";
        const classType = this.heroDetail && this.heroDetail.classType ? this.heroDetail.classType : "";
        return headMetaTags(
            {
                title: `${heroName} | Hero`,
                description: `See detailed information about ${classType} ${heroName} Hero in EpicSeven game, including Artwork, Rarity, Class, Zodiac Sign, Attributes, Skills and their effects, Awakening and more!`,
                image: this.heroDetail && this.heroDetail._id ? this.imageUrls.full : "",
            },
            this
        );
    },
    asyncData({ params, store, redirect }) {
        return Promise.all([
            store.dispatch("item/getList").catch(error => {
                return error;
            }),
            store.dispatch("hero/getSingle", { fileId: params.id }).catch(error => {
                return error;
            }),
        ]).then(([itemList, heroDetail]) => {
            if (!heroDetail || (heroDetail && !heroDetail.name)) {
                return redirect(302, "/heroes");
            }
            return {
                isLoading: false,
                heroDetail: heroDetail,
                showDetails: true,
            };
        });
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
            return `${this.assetsUrl}/hero/${this.heroDetail._id}/sk_${skillPos}${passive}.png`;
        },
        skillCooldown(skill = {}) {
            const cdNum = parseInt(skill.cooldown, 10);
            return !!(!isNaN(cdNum) && cdNum);
        },
        heroRelationClass(type = "") {
            return type ? `hero-relation-${type}` : "";
        },
        generateMusicObject(voice) {
            return {
                title: voice,
                src: `${this.assetsUrl}/voice/${this.heroDetail._id}/${voice}.wav`,
                pic: `${this.assetsUrl}/hero/${this.heroDetail._id}/icon.png`,
            };
        },
    },
    // mounted() {
    //     let fileId = this.$route.params.id;

    //     this.isLoading = true;
    //     this.showDetails = false;

    //     if (!this.heroDetail.name) {
    //         this.$store
    //             .dispatch('hero/getSingle', { fileId })
    //             .then(heroDetail => {
    //                 this.heroDetail = heroDetail;
    //                 this.showDetails = true;
    //             })
    //             .catch(() => {
    //                 this.showDetails = false;
    //             })
    //             .then(() => {
    //                 this.isLoading = false;
    //             });
    //     }
    // },
};
</script>
