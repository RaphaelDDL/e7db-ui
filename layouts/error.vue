<template>
    <div>
        <h1>{{ $t("errors.title") }}</h1>
        <p>{{ $t("errors.description") }}</p>
    </div>
</template>

<script>
export default {
    inject: ["assetsUrl"],
};
</script>
