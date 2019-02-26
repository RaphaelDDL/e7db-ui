<template>
    <div class="columns">
        <main class="column is-12">
            <section class="section-container">
                <LoadingMessage :isLoading="isLoading" />
                <div class="section-box artifact-list" v-if="!isLoading && list && list.length">
                    <ListFilters :filters="filters" @filters:clear="clearSelection" pageType="artifact" />

                    <h4 v-if="filteredArtifactList && !filteredArtifactList.length">
                        No matches for your current filters :(
                    </h4>
                    <ul class="columns is-mobile artifact-list-ul">
                        <ListItem
                            :artifact="artifact"
                            :id="artifact.fileId"
                            :key="artifact.fileId"
                            v-for="artifact in filteredArtifactList"
                        />
                    </ul>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListItem from '@/js/components/artifacts/ListItem';
import ListFilters from '@/js/components/general/ListFilters';
import LoadingMessage from '@/js/components/general/LoadingMessage';
import { gaPageView } from '@/js/util/Analytics';
import { debounce, getByKeyword, getByRarity, getByExclusive } from '@/js/util/Utils';

const e = document.createEvent('Event');
e.initEvent('scroll', true, true);

const filterDefaults = {
    keyword: '',
    rarity: 0,
    exclusive: '',
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
    computed: {
        ...mapGetters('artifact', ['list']), //this.list,
        // ...mapState('artifact', ['filteredArtifactList']), //this.filteredArtifactList,
        filteredArtifactList() {
            console.log(this.filters);
            return getByRarity(
                getByKeyword(getByExclusive(this.list, this.filters.exclusive), this.filters.keyword),
                this.filters.rarity
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
            this.$store.dispatch('artifact/getList').then(() => {
                this.isLoading = false;
            });
        }
        gaPageView(this.$ga);
    },
};
</script>
