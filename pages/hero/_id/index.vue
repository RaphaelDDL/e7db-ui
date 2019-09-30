<template>
    <div>
        <nuxt-link :to="localePath('heroes')">&lt; {{ $t("heroes.back") }}</nuxt-link>

        <ProfileExtended
            :id="heroDetail._id"
            :name="heroDetail.name"
            :image-urls="imageUrls"
            :rarity="heroDetail.rarity"
            :class-type="heroDetail.classType"
            :element="heroDetail.element"
            :zodiac="heroDetail.zodiac"
            :summon-quote="heroDetail.summonQuote"
            :description="heroDetail.description"
        />

        <div class="columns hero-detail-container">
            <LoadingMessage :is-loading="isLoading" class="column" />

            <main v-if="!isLoading && showDetails" class="column is-three-fifths">
                <!-- <nuxt-link :to="localePath('heroes')">&lt; {{ $t("heroes.back") }}</nuxt-link>
                    <hr class="boxBorderHr" />
                    -->
                <!-- <Header :image-urls="imageUrls" :name="heroDetail.name" /> -->

                <!-- <Profile
                        :rarity="heroDetail.rarity"
                        :class-type="heroDetail.classType"
                        :element="heroDetail.element"
                        :zodiac="heroDetail.zodiac"
                    /> -->

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

                <!-- <Artwork :image-urls="imageUrls" /> -->

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
    data() {
        return {
            showDetails: false,
            isLoading: true,
            heroDetail: {
                name: "",
                rarity: "",
                classType: "",
                element: "",
                zodiac: "",
                specialtyChangeName: "",
                selfSkillBarName: "",
                background: "",
                relations: [],
                stats: {
                    base: {
                        cp: 0,
                        atk: 0,
                        hp: 0,
                        spd: 0,
                        def: 0,
                        chc: 0,
                        chd: 0,
                        eff: 0,
                        efr: 0,
                        dac: 0,
                    },
                    max: {
                        cp: 0,
                        atk: 0,
                        hp: 0,
                        spd: 0,
                        def: 0,
                        chc: 0,
                        chd: 0,
                        eff: 0,
                        efr: 0,
                        dac: 5,
                    },
                },
                skills: [],
                specialtySkill: {
                    name: "",
                    description: "",
                    dispatch: [],
                    enhancement: [],
                    stats: {
                        command: 0,
                        charm: 0,
                        politics: 0,
                    },
                },
                memoryImprintFormation: {
                    north: false,
                    south: false,
                    east: false,
                    west: false,
                },
                memoryImprint: [],
                awakening: [],
            },
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
    head() {
        const heroName = this.heroDetail && this.heroDetail.name ? this.heroDetail.name : "";
        const classType = this.heroDetail && this.heroDetail.classType ? this.heroDetail.classType : "";
        return headMetaTags(
            {
                title: `${heroName} | Hero`,
                description: `See detailed information about ${classType} ${heroName} Hero in EpicSeven game, including Artwork, Rarity, Class, Zodiac Sign, Attributes, Skills and their effects, Awakening and more!`,
                image: this.heroDetail && this.heroDetail._id ? this.imageUrls.icon : "",
            },
            this
        );
    },
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
    methods: {
        heroStatsClass(type = "") {
            return type ? `stat-icon-${type}` : "";
        },
    },
};
</script>
