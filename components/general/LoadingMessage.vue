<template>
    <div v-if="isLoading" class="fetchingData" :class="{ 'section-box': !noBorder }">
        <h4>{{ $t("loader.message") }}</h4>
        <div class="spinner">
            <div class="spinner-icon"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Loading",
    props: ["isLoading", "noBorder"],
};
</script>

<style lang="scss"></style>
