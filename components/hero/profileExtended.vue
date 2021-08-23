<template>
    <section v-lazy:background-image="bgImage" class="hero-summoning section-box">
        <link rel="preload" :href="fullbodyImg.src" as="image" crossorigin media="(min-width: 768px)" />
        <img v-lazy="fullbodyImg" class="fullbody-fit" :alt="name" />

        <div class="profile">
            <span
                v-if="attribute"
                :class="`hero-element-${trueElement}`"
                class="no-text"
                :title="$t(`elements.${trueElement}`) + ' ' + $t('filters.element')"
            >
                {{ $t(`elements.${trueElement}`) }}
            </span>
            &nbsp; &nbsp; &nbsp;
            <span
                v-if="role"
                :class="`hero-class-${trueRole}`"
                class="no-text"
                :title="$t(`classes.${trueRole}`) + ' ' + $t('heroes.classType')"
            >
                {{ $t(`classes.${trueRole}`) }}
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
import { trueRole, trueElement, trueZodiac } from "~/util/Utils";

export default {
    inject: ["assetsUrl"],
    props: {
        cid: {
            type: String,
            default: "",
        },
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
                error: `${this.assetsUrl}/_source/face/${this.cid}_su.png`,
                src: `${this.assetsUrl}/herofull/${this.id}.png`,
                loading: `${this.assetsUrl}/website/loading.gif`,
            };
        },
        bgImage() {
            return `${this.assetsUrl}/website/summon/gacha_get_bg0_e7db.jpg`;
        },
        trueSign() {
            const { zodiac } = this;
            return trueZodiac(zodiac);
        },
        trueElement() {
            const { attribute } = this;
            return trueElement(attribute);
        },
        trueRole() {
            const { role } = this;
            return trueRole(role);
        },
    },
};
</script>
