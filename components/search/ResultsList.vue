<template>
    <div class="search-results">
        <div v-if="displayHeroes.length" class="hero-list">
            <ul class="columns is-mobile hero-list-ul">
                <HeroListItem v-for="hero in displayHeroes" :id="hero.fileId" :key="hero.fileId" :hero="hero" />
            </ul>
        </div>
        <div v-if="displayArtifacts.length" class="artifact-list">
            <ul class="columns is-mobile artifact-list-ul">
                <ArtifactListItem
                    v-for="artifact in displayArtifacts"
                    :id="artifact.fileId"
                    :key="artifact.fileId"
                    :artifact="artifact"
                />
            </ul>
        </div>
    </div>
</template>

<script>
import HeroListItem from "~/components/heroes/ListItem";
import ArtifactListItem from "~/components/artifacts/ListItem";

export default {
    components: {
        HeroListItem,
        ArtifactListItem,
    },
    props: ["artifacts", "heroes"],
    computed: {
        displayHeroes() {
            return this.heroes || [];
        },
        displayArtifacts() {
            return this.artifacts || [];
        },
    },
};
</script>
