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
                <h5 v-if="isArtifactPage">{{ $t("filters.classExclusive") }}</h5>
                <h5 v-if="isHeroPage">{{ $t("filters.heroClass") }}</h5>
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
                                :title="`${currentClass === 'all' ? $t('filters.allClasses') : currentClass}`"
                            >
                                <input
                                    :id="`${classProperty}-${currentClass}`"
                                    v-model="selfFilters[classProperty]"
                                    :name="classProperty"
                                    type="radio"
                                    :value="`${currentClass === 'all' ? '' : currentClass}`"
                                />
                                <span :class="currentClass !== 'all' ? `hero-class-${currentClass} no-text` : ''">{{
                                    `${currentClass === "all" ? $t("filters.all") : ""}`
                                }}</span>
                            </label>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div v-if="isHeroPage" class="columns toggleable-btns">
            <div class="column is-half-tablet">
                <h5>{{ $t("filters.element") }}</h5>
                <ul class="filter-group">
                    <template v-for="currentElement in heroElements">
                        <li
                            :key="currentElement"
                            :class="{
                                selected:
                                    currentElement === 'all'
                                        ? !selfFilters.element
                                        : selfFilters.element === currentElement,
                            }"
                        >
                            <label
                                :for="`element-${currentElement}`"
                                :title="`${currentElement === 'all' ? $t('filters.allClasses') : currentElement}`"
                            >
                                <input
                                    :id="`element-${currentElement}`"
                                    v-model="selfFilters.element"
                                    name="element"
                                    type="radio"
                                    :value="`${currentElement === 'all' ? '' : currentElement}`"
                                />
                                <span
                                    :class="
                                        currentElement !== 'all' ? `hero-element-${currentElement} small no-text` : ''
                                    "
                                    >{{ `${currentElement === "all" ? $t("filters.all") : ""}` }}</span
                                >
                            </label>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="column is-half-tablet">
                <h5>{{ $t("filters.zodiac") }}</h5>
                <ul class="filter-group">
                    <template v-for="currentItem in heroZodiac">
                        <li
                            :key="currentItem"
                            :class="{
                                selected:
                                    currentItem === 'all' ? !selfFilters.zodiac : selfFilters.zodiac === currentItem,
                            }"
                        >
                            <label
                                :for="`zodiac-${currentItem}`"
                                :title="`${currentItem === 'all' ? $t('filters.allClasses') : currentItem}`"
                            >
                                <input
                                    :id="`zodiac-${currentItem}`"
                                    v-model="selfFilters.zodiac"
                                    name="zodiac"
                                    type="radio"
                                    :value="`${currentItem === 'all' ? '' : currentItem}`"
                                />
                                <span :class="currentItem !== 'all' ? `hero-sign-${currentItem} no-text` : ''">{{
                                    `${currentItem === "all" ? $t("filters.all") : ""}`
                                }}</span>
                            </label>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div v-if="isHeroPage" class="columns toggleable-btns">
            <div class="column is-half-tablet is-multiselect-container">
                <h5>{{ $t("filters.buffs") }}</h5>
                <Multiselect
                    v-model="selfFilters.buffs"
                    :options="heroBuffs"
                    :taggable="true"
                    :close-on-select="true"
                    :multiple="true"
                    placeholder="Buffs"
                    :option-height="30"
                    class="filter-multiselect"
                    :show-labels="false"
                    label="name"
                    track-by="_id"
                >
                    <template v-if="props.option._id" slot="option" slot-scope="props">
                        <img :src="`${assetsUrl}/buff/${props.option._id}.png`" class="buff-debuff-filter-icon buff" />
                        <span class="buff-debuff-filter-text">{{ props.option.name || props.option._id }}</span>
                    </template>
                </Multiselect>
            </div>
            <div class="column is-half-tablet is-multiselect-container">
                <h5>{{ $t("filters.debuffs") }}</h5>
                <Multiselect
                    v-model="selfFilters.debuffs"
                    :options="heroDebuffs"
                    :taggable="true"
                    :close-on-select="true"
                    :multiple="true"
                    placeholder="Debuffs"
                    :option-height="30"
                    class="filter-multiselect"
                    :show-labels="false"
                    label="name"
                    track-by="_id"
                >
                    <template v-if="props.option._id" slot="option" slot-scope="props">
                        <img
                            :src="`${assetsUrl}/buff/${props.option._id}.png`"
                            class="buff-debuff-filter-icon debuff"
                        />
                        <span class="buff-debuff-filter-text">{{ props.option.name || props.option._id }}</span>
                    </template>
                </Multiselect>
            </div>
        </div>
        <h4 @click="clearSelection">&#8593; {{ $t("filters.clearAllFilters") }}</h4>
    </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { buffDebuffByType } from "~/util/Utils";
import { inputDebounce } from "~/util/Directives";

export default {
    inject: ["assetsUrl"],
    components: {
        Multiselect,
    },
    directives: {
        debounce: inputDebounce,
    },
    props: {
        filters: Object,
        pageType: String,
    },
    data() {
        return {
            delay: 500,
            heroClasses: ["all", "knight", "warrior", "thief", "mage", "soul-weaver", "ranger"],
            heroElements: ["all", "fire", "ice", "earth", "light", "dark"],
            heroZodiac: [
                "all",
                "aries",
                "taurus",
                "gemini",
                "cancer",
                "leo",
                "virgo",
                "libra",
                "scorpio",
                "sagittarius",
                "capricorn",
                "aquarius",
                "pisces",
            ],
            heroBuffs: buffDebuffByType("B"),
            heroDebuffs: buffDebuffByType("D"),
        };
    },
    computed: {
        classList() {
            const classes = this.heroClasses;
            if (this.isHeroPage) {
                classes.push("material");
            }
            return classes;
        },
        isArtifactPage() {
            return this.pageType === "artifact";
        },
        isHeroPage() {
            return this.pageType === "hero";
        },
        classProperty() {
            return this.pageType === "hero" ? "heroClass" : "exclusive";
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
    },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
