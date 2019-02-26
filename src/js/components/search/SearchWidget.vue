<template>
    <div class="search-container">
        <input type="text" class="search-input" v-model="searchText" placeholder="Search by name..." />
        <ResultsList v-if="!isLoading" :artifacts="filteredArtifacts" :heroes="filteredHeroes" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ResultsList from '@/js/components/search/ResultsList';
import { stripText } from '@/js/util/Utils';

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
            return stripText(this.searchText);
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
    },

    mounted() {
        Promise.all([
            this.dispatch(this.heroList, 'hero/getList'),
            this.dispatch(this.artifactList, 'artifact/getList'),
        ]).then(() => {
            // just store these changes so we don't have to calc on the fly
            this.heroList.forEach((h) => (h.trimmedName = stripText(h.name)));
            this.artifactList.forEach((a) => (a.trimmedName = stripText(a.name)));
            this.isLoading = false;
        });
    },
};
</script>
