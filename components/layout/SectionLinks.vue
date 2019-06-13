<template>
    <ul :class="{ 'nav-links': !isMobile }" aria-label="menu">
        <nuxt-link tag="li" :to="localePath('index')" @click.native="trackMenuEvent">
            <a>{{ $t("links.home") }}</a>
        </nuxt-link>
        <nuxt-link tag="li" :to="localePath('about')" @click.native="trackMenuEvent">
            <a>
                <img v-if="isMobile" :src="`${assetsUrl}/website/book_about.png`" alt />
                {{ $t("links.about") }}</a
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
                <img v-if="isMobile" :src="`${assetsUrl}/website/journal_hero.png`" alt />
                {{ $t("links.heroes") }}
            </a>
        </nuxt-link>
        <nuxt-link tag="li" :to="localePath('artifacts')" @click.native="trackMenuEvent">
            <a>
                <img v-if="isMobile" :src="`${assetsUrl}/website/journal_artifact.png`" alt />
                {{ $t("links.artifacts") }}
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
        <nuxt-link tag="li" :to="localePath('changelog')" @click.native="trackMenuEvent">
            <a>
                <img v-if="isMobile" :src="`${assetsUrl}/website/book_changelog.png`" alt />
                {{ $t("links.changelog") }}
            </a>
        </nuxt-link>

        <li>
            <a href="javascript:void(0)" @click="modalShow">
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
            const currentLocale = this.$i18n.locales.filter(i => i.code === this.$i18n.locale);
            return currentLocale.length ? currentLocale[0] : { iso: "en-US", countries: [] };
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
