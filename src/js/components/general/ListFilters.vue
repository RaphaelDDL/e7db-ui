<template>
    <div class="list-filters">
        <div v-if="isVisible">
            <div class="columns is-mobile">
                <div class="column is-half">
                    <h3>Filter List By:</h3>
                </div>
                <div class="column is-half">
                    <form @submit.prevent>
                        <input
                            class="filter-by-name"
                            id="artifactKeyword"
                            name="keyword"
                            placeholder="Search by name.."
                            type="search"
                            v-debounce="delay"
                            v-model.lazy="selfFilters.keyword"
                        />
                    </form>
                </div>
            </div>
            <div class="columns toggleable-btns">
                <div class="column is-half-tablet">
                    <h5>Rarity</h5>
                    <ul class="filter-group">
                        <li :class="{ selected: !selfFilters.rarity }">
                            <label for="rarity0" title="All">
                                <input
                                    id="rarity0"
                                    name="rarity"
                                    type="radio"
                                    v-model.number="selfFilters.rarity"
                                    value="0"
                                />
                                <span class>All</span>
                            </label>
                        </li>
                        <li :class="{ selected: selfFilters.rarity === 1 }">
                            <label for="rarity1" title="Natural 1 Star">
                                <input
                                    id="rarity1"
                                    name="rarity"
                                    type="radio"
                                    v-model.number="selfFilters.rarity"
                                    value="1"
                                />
                                <span class="star-rating-1 small"></span>
                            </label>
                        </li>
                        <li :class="{ selected: selfFilters.rarity === 2 }">
                            <label for="rarity2" title="Natural 2 Stars">
                                <input
                                    id="rarity2"
                                    name="rarity"
                                    type="radio"
                                    v-model.number="selfFilters.rarity"
                                    value="2"
                                />
                                <span class="star-rating-2 small"></span>
                            </label>
                        </li>
                        <li :class="{ selected: selfFilters.rarity === 3 }">
                            <label for="rarity3" title="Natural 3 Stars">
                                <input
                                    id="rarity3"
                                    name="rarity"
                                    type="radio"
                                    v-model.number="selfFilters.rarity"
                                    value="3"
                                />
                                <span class="star-rating-3 small"></span>
                            </label>
                        </li>
                        <li :class="{ selected: selfFilters.rarity === 4 }">
                            <label for="rarity4" title="Natural 4 Stars">
                                <input
                                    id="rarity4"
                                    name="rarity"
                                    type="radio"
                                    v-model.number="selfFilters.rarity"
                                    value="4"
                                />
                                <span class="star-rating-4 small"></span>
                            </label>
                        </li>
                        <li :class="{ selected: selfFilters.rarity === 5 }">
                            <label for="rarity5" title="Natural 5 Stars">
                                <input
                                    id="rarity5"
                                    name="rarity"
                                    type="radio"
                                    v-model.number="selfFilters.rarity"
                                    value="5"
                                />
                                <span class="star-rating-5 small"></span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="column is-half-tablet">
                    <h5 v-if="isArtifactPage">Class Exclusive</h5>
                    <h5 v-if="isHeroPage">Hero Class</h5>
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
                                    :title="`${currentClass === 'all' ? 'All Classes' : currentClass}`"
                                >
                                    <input
                                        :id="`${classProperty}-${currentClass}`"
                                        :name="classProperty"
                                        type="radio"
                                        v-model="selfFilters[classProperty]"
                                        :value="`${currentClass === 'all' ? '' : currentClass}`"
                                    />
                                    <span :class="currentClass !== 'all' ? `hero-class-${currentClass} no-text` : ''">{{
                                        `${currentClass === 'all' ? 'All' : ''}`
                                    }}</span>
                                </label>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
            <div class="columns toggleable-btns" v-if="isHeroPage">
                <div class="column is-half-tablet">
                    <h5>Element</h5>
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
                                    :title="`${currentElement === 'all' ? 'All Classes' : currentElement}`"
                                >
                                    <input
                                        :id="`element-${currentElement}`"
                                        name="element"
                                        type="radio"
                                        v-model="selfFilters.element"
                                        :value="`${currentElement === 'all' ? '' : currentElement}`"
                                    />
                                    <span
                                        :class="
                                            currentElement !== 'all'
                                                ? `hero-element-${currentElement} small no-text`
                                                : ''
                                        "
                                        >{{ `${currentElement === 'all' ? 'All' : ''}` }}</span
                                    >
                                </label>
                            </li>
                        </template>
                    </ul>
                </div>
                <div class="column is-half-tablet">
                    <h5>Zodiac</h5>
                    <ul class="filter-group">
                        <template v-for="currentItem in heroZodiac">
                            <li
                                :key="currentItem"
                                :class="{
                                    selected:
                                        currentItem === 'all'
                                            ? !selfFilters.zodiac
                                            : selfFilters.zodiac === currentItem,
                                }"
                            >
                                <label
                                    :for="`zodiac-${currentItem}`"
                                    :title="`${currentItem === 'all' ? 'All Classes' : currentItem}`"
                                >
                                    <input
                                        :id="`zodiac-${currentItem}`"
                                        name="zodiac"
                                        type="radio"
                                        v-model="selfFilters.zodiac"
                                        :value="`${currentItem === 'all' ? '' : currentItem}`"
                                    />
                                    <span :class="currentItem !== 'all' ? `hero-sign-${currentItem} no-text` : ''">{{
                                        `${currentItem === 'all' ? 'All' : ''}`
                                    }}</span>
                                </label>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
            <div class="columns toggleable-btns" v-if="isHeroPage">
                <div class="column is-half-tablet is-multiselect-container">
                    <h5>Buffs</h5>
                    <multiselect
                        v-model="selfFilters.buffs"
                        :options="heroBuffs"
                        :taggable="true"
                        :close-on-select="true"
                        :multiple="true"
                        placeholder="Buffs"
                        :option-height="30"
                        class="filter-multiselect"
                        :showLabels="false"
                        label="name"
                        track-by="_id"
                    >
                        <template slot="option" slot-scope="props" v-if="props.option._id">
                            <img
                                :src="`${assetsUrl}/buff/${props.option._id}.png`"
                                class="buff-debuff-filter-icon buff"
                            />
                            <span class="buff-debuff-filter-text">{{ props.option.name || props.option._id }}</span>
                        </template>
                    </multiselect>
                </div>
                <div class="column is-half-tablet is-multiselect-container">
                    <h5>Debuffs</h5>
                    <multiselect
                        v-model="selfFilters.debuffs"
                        :options="heroDebuffs"
                        :taggable="true"
                        :close-on-select="true"
                        :multiple="true"
                        placeholder="Debuffs"
                        :option-height="30"
                        class="filter-multiselect"
                        :showLabels="false"
                        label="name"
                        track-by="_id"
                    >
                        <template slot="option" slot-scope="props" v-if="props.option._id">
                            <img
                                :src="`${assetsUrl}/buff/${props.option._id}.png`"
                                class="buff-debuff-filter-icon debuff"
                            />
                            <span class="buff-debuff-filter-text">{{ props.option.name || props.option._id }}</span>
                        </template>
                    </multiselect>
                </div>
            </div>
            <div class="columns">
                <div class="column is-12">
                    <button @click="clearSelection" class="btn-clear-filters">Clear All Filters</button>
                </div>
            </div>
        </div>

        <h4 @click="toggleVisibility" v-if="!isVisible">&#8595; Click to see available filters</h4>
        <h4 @click="toggleVisibility" v-if="isVisible">&#8593; Close Filters &amp; Clear selection</h4>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import { buffDebuffByType } from '@/js/util/Utils';
import { gaEvent } from '@/js/util/Analytics';
import { inputDebounce } from '@/js/util/Directives';

export default {
    inject: ['assetsUrl'],
    props: {
        filters: Object,
        pageType: String,
    },
    data() {
        return {
            delay: 500,
            isVisible: false,
            heroClasses: ['all', 'knight', 'warrior', 'thief', 'mage', 'soul-weaver', 'ranger'],
            heroElements: ['all', 'fire', 'ice', 'earth', 'light', 'dark'],
            heroZodiac: [
                'all',
                'aries',
                'taurus',
                'gemini',
                'cancer',
                'leo',
                'virgo',
                'libra',
                'scorpio',
                'sagittarius',
                'capricorn',
                'aquarius',
                'pisces',
            ],
            heroBuffs: buffDebuffByType('B'),
            heroDebuffs: buffDebuffByType('D'),
        };
    },
    components: {
        Multiselect,
    },
    directives: {
        debounce: inputDebounce,
    },
    computed: {
        classList() {
            const classes = this.heroClasses;
            if (this.isHeroPage) {
                classes.push('material');
            }
            return classes;
        },
        isArtifactPage() {
            return this.pageType === 'artifact';
        },
        isHeroPage() {
            return this.pageType === 'hero';
        },
        classProperty() {
            return this.pageType === 'hero' ? 'heroClass' : 'exclusive';
        },
        selfFilters: {
            get() {
                return this.filters;
            },
            set(value) {
                this.$emit('update:filters', value);
            },
        },
    },
    methods: {
        toggleVisibility() {
            this.$emit('filters:clear');
            gaEvent({
                eventCategory: `${this.pageType}:filters`,
                eventAction: 'visibility',
                eventLabel: 'toggle',
                eventValue: !this.isVisible,
            });
            return (this.isVisible = !this.isVisible);
        },
        clearSelection() {
            this.$emit('filters:clear');
            gaEvent({
                eventCategory: `${this.pageType}:filters`,
                eventAction: 'clearSelection',
                // eventLabel: JSON.stringify(this.selfFilters),
                // eventValue: 123
            });
        },
    },
    watch: {
        selfFilters: {
            handler() {
                gaEvent({
                    eventCategory: `${this.pageType}:filters`,
                    eventAction: 'update',
                    eventLabel: JSON.stringify(this.selfFilters),
                    // eventValue: 123
                });
            },
            deep: true,
        },
    },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
