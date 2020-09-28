<template>
    <section class="section-container">
        <div class="section-box">
            <h1>{{ $t("artifacts.skill") }}</h1>
            <hr />
            <!-- <div class="hero-stats columns">
                <div class="column is-half hero-stats-base">
                    <h4>{{ $t("artifacts.baseLevelSkill") }} (lv1, +0)</h4>
                    <ul>
                        <li class="columns is-mobile">
                            <div class="column is-12 hero-stats-type">
                                <p>{{ skillDescription.base }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="column is-half hero-stats-max">
                    <h4>{{ $t("artifacts.maxLevelSkill") }} (lv10, +30)</h4>
                    <ul>
                        <li class="columns is-mobile">
                            <div class="column is-12 hero-stats-type">
                                <p>{{ skillDescription.max }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> -->
            <input
                v-if="hasEnhancements"
                id="skillrange"
                v-model="currLevel"
                type="range"
                name="skill"
                min="1"
                max="11"
                step="1"
            />

            <p style="white-space: pre-wrap">{{ skillDescriptionModel }}</p>
        </div>
    </section>
</template>

<script>
export default {
    inject: ["assetsUrl"],
    props: {},

    computed: {},
};
</script>
