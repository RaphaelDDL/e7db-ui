<template>
    <modal
        :adaptive="true"
        :max-width="480"
        :min-width="300"
        height="auto"
        :scrollable="true"
        classes="v--modal language-selector-modal"
        name="lang-selector"
        width="50%"
    >
        <ul>
            <nuxt-link
                v-for="locale in $i18n.locales"
                :key="locale.code"
                tag="li"
                :class="{ 'lang-selected': locale.code === currentLocale.code }"
                :to="switchLocalePath(locale.code)"
                @click.native="modalClose"
            >
                <a>
                    {{ locale.name }}
                    <img
                        v-for="country in locale.countries"
                        :key="country"
                        :src="`${assetsUrl}/website/flags/${country}.png`"
                        class="locale-flags"
                    />
                </a>
            </nuxt-link>
        </ul>
    </modal>
</template>

<script>
export default {
    name: "LanguageSelector",
    inject: ["assetsUrl"],
    computed: {
        currentLocale() {
            const currentLocale = this.$i18n.locales.filter(i => i.code === this.$i18n.locale);
            return currentLocale.length ? currentLocale[0] : { code: "xx", name: "unhandled", iso: "xx-XX" };
        },
    },
    methods: {
        modalClose(e) {
            e.preventDefault();
            this.$modal.hide("lang-selector");
        },
    },
};
</script>
