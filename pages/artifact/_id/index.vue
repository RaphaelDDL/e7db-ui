<template>
    <div class="columns">
        <LoadingMessage :is-loading="isLoading" class="column" />

        <main v-if="!isLoading && showDetails" class="column is-three-fifths">
            <Header :image-urls="imageUrls" :name="artifactDetail.name" />
            <Stats
                :exclusive="artifactDetail.exclusive"
                :rarity="artifactDetail.rarity"
                :stats="artifactDetail.stats"
            />
            <Skill :skill-description="artifactDetail.skillDescription" />
        </main>
        <aside v-if="!isLoading && showDetails" class="column is-two-fifths">
            <Artwork :image-urls="imageUrls" />
            <Lore :lore-description="artifactDetail.loreDescription" />
        </aside>
    </div>
</template>

<script>
import LoadingMessage from "~/components/general/LoadingMessage";
import { headMetaTags } from "~/util/Utils";
import { mountedPageView } from "~/util/vueMixins";
import * as ArtifactComponents from "~/components/artifact";
export default {
    components: {
        LoadingMessage,
        ...ArtifactComponents,
    },
    mixins: [mountedPageView],
    inject: ["assetsUrl"],
    data() {
        return {
            showDetails: false,
            artifactDetail: {
                name: "",
                rarity: 1,
                exclusive: [],
                loreDescription: [],
                skillDescription: {
                    base: "",
                    max: "",
                },
                stats: {
                    base: {
                        atk: 0,
                        hp: 0,
                    },
                    max: {
                        atk: 0,
                        hp: 0,
                    },
                },
            },
            isLoading: false,
        };
    },
    computed: {
        imageUrls() {
            return {
                full: `${this.assetsUrl}/artifact/${this.artifactDetail.fileId}/full.png`,
                small: `${this.assetsUrl}/artifact/${this.artifactDetail.fileId}/small.jpg`,
                icon: `${this.assetsUrl}/artifact/${this.artifactDetail.fileId}/icon.png`,
            };
        },
    },

    head() {
        const artifactName = this.artifactDetail && this.artifactDetail.name ? this.artifactDetail.name : "";
        const { exclusive } = this.artifactDetail;
        const exclusivityString = exclusive && exclusive.length ? `, an exclusive ${exclusive}` : "";
        return headMetaTags(
            {
                title: `${artifactName} | Artifact`,
                description: `See detailed information about ${artifactName}${exclusivityString} Artifact on EpicSeven game, including Artwork, Rarity, Class Specificity, Attributes, Skill Effects and more!`,
                image: this.artifactDetail && this.artifactDetail.fileId ? this.imageUrls.full : "",
            },
            this
        );
    },
    asyncData({ params, store, redirect }) {
        return Promise.all([
            store.dispatch("artifact/getSingle", { fileId: params.id }).catch(error => {
                return error;
            }),
        ]).then(([artifactDetail]) => {
            if (!artifactDetail || (artifactDetail && !artifactDetail.name)) {
                return redirect(302, "/artifacts");
            }
            return {
                isLoading: false,
                artifactDetail: artifactDetail,
                showDetails: true,
            };
        });
    },
};
</script>
