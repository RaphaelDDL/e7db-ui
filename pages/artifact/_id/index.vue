<template>
    <div class="columns">
        <LoadingMessage :is-loading="isLoading" class="column" />

        <main v-if="!isLoading && showDetails" class="column is-three-fifths">
            <Header :image-urls="imageUrls" :name="artifactDetail.name" />
            <Stats
                :role="artifactDetail.role"
                :rarity="artifactDetail.rarity"
                :stats="artifactDetail.stats"
                :skill="artifactDetail.skill"
            />
            <Lore :description="artifactDetail.description" />
        </main>
        <aside v-if="!isLoading && showDetails" class="column is-two-fifths">
            <Artwork :image-urls="imageUrls" />

            <ContentAd />
        </aside>
    </div>
</template>

<script>
import LoadingMessage from "~/components/general/LoadingMessage";
import { headMetaTags } from "~/util/Utils";
import { mountedPageView } from "~/util/vueMixins";
import ArtifactComponents from "~/components/artifact";
import ContentAd from "~/components/ads/content.vue";
export default {
    components: {
        LoadingMessage,
        ...ArtifactComponents,
        ContentAd,
    },
    mixins: [mountedPageView],
    inject: ["assetsUrl"],
    async asyncData({ params, store, redirect }) {
        const [artifactDetail] = await Promise.all([
            store.dispatch("artifact/getSingle", { _id: params.id }).catch((error) => {
                return error;
            }),
        ]);

        if (!artifactDetail || (artifactDetail && !artifactDetail.name)) {
            return redirect(302, "/artifacts");
        }
        return {
            isLoading: false,
            artifactDetail,
            showDetails: true,
        };
    },
    data() {
        return {
            showDetails: false,
            artifactDetail: {
                name: "",
                rarity: 1,
                exclusive: "",
                role: "",
                limited: false,
                description: "",
                skill: {
                    description: "",
                    enhancements: [],
                },
                assets: {
                    image: "",
                    thumbnail: "",
                    icon: "",
                },
                stats: {
                    atk: 0,
                    hp: 0,
                },
            },
            isLoading: false,
        };
    },

    head() {
        const {
            name = "",
            role = "",
            assets: { image },
        } = this.artifactDetail || {};
        const exclusivityString = role ? `, an exclusive ${role}` : "";
        return headMetaTags(
            {
                title: `${name} | ${this.$t("links.artifacts")}${
                    this.$i18n.locale !== "en" ? " | " + this.$t("gameName") : ""
                }`,
                description: `See detailed information about ${name}${exclusivityString} Artifact on EpicSeven game, including Artwork, Rarity, Class Specificity, Attributes, Skill Effects and more!`,
                image: image ? this.imageUrls.full : "",
            },
            this
        );
    },
    computed: {
        imageUrls() {
            return {
                full: this.artifactDetail.assets.image,
                small: this.artifactDetail.assets.thumbnail,
                icon: this.artifactDetail.assets.icon,
            };
        },
    },
};
</script>
