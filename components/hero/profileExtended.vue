<template>
    <section class="hero-summoning section-box">
        <img v-lazy="fullbodyImg" class="fullbody-fit" />

        <div class="profile">
            <span
                v-if="element"
                :class="`hero-element-${element}`"
                class="no-text"
                :title="$t(`elements.${element}`) + ' ' + $t('filters.element')"
            >
                {{ $t(`elements.${element}`) }}
            </span>
            &nbsp; &nbsp; &nbsp;
            <span
                v-if="classType"
                :class="`hero-class-${classType}`"
                class="no-text"
                :title="$t(`classes.${classType}`) + ' ' + $t('heroes.classType')"
            >
                {{ $t(`classes.${classType}`) }}
            </span>
            &nbsp; &nbsp; &nbsp;
            <span
                v-if="zodiac"
                :class="`hero-sign-${zodiac}`"
                class="no-text"
                :title="$t(`zodiacSigns.${zodiac}`) + ' ' + $t('filters.zodiac')"
            >
                {{ $t(`zodiacSigns.${zodiac}`) }}
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

        <div v-if="summonQuote" class="summon-quote">
            {{ summonQuote }}
        </div>
    </section>
</template>

<script>
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
        element: {
            type: String,
            default: "",
        },
        summonQuote: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        classType: {
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
    },
};
</script>
