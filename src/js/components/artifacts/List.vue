<template>
  <div class="columns">
    <main class="column is-12">
      <section class="section-container">
        <LoadingMessage :isLoading="isLoading" />
        <div
          class="section-box hero-list"
          v-if="!isLoading && list && list.length"
        >
          <!-- <div class='columns hero-list-filters'>
                    <div class='column is-half-tablet'>
                        <h4 class='strong'>Rarity:</h4>
                        <ul class='filter-group'>
                            <li class='star-rating-1 small'></li>
                            <li class='star-rating-2 small active'></li>
                            <li class='star-rating-3 small'></li>
                            <li class='star-rating-4 small'></li>
                            <li class='star-rating-5 small'></li>
                        </ul>
                    </div>
                    <div class='column is-half-tablet'>
                        <h4 class='strong'>Class Exclusivity:</h4>
                        <ul class='filter-group'>
                            <li class='hero-class-knight no-text'></li>
                            <li class='hero-class-warrior no-text active'></li>
                            <li class='hero-class-thief no-text'></li>
                            <li class='hero-class-mage no-text'></li>
                            <li class='hero-class-soul-weaver no-text'></li>
                            <li class='hero-class-ranger no-text'></li>
                            <li class='hero-class-material no-text'></li>
                        </ul>
                    </div>
                    </div>-->
          Filters in future release
          <hr />
          <ul class="columns is-mobile artifact-list-ul">
            <ListItem
              :artifact="artifact"
              :id="artifact.fileId"
              :key="artifact.fileId"
              v-for="artifact in list"
            />
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "@/js/components/artifacts/ListItem";
import LoadingMessage from "@/js/components/general/LoadingMessage";
import { gaPageView } from "@/js/util/Analytics";

export default {
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    ListItem,
    LoadingMessage
  },
  computed: { ...mapGetters("artifact", ["list"]) }, //this.list

  mounted() {
    if (!this.list || (this.list && !this.list.length)) {
      this.isLoading = true;
      this.$store.dispatch("artifact/getList").then(() => {
        this.isLoading = false;
      });
    }
    gaPageView(this.$ga);
  }
};
</script>
