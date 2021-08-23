<template>
    <section class="section-container">
        <div class="section-box hero-stats">
            <h1>{{ $t("heroes.specialtySkill.header") }}</h1>
            <hr />
            <div class="skill-icon">
                <img
                    v-lazy="{ src: `${specialty.assets.icon}`, error: `${assetsUrl}/hero/_placeholder/sk_missing.png` }"
                    :alt="specialty.name"
                    width="74"
                    height="74"
                />
            </div>
            <h2 class="skill-name">
                {{ specialty.name }}
            </h2>
            <div class="skill-sub-desc">
                <div v-if="specialty.type && specialty.type.name" class="skill-soul-acquire">
                    {{ specialty.type.name }}
                </div>
                <div v-if="specialty.effect_value" class="skill-bonus">
                    {{ specialty.effect_type | noUnderscore(true) }} {{ specialty.effect_value | toPercent }}
                </div>
            </div>
            <div v-if="specialty.type && specialty.type.description" class="skill-desc">
                {{ specialty.type.description }}
            </div>
            <div v-if="specialty.description" class="skill-desc">
                {{ specialty.description }}
            </div>
            <hr />
            <ul v-lazy-container="{ selector: 'img' }">
                <li class="columns is-mobile">
                    <div class="column is-half hero-stats-type">
                        <span class="stat-icon-command legacy"></span>
                        {{ $t("heroes.specialtySkill.command") }}
                    </div>
                    <div class="column is-half hero-stats-value">
                        {{ specialty.command }}
                    </div>
                </li>
                <li class="columns is-mobile">
                    <div class="column is-half hero-stats-type">
                        <span class="stat-icon-charm legacy"></span>
                        {{ $t("heroes.specialtySkill.charm") }}
                    </div>
                    <div class="column is-half hero-stats-value">
                        {{ specialty.charm }}
                    </div>
                </li>
                <li class="columns is-mobile">
                    <div class="column is-half hero-stats-type">
                        <span class="stat-icon-politics legacy"></span>
                        {{ $t("heroes.specialtySkill.politics") }}
                    </div>
                    <div class="column is-half hero-stats-value">
                        {{ specialty.politics }}
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    inject: ["assetsUrl"],
    props: {
        specialty: {
            type: Object,
            default: () => {},
        },
    },
};
</script>
