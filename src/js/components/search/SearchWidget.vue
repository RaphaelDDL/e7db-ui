<template>
    <section class="section-container">
        <LoadingMessage :isLoading="isLoading" />

        <div class="section-box" v-if="!isLoading">
            <h1>What are you looking for?</h1>
            <hr />
            <div class="search-container">
                <input
                    type="search"
                    class="filter-by-name"
                    v-model="searchText"
                    placeholder="Search for Heroes and Artifacts..."
                />
                <ResultsList :artifacts="filteredArtifacts" :heroes="filteredHeroes" />
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ResultsList from '@/js/components/search/ResultsList';
import { stripText, debounce, getByKeyword } from '@/js/util/Utils';
import LoadingMessage from '@/js/components/general/LoadingMessage';

const e = document.createEvent('Event');
e.initEvent('scroll', true, true);

export default {
    data() {
        return {
            isLoading: false,
            searchText: '',
        };
    },
    components: {
        ResultsList,
        LoadingMessage,
    },
    computed: {
        ...mapGetters('hero', { heroList: 'list' }), // this.heroList
        ...mapGetters('artifact', { artifactList: 'list' }), // this.artifactList

        trimmedSearch() {
            return stripText(this.searchText);
        },
        filteredHeroes() {
            return this.heroList && this.trimmedSearch.length && getByKeyword(this.heroList, this.trimmedSearch);
        },
        filteredArtifacts() {
            return (
                this.artifactList && this.trimmedSearch.length && getByKeyword(this.artifactList, this.trimmedSearch)
            );
        },
    },

    watch: {
        trimmedSearch: {
            handler() {
                debounce(window.dispatchEvent(e), 500);
            },
        },
    },

    methods: {
        dispatch(list, action) {
            if (!list || !list.length) {
                this.isLoading = true;
                return this.$store.dispatch(action);
            }
            return undefined;
        },
    },

    mounted() {
        Promise.all([
            this.dispatch(this.heroList, 'hero/getList'),
            this.dispatch(this.artifactList, 'artifact/getList'),
        ]).then(() => {
            this.isLoading = false;
        });
    },
};
</script>
