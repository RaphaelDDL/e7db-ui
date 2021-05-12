<template>
    <div class="columns">
        <main class="column is-12">
            <section class="section-container">
                <div class="section-box">
                    <h1>{{ $t("links.about") }}</h1>
                    <hr />
                    <p>
                        {{ $t("about.p1") }}
                    </p>
                    <p>
                        {{ $t("about.p2") }}
                    </p>
                    <ul class="bullets">
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
                        <!-- <li>
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
                        </li> -->
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
import { mountedPageView } from "~/util/vueMixins";
import { headMetaTags } from "~/util/Utils";
export default {
    mixins: [mountedPageView],
    inject: ["assetsUrl"],
    head() {
        return headMetaTags(
            {
                title: `${this.$t("links.about")}${this.$i18n.locale !== "en" ? " | " + this.$t("gameName") : ""}`,
                description: "Discover more about EpicSevenDB, who runs it and how to contribute to the project!",
                image: this.assetsUrl + "/website/book_about.png",
            },
            this
        );
    },
};
</script>
