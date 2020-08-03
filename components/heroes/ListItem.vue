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
        <a class="hero-list-card" :class="`is-icon-${!!icon}`" :title="hero.name" v-bind="iconBgImage">
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
import { trueRole, trueElement, avatarBorder } from "~/util/Utils";

export default {
    inject: ["assetsUrl"],
    props: ["hero", "icon"],
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
                src: this.hero?.assets?.[this.icon ? "icon" : "thumbnail"],
                error: `${this.assetsUrl}/hero/_placeholder/small_missing.png`,
            };
        },
        iconBgImage() {
            if (!this.icon) {
                return {};
            }
            return {
                style: `background-image:url(${this.assetsUrl}/_source/item/border/${avatarBorder(this.icon)}.png)`,
            };
        },
    },
};
</script>
