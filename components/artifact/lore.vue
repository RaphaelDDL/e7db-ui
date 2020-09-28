<template>
    <section class="section-container">
        <div class="section-box">
            <h1>{{ $t("artifacts.lore") }}</h1>
            <hr />
            <p style="white-space: pre-wrap">{{ loreDescription }}</p>
        </div>
    </section>
</template>

<script>
export default {
    // inject: ["assetsUrl"],
    props: {
        description: {
            type: String,
            default: "",
        },
    },
    computed: {
        loreDescription() {
            let desc = this.description;
            if (desc && typeof desc === "string") {
                desc = desc.replace("\\n", "\n");
            }
            return desc;
        },
    },
};
</script>
