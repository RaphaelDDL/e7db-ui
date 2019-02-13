<template>
    <div class="columns homepage is-mobile">
        <aside class="column is-two-fifths-tablet is-12-mobile">
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
                            <a href="https://databuilder.epicsevendb.com">E7DB DataBuilder</a>
                            <div class="bullet-description">
                                For those who have little or none knowledge of Git, Github or JSON but still have a good
                                heart and is willing to help our DB by submitting hero data.
                                <br />Fill the form fields, export the JSON then send us directly by DMing
                                <strong>RaphaelDDL#5150</strong> on Discord.
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </aside>
        <main class="column is-three-fifths-tablet is-12-mobile">
            <section class="section-container">
                <div class="section-box">
                    <h1>EpicSevenDB.com Changelog</h1>
                    <hr />
                    <ul class="bullets changelog">
                        <li>
                            <strong>Feb 13th, 2019 - version 0.4.6</strong>
                            <div class="bullet-description">
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>Images reorganized</strong>
                                        <br />Reddit user <strong class="white">buttreynolds</strong> was kind enough to
                                        provide everyone with his datamined images, so there are almost all images.
                                        There are still list images missing for both artifacts and heroes but it's much
                                        more complete now.
                                    </li>
                                    <li>
                                        <strong>Database updated</strong>
                                        <br />Hero and Artifact data updated with latest from
                                        <a
                                            href="https://github.com/EpicSevenDB/gamedatabase"
                                            rel="noopener"
                                            target="_blank"
                                            >Github database Hero list</a
                                        >
                                        :-)
                                    </li>
                                    <li>
                                        <strong>Code Refactored</strong>
                                        <br />Not much difference visually, but now code for the store is modular, aka a
                                        module for hero and for artifact, in preparation for the filters.
                                    </li>
                                </ul>
                                <p>
                                    Please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                    if you got feedback or bug reports. or email me directly through
                                    <strong class="white">raphaelddl@epicsevendb.com</strong> if you prefer.
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>Feb 7th, 2019 - version 0.4.1</strong>
                            <div class="bullet-description">
                                <p>Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>Hero Memory Imprint Bonuses being rounded</strong>
                                        <br />I mistakenly rounded the imprint bonuses, which I shouldn't. For example,
                                        Yuna's B Imprint was showing as 4% instead of 4.3%. This is now fixed it. Thank
                                        you <strong class="white">Kromagg</strong> for noticing.
                                    </li>
                                </ul>
                                <p>
                                    Please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                    if you got feedback or bug reports. or email me directly through
                                    <strong class="white">raphaelddl@epicsevendb.com</strong> if you prefer.
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>Feb 6th, 2019 - version 0.4.0</strong>
                            <div class="bullet-description">
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>Hero Skills Buffs and Debuffs</strong>
                                        <br />All skills now have their specific buffs (blue) and debuffs (red) on the
                                        top right of the skill section.
                                    </li>
                                    <li>
                                        <strong>Hero Memory Imprint Bonuses</strong>
                                        <br />Now you are able to consult what bonuses each hero gets when upgrading
                                        it's imprint.
                                    </li>
                                    <li>
                                        <strong>Hero Memory Imprint Positioning</strong>
                                        <br />You are now able to see which formation slots your favorite hero applies
                                        it's Memory Imprint bonus to.
                                        <br />
                                        <br />Works as in-game. White slots means it applies to; grayish slots means it
                                        does not apply to that position.
                                    </li>
                                    <li>
                                        <strong>Changelog year fix</strong>
                                        <br />I was dumb and kept using 2018 on the titles even after we changed to 2019
                                        lol. Fixed.
                                    </li>
                                </ul>
                                <p>
                                    Please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                    if you got feedback or bug reports.
                                </p>
                                <p>
                                    You can also now email me directly through
                                    <strong class="white">raphaelddl@epicsevendb.com</strong> if you prefer.
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>Jan 28th, 2019 - version 0.3.2</strong>
                            <div class="bullet-description">
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>
                                            Hero and Artifact List, as well as Specialty and Relation lists
                                        </strong>
                                        <br />Updated router code to generate links with anchor, so now you can right
                                        click and choose 'Open in New Tab' if you'd like to open multiple from the list
                                        page. Also helps with SEO.
                                    </li>
                                    <li>
                                        <strong>Hero Status</strong>
                                        <br />Updated Hero Detail page to have 4 status tables:
                                        <ul class="bullets">
                                            <li>Lv1, Base acquirable star</li>
                                            <li>Lv50, 5 stars</li>
                                            <li>Lv60, 6 stars</li>
                                            <li>Lv60, 6 stars, fully awakened</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Hero Awakening</strong>
                                        <br />Awakening #3 now correctly states that there's a skill upgrade.
                                    </li>
                                </ul>
                                <p>Next update will be in the next few days.</p>
                                <p>
                                    Please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                    if you got feedback or bug reports.
                                </p>
                                <p>
                                    You can also now email me directly through
                                    <strong class="white">raphaelddl@epicsevendb.com</strong> if you prefer.
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>Jan 24th, 2019 - version 0.3.0</strong>
                            <div class="bullet-description">
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>Updated Database</strong>
                                        <br />I guess we have most (if not all) heroes. Not all images though, but
                                        still.
                                    </li>
                                    <li>
                                        <strong>Hero List</strong>
                                        <br />Fixed the image of a few heroes which had their image bigger than the
                                        rest. That means, Watcher Shuri, Luna, Yufine, Maya, etc etc.
                                    </li>
                                    <li>
                                        <strong>Hero Detail: Awakening</strong>
                                        <br />Awakening section now has the data for the upgrades and resources.
                                    </li>
                                    <li>
                                        <strong>Hero Detail: Specialty Change</strong>
                                        <br />Specialty Change section added to heroes that have them, linking to their
                                        Specialty changed versions. E.g.: Lorina will have a link for Commander Lorina,
                                        Kluri for Falconer Kluri, etc.
                                    </li>
                                </ul>
                                <p>
                                    The hero list filters, memory imprint section and skill multipliers (thanks
                                    <strong class="white">MaxNumbers</strong>) are next on the roadmap (they are almost
                                    ready), but I wanted to update the website already since we had a great update on
                                    the database files, thanks to all contributers but specially due to
                                    <strong class="white">Kromagg</strong> efforts fixing and reconverting all files
                                    (thanks <strong class="white">Squachie</strong> for the awesome DataBuilder, it's
                                    rocking!). <br />We'll also have soon 4 stat blocks, due to the help of
                                    <strong class="white">stocky37</strong>. We'll have the following stats blocks:
                                </p>
                                <ul class="bullets">
                                    <li>Lv1, Base acquirable star</li>
                                    <li>Lv50, 5 stars</li>
                                    <li>Lv60, 6 stars</li>
                                    <li>Lv60, 6 stars, fully awakened</li>
                                </ul>
                                <p>Next update will be in the next couple days.</p>
                                <p>
                                    Please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                    if you got feedback or bug reports.
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>Jan 10th, 2019 - version 0.2.5</strong>
                            <div class="bullet-description">
                                <p>Only fixes today:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>Hero List</strong>
                                        <br />Fixed the image sizing. At first, I left to browser decide the size after
                                        image downloaded, but on older phones, the repaint/reflow after each image
                                        downloads is too slow so some heroes were stacking on one another for a few
                                        seconds until browser recalculated the sizes and fixed itself. Should be more
                                        performant now.
                                    </li>
                                    <li>
                                        <strong>Hero Detail</strong>
                                        <br />Some heroes we did at the start of project had different data structure
                                        (they'll be fixed) so I fixed the code to support both types. That means,
                                        Cecilia's Skill Enhancements now appear - just the names - as well as there
                                        shouldn't have any more Relationship issues that end up being an error page.
                                        Only heroes we have data on will be shown. So, for example, as this news' time,
                                        we don't have data on any of Cecilia relations, so the section will not show
                                        until we get data (e.g. Yufine, Nemunas, etc)
                                    </li>
                                </ul>
                                <p>
                                    Got feedback, bug reports? As usual, please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >Open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>Jan 7th, 2019 - version 0.2.0</strong>
                            <div class="bullet-description">
                                <p>
                                    Heroes List and Detail page are released. Detail page still need some work on things
                                    we have data but I still haven't coded the layout (it's missing a few things like
                                    Imprint positions, proper upgrade resources images, etc).
                                </p>
                                <p>
                                    Also there are not many heroes yet. If you feel like giving us a hand, please use
                                    <a href="https://databuilder.epicsevendb.com">E7DB DataBuilder</a>
                                    to submit any hero (check the ones that were already worked on at
                                    <a
                                        href="https://github.com/EpicSevenDB/gamedatabase/tree/master/hero"
                                        rel="noopener"
                                        target="_blank"
                                        >Github database Hero list page</a
                                    >
                                    to avoid spending time on repeated hero).
                                </p>
                                <p>
                                    Got feedback, bug reports? As usual, please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >Open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>Dec 28th, 2018 - version 0.1.6</strong>
                            <div class="bullet-description">
                                <p>
                                    Small fix now, placeholders will not flicker anymore. Code was retrying to download
                                    for 3x times, but I already know 404 are the images that I don't have :v
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>Dec 27th, 2018 - version 0.1.5</strong>
                            <div class="bullet-description">
                                <p>
                                    I hope you guys have enjoyed your holiday, and also our first release.
                                </p>
                                <p>I've fixed a few issues today:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>Typos</strong>
                                        <br />I think I fixed all typos (like <strong>22th</strong> to
                                        <strong>22nd</strong>) and others. Let me know if I missed any
                                    </li>
                                    <li>
                                        <strong>Placeholder for missing images</strong>
                                        <br />Implemented placeholder images for artifacts that we do not have their
                                        images. That means you'll see a SD Ras and Arky on artifact's icons/small/full
                                        images which are missing. Thank you, wife for the edits :P
                                        <br />
                                        <br />Example Artifact missing icon:
                                        <br />
                                        <img
                                            src="https://assets.epicsevendb.com/artifact/_placeholder/icon_missing.png"
                                        />
                                    </li>
                                    <li>
                                        <strong>API Caching</strong>
                                        <br />Implemented caching to the API calls for the list. This is also a
                                        preparation to make Heroes list perform better, and also to the list filters.
                                        <br />
                                        <br />That means it'll hit the API only once per user session, meaning anytime
                                        you hit <a class href="/artifacts"> <strong>Artifacts</strong> </a>&nbsp;link
                                        after the first time, it'll instantly load because I cached the first time's
                                        response. For you, it's a little less bandwidth used. Hopefully your browser
                                        cached the images :)
                                    </li>
                                </ul>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>Dec 22nd, 2018 - version 0.1.0</strong>
                            <div class="bullet-description">
                                Initial release of the website, featuring
                                <a class href="/artifacts"> <strong>Artifacts</strong> </a>. Unfortunately we do not
                                have ALL images of all artifacts, so you might notice some missing icons or full arts.
                                Contact us if you have successfully extracted all game's assets!
                                <br />
                                <br />We are currently using a free account of Heroku and mLabs for the API and
                                Database, while the website hosting itself is on a paid host. Therefore, the website
                                might not have downtimes, but the backend might see some downtime if we reach the free
                                quota. Please report any issue you find when browser the website on our
                                <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                    >Github page</a
                                >
                                by creating a new issue and posting the error messages you were presented with.
                                <br />
                                <br />Next release will feature Heroes. Stay tuned. <br />Please Contribute! Learn more
                                on <a class href="/about">About</a>&nbsp;page.
                                <p>I hope you guys enjoy. Happy Holidays.</p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { gaPageView } from '@/js/util/Analytics';
export default {
    inject: ['assetsUrl'],
    mounted() {
        gaPageView(this.$ga);
    },
};
</script>
