<template>
    <section class="section-container">
        <div class="section-box">
            <h1>{{ $t("artifacts.lore") }}</h1>
            <hr />
            <p v-for="loreParagraph in loreDescription" :key="loreParagraph">{{ loreParagraph }}</p>
        </div>
    </section>
</template>

<script>
export default {
    // inject: ["assetsUrl"],
    props: {
        loreDescription: {
            type: Array,
            default: () => [],
        },
    },
};
</script>
