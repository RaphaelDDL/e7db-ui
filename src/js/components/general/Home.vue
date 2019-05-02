<template>
    <div class="columns homepage is-mobile">
        <div class="column is-12">
            <SearchWidget />

            <section class="section-container home-menu-parent">
                <div class="section-box">
                    <ul class="home-menu">
                        <router-link @click.native="trackMenuEvent" tag="li" to="/heroes">
                            <a>
                                <img :src="`${assetsUrl}/website/journal_hero.png`" alt />
                                Heroes
                            </a>
                        </router-link>
                        <router-link @click.native="trackMenuEvent" tag="li" to="/artifacts">
                            <a>
                                <img :src="`${assetsUrl}/website/journal_artifact.png`" />
                                Artifacts
                            </a>
                        </router-link>
                        <router-link @click.native="trackMenuEvent" tag="li" to="/changelog">
                            <a>
                                <img :src="`${assetsUrl}/website/book_changelog.png`" />
                                Changelog
                            </a>
                        </router-link>
                        <router-link @click.native="trackMenuEvent" tag="li" to="/about">
                            <a>
                                <img :src="`${assetsUrl}/website/book_about.png`" />
                                About
                            </a>
                        </router-link>
                    </ul>
                </div>
            </section>
        </div>
        <aside class="column is-two-fifths-tablet is-12-mobile">
            <section class="section-container">
                <div class="section-box">
                    <h1>Current Events</h1>
                    <hr />
                    <ul class="banner-list">
                        <router-link @click.native="trackMenuEvent" tag="li" to="/hero/baiken">
                            <a>
                                <img :src="`${assetsUrl}/banner/gacha/baiken.png`" alt="Baiken Limited Drop Rate Up" />
                                Limited Drop Rate Up - Baiken
                            </a>
                        </router-link>
                        <router-link @click.native="trackMenuEvent" tag="li" to="/hero/sol">
                            <a>
                                <img
                                    :src="`${assetsUrl}/banner/sidestory/gg_baiken.png`"
                                    alt="Guilty Gear Side Story: Visitors from another world"
                                />
                                Guilty Gear Side Story: Visitors from Another World
                            </a>
                        </router-link>
                        <router-link @click.native="trackMenuEvent" tag="li" to="/hero/haste">
                            <a>
                                <img
                                    :src="`${assetsUrl}/banner/sidestory/haste_vampire_thirst.png`"
                                    alt="Haste Side Story: A Vampires Thirst"
                                />
                                Side Story: A Vampire's Thirst
                            </a>
                        </router-link>
                    </ul>
                </div>
            </section>
            <section class="section-container">
                <div class="section-box">
                    EpicSevenDB is a database for Epic Seven game. You can download the game on
                    <a
                        href="https://itunes.apple.com/us/app/epic-seven/id1322399438?mt=8"
                        rel="noopener"
                        target="_blank"
                        >iOS</a
                    >
                    and
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
                            <a href="https://old.reddit.com/r/EpicSeven/" rel="noopener" target="_blank"
                                >Visit the EpicSeven Reddit</a
                            >
                        </li>
                        <li>
                            <a href="https://discord.gg/CTetAqC" rel="noopener" target="_blank"
                                >Join EpicSeven Reddit's Discord Channel</a
                            >
                        </li>
                    </ul>
                </div>
            </section>
            <section class="section-container">
                <div class="section-box">
                    <h1>Tools</h1>
                    <hr />
                    <ul class="bullets">
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
                    </ul>
                </div>
            </section>
        </aside>
        <main class="column is-three-fifths-tablet is-12-mobile">
            <section class="section-container">
                <div class="section-box">
                    <h1>Newest Heroes and Artifacts</h1>
                    <hr />
                    <ResultsList :artifacts="latestArtifacts" :heroes="latestHeroes" />
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import SectionLinks from '@/js/layout/SectionLinks.vue';
import { gaPageView, gaEvent } from '@/js/util/Analytics';
import SearchWidget from '@/js/components/search/SearchWidget';
import ResultsList from '@/js/components/search/ResultsList';

export default {
    data() {
        return {
            latestHeroes: [
                {
                    name: 'Baiken',
                    rarity: 5,
                    classType: 'thief',
                    element: 'earth',
                    zodiac: 'scorpio',
                    fileId: 'baiken',
                    buffs: [],
                    debuffs: ['stic_blood', 'stic_blood'],
                },
                {
                    name: 'Sol',
                    rarity: 5,
                    classType: 'warrior',
                    element: 'fire',
                    zodiac: 'sagittarius',
                    fileId: 'sol',
                    buffs: [],
                    debuffs: ['stic_silence', 'stic_buf_impossible'],
                },
                {
                    name: 'Sage Baal & Sezan',
                    rarity: 5,
                    classType: 'mage',
                    element: 'light',
                    zodiac: 'taurus',
                    fileId: 'sage-baal-sezan',
                    buffs: [],
                    debuffs: ['stic_sleep', 'stic_sleep'],
                },
                {
                    name: 'Crescent Moon Rin',
                    rarity: 4,
                    classType: 'thief',
                    element: 'dark',
                    zodiac: 'taurus',
                    fileId: 'crescent-moon-rin',
                    buffs: [
                        'stic_att_up',
                        'stic_speed_up',
                        'stic_cri_up',
                        'stic_cridmg_up',
                        'stic_def_up',
                        'stic_protect',
                        'stic_dodge_up',
                        'stic_debuf_impossible',
                        'stic_debuf_impossible',
                    ],
                    debuffs: [],
                },
            ],
            latestArtifacts: [
                {
                    event: 'brawl-revelator',
                    exclusive: [],
                    fileId: 'portrait-of-the-saviors',
                    name: 'Portrait of the Saviors',
                    rarity: 4,
                },
                {
                    name: 'Junkyard Dog',
                    rarity: 5,
                    exclusive: ['warrior'],
                    event: 'visitors-from-another-world',
                    fileId: 'junkyard-dog',
                },
                {
                    name: 'Torn Sleeve',
                    rarity: 5,
                    exclusive: ['thief'],
                    event: '',
                    fileId: 'torn-sleeve',
                },
            ],
        };
    },
    inject: ['assetsUrl'],
    mounted() {
        gaPageView();
    },
    components: {
        SectionLinks,
        SearchWidget,
        ResultsList,
    },
    methods: {
        trackMenuEvent(mouseEvent) {
            const linkName = mouseEvent.currentTarget
                ? (mouseEvent.currentTarget.innerText + '').trim().toLowerCase()
                : '';
            gaEvent({
                eventCategory: 'home-nav',
                eventAction: 'click',
                eventLabel: linkName,
                // eventValue: 123
            });
        },
    },
};
</script>
