<template>
    <section class="section-container">
        <LoadingMessage :is-loading="isLoading" />

        <div v-if="!isLoading" class="section-box">
            <h1 id="homeSearchQuestion">{{ $t("home.searchQuestion") }}</h1>
            <hr />
            <div class="search-container">
                <input
                    v-model.lazy="searchText"
                    v-debounce="delay"
                    type="search"
                    class="filter-by-name"
                    :placeholder="$t('home.searchPlaceholder')"
                    aria-labelledby="homeSearchQuestion"
                />
                <ResultsList :artifacts="filteredArtifacts" :heroes="filteredHeroes" />
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import ResultsList from "~/components/search/ResultsList";
import { stripText } from "~/util/Utils";
import { inputDebounce } from "~/util/Directives";
import LoadingMessage from "~/components/general/LoadingMessage";

export default {
    directives: {
        debounce: inputDebounce,
    },
    components: {
        ResultsList,
        LoadingMessage,
    },
    data() {
        return {
            isLoading: false,
            searchText: "",
            delay: 500,
        };
    },
    computed: {
        ...mapGetters("hero", { heroList: "list" }), // this.heroList
        ...mapGetters("artifact", { artifactList: "list" }), // this.artifactList

        trimmedSearch() {
            return stripText(this.searchText);
        },
        filteredHeroes() {
            return (
                this.heroList &&
                this.trimmedSearch.length &&
                this.heroList.filter(h => h && h.trimmedName && h.trimmedName.includes(this.trimmedSearch))
            );
        },
        filteredArtifacts() {
            return (
                this.artifactList &&
                this.trimmedSearch.length &&
                this.artifactList.filter(a => a && a.trimmedName && a.trimmedName.includes(this.trimmedSearch))
            );
        },
    },

    mounted() {
        //     Promise.all([
        //         this.dispatch(this.heroList, "hero/getList"),
        //         this.dispatch(this.artifactList, "artifact/getList"),
        //     ]).then(() => {
        //         // just store these changes so we don't have to calc on the fly
        this.heroList.forEach(h => (h.trimmedName = stripText(h.name)));
        this.artifactList.forEach(a => (a.trimmedName = stripText(a.name)));
        //         this.isLoading = false;
        //     });
    },

    // methods: {
    //     dispatch(list, action) {
    //         if (!list || !list.length) {
    //             this.isLoading = true;
    //             return this.$store.dispatch(action);
    //         }
    //         return undefined;
    //     },
    // },
};
</script>
