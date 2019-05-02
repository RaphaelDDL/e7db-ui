<template>
    <div class="fetchingData" v-if="isLoading" :class="{ 'section-box': !noBorder }">
        <h4>Fetching data, please wait..</h4>
        <div class="spinner">
            <div class="spinner-icon"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loading',
    props: ['isLoading', 'noBorder'],
};
</script>

<style lang="scss"></style>
