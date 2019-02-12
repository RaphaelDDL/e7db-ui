<template>
  <ul :class="{ 'nav-links': !isMobile }" aria-label="menu">
    <router-link tag="li" to="/">
      <a>Home</a>
    </router-link>
    <router-link tag="li" to="/about">
      <a>About + Contributing</a>
    </router-link>
    <!-- <router-link
            tag='li'
            to='/guidesntools'
        >
            <a>Guides &amp; Tools</a>
        </router-link> -->
    <router-link tag="li" to="/heroes">
      <a>
        <img :src="`${assetsUrl}/journal_hero.png`" alt v-if="isMobile" />
        Heroes
      </a>
    </router-link>
    <router-link tag="li" to="/artifacts">
      <a>
        <img :src="`${assetsUrl}/journal_artifact.png`" alt v-if="isMobile" />
        Artifacts
      </a>
    </router-link>
    <!-- <router-link tag='li' to='/monsters'>
            <a>
                <img :src='`${assetsUrl}/journal_monster.png`' alt v-if='isMobile'> Monsters
            </a>
        </router-link>-->
    <!-- <router-link tag='li' to='/guardians'>
            <a>
                <img :src='`${assetsUrl}/journal_guardian.png`' alt v-if='isMobile'> Guardians
            </a>
        </router-link>-->
  </ul>
</template>

<script>
export default {
  name: "SectionLinks",
  inject: ["assetsUrl"],
  props: ["isMobileNav"],
  data() {
    return {
      isMobile: this.isMobileNav === "true"
    };
  }
};
</script>
