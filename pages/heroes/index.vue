<template>
    <div class="columns">
        <main class="column is-12">
            <section class="section-container">
                <LoadingMessage :is-loading="isLoading" />
                <div v-if="!isLoading && list && list.length" class="section-box hero-list">
                    <ListFilters :filters="filters" page-type="hero" @filters:clear="clearSelection" />

                    <h4 v-if="filteredHeroList && !filteredHeroList.length">
                        {{ $t("filters.noResult") }}
                    </h4>
                    <ul class="columns is-mobile hero-list-ul">
                        <ListItem v-for="hero in filteredHeroList" :id="hero.fileId" :key="hero.fileId" :hero="hero" />
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
    imprint: "",
};

export default {
    components: {
        ListItem,
        ListFilters,
        LoadingMessage,
    },
    mixins: [mountedPageView],
    inject: ["assetsUrl"],
    data() {
        return {
            isLoading: false,
            filters: { ...filterDefaults },
        };
    },
    // use this.list
    computed: {
        ...mapGetters("hero", ["list"]),
        filteredHeroList() {
            return getByImprint(
                getByZodiac(
                    getByBuffDebuff(
                        getByRarity(
                            getByKeyword(
                                getByClass(getByElement(this.list, this.filters.element), this.filters.heroClass),
                                this.filters.keyword
                            ),
                            this.filters.rarity
                        ),
                        [...this.filters.buffs, ...this.filters.debuffs]
                    ),
                    this.filters.zodiac
                ),
                this.filters.imprint
            );
        },
    },
    asyncData({ store }) {
        return store.dispatch("hero/getList");
    },

    mounted() {
        if (!this.list || (this.list && !this.list.length)) {
            this.isLoading = true;
            this.$store.dispatch("hero/getList").then(() => {
                this.isLoading = false;
            });
        }
    },

    methods: {
        clearSelection() {
            this.filters = { ...filterDefaults };
        },
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
};
</script>
