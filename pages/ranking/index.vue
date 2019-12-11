<template>
    <div class="columns">
        <main class="column is-12">
            <section class="section-container">
                <div class="section-box">
                    <h1>{{ $t("links.ranking") }}</h1>
                    ranking
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
                title: `${this.$t("links.ranking")}${
                    this.$i18n.locale !== "en" ? " | " + this.$t("gameName") : ""
                }`,
                description: "n/a",
            },
            this
        );
    },
};
</script>
