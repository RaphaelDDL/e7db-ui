<template>
    <router-link :to="detailUrl" class="column" tag="li" v-lazy-container="{ selector: 'img' }">
        <a class="hero-list-card">
            <div :class="heroClass" class="no-text">
                <h2>{{ hero.name }}</h2>
            </div>
            <img :data-error="`${this.assetsUrl}/hero/_placeholder/small_missing.png`" :data-src="imageUrls.small" />
            <div :class="[starRating, heroElement]" class="no-text small"></div>
        </a>
        <div class="hero-list-background"></div>
    </router-link>
</template>

<script>
export default {
    inject: ['assetsUrl'],
    props: ['hero'],
    computed: {
        detailUrl() {
            return `/hero/${this.hero.fileId}`;
        },
        heroClass() {
            return `hero-class-${this.hero.classType}`;
        },
        heroElement() {
            return `hero-element-${this.hero.element}`;
        },
        starRating() {
            return `star-rating-${this.hero.rarity}`;
        },
        imageUrls() {
            return {
                small: `${this.assetsUrl}/hero/${this.hero.fileId}/small.png`,
            };
        },
    },
};
</script>
