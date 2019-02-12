<template>
  <div class="columns">
    <main class="column is-12">
      <section class="section-container">
        <LoadingMessage :isLoading="isLoading" />
        <div
          class="section-box hero-list"
          v-if="!isLoading && list && list.length"
        >
          <!-- <div class="columns hero-list-filters">
                                    <div class="column is-half-tablet is-one-third-desktop">
                                        <h4 class="strong">Rarity:</h4>
                                        <ul class="filter-group">
                                            <li class="star-rating-1 small"></li>
                                            <li class="star-rating-2 small active"></li>
                                            <li class="star-rating-3 small"></li>
                                            <li class="star-rating-4 small"></li>
                                            <li class="star-rating-5 small"></li>
                                        </ul>
                                    </div>
                                    <div class="column is-half-tablet is-one-third-desktop">
                                        <h4 class="strong">Elements:</h4>
                                        <ul class="filter-group">
                                            <li><span class="hero-element-fire no-text small"></span></li>
                                            <li><span class="hero-element-ice no-text small active"></span></li>
                                            <li><span class="hero-element-earth no-text small"></span></li>
                                            <li><span class="hero-element-light no-text small"></span></li>
                                            <li><span class="hero-element-dark no-text small"></span></li>
                                        </ul>
                                    </div>
                                    <div class="column is-half-tablet is-one-third-desktop">
                                        <h4 class="strong">Class:</h4>
                                        <ul class="filter-group">
                                            <li class="hero-class-knight no-text"></li>
                                            <li class="hero-class-warrior no-text active"></li>
                                            <li class="hero-class-thief no-text"></li>
                                            <li class="hero-class-mage no-text"></li>
                                            <li class="hero-class-soul-weaver no-text"></li>
                                            <li class="hero-class-ranger no-text"></li>
                                            <li class="hero-class-material no-text"></li>
                                        </ul>
                                    </div>
                                    <div class="column is-half-tablet is-one-third-desktop">
                                        <h4 class="strong">Buff/Debuff:</h4>
                                        <ul class="filter-group">
                                            <li class="">
                                                <select name="" id=""
                                                    ><option value="">Buff</option></select
                                                >
                                            </li>
                                            <li class="">
                                                <select name="" id=""
                                                    ><option value="">Debuff</option></select
                                                >
                                            </li>
                                        </ul>
                                    </div>
                    </div>-->
          Filters in future release
          <hr />
          <ul class="columns is-mobile hero-list-ul">
            <ListItem
              :hero="hero"
              :id="hero.fileId"
              :key="hero.fileId"
              v-for="hero in list"
            />
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "@/js/components/heroes/ListItem";
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
  // use this.list
  computed: { ...mapGetters("hero", ["list"]) }, //this.list
  // computed: { ...mapGetters('hero', { heroList: 'list' }) }, //this.heroList
  mounted() {
    if (!this.list || (this.list && !this.list.length)) {
      this.isLoading = true;
      this.$store.dispatch("hero/getList").then(() => {
        this.isLoading = false;
      });
    }
    gaPageView(this.$ga);
  }
};
</script>
