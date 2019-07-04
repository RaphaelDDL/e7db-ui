<template>
    <section class="section-container">
        <div class="section-box">
            <h1>{{ $t("heroes.lore") }}</h1>
            <hr />
            <p class="hero-background">{{ background }}</p>
        </div>
    </section>
</template>

<script>
export default {
    // inject: ["assetsUrl"],
    props: {
        background: {
            type: String,
            default: "",
        },
    },
};
</script>
