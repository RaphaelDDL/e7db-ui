<template>
    <section class="section-container">
        <div class="section-box hero-stats">
            <h1>Camping</h1>
            <!-- <h1>{{ $t("heroes.lore") }}</h1> -->
            <hr />
            <ul>
                <li v-for="campOptions in camping.options" :key="campOptions" class="columns is-mobile">
                    <div class="column is-half hero-stats-type">
                        {{ campOptions | noUnderscore(true) }}
                    </div>
                    <div class="column is-half hero-stats-value"></div>
                </li>
            </ul>
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
