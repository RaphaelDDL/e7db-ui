<template>
  <section
    class="globalError section-box"
    v-show="globalError && globalError.stack && globalError.message"
  >
    <div class="header">
      <a @click="globalErrorClear" class="globalErrorClear">Close X</a>
      <h4>Uh oh... An error Has occured.</h4>
      <div class="errorMessage">
        <p>
          <strong
            >If this continues, please open an Issue on our Github with below
            information.</strong
          >
        </p>
        <hr />
        <p>
          <em>{{ globalError.message }}</em>
        </p>
        <pre>{{ globalError.stack }}</pre>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "globalError",
  inject: ["assetsUrl"],
  computed: {
    globalError() {
      return this.$store.getters.globalError;
    }
  },
  methods: {
    globalErrorClear() {
      this.$store.dispatch("globalErrorClear");
    }
  },
  watch: {
    $route() {
      this.globalErrorClear();
    }
  }
};
</script>

<style lang="scss"></style>
