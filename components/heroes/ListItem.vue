<template>
    <nuxt-link
        :to="
            localePath({
                name: 'hero-id',
                params: {
                    id: hero._id,
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
            <img :key="hero._id" v-lazy="imageUrls" class="hero-list-card-image" />
            <div :class="[starRating, heroElement]" class="no-text small"></div>
        </a>
        <div class="hero-list-background"></div>
    </nuxt-link>
</template>

<script>
import { trueRole, trueElement, trueZodiac } from "~/util/Utils";

export default {
    inject: ["assetsUrl"],
    props: ["hero"],
    computed: {
        heroClass() {
            return `hero-class-${trueRole(this.hero.role)}`;
        },
        heroElement() {
            return `hero-element-${trueElement(this.hero.attribute)}`;
        },
        starRating() {
            return `star-rating-${this.hero.rarity}`;
        },
        imageUrls() {
            return {
                src: this.hero?.assets?.thumbnail,
                error: `${this.assetsUrl}/hero/_placeholder/small_missing.png`,
            };
        },
    },
};
</script>
