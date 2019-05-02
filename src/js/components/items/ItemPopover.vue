<template>
    <v-popover
        :autoHide="true"
        :handleResize="true"
        @show="onPopoverShow(resource.item)"
        placement="top"
        popoverClass="item-tooltip"
    >
        <!-- This will be the popover target (for the events and position) -->
        <div class="tooltip-target">
            <div :class="itemTierClass" class="resource-item-asset">
                <img :key="resource.item" :title="resource.item | catalystName" alt v-lazy="imageUrls(resource)" />
            </div>
            <span>{{ resource.qty | formatNumber }}</span>
        </div>

        <!-- This will be the content of the popover -->
        <template slot="popover">
            <LoadingMessage :isLoading="isLoading" :noBorder="true" class="column" />

            <div v-show="!isLoading && showDetails">
                <div class="columns is-mobile">
                    <div :class="itemTierClass" class="column resource-item-asset">
                        <img :key="resource.item" class v-lazy="imageUrls(resource)" />
                    </div>
                    <div class="column">
                        <div class="item-type" v-if="itemDetail.type">{{ itemDetail.type }}</div>
                        <div class="item-name" v-if="itemDetail.name || resource.item">
                            {{ itemDetail.name || resource.item | catalystName }}
                        </div>
                        <div class="item-quantity">Needed: {{ resource.qty | formatNumber }}</div>
                    </div>
                </div>
                <div class="item-description" v-if="itemDetail.description">{{ itemDetail.description }}</div>
                <div
                    class="item-locations"
                    v-if="
                        (itemDetail.locations && itemDetail.locations.length) ||
                            (itemDetail.apShops && itemDetail.apShops.length)
                    "
                >
                    <hr />
                    <div class="columns" v-if="itemDetail.locations && itemDetail.locations.length">
                        <div class="column">
                            <h3>Stage Drops:</h3>
                            <ul class="bullets collapsed">
                                <li :key="location.node" v-for="location in itemDetail.locations">
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
                    <div class="columns" v-if="itemDetail.apShops && itemDetail.apShops.length">
                        <div class="column">
                            <h3>AP Shops:</h3>
                            <ul class="bullets collapsed">
                                <li :key="apShop.chapter" v-for="apShop in itemDetail.apShops">
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
import LoadingMessage from '@/js/components/general/LoadingMessage';

export default {
    inject: ['assetsUrl'],
    components: {
        LoadingMessage,
    },
    props: {
        resource: {
            type: Object,
            default() {
                return {
                    item: '',
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
            let singleItemRarity = this.$store.getters['item/singleRarity'](this.resource.item);
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
                .dispatch('item/getSingle', { _id })
                .then((itemDetail) => {
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
