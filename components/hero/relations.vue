<template>
    <section class="section-container">
        <div class="section-box">
            <h1>{{ $t("heroes.relations") }}</h1>
            <hr />
            <ul class="hero-relations">
                <nuxt-link
                    v-for="relation in relations"
                    :key="relation.name"
                    :to="
                        localePath({
                            name: 'hero-id',
                            params: {
                                id: relation._id,
                            },
                        })
                    "
                    tag="li"
                >
                    <a class="columns is-mobile">
                        <div class="column hero-relationship-icon">
                            <img
                                v-lazy="{
                                    src: `${assetsUrl}/hero/${relation._id}/icon.png`,
                                    error: `${assetsUrl}/hero/_placeholder/icon_missing.png`,
                                }"
                                class="hero-illustration-img hero-illustration-icon"
                            />
                        </div>
                        <div class="column hero-relationship-description">
                            <p class="hero-relationship-name">{{ relation.name }}</p>
                            <p :class="heroRelationClass(relation.relationType)" class="no-text">
                                {{ $t(`relationships.${relation.relationType}`) }}
                            </p>
                        </div>
                    </a>
                </nuxt-link>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    inject: ["assetsUrl"],
    props: {
        relations: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        heroRelationClass(type = "") {
            return type ? `hero-relation-${type}` : "";
        },
    },
};
</script>
