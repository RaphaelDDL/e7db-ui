<template>
    <div class="columns homepage is-mobile">
        <main class="column is-12">
            <section class="section-container">
                <div class="section-box">
                    <h1>EpicSevenDB.com {{ $t("links.changelog") }}</h1>
                    <hr />
                    <ul class="bullets changelog">
                        <li>
                            <strong>August 30th, 2019 - version 1.5.1</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>
                                            Memory Imprint Filter @ Hero List Page
                                        </strong>
                                        <br />
                                        Now added a new filter, requested by many: Memory Imprint filter. Select between
                                        Attack%, Attack+, and so on when filtering your desired unit! You can choose
                                        only one as there's just one imprint per hero anyway, so selecting multiple
                                        would either give zero results (if A and B) and strange results (A or B). Well,
                                        if many ask to be multiple, then I'll change it but for now, single Imprint
                                        only.
                                    </li>
                                </ul>

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
                            <strong>August 16th, 2019 - version 1.5.0</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>
                                            Hero Detail Page revamp
                                        </strong>
                                        <br />
                                        Revamped Hero Profile at Details page to look like the summon screen in-game.
                                        That means, we added the small description and the summon quote of everyone!
                                        <br />
                                        <br />
                                        We are using images
                                        <strong class="white"> Warkolak </strong>d of full body. There are a bunch
                                        missing yet but we have 68 so far. See some examples, like Aramintha, Cermia,
                                        Baiken, Cecilia, etc. The page looks great, thank you War for the image edits,
                                        they are awesome! <br /><br />
                                        Some images are big so I've implemented the running Ras gif as a "loading", like
                                        in game, lol.
                                    </li>
                                </ul>

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
                            <strong>July 31th, 2019 - version 1.4.1</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>
                                            Content Creators
                                        </strong>
                                        <br />
                                        Added Content Creators page. You'll be able to see a few quality Creators of
                                        Epic Seven content in there. Content is randomized so noone thinks "the first is
                                        better than the others", everyone featured here is good (in my opinion)!
                                        <br />
                                        Page still needs to have translation applied :P
                                        <br />
                                        <br />
                                        <div>
                                            Social Icons made by
                                            <a
                                                href="https://www.flaticon.com/authors/freepik"
                                                title="Freepik"
                                                rel="noopener"
                                                target="_blank"
                                                >Freepik</a
                                            >
                                            from
                                            <a
                                                href="https://www.flaticon.com/"
                                                title="Flaticon"
                                                rel="noopener"
                                                target="_blank"
                                                >www.flaticon.com</a
                                            >
                                            is licensed by
                                            <a
                                                href="http://creativecommons.org/licenses/by/3.0/"
                                                title="Creative Commons BY 3.0"
                                                rel="noopener"
                                                target="_blank"
                                                >CC 3.0 BY</a
                                            >
                                        </div>
                                    </li>
                                </ul>

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
                            <strong>July 19th, 2019 - version 1.4.0</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>
                                            Voices
                                        </strong>
                                        <br />
                                        Hero voices are now under a playlist rather than separately. This should fix the
                                        lag that was happening when scrolling due to the amount of aplayer instances.
                                        Now it's only one :D
                                    </li>
                                    <li>
                                        <strong>
                                            Items
                                        </strong>
                                        <br />
                                        Added Item page. Still a WIP, utilizes same popover component as the awakening
                                        and skill Enhancements on hero page. That is, clicking on the item shows a
                                        popover with item details, some have AP Shops and Stage Drop lists. Filters and
                                        other items to be added soon.
                                    </li>
                                    <li>
                                        <strong>
                                            Hero Camping Options
                                        </strong>
                                        <br />
                                        Added the Hero Camping Options on the Hero Detail page.
                                    </li>
                                    <li>
                                        <strong>
                                            Section Icons
                                        </strong>
                                        <br />
                                        Changed the section images on home and mobile menu in order for all to have same
                                        standard. Yes, they are the guild icons :P
                                    </li>
                                </ul>

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
                            <strong>July 4th, 2019 - version 1.3.0</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>
                                            Icons
                                        </strong>
                                        <br />
                                        Now Attributes on both Hero and Artifact detail pages have their corresponding
                                        icons. That means, Attack has a Sword, Defense has a Shield and so on. So to
                                        make easier to see, not having to read the entire string anymore.
                                    </li>
                                    <li>
                                        <strong>
                                            Translations
                                        </strong>
                                        <br />
                                        Updated a few keys on all translation files, some were missing, like Specialty
                                        Skills and what not.
                                    </li>
                                    <li>
                                        <strong>
                                            Refactored Code
                                        </strong>
                                        <br />
                                        Both Artifact and Hero detail pages were refactored into smaller components. Yet
                                        to see if will have any performance difference, but at least for coding, it's
                                        lot easier now to edit smaller pieces instead of a 1k lines file rofl.
                                    </li>
                                </ul>

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
                            <strong>June 28th, 2019 - version 1.2.0</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>
                                            Sound List
                                        </strong>
                                        <br />
                                        Implemented Heroes' Voices on each Hero detail page! Thank you
                                        <strong>Dimbreath</strong> for providing the files and renaming them properly.
                                        There are a few heroes missing, we'll work to add to those too.
                                    </li>
                                </ul>

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
                            <strong>June 12th, 2019 - version 1.1.4</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>
                                            Multi-language issues
                                        </strong>
                                        <br />
                                        Fixed issues with lang selector and the lang keys, fixed korean to use standard
                                        ISO format (ko-KR) instead of (kr-KR), therefore to get Korean, you must access
                                        /ko not /kr
                                    </li>
                                    <li>
                                        <strong>Specialty Skill</strong> added as well. Now you can see the bonus when
                                        sending your party on High Command missions! (pending skill icons).
                                    </li>
                                    <li>
                                        Made 404 Error page a bit better. You'll only see it when you type something
                                        wrong on the url, all links on website goes to your place lol.
                                    </li>
                                    <li>
                                        Talking of typing something wrong on the url, fixed that if you attempt to write
                                        a wrong artifact/hero id on the detail pages, it'll redirect you to the list
                                        pages, instead of throwing an ugly ass heroku application error page.
                                    </li>
                                </ul>

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
                            <strong>June 12th, 2019 - version 1.1.0</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>
                                            Added Multi-Language support to the website! Not yet for the game data per
                                            se.
                                        </strong>
                                        <br />
                                        Launching with the following languages: <br />
                                        <ul class="bullets">
                                            <li>
                                                English - By <strong>RaphaelDDL</strong>
                                                <img
                                                    :src="`${assetsUrl}/website/flags/United-States-of-America.png`"
                                                    class="locale-flags"
                                                />
                                                <img
                                                    :src="`${assetsUrl}/website/flags/United-Kingdom.png`"
                                                    class="locale-flags"
                                                />
                                            </li>
                                            <li>
                                                Korean (한국어) - By <strong>Oseous</strong>
                                                <img
                                                    :src="`${assetsUrl}/website/flags/Korea,-South.png`"
                                                    class="locale-flags"
                                                />
                                            </li>
                                            <li>
                                                Portuguese (Português) - By <strong>RaphaelDDL</strong>
                                                <img
                                                    :src="`${assetsUrl}/website/flags/Brazil.png`"
                                                    class="locale-flags"
                                                />
                                                <img
                                                    :src="`${assetsUrl}/website/flags/Portugal.png`"
                                                    class="locale-flags"
                                                />
                                                <br />
                                                <i
                                                    >Nomeclature might not match game's translation yet. I translated
                                                    without checking game's. Will update soon.</i
                                                >
                                            </li>
                                            <li>
                                                Spanish (Español) - By <strong>Dimbreath</strong>
                                                <img
                                                    :src="`${assetsUrl}/website/flags/Spain.png`"
                                                    class="locale-flags"
                                                />
                                                <img
                                                    :src="`${assetsUrl}/website/flags/Argentina.png`"
                                                    class="locale-flags"
                                                />
                                            </li>
                                            <li>
                                                French (Français) - By <strong>Bowlegends</strong>
                                                <img
                                                    :src="`${assetsUrl}/website/flags/France.png`"
                                                    class="locale-flags"
                                                />
                                                <img
                                                    :src="`${assetsUrl}/website/flags/Canada.png`"
                                                    class="locale-flags"
                                                />
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <p>
                                    Thank you Oseous and Dimbreath for the translations! As usual, thank you
                                    <strong>Kromagg</strong> for updating gamedatabase with latest patches.
                                </p>
                                <p>
                                    Free Icons by
                                    <a
                                        href="https://dribbble.com/shots/1211759-Free-195-Flat-Flags"
                                        target="_blank"
                                        rel="noopener"
                                        >Muharrem Senyil</a
                                    >, Selector based on Design by
                                    <a
                                        href="https://dribbble.com/shots/2386084-Language-Selection-Modal"
                                        target="_blank"
                                        rel="noopener"
                                        >Daniel Marchini</a
                                    >
                                </p>

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
                            <strong>June 6th, 2019 - version 1.0.2</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>We finally hit stable version 1.x! Cheers!</p>
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>
                                            Project was ported from vue-cli to NUXT.js and now Powered by CloudFlare and
                                            Heroku
                                        </strong>
                                        <br />
                                        That means: <br />
                                        <ul class="bullets">
                                            <li>
                                                Server-Side Rendering (SSR) - When you hit one of the website's URL
                                                youll get the full HTML! Loads faster than before.
                                            </li>
                                            <li>
                                                Better SEO - By serving full html on first load, Google Bot can now
                                                crawl all our pages and content just fine.
                                            </li>
                                            <li>
                                                CloudFlare - Even faster load times for assets too, by using ClouFlare's
                                                CDN for delivering content from the nearest server to you.
                                            </li>
                                            <li>
                                                OpenGraph tags correctly set: Now whenever you share an EpicSevenDB URL
                                                on Facebook, Twitter, Discord or any other place that read opengraph
                                                tags, you'll get proper page description, with proper title and image.
                                                IF is a Hero or Artifact, it'll show it's full image :)
                                            </li>
                                            <li>
                                                Heroku - NUXT.js runs as a Node.js app, so we are now running on Heroku,
                                                which means that underlying Heroku's hood, we are using Amazon AWS which
                                                is a super great service!
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Full Data</strong> <br />
                                        Luluca, Fallen Cecilia and Spirit's Breath have full data now.
                                    </li>
                                </ul>
                                <p>
                                    Thanking some of our biggest contributors:
                                    <strong>Kromagg, Dimbreath and Oseous</strong>. Also, Thank YOU for your continuous
                                    support!
                                </p>
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
                            <strong>May 31th, 2019 - version 0.8.3</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>New Specialty Change</strong> <br />
                                        Angelic Montmorancy
                                    </li>
                                    <li>
                                        <strong>Datamined Heroes Preview</strong> <br />
                                        Luluca, Fallen Cecilia, Spirit's Breath
                                    </li>
                                </ul>
                                <p>
                                    Please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                    if you got feedback or bug reports, or email me directly through
                                    <strong class="white">raphaelddl@epicsevendb.com</strong> if you prefer.
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>May 8th, 2019 - version 0.8.1</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>Guilty Gear Collab</strong> <br />
                                        Added Necro & Undine and Dizzy.
                                    </li>
                                </ul>
                                <p>
                                    Please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                    if you got feedback or bug reports, or email me directly through
                                    <strong class="white">raphaelddl@epicsevendb.com</strong> if you prefer.
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>May 2nd, 2019 - version 0.8.0</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>Item Popover</strong> <br />
                                        Added item popover on items needed for skill ups and awakening. Clicking on them
                                        will show the popup with description and location. <br />
                                        The only bad experience is that until you click once on any item (thus, calling
                                        the Item API which will cache all item dat for that session), all items will
                                        have background for rarity 1. <br />
                                        After you click/tap on a single item, all item's background will reflect the
                                        real rarities. I did this way to not call item api unless you actually want to
                                        see the item detail/location. Then I'll get all items for that session (so no
                                        new calls to the api).
                                    </li>
                                    <li>
                                        <strong>Guilty Gear Collab</strong> <br />
                                        Added Portrait of the Saviors
                                    </li>
                                    <li>
                                        <strong>Database updated</strong>
                                        <br />Hero and Artifact data updated with latest from
                                        <a
                                            href="https://github.com/EpicSevenDB/gamedatabase"
                                            rel="noopener"
                                            target="_blank"
                                            >Github database Hero list</a
                                        >. Thank you <strong class="white">Kromagg</strong>. Also, thanks to
                                        <strong class="white">Dimbreath</strong> for May 1st's assets and for adding
                                        locations and apShops for items.
                                    </li>
                                </ul>
                                <p>
                                    Please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                    if you got feedback or bug reports, or email me directly through
                                    <strong class="white">raphaelddl@epicsevendb.com</strong> if you prefer.
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>April 25th, 2019 - version 0.7.5</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>Guilty Gear Collab</strong> <br />Added Guilty Gear Collab related
                                        heroes and artifacts.
                                    </li>
                                    <li>
                                        <strong>Database updated</strong>
                                        <br />Hero and Artifact data updated with latest from
                                        <a
                                            href="https://github.com/EpicSevenDB/gamedatabase"
                                            rel="noopener"
                                            target="_blank"
                                            >Github database Hero list</a
                                        >. Thank you <strong class="white">Kromagg</strong>.
                                    </li>
                                </ul>
                                <p>
                                    Please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                    if you got feedback or bug reports, or email me directly through
                                    <strong class="white">raphaelddl@epicsevendb.com</strong> if you prefer.
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>April 22th, 2019 - version 0.7.0</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>Better Homepage</strong> <br />Moved changelog to it's own page, ain't
                                        nobody got time for changelog.
                                    </li>
                                    <li>
                                        <strong>Home Filter fixed</strong>
                                        <br />Results were limited, now it'll show all. For example, searching for RIN
                                        gave 3 results, now will properly show all 8.
                                    </li>
                                    <li>
                                        <strong>Database updated</strong>
                                        <br />Hero and Artifact data updated with latest from
                                        <a
                                            href="https://github.com/EpicSevenDB/gamedatabase"
                                            rel="noopener"
                                            target="_blank"
                                            >Github database Hero list</a
                                        >, including april 18th patch (ML Baal, ML Rin). Thank you
                                        <strong class="white">Kromagg</strong>.
                                    </li>
                                </ul>
                                <p>
                                    Please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                    if you got feedback or bug reports, or email me directly through
                                    <strong class="white">raphaelddl@epicsevendb.com</strong> if you prefer.
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>Feb 28th, 2019 - version 0.6.5</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/icon_gm_s.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>Hero List scroll lag/stutter</strong> <br />Hero List was lagging the
                                        scroll when had more than 3 heroes per line. In case you care on "why", it was a
                                        funny experience discovering the bottleneck was that border-radius in
                                        conjunction with a border having a RGBA color (with opacity &lt; 1) destroyed
                                        browser's performance (Chrome specially). Fixed!
                                    </li>
                                    <li>
                                        <strong>Home Filter!</strong>
                                        <br />You can Search for Artifact and Hero names on the form on top of the
                                        screen!<br /><br />
                                        Props to <strong class="white">willhausman</strong> who contributed for this on
                                        our github. We appreciate!
                                    </li>
                                    <li>
                                        <strong>Database updated</strong>
                                        <br />Hero and Artifact data updated with latest from
                                        <a
                                            href="https://github.com/EpicSevenDB/gamedatabase"
                                            rel="noopener"
                                            target="_blank"
                                            >Github database Hero list</a
                                        >, including feb 27th patch (Radiant Forever, Ludwig buff). Thank you verrrryyyy
                                        much to <strong class="white">Kromagg</strong>, really owning the data, both
                                        adding new and fixing already existing. And also, thank you in advance for both
                                        <strong class="white">Kromagg</strong> and
                                        <strong class="white">stocky37</strong> on their current work with the
                                        multipliers (release date TBD).
                                    </li>
                                </ul>
                                <p>
                                    Please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                    if you got feedback or bug reports, or email me directly through
                                    <strong class="white">raphaelddl@epicsevendb.com</strong> if you prefer.
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>Feb 23rd, 2019 - version 0.6.0</strong>
                            <div class="bullet-description">
                                <img :src="`${assetsUrl}/website/journal_hero.png`" class="changelog-image" />
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>Search by Name bug fix</strong> <br />searching all lowercase would fare
                                        results,let's say, "abyssal". But if you cased the search, "Abyssal", it would
                                        not. Now search is case-insensitive.
                                    </li>
                                    <li>
                                        <strong>All Filters implemented</strong>
                                        <br />You can filter the Artifact List by <strong class="white">Rarity</strong>,
                                        <strong class="white">Class</strong>, <strong class="white">Element</strong> and
                                        also <strong class="white">Search by Name</strong>.

                                        <br /><br />
                                        You can filter the Hero List by
                                        <strong class="white">Rarity</strong>, <strong class="white">Class</strong>,
                                        <strong class="white">Zodiac</strong>, <strong class="white">Element</strong>,
                                        <strong class="white">Search by Name</strong> and also by
                                        <strong class="white">Buffs and Debuffs</strong>. <br /><br />

                                        Buffs and Debuffs are multiselect, therefore you can search for that hero you
                                        wanted to have both Immunity and Barrier (Angelica), or that gets Immortality
                                        and Attack Up (Kayron, Sven) and so on.
                                        <br /><br />

                                        Currently I'm missing Sagittarius and Capricorn icons, but you can hover over
                                        the missing icons and browser should render the name on the tooltip. Just
                                        remember Saint Seiya/Knights of the Zodiac's Gold Saint's order lol!
                                    </li>
                                    <li>
                                        <strong>Database updated</strong>
                                        <br />Hero and Artifact data updated with latest from
                                        <a
                                            href="https://github.com/EpicSevenDB/gamedatabase"
                                            rel="noopener"
                                            target="_blank"
                                            >Github database Hero list</a
                                        >, that means, all heroes and artifacts currently in game are here.. Tamarinne,
                                        Lidica, etc.
                                    </li>
                                </ul>
                                <p>
                                    Please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                    if you got feedback or bug reports, or email me directly through
                                    <strong class="white">raphaelddl@epicsevendb.com</strong> if you prefer.
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>Feb 18th, 2019 - version 0.5.5</strong>
                            <div class="bullet-description">
                                <p>Implemented the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>Hero Filters</strong>
                                        <br />You can now filter the Artifact List by
                                        <strong class="white">Rarity</strong>, <strong class="white">Class</strong>,
                                        <strong class="white">Element</strong> and also
                                        <strong class="white">Search by Name</strong>. I decided to release before I
                                        finish Buff/Debuff since the filters for artifact and hero are pretty much the
                                        same so was easy to use the same component. I will implement filter by
                                        <strong class="white">Zodiac Sign</strong>, but currently I'm missing
                                        Sagittarius and Capricorn icons, so I need to get them first.
                                    </li>
                                </ul>
                                <p>
                                    Please
                                    <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                        >open an issue on our EpicSevenDB/ui Github page</a
                                    >
                                    if you got feedback or bug reports, or email me directly through
                                    <strong class="white">raphaelddl@epicsevendb.com</strong> if you prefer.
                                </p>
                                <p>Best, <br />RaphaelDDL</p>
                            </div>
                        </li>
                        <li>
                            <strong>Feb 18th, 2019 - version 0.5.0</strong>
                            <div class="bullet-description">
                                <p>Implemented and/or Fixed the following:</p>
                                <ul class="bullets">
                                    <li>
                                        <strong>Artifact Filters</strong>
                                        <br />You can now filter the Artifact List by
                                        <strong class="white">Rarity</strong>,
                                        <strong class="white">Class Exclusive</strong> and also
                                        <strong class="white">Search by Name</strong>. Hero List filter is just around
                                        the corner, I'm finishing implementing the search by buff/debuff.
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
                                    </li>
                                    <li>
                                        <strong>Hero Status updated/fixed</strong>
                                        <br />We updated the percentage status from string (`150`) to float (`1.5`) on
                                        gamedatabase so I'm adjusting the UI to do the necessary calc (aka times 100).
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
import { mountedPageView } from "~/util/vueMixins";
import { headMetaTags } from "~/util/Utils";
export default {
    mixins: [mountedPageView],
    inject: ["assetsUrl"],
    head() {
        return headMetaTags(
            {
                title: "Changelog",
                description:
                    "Discover more about EpicSevenDB updates, what are the changes, what fix has been deployed, what feature has been implemented!",
                image: this.assetsUrl + "/website/book_changelog.png",
            },
            this
        );
    },
};
</script>
