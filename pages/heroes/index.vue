<template>
    <div class="columns">
        <main class="column is-12">
            <section class="section-container">
                <LoadingMessage :is-loading="isLoading" />
                <div v-if="!isLoading && list && list.length" class="section-box hero-list">
                    <ListFilters
                        :filters="filters"
                        :buffs-list="buffsList"
                        page-type="hero"
                        @filters:clear="clearSelection"
                    />

                    <h4 v-if="filteredHeroList && !filteredHeroList.length">
                        {{ $t("filters.noResult") }}
                    </h4>
                    <ul class="columns is-mobile hero-list-ul">
                        <ListItem v-for="hero in filteredHeroList" :id="hero._id" :key="hero._id" :hero="hero" />
                    </ul>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "~/components/heroes/ListItem";
import ListFilters from "~/components/heroes/ListFilters";
import { mountedPageView } from "~/util/vueMixins";
import LoadingMessage from "~/components/general/LoadingMessage";
import {
    getByKeyword,
    getByRarity,
    getByClass,
    getByElement,
    getByBuffDebuff,
    getByZodiac,
    getByImprint,
    getByImprintSelf,
    headMetaTags,
} from "~/util/Utils";

const filterDefaults = {
    keyword: "",
    rarity: 0,
    heroClass: "",
    element: "",
    zodiac: "",
    buffs: [],
    debuffs: [],
    common: [],
    imprint: "",
    imprintSelf: "",
};

export default {
    components: {
        ListItem,
        ListFilters,
        LoadingMessage,
    },
    mixins: [mountedPageView],
    inject: ["assetsUrl"],

    async asyncData({ store }) {
        const [heroList, buffsList] = await Promise.all([
            store.dispatch("hero/getList").catch((error) => {
                return error;
            }),
            store.dispatch("buffs/getList").catch((error) => {
                return error;
            }),
        ]);

        return {
            isLoading: false,
            heroList,
            buffsList,
        };
    },

    data() {
        return {
            isLoading: false,
            filters: { ...filterDefaults },
        };
    },
    head() {
        return headMetaTags(
            {
                title: `${this.$t("links.heroes")}${this.$i18n.locale !== "en" ? " | " + this.$t("gameName") : ""}`,
                description:
                    "See information about all Heroes in EpicSeven game, including Rarity, Class, Element and more!",
                image: `${this.assetsUrl}/website/journal_hero.png`,
            },
            this
        );
    },
    computed: {
        ...mapGetters("hero", ["list"]),
        filteredHeroList() {
            const {
                element,
                heroClass,
                zodiac,
                keyword,
                rarity,
                buffs,
                debuffs,
                common,
                imprint,
                imprintSelf,
            } = this.filters;
            return getByImprintSelf(
                getByImprint(
                    getByZodiac(
                        getByBuffDebuff(
                            getByRarity(
                                getByKeyword(getByClass(getByElement(this.list, element), heroClass), keyword),
                                rarity
                            ),
                            [...buffs, ...debuffs, ...common]
                        ),
                        zodiac
                    ),
                    imprint
                ),
                imprintSelf
            );
        },
    },

    methods: {
        clearSelection() {
            this.filters = { ...filterDefaults };
        },
    },
};
</script>
