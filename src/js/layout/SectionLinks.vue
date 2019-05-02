<template>
    <ul :class="{ 'nav-links': !isMobile }" aria-label="menu">
        <router-link tag="li" to="/" @click.native="trackMenuEvent">
            <a>Home</a>
        </router-link>
        <router-link tag="li" to="/about" @click.native="trackMenuEvent">
            <a>
                <img :src="`${assetsUrl}/website/book_about.png`" alt v-if="isMobile" />
                About + Contributing</a
            >
        </router-link>
        <!-- <router-link
            tag='li'
            to='/guidesntools'
             @click.native="trackMenuEvent"
        >
            <a>Guides &amp; Tools</a>
        </router-link> -->
        <router-link tag="li" to="/heroes" @click.native="trackMenuEvent">
            <a>
                <img :src="`${assetsUrl}/website/journal_hero.png`" alt v-if="isMobile" />
                Heroes
            </a>
        </router-link>
        <router-link tag="li" to="/artifacts" @click.native="trackMenuEvent">
            <a>
                <img :src="`${assetsUrl}/website/journal_artifact.png`" alt v-if="isMobile" />
                Artifacts
            </a>
        </router-link>
        <!-- <router-link tag='li' to='/monsters'  @click.native="trackMenuEvent">
            <a>
                <img :src='`${assetsUrl}/website/journal_monster.png`' alt v-if='isMobile'> Monsters
            </a>
        </router-link>-->
        <!-- <router-link tag='li' to='/guardians'  @click.native="trackMenuEvent">
            <a>
                <img :src='`${assetsUrl}/website/journal_guardian.png`' alt v-if='isMobile'> Guardians
            </a>
        </router-link>-->
        <router-link tag="li" to="/changelog" @click.native="trackMenuEvent">
            <a>
                <img :src="`${assetsUrl}/website/book_changelog.png`" alt v-if="isMobile" />
                Changelog
            </a>
        </router-link>
    </ul>
</template>

<script>
export default {
    name: 'SectionLinks',
    inject: ['assetsUrl'],
    props: ['isMobileNav'],
    data() {
        return {
            isMobile: this.isMobileNav === 'true',
        };
    },
    methods: {
        trackMenuEvent(mouseEvent) {
            this.$emit('nav-click', mouseEvent);
        },
    },
};
</script>
