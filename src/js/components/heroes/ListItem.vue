<template>
    <router-link :to="detailUrl" class="column" tag="li">
        <a class="hero-list-card">
            <div :class="heroClass" class="no-text">
                <h2>{{ hero.name }}</h2>
            </div>
            <img class="hero-list-card-image" v-lazy="imageUrls" :key="hero.name" />
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
                src: `${this.assetsUrl}/hero/${this.hero.fileId}/small.png`,
                error: `${this.assetsUrl}/hero/_placeholder/small_missing.png`,
            };
        },
    },
};
</script>
