<template>
    <div class="columns">
        <main class="column is-12">
            <section class="section-container">
                <div class="section-box">
                    <h1>{{ $t("links.ranking") }}</h1>
                    <hr />
                    <div v-if="lastUpdated">
                        Last Updated in
                        <span class="white">
                            {{ lastUpdated }}
                        </span>
                        <hr />
                    </div>
                    <ul>
                        <li v-for="player in list" :key="player._id">
                            #{{ player.rank }} - {{ player.player }} | {{ player.score }} | {{ player.league }} |
                            {{ player.border }}

                            <ul>
                                <li v-for="hero in player.team" :key="`${player._id}${hero._id}`">
                                    {{ hero.name }} | {{ hero.rarity }} | {{ hero.attribute }} | {{ hero.role }} |
                                    {{ hero.assets.icon }} |
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mountedPageView } from "~/util/vueMixins";
import { headMetaTags } from "~/util/Utils";
export default {
    mixins: [mountedPageView],
    inject: ["assetsUrl"],
    asyncData({ store }) {
        return store.dispatch("ranking/getList");
    },
    data() {
        return {};
    },
    // use this.list
    computed: {
        ...mapGetters("ranking", ["list"]),
        lastUpdated() {
            return this.list?.[0]?.ts ? new Date(this.list[0].ts * 1000) : null;
        },
    },
    head() {
        return headMetaTags(
            {
                title: `${this.$t("links.ranking")}${this.$i18n.locale !== "en" ? " | " + this.$t("gameName") : ""}`,
                description:
                    "See latest PvP Arena Rankings for all Servers, discover the most used teams and heroes and more.",
                image: this.assetsUrl + "/website/book_about.png",
            },
            this
        );
    },
};
</script>
