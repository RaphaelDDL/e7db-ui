<template>
    <div>
        <nuxt-link :to="localePath('heroes')">&lt; {{ $t("heroes.back") }}</nuxt-link>

        <ProfileExtended
            :id="heroDetail._id"
            :cid="heroDetail.id"
            :attribute="heroDetail.attribute"
            :description="heroDetail.description"
            :get_line="heroDetail.get_line"
            :image-urls="imageUrls"
            :name="heroDetail.name"
            :rarity="heroDetail.rarity"
            :role="heroDetail.role"
            :zodiac="heroDetail.zodiac"
        />

        <div class="columns hero-detail-container">
            <LoadingMessage :is-loading="isLoading" class="column" />

            <main v-if="!isLoading && showDetails" class="column is-three-fifths">
                <Skills
                    :id="heroDetail._id"
                    :cid="heroDetail.id"
                    :skills-list="heroDetail.skills"
                    :buffs="heroDetail.buffs"
                    :debuffs="heroDetail.debuffs"
                    :common="heroDetail.common"
                />

                <ExclusiveEquipment
                    v-if="heroDetail.ex_equip && heroDetail.ex_equip.length"
                    :id="heroDetail._id"
                    :exclusive-equipment-list="heroDetail.ex_equip"
                    :cid="heroDetail.id"
                    :skills-list="heroDetail.skills"
                />

                <Awakening :zodiac_tree="heroDetail.zodiac_tree" />

                <Imprint :devotion="heroDetail.devotion" :self_devotion="heroDetail.self_devotion" />

                <LegacyStats :stats="heroDetail.calculatedStatus" />
            </main>
            <aside v-if="!isLoading && showDetails" class="column is-two-fifths">
                <Lore v-if="heroDetail.story" :background="heroDetail.story" />

                <SpecialtyChange
                    v-if="heroDetail.specialtyChangeName"
                    :name="heroDetail.name"
                    :specialty-change-name="heroDetail.specialtyChangeName"
                />

                <SpecialtySkill
                    v-if="heroDetail.specialty && heroDetail.specialty.name"
                    :specialty="heroDetail.specialty"
                />

                <Camping
                    v-if="heroDetail.camping && heroDetail.camping.topics && heroDetail.camping.topics.length"
                    :camping="heroDetail.camping"
                />

                <!-- <Relations
                    :relations="heroDetail.relations"
                    v-if="heroDetail.relations && heroDetail.relations.length"
                /> -->

                <!-- <Voices
                    :id="heroDetail._id"
                    :voice-list="heroDetail.voiceList"
                    v-if="heroDetail.voiceList && heroDetail.voiceList.length"
                /> -->
            </aside>
        </div>
    </div>
</template>

<script>
// import Modernizr from 'modernizr';
import LoadingMessage from "~/components/general/LoadingMessage";
import { mountedPageView } from "~/util/vueMixins";
import { headMetaTags, trueRole, trueElement } from "~/util/Utils";
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
            store.dispatch("hero/getSingle", { _id: params.id }).catch(error => {
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
                full: this.heroDetail.assets.image,
                small: this.heroDetail.assets.thumbnail,
                icon: this.heroDetail.assets.icon,
            };
        },
        // webpSupport() {
        //     return Modernizr.webp && Modernizr.webp.animation;
        // },
    },
    head() {
        const heroName = this.heroDetail?.name ?? "";
        const role = trueRole(this.heroDetail?.role) ?? "";
        const element = trueElement(this.heroDetail?.attribute) ?? "";
        return headMetaTags(
            {
                title: `${heroName} | ${this.$t("links.heroes")}${
                    this.$i18n.locale !== "en" ? " | " + this.$t("gameName") : ""
                }`,
                description: `See detailed information about ${element} ${role} ${heroName} Hero in EpicSeven game, including Artwork, Rarity, Class, Zodiac Sign, Attributes, Skills and their effects, Awakening and more!`,
                image: this.heroDetail?.id ? this.imageUrls.icon : "",
            },
            this
        );
    },
};
</script>
