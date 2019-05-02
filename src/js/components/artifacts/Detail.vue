<template>
    <div class="columns">
        <LoadingMessage :isLoading="isLoading" class="column" />

        <main class="column is-three-fifths" v-if="!isLoading && showDetails">
            <router-link to="/artifacts">&lt; Back to Artifact List</router-link>
            <hr class="boxBorderHr" />
            <section class="section-container hero-title">
                <div class="columns is-mobile">
                    <div class="column is-three-fifths hero-name">
                        <h1>{{ artifactDetail.name }}</h1>
                    </div>
                    <div class="column is-two-fifths hero-thumb" v-lazy-container="{ selector: 'img' }">
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
                            <h1>Stats</h1>
                            <hr />
                            <ul>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Star Grade</div>
                                    <div :class="starRating" class="column is-half hero-stats-value"></div>
                                </li>
                                <li class="columns is-mobile">
                                    <div class="column is-half hero-stats-type">Class Specific</div>
                                    <div :class="heroExclusive" class="column is-half hero-stats-value"></div>
                                </li>
                            </ul>
                            <hr />
                            <div class="hero-stats columns">
                                <div class="column is-half hero-stats-base">
                                    <h4>Base Level Stats (+0)</h4>
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
                                    <h4>Max Level Stats (+30)</h4>
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
                    <h1>Skill</h1>
                    <hr />
                    <div class="hero-stats columns">
                        <div class="column is-half hero-stats-base">
                            <h4>Base Skill Level (lv1, +0)</h4>
                            <ul>
                                <li class="columns is-mobile">
                                    <div class="column is-12 hero-stats-type">
                                        <p>{{ artifactDetail.skillDescription.base }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="column is-half hero-stats-max">
                            <h4>Max Skill Level (lv10, +30)</h4>
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
        <aside class="column is-two-fifths" v-if="!isLoading && showDetails">
            <!-- hero illustraton -->
            <section class="section-container">
                <div class="section-box hero-illustration">
                    <h1>Illustration</h1>
                    <hr />
                    <div class="artifact-artwork" v-lazy-container="{ selector: 'img' }">
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
                    <h1>Lore</h1>
                    <hr />
                    <p :key="loreParagraph" v-for="loreParagraph in artifactDetail.loreDescription">
                        {{ loreParagraph }}
                    </p>
                </div>
            </section>
        </aside>
    </div>
</template>

<script>
import LoadingMessage from '@/js/components/general/LoadingMessage';
import { gaPageView } from '@/js/util/Analytics';
export default {
    inject: ['assetsUrl'],
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
            let heroExclusive = '',
                { exclusive } = this.artifactDetail;

            if (!exclusive || !exclusive.length) {
                return heroExclusive;
            }

            exclusive.forEach((heroClass) => {
                heroExclusive = `${heroExclusive} hero-class-${heroClass}`;
            });
            return heroExclusive;
        },
    },
    data() {
        return {
            showDetails: false,
            artifactDetail: {
                name: '',
                rarity: 1,
                exclusive: [],
                loreDescription: [],
                skillDescription: {
                    base: '',
                    max: '',
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
    components: {
        LoadingMessage,
    },
    methods: {
        updateDocTitle() {
            if (document && document.title) {
                document.title = `${this.artifactDetail.name} ${document.title}`;
            }
            gaPageView();
        },
    },
    mounted() {
        let fileId = this.$route.params.fileId;

        this.isLoading = true;
        this.showDetails = false;

        this.$store
            .dispatch('artifact/getSingle', { fileId })
            .then((artifactDetail) => {
                this.artifactDetail = artifactDetail;
                this.showDetails = true;
            })
            .catch(() => {
                this.showDetails = false;
            })
            .then(() => {
                this.isLoading = false;
                this.updateDocTitle();
            });
    },
};
</script>
