<template>
    <ul :class="{ 'nav-links': !isMobile }" aria-label="menu">
        <nuxt-link tag="li" :to="localePath('index')" @click.native="trackMenuEvent">
            <a>
                <img v-if="isMobile" :src="`${assetsUrl}/website/section-icons/home.png`" alt />
                {{ $t("links.home") }}</a
            >
        </nuxt-link>
        <!-- <nuxt-link
        tag='li'
        :to="localePath('guidesntools')"
            @click.native="trackMenuEvent"
    >
        <a>Guides &amp; :tools</a>
    </nuxt-link> -->
        <nuxt-link tag="li" :to="localePath('heroes')" @click.native="trackMenuEvent">
            <a>
                <img v-if="isMobile" :src="`${assetsUrl}/website/section-icons/heroes.png`" alt />
                {{ $t("links.heroes") }}
            </a>
        </nuxt-link>

        <nuxt-link tag="li" :to="localePath('artifacts')" @click.native="trackMenuEvent">
            <a>
                <img v-if="isMobile" :src="`${assetsUrl}/website/section-icons/artifacts.png`" alt />
                {{ $t("links.artifacts") }}
            </a>
        </nuxt-link>

        <nuxt-link tag="li" :to="localePath('items')" @click.native="trackMenuEvent">
            <a>
                <img v-if="isMobile" :src="`${assetsUrl}/website/section-icons/items.png`" alt />
                {{ $t("links.items") }}
            </a>
        </nuxt-link>

        <nuxt-link tag="li" :to="localePath('creators')" @click.native="trackMenuEvent">
            <a>
                <img v-if="isMobile" :src="`${assetsUrl}/website/section-icons/creators.png`" alt />
                {{ $t("links.creators") }}
            </a>
        </nuxt-link>
        <!-- <nuxt-link tag='li' :to='/monsters'  @click.native="trackMenuEvent">
        <a>
            <img :src='`${assetsUrl}/website/journal_monster.png`' alt v-if='isMobile'> Monsters
        </a>
    </nuxt-link>-->
        <!-- <nuxt-link tag='li' :to='/guardians'  @click.native="trackMenuEvent">
        <a>
            <img :src='`${assetsUrl}/website/journal_guardian.png`' alt v-if='isMobile'> Guardians
        </a>
    </nuxt-link>-->
        <nuxt-link tag="li" :to="localePath('about')" @click.native="trackMenuEvent">
            <a>
                <img v-if="isMobile" :src="`${assetsUrl}/website/section-icons/about.png`" alt />
                {{ $t("links.about") }}</a
            >
        </nuxt-link>
        <!-- <nuxt-link tag="li" :to="localePath('changelog')" @click.native="trackMenuEvent">
            <a>
                <img v-if="isMobile" :src="`${assetsUrl}/website/section-icons/changelog.png`" alt />
                {{ $t("links.changelog") }}
            </a>
        </nuxt-link> -->

        <li>
            <a href="javascript:void(0)" :class="localeLink" @click="modalShow">
                Language:
                <img :src="`${assetsUrl}/website/flags/${currentLocale.countries[0]}.png`" class="locale-flags" />
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "SectionLinks",
    inject: ["assetsUrl"],
    props: ["isMobileNav"],
    data() {
        return {
            isMobile: this.isMobileNav === "true",
        };
    },
    computed: {
        currentLocale() {
            const currentLocale = this.$i18n.locales.filter((i) => i.code === this.$i18n.locale);
            return currentLocale.length ? currentLocale[0] : { iso: "en-US", countries: [] };
        },
        localeLink() {
            return this.isMobile ? "localeLink" : "";
        },
    },
    methods: {
        trackMenuEvent(mouseEvent) {
            this.$emit("nav-click", mouseEvent);
        },
        modalShow(e) {
            e.preventDefault();
            this.$modal.show("lang-selector");
        },
    },
};
</script>
