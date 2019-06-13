<template>
    <section v-show="globalError && globalError.stack && globalError.message" class="globalError section-box">
        <div class="header">
            <a class="globalErrorClear" @click="globalErrorClear">Close X</a>
            <h4>
                {{ $t("errors.title") }}
            </h4>
            <div class="errorMessage">
                <p>
                    <strong>{{ $t("errors.description") }}</strong>
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
    name: "GlobalError",
    inject: ["assetsUrl"],
    computed: {
        globalError() {
            return this.$store.getters.globalError;
        },
    },
    watch: {
        $route() {
            this.globalErrorClear();
        },
    },
    methods: {
        globalErrorClear() {
            this.$store.dispatch("globalErrorClear");
        },
    },
};
</script>

<style lang="scss"></style>
