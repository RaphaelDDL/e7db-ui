<template>
    <div class="columns">
        <main class="column is-12">
            <section class="section-container">
                <LoadingMessage :isLoading="isLoading" />
                <div class="section-box hero-list" v-if="!isLoading && list && list.length">
                    <ListFilters :filters="filters" @filters:clear="clearSelection" pageType="hero" />

                    <h4 v-if="filteredHeroList && !filteredHeroList.length">
                        No matches for your current filters :(
                    </h4>
                    <ul class="columns is-mobile hero-list-ul">
                        <ListItem :hero="hero" :id="hero.fileId" :key="hero.fileId" v-for="hero in filteredHeroList" />
                    </ul>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListItem from '@/js/components/heroes/ListItem';
import ListFilters from '@/js/components/general/ListFilters';
import LoadingMessage from '@/js/components/general/LoadingMessage';
import { gaPageView } from '@/js/util/Analytics';
import {
    debounce,
    getByKeyword,
    getByRarity,
    getByClass,
    getByElement,
    getByBuffDebuff,
    getByZodiac,
} from '@/js/util/Utils';

const e = document.createEvent('Event');
e.initEvent('scroll', true, true);

const filterDefaults = {
    keyword: '',
    rarity: 0,
    heroClass: '',
    element: '',
    zodiac: '',
    buffs: [],
    debuffs: [],
};

export default {
    data() {
        return {
            isLoading: false,
            filters: { ...filterDefaults },
        };
    },
    components: {
        ListItem,
        ListFilters,
        LoadingMessage,
    },
    // use this.list
    computed: {
        ...mapGetters('hero', ['list']),
        filteredHeroList() {
            return getByZodiac(
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
            );
        },
    },

    methods: {
        clearSelection() {
            this.filters = { ...filterDefaults };
        },
    },

    watch: {
        filters: {
            handler() {
                // debugger;
                // this.$store.dispatch('artifact/filterArtifactList', this.filters);
                debounce(window.dispatchEvent(e), 500);
            },
            deep: true,
        },
    },

    mounted() {
        if (!this.list || (this.list && !this.list.length)) {
            this.isLoading = true;
            this.$store.dispatch('hero/getList').then(() => {
                this.isLoading = false;
            });
        }
        gaPageView();
    },
};
</script>
