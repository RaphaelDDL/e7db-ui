<template>
    <div>
        <nuxt-link :to="localePath('heroes')">&lt; {{ $t("heroes.back") }}</nuxt-link>

        <ProfileExtended
            :id="heroDetail._id"
            :name="heroDetail.name"
            :image-urls="imageUrls"
            :rarity="heroDetail.rarity"
            :role="heroDetail.role"
            :attribute="heroDetail.attribute"
            :zodiac="heroDetail.zodiac"
            :get_line="heroDetail.get_line"
            :description="heroDetail.description"
        />

        <div class="columns hero-detail-container">
            <LoadingMessage :is-loading="isLoading" class="column" />

            <main v-if="!isLoading && showDetails" class="column is-three-fifths">
                <Skills
                    :id="heroDetail._id"
                    :skills-list="heroDetail.skills"
                    :self-skill-bar-name="heroDetail.selfSkillBarName"
                />

                <ExclusiveEquipment
                    v-if="heroDetail.ex_equip && heroDetail.ex_equip.length"
                    :id="heroDetail._id"
                    :skills-list="heroDetail.skills"
                    :exclusive-equipment-list="heroDetail.ex_equip"
                    :hero-stats-class="heroStatsClass"
                />

                <Awakening :awakening-list="heroDetail.awakening" :hero-stats-class="heroStatsClass" />

                <Imprint
                    :memory-imprint-formation="heroDetail.memoryImprintFormation"
                    :memory-imprint="heroDetail.memoryImprint"
                    :hero-stats-class="heroStatsClass"
                />

                <Stats :stats="heroDetail.stats" :hero-stats-class="heroStatsClass" />
            </main>
            <aside v-if="!isLoading && showDetails" class="column is-two-fifths">
                <Lore v-if="heroDetail.background" :background="heroDetail.background" />

                <SpecialtyChange
                    v-if="heroDetail.specialtyChangeName"
                    :specialty-change-name="heroDetail.specialtyChangeName"
                    :name="heroDetail.name"
                />

                <Camping
                    v-if="heroDetail.camping && heroDetail.camping.options && heroDetail.camping.options.length"
                    :camping="heroDetail.camping"
                />

                <SpecialtySkill
                    v-if="heroDetail.specialtySkill && heroDetail.specialtySkill.name"
                    :specialty-skill="heroDetail.specialtySkill"
                />

                <Relations
                    v-if="heroDetail.relations && heroDetail.relations.length"
                    :relations="heroDetail.relations"
                />

                <Voices
                    v-if="heroDetail.voiceList && heroDetail.voiceList.length"
                    :id="heroDetail._id"
                    :voice-list="heroDetail.voiceList"
                />
            </aside>
        </div>
    </div>
</template>

<script>
// import Modernizr from 'modernizr';
import LoadingMessage from "~/components/general/LoadingMessage";
import { mountedPageView } from "~/util/vueMixins";
import { headMetaTags } from "~/util/Utils";
import HeroComponents from "~/components/hero";

export default {
    components: {
        LoadingMessage,
        ...HeroComponents,
    },
    mixins: [mountedPageView],
    inject: ["assetsUrl"],
    async asyncData({ params, store, redirect }) {
        const [heroDetail, itemList] = await Promise.all([
            store.dispatch("hero/getSingle", { fileId: params.id }).catch(error => {
                return error;
            }),
            store.dispatch("item/getList").catch(error => {
                return error;
            }),
        ]);
        if (!heroDetail || (heroDetail && !heroDetail.name)) {
            return redirect(302, "/heroes");
        }
        if (!itemList) {
            // do nothing
        }
        return {
            isLoading: false,
            heroDetail,
            showDetails: true,
        };
    },
    data() {
        return {
            showDetails: false,
            isLoading: true,
            heroDetail: {},
        };
    },
    computed: {
        imageUrls() {
            return {
                full: `${this.assetsUrl}/hero/${this.heroDetail._id}/full.png`,
                small: `${this.assetsUrl}/hero/${this.heroDetail._id}/small.png`,
                icon: `${this.assetsUrl}/hero/${this.heroDetail._id}/icon.png`,
            };
        },
        // webpSupport() {
        //     return Modernizr.webp && Modernizr.webp.animation;
        // },
    },
    methods: {
        heroStatsClass(type = "") {
            return type ? `stat-icon-${type}` : "";
        },
    },
    head() {
        const heroName = this.heroDetail && this.heroDetail.name ? this.heroDetail.name : "";
        const role = this.heroDetail && this.heroDetail.role ? this.heroDetail.role : "";
        return headMetaTags(
            {
                title: `${heroName} | ${this.$t("links.heroes")}${
                    this.$i18n.locale !== "en" ? " | " + this.$t("gameName") : ""
                }`,
                description: `See detailed information about ${role} ${heroName} Hero in EpicSeven game, including Artwork, Rarity, Class, Zodiac Sign, Attributes, Skills and their effects, Awakening and more!`,
                image: this.heroDetail && this.heroDetail._id ? this.imageUrls.icon : "",
            },
            this
        );
    },
};
</script>
