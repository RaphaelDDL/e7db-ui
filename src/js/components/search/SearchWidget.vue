<template>
    <div class="search">
        <input type="text" class="search-input" v-model="searchText" />
        <ResultsList v-if="!isLoading" :artifacts="filteredArtifacts" :heroes="filteredHeroes" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ResultsList from '@/js/components/search/ResultsList';

export default {
    data() {
        return {
            isLoading: false,
            searchText: '',
        };
    },
    components: {
        ResultsList,
    },
    computed: {
        ...mapGetters('hero', { heroList: 'list' }), // this.heroList
        ...mapGetters('artifact', { artifactList: 'list' }), // this.artifactList

        trimmedSearch() {
            return this.stripText(this.searchText);
        },
        filteredHeroes() {
            return (
                this.heroList &&
                this.trimmedSearch.length &&
                this.heroList.filter((h) => h.trimmedName.indexOf(this.trimmedSearch) > -1)
            );
        },
        filteredArtifacts() {
            return (
                this.artifactList &&
                this.trimmedSearch.length &&
                this.artifactList.filter((a) => a.trimmedName.indexOf(this.trimmedSearch) > -1)
            );
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
        stripText(value) {
            return value
                .trim()
                .toLowerCase()
                .replace(/\s|-|'|&/g, ''); // remove white space and other special characters
        },
    },

    mounted() {
        Promise.all([
            this.dispatch(this.heroList, 'hero/getList'),
            this.dispatch(this.artifactList, 'artifact/getList'),
        ]).then(() => {
            // just store these changes so we don't have to calc on the fly
            this.heroList.forEach((h) => (h.trimmedName = this.stripText(h.name)));
            this.artifactList.forEach((a) => (a.trimmedName = this.stripText(a.name)));
            this.isLoading = false;
        });
    },
};
</script>
