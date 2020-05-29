<template>
    <section class="section-container">
        <div class="section-box hero-stats">
            <h1>Camping</h1>
            <!-- <h1>{{ $t("heroes.lore") }}</h1> -->
            <hr />
            <div class="hero-stats columns">
                <div class="column is-half hero-stats-container-base">
                    <h4>
                        Personalities
                        <!-- {{ $t("heroes.imprintPosition") }} -->
                    </h4>
                    <ul v-if="camping.personalities && camping.personalities.length" class="imprint-list">
                        <template v-for="personality in camping.personalities">
                            <li :key="`${personality}`" class="columns is-mobile">
                                <div class="column is-full hero-stats-type strong">
                                    {{ personality }}
                                </div>
                            </li>
                        </template>
                    </ul>
                    <div v-else>N/A</div>
                </div>
                <div v-if="camping.topics && camping.topics.length" class="column is-half hero-stats-container-50">
                    <!-- <h4>{{ $t("heroes.imprintBonus") }}</h4> -->
                    <h4>Topics</h4>
                    <ul class="imprint-list">
                        <template v-for="topic in camping.topics">
                            <li :key="`${topic}`" class="columns is-mobile">
                                <div class="column is-full hero-stats-type strong">
                                    {{ topic }}
                                </div>
                            </li>
                        </template>
                    </ul>
                </div>
                <div v-else>N/A</div>
            </div>

            <h4>Values</h4>
            <ul v-if="camping.values">
                <li v-for="campValue in Object.keys(camping.values)" :key="campValue" class="columns is-mobile">
                    <div class="column is-half hero-stats-type">
                        {{ campValue }}
                    </div>
                    <div class="column is-half hero-stats-value">
                        {{ camping.values[campValue] }}
                    </div>
                </li>
            </ul>
            <div v-else>N/A</div>
        </div>
    </section>
</template>

<script>
export default {
    // inject: ["assetsUrl"],
    props: {
        camping: {
            type: Object,
            default: () => {},
        },
    },
};
</script>
