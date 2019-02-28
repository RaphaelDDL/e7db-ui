<template>
    <router-link :to="detailUrl" class="column" tag="li">
        <a class="artifact-list-card">
            <div :class="heroExclusive" class="artifact-name no-text">
                <h2>{{ artifact.name }}</h2>
            </div>
            <img v-lazy="imageUrls.small" class="artifact-small artifact-list-card-image" :key="artifact.name" />
            <div class="artifact-icon">
                <img
                    v-lazy="imageUrls.icon"
                    class="artifact-icon-img artifact-list-card-image"
                    :key="`${artifact.name}_icon`"
                />
                <div :class="starRating" class="artifact-rarity"></div>
            </div>
        </a>
    </router-link>
</template>

<script>
export default {
    inject: ['assetsUrl'],
    props: ['artifact'],
    computed: {
        detailUrl() {
            return `/artifact/${this.artifact.fileId}`;
        },
        starRating() {
            return `star-rating-${this.artifact.rarity}`;
        },
        imageUrls() {
            return {
                small: {
                    src: `${this.assetsUrl}/artifact/${this.artifact.fileId}/small.jpg`,
                    error: `${this.assetsUrl}/artifact/_placeholder/small_missing.jpg`,
                },
                icon: {
                    src: `${this.assetsUrl}/artifact/${this.artifact.fileId}/icon.png`,
                    error: `${this.assetsUrl}/artifact/_placeholder/icon_missing.jpg`,
                },
            };
        },
        heroExclusive() {
            let heroExclusive = '';
            this.artifact.exclusive.forEach((heroClass) => {
                heroExclusive = `${heroExclusive} hero-class-${heroClass}`;
            });
            return heroExclusive;
        },
    },
};
</script>
