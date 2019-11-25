<template>
    <nuxt-link
        :to="
            localePath({
                name: 'artifact-id',
                params: {
                    id: artifact._id,
                },
            })
        "
        class="column"
        tag="li"
    >
        <a class="artifact-list-card">
            <div :class="heroExclusive" class="artifact-name no-text">
                <h2>{{ artifact.name }}</h2>
            </div>
            <img :key="artifact.name" v-lazy="imageUrls.small" class="artifact-small artifact-list-card-image" />
            <div class="artifact-icon">
                <img
                    :key="`${artifact.name}_icon`"
                    v-lazy="imageUrls.icon"
                    class="artifact-icon-img artifact-list-card-image"
                />
                <div :class="starRating" class="artifact-rarity"></div>
            </div>
        </a>
    </nuxt-link>
</template>

<script>
import { trueRole } from "~/util/Utils";

export default {
    inject: ["assetsUrl"],
    props: ["artifact"],
    computed: {
        starRating() {
            return `star-rating-${this.artifact.rarity}`;
        },
        // imageUrls() {
        //     return {
        //         small: {
        //             src: `${this.assetsUrl}/artifact/${this.artifact.fileId}/small.jpg`,
        //             error: `${this.assetsUrl}/artifact/_placeholder/small_missing.jpg`,
        //             loading: `${this.assetsUrl}/website/loading.gif`,
        //         },
        //         icon: {
        //             src: `${this.assetsUrl}/artifact/${this.artifact.fileId}/icon.png`,
        //             error: `${this.assetsUrl}/artifact/_placeholder/icon_missing.jpg`,
        //         },
        //     };
        // },
        imageUrls() {
            return {
                small: {
                    src: `${this.assetsUrl}/_source/item_arti/${this.artifact.assets.thumbnail}.jpg`,
                    error: `${this.assetsUrl}/artifact/_placeholder/small_missing.jpg`,
                    loading: `${this.assetsUrl}/website/loading.gif`,
                },
                icon: {
                    src: `${this.assetsUrl}/_source/item_arti/${this.artifact.assets.icon}.png`,
                    error: `${this.assetsUrl}/artifact/_placeholder/icon_missing.png`,
                },
            };
        },
        heroExclusive() {
            const { role } = this.artifact;
            const heroClass = trueRole(role);
            if (!role) {
                return "";
            }
            return `hero-class-${heroClass}`;
        },
    },
};
</script>
