<template>
    <section class="section-container">
        <div class="section-box hero-illustration">
            <h1>{{ $t("heroes.image") }}</h1>
            <hr />
            <p>{{ $t("heroes.icon") }}:</p>
            <img
                v-lazy="{ src: imageUrls.icon, error: `${assetsUrl}/hero/_placeholder/icon_missing.png` }"
                class="hero-illustration-img hero-illustration-icon"
            />
            <p>{{ $t("heroes.battleArt") }}:</p>
            <img
                v-lazy="{ src: imageUrls.full, error: `${assetsUrl}/hero/_placeholder/full_missing.png` }"
                class="hero-illustration-img hero-illustration-battle-art"
            />
        </div>
    </section>
</template>

<script>
export default {
    inject: ["assetsUrl"],
    props: {
        imageUrls: {
            type: Object,
            default: () => {},
        },
    },
};
</script>
