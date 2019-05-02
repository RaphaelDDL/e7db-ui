<template>
    <div class="columns">
        <main class="column is-12">
            <section class="section-container">
                <div class="section-box">
                    <h1>About + Contributing</h1>
                    <hr />
                    <p>
                        EpicSevenDB.com is a fan made website which aims to provide accurate information on heroes,
                        artifacts, gear, items, quests, and more!
                    </p>
                    <p>
                        For that, it receives help from the community by receiving suggestions, ideas and game data via
                        Github repositories. If you feel like giving us a hand, please see below links. All help is
                        appreciated!
                    </p>
                    <ul class="bullets">
                        <li>
                            <a href="https://ko-fi.com/RaphaelDDL" rel="noopener" target="_blank">Ko-Fi</a>
                            <div class="bullet-description">
                                If you'd like to support us in any way, you could by buying a coffee or tea. That's an
                                engineer's fuel :)
                            </div>
                        </li>
                        <li>
                            <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                >Github:EpicSevenDB/ui</a
                            >
                            <div class="bullet-description">
                                The repository which contains the website you are visiting at the moment. Create a new
                                <a href="https://github.com/EpicSevenDB/ui/issues" rel="noopener" target="_blank"
                                    >Issue</a
                                >
                                if you want to give a suggestion, request to add a link to your tool or guide, or report
                                bugs that happened on the website.
                            </div>
                        </li>
                        <li>
                            <a href="https://github.com/EpicSevenDB/gamedatabase/issues" rel="noopener" target="_blank"
                                >Github:EpicSevenDB/gamedatabase</a
                            >
                            <div class="bullet-description">
                                The repository which contains the database of this website, fueling our pages. Create a
                                new
                                <a
                                    href="https://github.com/EpicSevenDB/gamedatabase/issues"
                                    rel="noopener"
                                    target="_blank"
                                    >Issue</a
                                >
                                if you want to give a suggestion, report bugs that happened on the website, as for
                                example, wrong data. It's also the repository which accepts Pull Requests with game
                                data, be them new or fixing existing ones. Please check
                                <a href="https://databuilder.epicsevendb.com">E7DB DataBuilder</a>
                                if you would like to contribute but has little or none knowledge in git, github and
                                jsons :)
                            </div>
                        </li>
                        <li>
                            <a href="https://github.com/EpicSevenDB/apiserver/issues" rel="noopener" target="_blank"
                                >Github:EpicSevenDB/apiserver</a
                            >
                            <div class="bullet-description">
                                The repository which contains the backend server of this website, accessing the database
                                and returning data. Create a new
                                <a href="https://github.com/EpicSevenDB/apiserver/issues" rel="noopener" target="_blank"
                                    >Issue</a
                                >
                                if you want report bugs that happened on the REST APIs.
                            </div>
                        </li>
                    </ul>
                    <hr />
                    <p>
                        We would not exist if wasn't for the help of the community. Thank you to all involved in
                        contributing to the database, by making tools and guides, and also to SUPERCREATIVE and
                        Smilegate, for creating and publishing such wonderful game globally.
                    </p>

                    <p>Best Regards, <br />RaphaelDDL</p>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { gaPageView } from '@/js/util/Analytics';
export default {
    mounted() {
        gaPageView();
    },
};
</script>
