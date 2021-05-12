<template>
    <div class="columns homepage is-mobile">
        <main class="column is-12">
            <section class="section-container">
                <div class="section-box">
                    <h1>{{ $t("errors.title") }}</h1>
                    <hr />
                    <p>
                        Would you mind starting from
                        <nuxt-link :to="localePath('index')">{{ $t("links.home") }}</nuxt-link> again?
                    </p>
                    <p>{{ $t("errors.description") }}</p>
                </div>
                <ContentAd />
            </section>
        </main>
        <HorizontalAd />
    </div>
</template>

<script>
import HorizontalAd from "~/components/ads/horizontal.vue";
import ContentAd from "~/components/ads/content.vue";

export default {
    components: { HorizontalAd, ContentAd },
    inject: ["assetsUrl"],
};
</script>
