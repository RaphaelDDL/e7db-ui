<template>
  <div class="fetchingData section-box" v-if="isLoading">
    <h4>Fetching data, please wait..</h4>
    <div class="spinner">
      <div class="spinner-icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: ["isLoading"]
};
</script>

<style lang="scss"></style>
