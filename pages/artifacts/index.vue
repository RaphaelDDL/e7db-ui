<template>
    <div class="columns">
        <main class="column is-12">
            <section class="section-container">
                <LoadingMessage :is-loading="isLoading" />
                <div v-if="!isLoading && list && list.length" class="section-box artifact-list">
                    <ListFilters :filters="filters" page-type="artifact" @filters:clear="clearSelection" />

                    <h4 v-if="filteredArtifactList && !filteredArtifactList.length">
                        {{ $t("filters.noResult") }}
                    </h4>
                    <ul class="columns is-mobile artifact-list-ul">
                        <ListItem
                            v-for="artifact in filteredArtifactList"
                            :id="artifact.fileId"
                            :key="artifact.fileId"
                            :artifact="artifact"
                        />
                    </ul>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "~/components/artifacts/ListItem";
import ListFilters from "~/components/general/ListFilters";
import LoadingMessage from "~/components/general/LoadingMessage";
import { getByKeyword, getByRarity, getByExclusive, headMetaTags } from "~/util/Utils";
import { mountedPageView } from "~/util/vueMixins";

const filterDefaults = {
    keyword: "",
    rarity: 0,
    exclusive: "",
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
    computed: {
        ...mapGetters("artifact", ["list"]), // this.list,
        // ...mapState('artifact', ['filteredArtifactList']), //this.filteredArtifactList,
        filteredArtifactList() {
            return getByRarity(
                getByKeyword(getByExclusive(this.list, this.filters.exclusive), this.filters.keyword),
                this.filters.rarity
            );
        },
    },
    asyncData({ store }) {
        return store.dispatch("artifact/getList");
    },

    mounted() {
        if (!this.list || (this.list && !this.list.length)) {
            this.isLoading = true;
            this.$store.dispatch("artifact/getList").then(() => {
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
                title: "Artifacts",
                description:
                    "See information about all Artifacts on EpicSeven game, including Rarity, Class Specificity, Attributes and more!",
                image: `${this.assetsUrl}/website/journal_artifact.png`,
            },
            this
        );
    },
};
</script>
