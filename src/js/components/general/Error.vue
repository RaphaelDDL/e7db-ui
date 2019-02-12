<template>
  <h1>Error Page</h1>
</template>

<script>
import { gaPageView } from "@/js/util/Analytics";
export default {
  inject: ["assetsUrl"],
  mounted() {
    gaPageView(this.$ga);
  }
};
</script>
