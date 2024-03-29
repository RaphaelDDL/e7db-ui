<template>
    <div class="columns">
        <template v-if="!!numberOfPlayers && !isLastUpdatedOld">
            <main class="column is-12">
                <Header :last-updated="lastUpdated" :number-of-players="numberOfPlayers" />
                <Statistics :number-of-players="numberOfPlayers" />

                <section class="section-container">
                    <ContentAd />
                </section>

                <section class="section-container">
                    <div class="section-box hero-list">
                        <div class="columns">
                            <div class="column is-half-tablet is-multiselect-container">
                                <h5>{{ $t("filters.header") }} (1-4 {{ $t("links.heroes") }})</h5>
                                <Multiselect
                                    v-model="selectedHeroes"
                                    :options="heroList"
                                    :taggable="true"
                                    :close-on-select="true"
                                    :multiple="true"
                                    placeholder="Heroes"
                                    :option-height="30"
                                    class="filter-multiselect is-full-width"
                                    :show-labels="false"
                                    label="name"
                                    track-by="_id"
                                    :max="4"
                                >
                                    <template v-if="option._id" slot="option" slot-scope="{ option }">
                                        <img :src="`${option.assets.icon}`" class="hero-filter-icon" />
                                        <span class="hero-filter-text">
                                            {{ option.name || option._id }}
                                        </span>
                                    </template>
                                </Multiselect>
                            </div>
                        </div>
                        <h4 class="has-margin-bottom" @click="clearSelection">
                            &#8593; {{ $t("filters.clearAllFilters") }}
                        </h4>

                        <ul class="ranking-list-ul">
                            <li v-if="filteredRankList && !filteredRankList.length">
                                <h4>
                                    {{ $t("filters.noResult") }}
                                </h4>
                            </li>
                            <li
                                v-for="player in filteredRankList"
                                :key="player._id"
                                class="ranking-user"
                                :class="{ filtered: filteredRankList.length !== list.length }"
                            >
                                <div class="columns">
                                    <div class="column is-two-fifths">
                                        <img
                                            v-lazy="{
                                                src: `${assetsUrl}/_source/emblem/${arenaBadge(player.league)}.png`,
                                                error: `${assetsUrl}/hero/_placeholder/sk_missing.png`,
                                            }"
                                            alt=""
                                            class="rank-icon"
                                        />
                                        <small>{{ player.league | noUnderscore(true) }}</small>
                                        <h2>
                                            #{{ player.rank }}
                                            <span class="skillEnhanceFontColor player-name">{{ player.player }}</span>
                                        </h2>
                                        <small>{{ player.score | formatNumber }} pts.</small>
                                        <div class="clearBoth"></div>
                                    </div>
                                    <div class="column is-three-fifths">
                                        <ul class="columns is-mobile hero-list-ul">
                                            <ListItem
                                                v-for="hero in player.team"
                                                :id="`${player._id}${hero._id}`"
                                                :key="`${player._id}${hero._id}`"
                                                :hero="hero"
                                                :icon="player.border"
                                            />
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </template>
        <template v-else>
            <section class="section-container">
                <Header :last-updated="lastUpdated" :number-of-players="0" />
                <div class="section-box">
                    <p>
                        Ranking Data is unavailable
                        <span v-if="isLastUpdatedOld">
                            because current saved data is too old (see "last updated in" above)</span
                        >, most likely due to Researcher Carrot Bot being down. Please try again later.
                    </p>
                </div>
            </section>
        </template>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Multiselect from "vue-multiselect";
import { mountedPageView } from "~/util/vueMixins";
import { headMetaTags, arenaBadge, getByHeroId } from "~/util/Utils";
import ListItem from "~/components/heroes/ListItem";
import RankingComponents from "~/components/ranking";
import ContentAd from "~/components/ads/content.vue";

export default {
    components: {
        ListItem,
        Multiselect,
        ...RankingComponents,
        ContentAd,
    },
    mixins: [mountedPageView],
    inject: ["assetsUrl"],
    asyncData({ store }) {
        return Promise.all([store.dispatch("ranking/getList"), store.dispatch("hero/getList")]);
    },
    data() {
        return {
            selectedHeroes: [],
        };
    },
    head() {
        return headMetaTags(
            {
                title: `${this.$t("links.ranking")}${this.$i18n.locale !== "en" ? " | " + this.$t("gameName") : ""}`,
                description:
                    "See latest PvP Arena Rankings for Global Server, discover the most used teams and heroes and more.",
                image: this.assetsUrl + "/website/book_about.png",
            },
            this
        );
    },
    computed: {
        ...mapGetters("ranking", ["list"]),
        ...mapGetters({ heroList: "hero/list" }),
        lastUpdated() {
            return this.list?.[0]?.ts ?? null;
        },
        numberOfPlayers() {
            return this.list?.length ?? null;
        },
        filteredRankList() {
            return getByHeroId(this.list, this.selectedHeroes);
        },
        isLastUpdatedOld() {
            const { lastUpdated } = this;
            if (!lastUpdated) {
                return false;
            }
            const dateUpdated = new Date(lastUpdated * 1000);
            const dateToday = new Date();
            const date30DaysAgo = new Date(new Date(dateToday).setDate(dateToday.getDate() - 30));
            return !!(date30DaysAgo > dateUpdated);
        },
    },
    methods: {
        arenaBadge,
        clearSelection() {
            this.selectedHeroes = [];
        },
    },
};
</script>
