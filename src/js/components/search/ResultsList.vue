<template>
    <div class="search-results">
        <div class="hero-list" v-if="displayHeroes.length">
            <ul class="columns is-mobile hero-list-ul">
                <HeroListItem :hero="hero" :id="hero.fileId" :key="hero.fileId" v-for="hero in displayHeroes" />
            </ul>
        </div>
        <div class="artifact-list" v-if="displayArtifacts.length">
            <ul class="columns is-mobile artifact-list-ul">
                <ArtifactListItem
                    :artifact="artifact"
                    :id="artifact.fileId"
                    :key="artifact.fileId"
                    v-for="artifact in displayArtifacts"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import HeroListItem from '@/js/components/heroes/ListItem';
import ArtifactListItem from '@/js/components/artifacts/ListItem';

export default {
    props: ['artifacts', 'heroes'],
    components: {
        HeroListItem,
        ArtifactListItem,
    },
    computed: {
        displayHeroes() {
            return (this.heroes && this.heroes.slice(0, 5)) || [];
        },
        displayArtifacts() {
            return (this.artifacts && this.artifacts.slice(0, 5)) || [];
        },
    },
};
</script>
