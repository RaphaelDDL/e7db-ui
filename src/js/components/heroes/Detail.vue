<template>
    <div class="columns">
        <LoadingMessage :isLoading="isLoading" class="column" />

        <main class="column is-three-fifths" v-if="!isLoading && showDetails">
            <router-link to="/heroes">&lt; Back to Heroes List</router-link>
            <hr class="boxBorderHr" />

            <section class="section-container hero-title">
                <div class="columns is-mobile">
                    <div class="column is-three-fifths hero-name">
                        <h1>{{ heroDetail.name }}</h1>
                    </div>
                    <div class="column is-two-fifths hero-thumb" v-lazy-container="{ selector: 'img' }">
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
                            <h1>Profile</h1>
                            <hr />
                            <ul>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Star Grade</div>
                                    <div
                                        :class="`star-rating-${heroDetail.rarity}`"
                                        class="column is-half hero-stats-value"
                                    ></div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Class Type</div>
                                    <div
                                        :class="`hero-class-${heroDetail.classType}`"
                                        class="column is-half hero-stats-value"
                                    ></div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Element</div>
                                    <div
                                        :class="`hero-element-${heroDetail.element}`"
                                        class="column is-half hero-stats-value"
                                    ></div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Zodiac Sign</div>
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
                <tabs :options="{ useUrlFragment: false }" class="section-tabs">
                    <tab
                        :key="skill.name"
                        :name="`Skill #${index + 1}`"
                        class="skill-card section-box"
                        v-for="(skill, index) in heroDetail.skills"
                    >
                        <div :class="skillClasses(skill)" class="skill-icon" v-lazy-container="{ selector: 'img' }">
                            <img
                                :data-error="`${assetsUrl}/hero/_placeholder/sk_missing.png`"
                                :data-src="skillImage(skill, index + 1)"
                            />
                        </div>
                        <h1 class="skill-name" v-lazy-container="{ selector: 'img' }">
                            <img
                                :data-src="`${assetsUrl}/buff/${buff}.png`"
                                :key="buff"
                                alt="buff"
                                v-for="buff in skill.buffs"
                            />
                            <img
                                :data-src="`${assetsUrl}/buff/${debuff}.png`"
                                :key="debuff"
                                alt="debuff"
                                v-for="debuff in skill.debuffs"
                            />
                            {{ skill.name }}
                        </h1>
                        <div class="skill-sub-desc">
                            <div class="skill-soul-acquire" v-if="skill.soulAcquire">
                                Acquire {{ skill.soulAcquire }} Soul
                            </div>
                            <div class="skill-soul-acquire" v-if="!skill.soulAcquire && skill.isPassive == true">
                                Passive
                            </div>
                            <div class="skill-cooldown" v-if="skillCooldown(skill)">{{ skill.cooldown }} turns</div>
                        </div>

                        <div class="skill-desc" v-if="skill.description">{{ skill.description }}</div>
                        <div v-if="skill.soulBurn && skill.soulBurnEffect">
                            <hr />
                            <div class="skill-sub-desc">
                                <div class="skill-soul-acquire">Soul Burn Effect</div>
                                <div class="skill-soul-burn">Consume {{ skill.soulBurn }} Soul</div>
                            </div>
                            <div class="skill-desc">{{ skill.soulBurnEffect }}</div>
                        </div>

                        <hr />
                        <div v-if="skill.enhancement && skill.enhancement.length">
                            <div class="skill-enhance">Skill Enhance</div>
                            <ol class="skill-enhance-list">
                                <li
                                    :class="{
                                        'has-resource': enhancement.resources && enhancement.resources.length,
                                    }"
                                    :key="enhancementindex"
                                    v-for="(enhancement, enhancementindex) in skill.enhancement"
                                >
                                    {{ enhancement.description }}
                                    <div v-if="enhancement.resources && enhancement.resources.length">
                                        <span
                                            :key="resourceindex"
                                            class="resource-item"
                                            v-for="(resource, resourceindex) in enhancement.resources"
                                            >{{ resource.qty }}x {{ resource.item | catalystName }}</span
                                        >
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </tab>
                </tabs>
            </section>

            <!-- hero awakening -->
            <section class="section-container">
                <tabs :options="{ useUrlFragment: false }" class="section-tabs awakening-tabs">
                    <tab
                        :id="`awakening-${index + 1}`"
                        :key="awakening.rank"
                        class="hero-awakening section-box"
                        name=" "
                        v-for="(awakening, index) in heroDetail.awakening"
                    >
                        <h1>Awakening</h1>
                        <hr />
                        <div class="hero-stats columns">
                            <div class="column is-full hero-stats-base">
                                <h4>Stats Increase</h4>
                                <ul>
                                    <li v-if="awakening.skillUpgrade">
                                        <div class="columns is-mobile">
                                            <div class="column is-half hero-stats-type">Skill Upgrade</div>
                                            <div class="column is-half hero-stats-value">YES</div>
                                        </div>
                                    </li>
                                    <li
                                        :key="improvementIndex"
                                        v-for="(improvementObject, improvementIndex) in awakening.statsIncrease"
                                    >
                                        <div
                                            :key="improvementObjectKey"
                                            class="columns is-mobile"
                                            v-for="(improvementObjectValue, improvementObjectKey) in improvementObject"
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
                        <h4>Consumed Resources</h4>
                        <div class="awakening-resources" v-if="awakening.resources && awakening.resources.length">
                            <span
                                :key="resourceindex"
                                class="resource-item"
                                v-for="(resource, resourceindex) in awakening.resources"
                                >{{ resource.qty }}x {{ resource.item | catalystName }}</span
                            >
                        </div>
                    </tab>
                </tabs>
            </section>

            <!-- hero stats -->
            <section class="section-container">
                <div class="section-box">
                    <h1>Memory Imprint</h1>
                    <hr />
                    <div class="hero-stats columns">
                        <div class="column is-half hero-stats-container-base">
                            <h4>Formation Positions</h4>
                            <div class="memory-imprint-formation">
                                <template v-if="heroDetail.memoryImprintFormation">
                                    <div
                                        :class="formationPosition"
                                        :key="formationPosition"
                                        class="memory-imprint-formation-icon-container"
                                        v-for="(positionActive, formationPosition) in heroDetail.memoryImprintFormation"
                                    >
                                        <div
                                            :class="{ disabled: !positionActive }"
                                            class="imprint-formation-icon"
                                        ></div>
                                    </div>
                                </template>
                                <template v-else
                                    >Imprint formation details not available yet.</template
                                >
                            </div>
                        </div>
                        <div
                            class="column is-half hero-stats-container-50"
                            v-if="heroDetail.memoryImprint && heroDetail.memoryImprint.length"
                        >
                            <h4>Bonus</h4>
                            <ul class="imprint-list">
                                <template v-for="(memoryImprint, memoryImprintIndex) in heroDetail.memoryImprint">
                                    <li
                                        :key="`${memoryImprint.rank + memoryImprintIndex}`"
                                        class="columns is-mobile"
                                        v-if="memoryImprint.status.increase"
                                    >
                                        <div
                                            :class="`memory-imprint-rank-${memoryImprint.rank}`"
                                            class="column is-half hero-stats-type strong"
                                        >
                                            {{ memoryImprint.rank }}
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
                    <h1>Stats</h1>
                    <hr />
                    <div class="hero-stats columns">
                        <div class="column is-half hero-stats-container-base">
                            <h4>Level 1 at base summoned &#9733;</h4>
                            <ul v-if="heroDetail.stats.lv1BaseStarNoAwaken">
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">CP</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.cp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Attack</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.atk }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Defense</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.def }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Health</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.hp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Speed</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.spd }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Critical Hit Chance</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.chc }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Critical Hit Damage</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.chd }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Effectiveness</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.eff }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Effect Resistance</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.efr }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Dual Attack Chance</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv1BaseStarNoAwaken.dac }}%
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="column is-half hero-stats-container-50">
                            <h4>Level 50 at 5&#9733; (no awakening)</h4>
                            <ul v-if="heroDetail.stats.lv50FiveStarNoAwaken">
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">CP</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.cp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Attack</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.atk }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Defense</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.def }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Health</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.hp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Speed</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.spd }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Critical Hit Chance</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.chc }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Critical Hit Damage</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.chd }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Effectiveness</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.eff }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Effect Resistance</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.efr }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Dual Attack Chance</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv50FiveStarNoAwaken.dac }}%
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="hero-stats columns">
                        <div class="column is-half hero-stats-container-60">
                            <h4>Level 60 at 6&#9733; (no awakening)</h4>
                            <ul v-if="heroDetail.stats.lv60SixStarNoAwaken">
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">CP</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.cp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Attack</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.atk }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Defense</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.def }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Health</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.hp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Speed</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.spd }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Critical Hit Chance</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.chc }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Critical Hit Damage</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.chd }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Effectiveness</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.eff }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Effect Resistance</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.efr }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Dual Attack Chance</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarNoAwaken.dac }}%
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="column is-half hero-stats-container-max">
                            <h4>Level 60 at 6&#9733; (All Awakenings)</h4>
                            <ul v-if="heroDetail.stats.lv60SixStarFullyAwakened">
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">CP</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.cp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Attack</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.atk }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Defense</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.def }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Health</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.hp }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Speed</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.spd }}
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Critical Hit Chance</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.chc }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Critical Hit Damage</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.chd }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Effectiveness</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.eff }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Effect Resistance</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.efr }}%
                                    </div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Dual Attack Chance</div>
                                    <div class="column is-half hero-stats-value">
                                        {{ heroDetail.stats.lv60SixStarFullyAwakened.dac }}%
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <aside class="column is-two-fifths" v-if="!isLoading && showDetails">
            <!-- hero specialty -->
            <section class="section-container" v-if="heroDetail.specialtyChangeName">
                <div class="section-box">
                    <h1>Specialty Change</h1>
                    <hr />
                    <ul class="hero-specialty">
                        <router-link
                            :key="heroDetail.specialtyChangeName.fileId"
                            :to="`/hero/${heroDetail.specialtyChangeName.fileId}`"
                            tag="li"
                            v-lazy-container="{ selector: 'img' }"
                        >
                            <a class="columns is-mobile">
                                <div class="column hero-specialty-icon">
                                    <img
                                        :data-error="`${assetsUrl}/hero/_placeholder/icon_missing.png`"
                                        :data-src="
                                            `${assetsUrl}/hero/${heroDetail.specialtyChangeName.fileId}/icon.png`
                                        "
                                        class="hero-illustration-img hero-illustration-icon"
                                    />
                                </div>
                                <div class="column hero-specialty-description">
                                    <p class="hero-specialty-name">
                                        {{
                                            heroDetail.specialtyChangeName.name || heroDetail.specialtyChangeName.fileId
                                        }}
                                    </p>
                                </div>
                            </a>
                        </router-link>
                    </ul>
                    <hr />
                    <p>
                        <strong class="white">{{ heroDetail.name }}</strong> has a Specialty Change to
                        <strong class="white">{{
                            heroDetail.specialtyChangeName.name || heroDetail.specialtyChangeName.fileId
                        }}</strong
                        >. You need the unit to be level 50 before you can start the Specialty Change quests.
                    </p>
                </div>
            </section>

            <!-- hero illustraton -->
            <section class="section-container">
                <div class="section-box hero-illustration" v-lazy-container="{ selector: 'img' }">
                    <h1>Illustration</h1>
                    <hr />
                    <p>Icon:</p>
                    <img
                        :data-error="`${assetsUrl}/hero/_placeholder/icon_missing.png`"
                        :data-src="imageUrls.icon"
                        class="hero-illustration-img hero-illustration-icon"
                    />
                    <p>Battle Art:</p>
                    <img
                        :data-error="`${assetsUrl}/hero/_placeholder/full_missing.png`"
                        :data-src="imageUrls.full"
                        class="hero-illustration-img hero-illustration-battle-art"
                    />
                </div>
            </section>

            <!-- hero bg -->
            <section class="section-container">
                <div class="section-box">
                    <h1>Background</h1>
                    <hr />
                    <p class="hero-background">{{ heroDetail.background }}</p>
                </div>
            </section>

            <!-- hero relations -->
            <section class="section-container" v-if="heroDetail.relations.length">
                <div class="section-box">
                    <h1>Relations</h1>
                    <hr />
                    <ul class="hero-relations">
                        <router-link
                            :key="relation.name"
                            :to="`/hero/${relation.fileId}`"
                            tag="li"
                            v-for="relation in heroDetail.relations"
                            v-lazy-container="{ selector: 'img' }"
                        >
                            <a class="columns is-mobile">
                                <div class="column hero-relationship-icon">
                                    <img
                                        :data-error="`${assetsUrl}/hero/_placeholder/icon_missing.png`"
                                        :data-src="`${assetsUrl}/hero/${relation.fileId}/icon.png`"
                                        class="hero-illustration-img hero-illustration-icon"
                                    />
                                </div>
                                <div class="column hero-relationship-description">
                                    <p class="hero-relationship-name">{{ relation.name }}</p>
                                    <p :class="heroRelationClass(relation.relationType)"></p>
                                </div>
                            </a>
                        </router-link>
                    </ul>
                    <hr />
                    <p>
                        Observation: {{ heroDetail.name }} might have more relationships, but only the heroes which we
                        currently have data are present, in order to present you with a link you can click and go to
                        their detail page. As the database grows, the other ones will automatically be shown.
                    </p>
                </div>
            </section>
        </aside>
    </div>
</template>

<script>
import LoadingMessage from '@/js/components/general/LoadingMessage';
import { Tabs, Tab } from 'vue-tabs-component';
import Modernizr from 'modernizr';
import { gaPageView } from '@/js/util/Analytics';

export default {
    inject: ['assetsUrl'],
    computed: {
        imageUrls() {
            return {
                full: `${this.assetsUrl}/hero/${this.heroDetail.fileId}/full.png`,
                small: `${this.assetsUrl}/hero/${this.heroDetail.fileId}/small.png`,
                icon: `${this.assetsUrl}/hero/${this.heroDetail.fileId}/icon.png`,
            };
        },
        webpSupport() {
            return Modernizr.webp && Modernizr.webp.animation;
        },
    },
    data() {
        return {
            showDetails: false,
            isLoading: false,
            heroDetail: {
                name: '',
                rarity: '',
                classType: '',
                element: '',
                zodiac: '',
                specialtyChangeName: '',
                selfSkillBarName: '',
                background: '',
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
                    name: '',
                    description: '',
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
    components: {
        LoadingMessage,
        Tabs,
        Tab,
    },
    methods: {
        updateDocTitle() {
            if (document && document.title) {
                document.title = `${this.heroDetail.name} ${document.title}`;
            }
            gaPageView(this.$ga);
        },
        skillClasses(skill) {
            let soulBurnNum = parseInt(skill.soulBurn, 10);
            let soulsIcons = !isNaN(soulBurnNum) && soulBurnNum / 10 ? soulBurnNum / 10 : 0;
            let consumeSoulClass = soulsIcons ? `consume-soul-${soulsIcons}` : '';
            let awakenUpgrade = skill.awakenUpgrade == true;
            let isPassive = skill.isPassive == true;

            return {
                'upgrade-passive': awakenUpgrade && isPassive,
                'upgrade-active': awakenUpgrade && !isPassive,
                [consumeSoulClass]: soulsIcons ? true : false,
            };
        },
        skillImage(skill = {}, skillPos = 1) {
            let passive = skill.isPassive == true ? 'p' : '';
            return `${this.assetsUrl}/hero/${this.heroDetail.fileId}/sk_${skillPos}${passive}.png`;
        },
        skillCooldown(skill = {}) {
            let cdNum = parseInt(skill.cooldown, 10);
            return !isNaN(cdNum) && cdNum ? true : false;
        },
        heroRelationClass(type = '') {
            return type ? `hero-relation-${type}` : '';
        },
    },
    mounted() {
        let fileId = this.$route.params.fileId;

        this.isLoading = true;
        this.showDetails = false;

        this.$store
            .dispatch('hero/getSingle', { fileId })
            .then((heroDetail) => {
                this.heroDetail = heroDetail;
                this.showDetails = true;
            })
            .catch(() => {
                this.showDetails = false;
            })
            .then(() => {
                this.isLoading = false;
                this.updateDocTitle();
            });
    },
};
</script>
