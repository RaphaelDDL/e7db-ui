<template>
    <section class="section-container">
        <div class="section-box">
            <div class="columns is-vcentered">
                <div class="column is-half">
                    <h1>
                        <img :src="`${assetsUrl}/_source/item/token_pvpkey.png`" alt="" class="section-title-icon" />
                        {{ $t("ranking.header", [numberOfPlayers]) }}
                    </h1>
                </div>
                <div v-if="lastUpdated" class="column is-half is-text-center small">
                    Last Updated in
                    <span class="skillEnhanceFontColor">
                        {{ lastUpdatedDate }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    inject: ["assetsUrl"],
    props: {
        lastUpdated: {
            type: Number,
            default: null,
        },
        numberOfPlayers: {
            type: Number,
            default: null,
        },
    },
    computed: {
        lastUpdatedDate() {
            return new Date(this.lastUpdated * 1000);
        },
    },
};
</script>
