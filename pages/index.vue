<template>
    <div class="columns homepage is-mobile">
        <div class="column is-12">
            <SearchWidget />

            <section class="section-container home-menu-parent">
                <div class="section-box">
                    <ul class="home-menu">
                        <nuxt-link tag="li" :to="localePath('heroes')" @click.native="trackMenuEvent">
                            <a>
                                <img v-lazy="`${assetsUrl}/website/section-icons/heroes.png`" alt />
                                {{ $t("links.heroes") }}
                            </a>
                        </nuxt-link>
                        <nuxt-link tag="li" :to="localePath('artifacts')" @click.native="trackMenuEvent">
                            <a>
                                <img v-lazy="`${assetsUrl}/website/section-icons/artifacts.png`" />
                                {{ $t("links.artifacts") }}
                            </a>
                        </nuxt-link>
                        <nuxt-link tag="li" :to="localePath('items')" @click.native="trackMenuEvent">
                            <a>
                                <img v-lazy="`${assetsUrl}/website/section-icons/items.png`" />
                                {{ $t("links.items") }}
                            </a>
                        </nuxt-link>
                        <nuxt-link tag="li" :to="localePath('creators')" @click.native="trackMenuEvent">
                            <a>
                                <img v-lazy="`${assetsUrl}/website/section-icons/creators.png`" />
                                {{ $t("links.creators") }}
                            </a>
                        </nuxt-link>
                        <nuxt-link tag="li" :to="localePath('changelog')" @click.native="trackMenuEvent">
                            <a>
                                <img v-lazy="`${assetsUrl}/website/section-icons/changelog.png`" />
                                {{ $t("links.changelog") }}
                            </a>
                        </nuxt-link>
                        <nuxt-link tag="li" :to="localePath('about')" @click.native="trackMenuEvent">
                            <a>
                                <img v-lazy="`${assetsUrl}/website/section-icons/about.png`" />
                                {{ $t("links.about") }}
                            </a>
                        </nuxt-link>
                    </ul>
                </div>
            </section>
        </div>
        <aside class="column is-two-fifths-tablet is-12-mobile home">
            <section class="section-container">
                <div class="section-box">
                    <h1>{{ $t("home.currentEvents") }}</h1>
                    <hr />
                    <ul class="banner-list">
                        <nuxt-link
                            tag="li"
                            :to="
                                localePath({
                                    name: 'hero-id',
                                    params: {
                                        id: 'seaside-bellona',
                                    },
                                })
                            "
                            @click.native="trackMenuEvent"
                        >
                            <a>
                                <img
                                    v-lazy="`${assetsUrl}/banner/gacha/seaside-bellona.png`"
                                    alt="Tywin Drop Rate Up"
                                />
                                Limited Summon - Seaside Bellona
                            </a>
                        </nuxt-link>
                        <nuxt-link
                            tag="li"
                            :to="
                                localePath({
                                    name: 'hero-id',
                                    params: {
                                        id: 'seaside-bellona',
                                    },
                                })
                            "
                            @click.native="trackMenuEvent"
                        >
                            <a>
                                <img
                                    v-lazy="`${assetsUrl}/banner/sidestory/song_of_the_sea_2.png`"
                                    alt="Song of the Sea"
                                />
                                Song of the Sea
                            </a>
                        </nuxt-link>
                        <nuxt-link
                            tag="li"
                            :to="
                                localePath({
                                    name: 'hero-id',
                                    params: {
                                        id: 'ras',
                                    },
                                })
                            "
                            @click.native="trackMenuEvent"
                        >
                            <a>
                                <img
                                    v-lazy="`${assetsUrl}/banner/sidestory/unrecorded_history.png`"
                                    alt="unrecorded_history"
                                />
                                Unrecorded History
                            </a>
                        </nuxt-link>
                    </ul>
                </div>
            </section>
            <section class="section-container">
                <div class="section-box">
                    {{ $t("home.appDownloadHeader") }}
                    <a
                        href="https://itunes.apple.com/us/app/epic-seven/id1322399438?mt=8"
                        rel="noopener"
                        target="_blank"
                        >iOS</a
                    >
                    &
                    <a
                        href="https://play.google.com/store/apps/details?id=com.stove.epic7.google&hl=en"
                        rel="noopener"
                        target="_blank"
                        >Android</a
                    >.
                </div>
            </section>
            <section class="section-container">
                <div class="section-box">
                    <ul class="bullets">
                        <li>
                            <a href="https://old.reddit.com/r/EpicSeven/" rel="noopener" target="_blank">{{
                                $t("home.e7Reddit")
                            }}</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/CTetAqC" rel="noopener" target="_blank">{{
                                $t("home.e7Discord")
                            }}</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="section-container">
                <div class="section-box">
                    <h1>{{ $t("home.tools") }}</h1>
                    <hr />
                    <ul class="bullets">
                        <li>
                            <a
                                href="https://old.reddit.com/r/EpicSeven/comments/at73kb/i_made_a_bot_yufinebot_for_discord_servers_around/"
                                rel="noopener"
                                target="_blank"
                                >YufineBot, A Discord Bot for E7</a
                            >
                            <div class="bullet-description">
                                Created by
                                <strong class="white">Dimbreath</strong>, it's a Discord Bot that can be added to any
                                Server, and it brings multiple E7 information as well as a Summon Simulator. Using
                                EpicSevenDB API's data.
                            </div>
                        </li>
                        <li>
                            <a href="https://stocky37.github.io/epicseven-tools/" rel="noopener" target="_blank"
                                >Equipment Preview/Planner Tool</a
                            >
                            <div class="bullet-description">
                                Created by
                                <strong class="white">stocky37</strong>, it's a Character Equipment Preview/Planner, and
                                as the name says, you can plan your current Hero, see ways of improving, all without
                                spending Gold in-game swapping items around. Using EpicSevenDB API's data. |
                                <a href="https://github.com/stocky37/epicseven-tools" rel="noopener" target="_blank"
                                    >Visit it's Github Repo</a
                                >
                            </div>
                        </li>

                        <li>
                            <a href="http://epicseventools.com">EpicSeven Tools</a>
                            <div class="bullet-description">
                                Created by
                                <strong class="white">budandan</strong>, it's a Damage Calculator, a Lab Team Optimizer
                                and All Camping Teams DB. Using EpicSevenDB API's data. |
                                <a
                                    href="https://github.com/budandan/e7-lab-team-optimizer"
                                    rel="noopener"
                                    target="_blank"
                                    >Visit it's Github Repo</a
                                >
                            </div>
                        </li>
                        <li>
                            <a href="https://e7selects.herokuapp.com">Abyss Team Selector</a>
                            <div class="bullet-description">
                                Created by
                                <strong class="white">Wilson Yung &amp; Julianne Lin</strong>, it's a Abyss Team
                                builder, that users can create teams and share their strategies for each floor. Using
                                EpicSevenDB API's data. |
                                <a
                                    href="https://github.com/wyung/epic7-abyss-team-builder"
                                    rel="noopener"
                                    target="_blank"
                                    >Visit it's Github Repo</a
                                >
                            </div>
                        </li>
                        <li>
                            <a href="https://whothatcatalyst.netlify.com/" rel="noopener" target="_blank"
                                >WhoThatCatalyst: Catalyst to Hero Filter</a
                            >
                            <div class="bullet-description">
                                Created by
                                <strong class="white">w_7_z</strong> and
                                <strong class="white">machinelearningman</strong>, it's a Catalyst per Hero Filter. You
                                search the catalyst name, it gives you which heroes need it, as well as which skills
                                and/or upgrades. Using EpicSevenDB API's data. |
                                <a href="https://github.com/cypir/e7-catalyst-to-hero" rel="noopener" target="_blank"
                                    >Visit it's Github Repo</a
                                >
                            </div>
                        </li>
                        <li>
                            <a href="https://databuilder.epicsevendb.com">E7DB DataBuilder</a>
                            <div class="bullet-description">
                                Created by
                                <strong class="white">Squachie</strong>, it's a Hero Data Builder, which is used to
                                create new hero data for EpicSevenDB API. New hero being released and you want to
                                contribute? Fill up the hero's details and send us the JSON it exports :)
                            </div>
                        </li>
                        <li>
                            <a href="https://quazzywazzy.github.io/e7-gacha-simulator/" rel="noopener" target="_blank"
                                >E7 Gacha Simulator</a
                            >
                            <div class="bullet-description">
                                Created by
                                <strong class="white">QuazzyWazzy</strong>, it's a browser Summon Simulator using
                                EpicSevenDB API. |
                                <a
                                    href="https://github.com/QuazzyWazzy/e7-gacha-simulator"
                                    rel="noopener"
                                    target="_blank"
                                    >Visit it's Github Repo</a
                                >
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </aside>
        <main class="column is-three-fifths-tablet is-12-mobile">
            <section class="section-container">
                <div class="section-box">
                    <h1>{{ $t("home.latest") }}</h1>
                    <hr />
                    <ResultsList :artifacts="latestArtifacts" :heroes="latestHeroes" />
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mountedPageView } from "~/util/vueMixins";
import { headMetaTags } from "~/util/Utils";
import SearchWidget from "~/components/search/SearchWidget";
import ResultsList from "~/components/search/ResultsList";

export default {
    components: {
        SearchWidget,
        ResultsList,
    },
    mixins: [mountedPageView],
    inject: ["assetsUrl"],
    computed: {
        ...mapGetters("latest", ["latestHeroes", "latestArtifacts"]),
    },
    head() {
        return headMetaTags(
            {
                title: "Home",
                description:
                    "The Epic Seven Wiki and Database with information on Heroes, Artifacts, Catalysis, Items, Quests, Guides and more!",
            },
            this
        );
    },
    asyncData({ store }) {
        return Promise.all([
            store.dispatch("latest/getList"),
            store.dispatch("hero/getList"),
            store.dispatch("artifact/getList"),
        ]);
    },
    methods: {
        trackMenuEvent(mouseEvent) {
            const linkName = mouseEvent.currentTarget
                ? (mouseEvent.currentTarget.textContent + "").trim().toLowerCase()
                : "";
            this.$ga.event({
                eventCategory: "home-nav",
                eventAction: "click",
                eventLabel: linkName,
                // eventValue: 123
            });
        },
    },
};
</script>
