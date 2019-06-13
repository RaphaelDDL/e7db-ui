<template>
    <div class="columns">
        <LoadingMessage :is-loading="isLoading" class="column" />

        <main v-if="!isLoading && showDetails" class="column is-three-fifths">
            <nuxt-link :to="localePath('artifacts')">&lt; {{ $t("artifacts.aaaaa") }}</nuxt-link>
            <hr class="boxBorderHr" />
            <section class="section-container hero-title">
                <div class="columns is-mobile">
                    <div class="column is-three-fifths hero-name">
                        <h1>{{ artifactDetail.name }}</h1>
                    </div>
                    <div v-lazy-container="{ selector: 'img' }" class="column is-two-fifths hero-thumb">
                        <img
                            :data-error="`${this.assetsUrl}/artifact/_placeholder/small_missing.jpg`"
                            :data-src="imageUrls.small"
                            alt="small art"
                        />
                    </div>
                </div>
            </section>

            <!-- hero basics -->
            <section class="section-container">
                <div class="section-box hero-basics">
                    <div class="hero-stats columns">
                        <div class="column is-full hero-stats-base">
                            <h1>{{ $t("artifacts.stats") }}</h1>
                            <hr />
                            <ul>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">{{ $t("artifacts.grade") }}</div>
                                    <div :class="starRating" class="column is-half hero-stats-value"></div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">
                                        {{ $t("artifacts.classExclusive") }}
                                    </div>
                                    <div :class="heroExclusive" class="column is-half hero-stats-value"></div>
                                </li>
                            </ul>
                            <hr />
                            <div class="hero-stats columns">
                                <div class="column is-half hero-stats-base">
                                    <h4>{{ $t("artifacts.baseLevelStats") }} (+0)</h4>
                                    <ul>
                                        <li class="columns is-mobile">
                                            <div class="column is-half hero-stats-type">Attack</div>
                                            <div class="column is-half hero-stats-value">
                                                {{ artifactDetail.stats.base.atk }}
                                            </div>
                                        </li>
                                        <li class="columns is-mobile">
                                            <div class="column is-half hero-stats-type">Health</div>
                                            <div class="column is-half hero-stats-value">
                                                {{ artifactDetail.stats.base.hp }}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="column is-half hero-stats-max">
                                    <h4>{{ $t("artifacts.maxLevelStats") }} (+30)</h4>
                                    <ul>
                                        <li class="columns is-mobile">
                                            <div class="column is-half hero-stats-type">Attack</div>
                                            <div class="column is-half hero-stats-value">
                                                {{ artifactDetail.stats.max.atk }}
                                            </div>
                                        </li>
                                        <li class="columns is-mobile">
                                            <div class="column is-half hero-stats-type">Health</div>
                                            <div class="column is-half hero-stats-value">
                                                {{ artifactDetail.stats.max.hp }}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- hero stats -->
            <section class="section-container">
                <div class="section-box">
                    <h1>{{ $t("artifacts.skill") }}</h1>
                    <hr />
                    <div class="hero-stats columns">
                        <div class="column is-half hero-stats-base">
                            <h4>{{ $t("artifacts.baseLevelSkill") }} (lv1, +0)</h4>
                            <ul>
                                <li class="columns is-mobile">
                                    <div class="column is-12 hero-stats-type">
                                        <p>{{ artifactDetail.skillDescription.base }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="column is-half hero-stats-max">
                            <h4>{{ $t("artifacts.maxLevelSkill") }} (lv10, +30)</h4>
                            <ul>
                                <li class="columns is-mobile">
                                    <div class="column is-12 hero-stats-type">
                                        <p>{{ artifactDetail.skillDescription.max }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <aside v-if="!isLoading && showDetails" class="column is-two-fifths">
            <!-- hero illustraton -->
            <section class="section-container">
                <div class="section-box hero-illustration">
                    <h1>{{ $t("artifacts.image") }}</h1>
                    <hr />
                    <div v-lazy-container="{ selector: 'img' }" class="artifact-artwork">
                        <img
                            :data-error="`${this.assetsUrl}/artifact/_placeholder/icon_missing.png`"
                            :data-src="imageUrls.icon"
                            class="artifact-image-icon"
                        />
                        <img
                            :data-error="`${this.assetsUrl}/artifact/_placeholder/full_missing.png`"
                            :data-src="imageUrls.full"
                            class="artifact-image-full"
                        />
                    </div>
                </div>
            </section>
            <!-- hero bg -->
            <section class="section-container">
                <div class="section-box">
                    <h1>{{ $t("artifacts.lore") }}</h1>
                    <hr />
                    <p v-for="loreParagraph in artifactDetail.loreDescription" :key="loreParagraph">
                        {{ loreParagraph }}
                    </p>
                </div>
            </section>
        </aside>
    </div>
</template>

<script>
import LoadingMessage from "~/components/general/LoadingMessage";
import { headMetaTags } from "~/util/Utils";
import { mountedPageView } from "~/util/vueMixins";
export default {
    components: {
        LoadingMessage,
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
        starRating() {
            return `star-rating-${this.artifactDetail.rarity}`;
        },
        imageUrls() {
            return {
                full: `${this.assetsUrl}/artifact/${this.artifactDetail.fileId}/full.png`,
                small: `${this.assetsUrl}/artifact/${this.artifactDetail.fileId}/small.jpg`,
                icon: `${this.assetsUrl}/artifact/${this.artifactDetail.fileId}/icon.png`,
            };
        },
        heroExclusive() {
            let heroExclusive = "";
            const { exclusive } = this.artifactDetail;

            if (!exclusive || !exclusive.length) {
                return heroExclusive;
            }

            exclusive.forEach(heroClass => {
                heroExclusive = `${heroExclusive} hero-class-${heroClass}`;
            });
            return heroExclusive;
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
    asyncData({ params, store }) {
        return store.dispatch("artifact/getSingle", { fileId: params.id }).then(artifactDetail => {
            return {
                isLoading: false,
                artifactDetail: artifactDetail,
                showDetails: true,
            };
        });
    },
    // mounted() {
    //     const fileId = this.$route.params.fileId;

    //     this.isLoading = true;
    //     this.showDetails = false;

    //     this.$store
    //         .dispatch('artifact/getSingle', { fileId })
    //         .then(artifactDetail => {
    //             this.artifactDetail = artifactDetail;
    //             this.showDetails = true;
    //         })
    //         .catch(() => {
    //             this.showDetails = false;
    //         })
    //         .then(() => {
    //             this.isLoading = false;
    //         });
    // },
};
</script>
