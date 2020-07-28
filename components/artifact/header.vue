<template>
    <div>
        <nuxt-link :to="localePath('artifacts')">&lt; {{ $t("artifacts.back") }}</nuxt-link>
        <hr class="boxBorderHr" />
        <section class="section-container hero-title">
            <div class="columns is-mobile">
                <div class="column is-three-fifths hero-name">
                    <h1>{{ name }}</h1>
                </div>
                <div class="column is-two-fifths hero-thumb">
                    <img
                        v-lazy="{
                            src: imageUrls.small,
                            error: `${assetsUrl}/artifact/_placeholder/small_missing.jpg`,
                        }"
                        alt="small art"
                    />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    inject: ["assetsUrl"],
    props: {
        imageUrls: {
            type: Object,
            default: () => {},
        },
        name: {
            type: String,
            default: "",
        },
    },
};
</script>
