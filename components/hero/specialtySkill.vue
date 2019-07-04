<template>
    <section class="section-container">
        <div class="section-box hero-stats">
            <h1>{{ $t("heroes.specialtySkill.header") }}</h1>
            <hr />
            <div class="skill-icon">
                <img v-lazy="{ src: `${assetsUrl}/hero/_placeholder/sk_missing.png` }" />
                <!-- <img v-lazy="{src:'',error:`${assetsUrl}/hero/_placeholder/sk_missing.png`}" /> -->
            </div>
            <h2 class="skill-name">
                {{ specialtySkill.name }}
            </h2>
            <div class="skill-sub-desc">
                <div v-if="specialtySkill.dispatch" class="skill-soul-acquire">
                    {{ specialtySkill.dispatch }}
                </div>
                <div v-if="specialtySkill.enhancement" class="skill-bonus">
                    {{ specialtySkill.enhancement }}
                </div>
            </div>
            <div v-if="specialtySkill.description" class="skill-desc">
                {{ specialtySkill.description }}
            </div>
            <hr />
            <ul v-if="specialtySkill.stats" v-lazy-container="{ selector: 'img' }">
                <li class="columns is-mobile">
                    <div class="column is-half hero-stats-type">
                        <span class="stat-icon-command"></span>
                        {{ $t("heroes.specialtySkill.command") }}
                    </div>
                    <div class="column is-half hero-stats-value">
                        {{ specialtySkill.stats.command }}
                    </div>
                </li>
                <li class="columns is-mobile">
                    <div class="column is-half hero-stats-type">
                        <span class="stat-icon-charm"></span>
                        {{ $t("heroes.specialtySkill.charm") }}
                    </div>
                    <div class="column is-half hero-stats-value">
                        {{ specialtySkill.stats.charm }}
                    </div>
                </li>
                <li class="columns is-mobile">
                    <div class="column is-half hero-stats-type">
                        <span class="stat-icon-politics"></span>
                        {{ $t("heroes.specialtySkill.politics") }}
                    </div>
                    <div class="column is-half hero-stats-value">
                        {{ specialtySkill.stats.politics }}
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
        specialtySkill: {
            type: Object,
            default: () => {},
        },
    },
};
</script>
