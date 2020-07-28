<template>
    <div class="columns">
        <main class="column is-12">
            <section class="section-container">
                <LoadingMessage :is-loading="isLoading" />
                <div v-if="!isLoading && list && list.length" class="section-box">
                    <!-- Filters on next release; More items to be added soon -->
                    <hr />
                    <div class="columns is-mobile resource-item-list item-page">
                        <ItemPopover
                            v-for="item in list"
                            :id="item._id"
                            :key="item._id"
                            :resource="item"
                            :is-list="true"
                        />
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ItemPopover from "~/components/items/ItemPopover";
import { mountedPageView } from "~/util/vueMixins";
import LoadingMessage from "~/components/general/LoadingMessage";
import { headMetaTags } from "~/util/Utils";

export default {
    components: {
        LoadingMessage,
        ItemPopover,
    },
    mixins: [mountedPageView],
    inject: ["assetsUrl"],
    asyncData({ store }) {
        return store.dispatch("item/getList");
    },
    data() {
        return {
            isLoading: false,
        };
    },
    // use this.list
    computed: {
        ...mapGetters("item", ["list"]),
    },
    head() {
        return headMetaTags(
            {
                title: `${this.$t("links.items")}${this.$i18n.locale !== "en" ? " | " + this.$t("gameName") : ""}`,
                description:
                    "See information about all Items, Catalysts, Enhancement Ingredients and Crafting Materials in EpicSeven game, including Farming Locations, AP Shops and more!",
                image: `${this.assetsUrl}/website/box_items.png`,
            },
            this
        );
    },
};
</script>
