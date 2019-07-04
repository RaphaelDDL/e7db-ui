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
            </section>
        </main>
    </div>
</template>

<script>
export default {
    inject: ["assetsUrl"],
};
</script>
