<template>
    <section class="hero-summoning section-box">
        <img v-lazy="fullbodyImg" class="fullbody-fit" />

        <div class="profile">
            <span
                v-if="attribute"
                :class="`hero-element-${attribute}`"
                class="no-text"
                :title="$t(`elements.${attribute}`) + ' ' + $t('filters.element')"
            >
                {{ $t(`elements.${attribute}`) }}
            </span>
            &nbsp; &nbsp; &nbsp;
            <span
                v-if="role"
                :class="`hero-class-${role}`"
                class="no-text"
                :title="$t(`classes.${role}`) + ' ' + $t('heroes.classType')"
            >
                {{ $t(`classes.${role}`) }}
            </span>
            &nbsp; &nbsp; &nbsp;
            <span
                v-if="zodiac"
                :class="`hero-sign-${trueSign}`"
                class="no-text"
                :title="$t(`zodiacSigns.${trueSign}`) + ' ' + $t('filters.zodiac')"
            >
                {{ $t(`zodiacSigns.${trueSign}`) }}
            </span>
            <br />
            <h1>
                {{ name }}
                <span :class="`star-rating-${rarity}`" :title="`${rarity} star ` + $t('heroes.grade')"></span>
            </h1>
            <p v-if="description" class="summon-2line">
                {{ description }}
            </p>
        </div>

        <div v-if="get_line" class="summon-quote">
            {{ get_line }}
        </div>
    </section>
</template>

<script>
import {trueZodiac} from '~/util/Utils';

export default {
    inject: ["assetsUrl"],
    props: {
        id: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        rarity: {
            type: Number,
            default: 1,
        },
        zodiac: {
            type: String,
            default: "",
        },
        attribute: {
            type: String,
            default: "",
        },
        get_line: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        role: {
            type: String,
            default: "",
        },
        imageUrls: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        fullbodyImg() {
            return {
                error: `${this.assetsUrl}/hero/${this.id}/full.png`,
                src: `${this.assetsUrl}/herofull/${this.id}.png`,
                loading: `${this.assetsUrl}/website/loading.gif`,
            };
        },
        trueSign(){
            const { zodiac } = this;
            return trueZodiac(zodiac)
        }
    },
};
</script>
