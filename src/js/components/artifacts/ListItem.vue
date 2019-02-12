<template>
  <router-link
    :to="detailUrl"
    class="column"
    tag="li"
    v-lazy-container="{ selector: 'img' }"
  >
    <a class="artifact-list-card">
      <div :class="heroExclusive" class="artifact-name no-text">
        <h2>{{ artifact.name }}</h2>
      </div>
      <img
        :data-error="`${this.assetsUrl}/assets/item_arti/small_missing.jpg`"
        :data-src="imageUrls.small"
        class="artifact-small"
      />
      <div class="artifact-icon">
        <img
          :data-error="`${this.assetsUrl}/assets/item_arti/icon_missing.png`"
          :data-src="imageUrls.icon"
          class="artifact-icon-img"
        />
        <div :class="starRating" class="artifact-rarity"></div>
      </div>
    </a>
  </router-link>
</template>

<script>
export default {
  inject: ["assetsUrl"],
  props: ["artifact"],
  computed: {
    detailUrl() {
      return `/artifact/${this.artifact.fileId}`;
    },
    starRating() {
      return `star-rating-${this.artifact.rarity}`;
    },
    imageUrls() {
      return {
        small: `${this.assetsUrl}/assets/item_arti/${
          this.artifact.fileId
        }/small.jpg`,
        icon: `${this.assetsUrl}/assets/item_arti/${
          this.artifact.fileId
        }/icon.png`
      };
    },
    heroExclusive() {
      let heroExclusive = "";
      this.artifact.exclusive.forEach(heroClass => {
        heroExclusive = `${heroExclusive} hero-class-${heroClass}`;
      });
      return heroExclusive;
    }
  }
};
</script>
