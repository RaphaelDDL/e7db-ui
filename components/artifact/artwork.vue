<template>
    <section class="section-container">
        <div class="section-box hero-illustration">
            <h1>{{ $t("artifacts.image") }}</h1>
            <hr />
            <div class="artifact-artwork">
                <img
                    v-lazy="{ src: imageUrls.icon, error: `${this.assetsUrl}/artifact/_placeholder/icon_missing.png` }"
                    class="artifact-image-icon"
                />
                <img
                    v-lazy="{ src: imageUrls.full, error: `${this.assetsUrl}/artifact/_placeholder/full_missing.png` }"
                    class="artifact-image-full"
                />
            </div>
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
