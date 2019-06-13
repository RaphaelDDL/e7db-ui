<template>
    <v-popover
        :auto-hide="true"
        :handle-resize="true"
        placement="top"
        popover-class="item-tooltip"
        @show="onPopoverShow(resource.item)"
    >
        <!-- This will be the popover target (for the events and position) -->
        <div class="tooltip-target">
            <div :class="itemTierClass" class="resource-item-asset">
                <img :key="resource.item" v-lazy="imageUrls(resource)" :title="resource.item | catalystName" alt />
            </div>
            <span>{{ resource.qty | formatNumber }}</span>
        </div>

        <!-- This will be the content of the popover -->
        <template slot="popover">
            <LoadingMessage :is-loading="isLoading" :no-border="true" class="column" />

            <div v-show="!isLoading && showDetails">
                <div class="columns is-mobile">
                    <div :class="itemTierClass" class="column resource-item-asset">
                        <img :key="resource.item" v-lazy="imageUrls(resource)" class />
                    </div>
                    <div class="column">
                        <div v-if="itemDetail.type" class="item-type">{{ itemDetail.type }}</div>
                        <div v-if="itemDetail.name || resource.item" class="item-name">
                            {{ itemDetail.name || resource.item | catalystName }}
                        </div>
                        <div class="item-quantity">Needed: {{ resource.qty | formatNumber }}</div>
                    </div>
                </div>
                <div v-if="itemDetail.description" class="item-description">{{ itemDetail.description }}</div>
                <div
                    v-if="
                        (itemDetail.locations && itemDetail.locations.length) ||
                            (itemDetail.apShops && itemDetail.apShops.length)
                    "
                    class="item-locations"
                >
                    <hr />
                    <div v-if="itemDetail.locations && itemDetail.locations.length" class="columns">
                        <div class="column">
                            <h3>Stage Drops:</h3>
                            <ul class="bullets collapsed">
                                <li v-for="location in itemDetail.locations" :key="location.node">
                                    <span class="skillEnhanceFontColor">{{ location.node }}</span>
                                    [{{ location.name }}] | Mob Count:
                                    <span class="skillEnhanceFontColor">{{ location.mobcount }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr
                        v-if="
                            itemDetail.locations &&
                                itemDetail.locations.length &&
                                itemDetail.apShops &&
                                itemDetail.apShops.length
                        "
                    />
                    <div v-if="itemDetail.apShops && itemDetail.apShops.length" class="columns">
                        <div class="column">
                            <h3>AP Shops:</h3>
                            <ul class="bullets collapsed">
                                <li v-for="apShop in itemDetail.apShops" :key="apShop.chapter">
                                    <span class="skillEnhanceFontColor">{{ apShop.chapter }}</span> | Available:
                                    <span class="skillEnhanceFontColor">{{ apShop.quantity }}</span> | Cost:
                                    <span class="skillEnhanceFontColor">{{ apShop.cost }}AP</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </v-popover>
</template>

<script>
import LoadingMessage from "~/components/general/LoadingMessage";

export default {
    inject: ["assetsUrl"],
    components: {
        LoadingMessage,
    },
    props: {
        resource: {
            type: Object,
            default() {
                return {
                    item: "",
                    qty: 0,
                };
            },
        },
    },
    data() {
        return {
            showDetails: false,
            isLoading: false,
            itemDetail: {},
        };
    },
    computed: {
        itemTierClass() {
            const singleItemRarity = this.$store.getters["item/singleRarity"](this.resource.item);
            return `catalyst-tier-${singleItemRarity}`;
        },
    },
    methods: {
        imageUrls(resource) {
            return {
                src: `${this.assetsUrl}/item/${resource.item}.png`,
                error: `${this.assetsUrl}/item/_placeholder/item_missing.png`,
            };
        },
        onPopoverShow(_id) {
            this.isLoading = true;
            this.showDetails = false;

            this.$store
                .dispatch("item/getSingle", { _id })
                .then(itemDetail => {
                    this.itemDetail = itemDetail;
                    this.showDetails = true;
                })
                .catch(() => {
                    this.showDetails = false;
                })
                .then(() => {
                    this.isLoading = false;
                });
        },
    },
};
</script>
