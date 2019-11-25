<template>
    <div class="list-filters">
        <div class="columns is-mobile">
            <div class="column is-half">
                <h3>{{ $t("filters.header") }}</h3>
            </div>
            <div class="column is-half">
                <form @submit.prevent>
                    <input
                        id="artifactKeyword"
                        v-model.lazy="selfFilters.keyword"
                        v-debounce="delay"
                        class="filter-by-name"
                        name="keyword"
                        :placeholder="$t('filters.byName')"
                        type="search"
                    />
                </form>
            </div>
        </div>
        <div class="columns toggleable-btns">
            <div class="column is-half-tablet">
                <h5>{{ $t("filters.rarity") }}</h5>
                <ul class="filter-group">
                    <li :class="{ selected: !selfFilters.rarity }">
                        <label for="rarity0" title="All">
                            <input
                                id="rarity0"
                                v-model.number="selfFilters.rarity"
                                name="rarity"
                                type="radio"
                                value="0"
                            />
                            <span class>{{ $t("filters.all") }}</span>
                        </label>
                    </li>
                    <li :class="{ selected: selfFilters.rarity === 1 }">
                        <label for="rarity1" title="Natural 1 Star">
                            <input
                                id="rarity1"
                                v-model.number="selfFilters.rarity"
                                name="rarity"
                                type="radio"
                                value="1"
                            />
                            <span class="star-rating-1 small"></span>
                        </label>
                    </li>
                    <li :class="{ selected: selfFilters.rarity === 2 }">
                        <label for="rarity2" title="Natural 2 Stars">
                            <input
                                id="rarity2"
                                v-model.number="selfFilters.rarity"
                                name="rarity"
                                type="radio"
                                value="2"
                            />
                            <span class="star-rating-2 small"></span>
                        </label>
                    </li>
                    <li :class="{ selected: selfFilters.rarity === 3 }">
                        <label for="rarity3" title="Natural 3 Stars">
                            <input
                                id="rarity3"
                                v-model.number="selfFilters.rarity"
                                name="rarity"
                                type="radio"
                                value="3"
                            />
                            <span class="star-rating-3 small"></span>
                        </label>
                    </li>
                    <li :class="{ selected: selfFilters.rarity === 4 }">
                        <label for="rarity4" title="Natural 4 Stars">
                            <input
                                id="rarity4"
                                v-model.number="selfFilters.rarity"
                                name="rarity"
                                type="radio"
                                value="4"
                            />
                            <span class="star-rating-4 small"></span>
                        </label>
                    </li>
                    <li :class="{ selected: selfFilters.rarity === 5 }">
                        <label for="rarity5" title="Natural 5 Stars">
                            <input
                                id="rarity5"
                                v-model.number="selfFilters.rarity"
                                name="rarity"
                                type="radio"
                                value="5"
                            />
                            <span class="star-rating-5 small"></span>
                        </label>
                    </li>
                </ul>
            </div>
            <div class="column is-half-tablet">
                <h5>{{ $t("filters.classExclusive") }}</h5>
                <ul class="filter-group">
                    <template v-for="currentClass in classList">
                        <li
                            :key="currentClass"
                            :class="{
                                selected:
                                    currentClass === 'all'
                                        ? !selfFilters[classProperty]
                                        : selfFilters[classProperty] === currentClass,
                            }"
                        >
                            <label
                                :for="`${classProperty}-${currentClass}`"
                                :title="`${currentClass === 'all' ? $t('filters.allClasses') : trueRole(currentClass)}`"
                            >
                                <input
                                    :id="`${classProperty}-${currentClass}`"
                                    v-model="selfFilters[classProperty]"
                                    name="role"
                                    type="radio"
                                    :value="`${currentClass === 'all' ? '' : currentClass}`"
                                />
                                <span :class="trueRoleClass(currentClass)">{{
                                    `${currentClass === "all" ? $t("filters.all") : ""}`
                                }}</span>
                            </label>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <h4 @click="clearSelection">&#8593; {{ $t("filters.clearAllFilters") }}</h4>
    </div>
</template>

<script>
import { inputDebounce } from "~/util/Directives";
import { trueRole } from "~/util/Utils";

export default {
    inject: ["assetsUrl"],
    directives: {
        debounce: inputDebounce,
    },
    props: {
        filters: Object,
        default: () => {},
    },
    data() {
        return {
            delay: 500,
            heroClasses: ["all", "knight", "warrior", "assassin", "mage", "manauser", "ranger"],
        };
    },
    computed: {
        classList() {
            return this.heroClasses;
        },
        classProperty() {
            return "role";
        },
        selfFilters: {
            get() {
                return this.filters;
            },
            set(value) {
                this.$emit("update:filters", value);
            },
        },
    },
    watch: {
        selfFilters: {
            handler() {
                this.$ga.event({
                    eventCategory: `${this.pageType}:filters`,
                    eventAction: "update",
                    eventLabel: JSON.stringify(this.selfFilters),
                    // eventValue: 123
                });
            },
            deep: true,
        },
    },
    methods: {
        clearSelection() {
            this.$emit("filters:clear");
            this.$ga.event({
                eventCategory: `${this.pageType}:filters`,
                eventAction: "clearSelection",
                // eventLabel: JSON.stringify(this.selfFilters),
                // eventValue: 123
            });
        },
        trueRole(currentClass) {
            return trueRole(currentClass);
        },
        trueRoleClass(currentClass) {
            const role = this.trueRole(currentClass);
            return role !== "all" ? `hero-class-${role} no-text` : "";
        },
    },
};
</script>
