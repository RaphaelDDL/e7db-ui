<template>
    <div class="columns">
        <main class="column is-12">
            <section class="section-container">
                <LoadingMessage :is-loading="isLoading" />
                <div v-if="!isLoading" class="section-box">
                    <h1>{{ $t("links.creators") }}</h1>
                    <p>
                        Below, profiles of selected Content Creators that provide great Epic Seven content to the
                        community
                    </p>
                    <hr />
                    <p>
                        <i
                            >Note: List Order is not endorsement of better vs worse as is randomized to provide
                            visibility to all creators.</i
                        >
                    </p>
                    <p>
                        <strong
                            >If you are an Epic Seven Content Creator and would like to be added or removed from this
                            list, please contact <em>RaphaelDDL#5150</em> on Discord</strong
                        >.
                    </p>
                    <hr />
                    <ul v-if="list && list.length" class="bullets creators">
                        <li v-for="creator in list" :key="creator._id">
                            <img :src="creator.img" class="changelog-image" />
                            <h3 class="skillEnhanceFontColor">{{ creator.title }}</h3>
                            <div class="description">
                                {{ creator.description }}

                                <ul class="side-list">
                                    <li v-for="social in creator.social" :key="`${creator._id}${social.type}`">
                                        <a
                                            :href="social.url"
                                            rel="noopener"
                                            target="_blank"
                                            :class="`social-icon-${social.type}`"
                                        >
                                            <strong class="white">{{ social.type }}</strong>
                                        </a>
                                    </li>
                                </ul>
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
import { mountedPageView } from "~/util/vueMixins";
import LoadingMessage from "~/components/general/LoadingMessage";
import { headMetaTags } from "~/util/Utils";

export default {
    components: {
        LoadingMessage,
    },
    mixins: [mountedPageView],
    inject: ["assetsUrl"],
    asyncData({ store }) {
        return store.dispatch("creator/getList");
    },
    data() {
        return {
            isLoading: false,
        };
    },
    head() {
        return headMetaTags(
            {
                title: `${this.$t("links.changelog")}${this.$i18n.locale !== "en" ? " | " + this.$t("gameName") : ""}`,
                description:
                    "See information about some selected content creators for Epic Seven, like their Youtube, Twitter, Twitch, and other social networks.",
                image: `${this.assetsUrl}/website/token_ticket_normal.png`,
            },
            this
        );
    },
    computed: {
        ...mapGetters("creator", ["list"]),
    },
    mounted() {
        if (!this.list || (this.list && !this.list.length)) {
            this.isLoading = true;
            this.$store.dispatch("creator/getList").then(() => {
                this.isLoading = false;
            });
        }
    },
};
</script>
