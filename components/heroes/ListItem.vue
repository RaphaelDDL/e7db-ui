<template>
    <nuxt-link
        :to="
            localePath({
                name: 'hero-id',
                params: {
                    id: hero.fileId,
                },
            })
        "
        class="column"
        tag="li"
    >
        <a class="hero-list-card">
            <div :class="heroClass" class="no-text">
                <h2>{{ hero.name }}</h2>
            </div>
            <img :key="hero.name" v-lazy="imageUrls" class="hero-list-card-image" />
            <div :class="[starRating, heroElement]" class="no-text small"></div>
        </a>
        <div class="hero-list-background"></div>
    </nuxt-link>
</template>

<script>
export default {
    inject: ["assetsUrl"],
    props: ["hero"],
    computed: {
        heroClass() {
            return `hero-class-${this.hero.role}`;
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
