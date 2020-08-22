<template>
    <div>
        <div class="columns is-tablet">
            <div class="column is-half">
                <div class="columns white is-mobile">
                    <div class="column is-three-fifths">Name</div>
                    <div class="column is-two-fifths is-text-center">Appearance</div>
                </div>
                <hr />
                <div v-for="hero in byName.slice(0, heroUsageNameHalfLength)" :key="hero[0]" class="columns is-mobile">
                    <div class="column is-three-fifths">{{ hero[0] }}</div>
                    <div class="column is-two-fifths skillEnhanceFontColor is-text-center">
                        {{ hero[1] }} ({{ ((hero[1] / numberOfPlayers) * 100) | toFixed }}%)
                    </div>
                </div>
            </div>
            <div class="column is-half">
                <div class="columns white is-mobile">
                    <div class="column is-three-fifths">Name</div>
                    <div class="column is-two-fifths is-text-center">Appearance</div>
                </div>
                <hr />
                <div v-for="hero in byName.slice(heroUsageNameHalfLength)" :key="hero[0]" class="columns is-mobile">
                    <div class="column is-three-fifths">{{ hero[0] }}</div>
                    <div class="column is-two-fifths skillEnhanceFontColor is-text-center">
                        {{ hero[1] }} ({{ ((hero[1] / numberOfPlayers) * 100) | toFixed }}%)
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <p class="is-text-center">Total: {{ totalHeroes }} heroes in {{ numberOfPlayers }} teams</p>
    </div>
</template>

<script>
export default {
    inject: ["assetsUrl"],
    props: {
        byName: {
            type: Array,
            default: () => [],
        },
        numberOfPlayers: {
            type: Number,
            default: null,
        },
    },
    computed: {
        heroUsageNameHalfLength() {
            return this.byName?.length / 2 ?? 0;
        },
        totalHeroes() {
            return this.byName?.reduce((acc, current) => {
                acc = acc + current[1];
                return acc;
            }, 0);
        },
    },
};
</script>
