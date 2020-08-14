<template>
    <div class="columns">
        <main class="column is-12">
            <section class="section-container">
                <div class="section-box hero-list">
                    <h1>{{ $t("links.ranking") }}</h1>
                    <hr />
                    <div v-if="lastUpdated" class="is-text-center small has-margin-bottom">
                        Last Updated in
                        <span class="skillEnhanceFontColor">
                            {{ lastUpdated }}
                        </span>
                    </div>
                    <h4 class="has-margin-bottom">
                        Hero Usage Statistics
                    </h4>

                    <div class="columns is-mobile">
                        <div class="column is-half">
                            <div class="columns white is-mobile">
                                <div class="column is-half">Name</div>
                                <div class="column is-one-quarter">Appears</div>
                                <div class="column is-one-quarter">% of Total</div>
                            </div>
                            <hr />
                            <div
                                v-for="hero in heroUsage.slice(0, heroUsageHalfLength)"
                                :key="hero[0]"
                                class="columns is-mobile"
                            >
                                <div class="column is-half">{{ hero[0] }}</div>
                                <div class="column is-one-quarter">{{ hero[1] }}</div>
                                <div class="column is-one-quarter skillEnhanceFontColor">
                                    {{ (hero[1] / 400) | toPercent }}
                                </div>
                            </div>
                        </div>
                        <div class="column is-half">
                            <div class="columns white is-mobile">
                                <div class="column is-half">Name</div>
                                <div class="column is-one-quarter">Appears</div>
                                <div class="column is-one-quarter">% of Total</div>
                            </div>
                            <hr />
                            <div
                                v-for="hero in heroUsage.slice(heroUsageHalfLength)"
                                :key="hero[0]"
                                class="columns is-mobile"
                            >
                                <div class="column is-half">{{ hero[0] }}</div>
                                <div class="column is-one-quarter">{{ hero[1] }}</div>
                                <div class="column is-one-quarter skillEnhanceFontColor">
                                    {{ (hero[1] / 400) | toPercent }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <h4 class="has-margin-bottom">
                        Top 100 players among all Arena players (Global)
                    </h4>
                    <div class="columns">
                        <div class="column is-half-tablet is-multiselect-container">
                            <h5>{{ $t("filters.header") }}</h5>
                            <Multiselect
                                v-model="selectedHeroes"
                                :options="heroList"
                                :taggable="true"
                                :close-on-select="true"
                                :multiple="true"
                                placeholder="Heroes"
                                :option-height="30"
                                class="filter-multiselect"
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
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Multiselect from "vue-multiselect";
import { mountedPageView } from "~/util/vueMixins";
import { headMetaTags, arenaBadge, getByHeroId } from "~/util/Utils";
import ListItem from "~/components/heroes/ListItem";

export default {
    components: {
        ListItem,
        Multiselect,
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
    computed: {
        ...mapGetters("ranking", ["list"]),
        ...mapGetters("ranking", ["heroUsage"]),
        ...mapGetters({ heroList: "hero/list" }),
        lastUpdated() {
            return this.list?.[0]?.ts ? new Date(this.list[0].ts * 1000) : null;
        },
        heroUsageHalfLength() {
            return this.heroUsage?.length / 2 ?? 0;
        },
        filteredRankList() {
            return getByHeroId(this.list, this.selectedHeroes);
        },
    },
    methods: {
        arenaBadge,
        clearSelection() {
            this.selectedHeroes = [];
        },
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
};
</script>
