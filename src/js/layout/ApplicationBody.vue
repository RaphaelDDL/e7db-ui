<template>
  <div class="content" id="app">
    <NavBar />
    <div class="container main-container">
      <div class="columns">
        <div class="column is-12">
          <GlobalError />
        </div>
      </div>
      <!-- :key makes router update when going from one page to another using same component -->
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <div class="app-version">version {{ version }}</div>
  </div>
</template>

<script>
import NavBar from "@/js/layout/NavBar.vue";
import GlobalError from "@/js/components/general/GlobalError.vue";

export default {
  name: "app",
  components: { NavBar, GlobalError },
  provide() {
    return {
      assetsUrl: this.$store.getters.assetsUrl
    };
  },
  computed: {
    version() {
      return this.$store.getters.version;
    }
  }
};
</script>

<style lang="scss">
@import "@/css/epicsevendb.scss";
</style>
