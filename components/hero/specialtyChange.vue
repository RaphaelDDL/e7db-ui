<template>
    <section class="section-container">
        <div class="section-box">
            <h1>{{ $t("heroes.specialty") }}</h1>
            <hr />
            <ul class="hero-specialty">
                <nuxt-link
                    :key="specialtyChangeName._id"
                    :to="
                        localePath({
                            name: 'hero-id',
                            params: {
                                id: specialtyChangeName._id,
                            },
                        })
                    "
                    tag="li"
                >
                    <a class="columns is-mobile">
                        <div class="column hero-specialty-icon">
                            <img
                                v-lazy="{
                                    src: `${assetsUrl}/hero/${specialtyChangeName._id}/icon.png`,
                                    error: `${assetsUrl}/hero/_placeholder/icon_missing.png`,
                                }"
                                class="hero-illustration-img hero-illustration-icon"
                            />
                        </div>
                        <div class="column hero-specialty-description">
                            <p class="hero-specialty-name">
                                {{ specialtyChangeName.name || specialtyChangeName._id }}
                            </p>
                        </div>
                    </a>
                </nuxt-link>
            </ul>
            <hr />
            <p
                v-html="
                    $t('heroes.specialtyChangeExplain', [name, specialtyChangeName.name || specialtyChangeName._id])
                "
            ></p>
        </div>
    </section>
</template>

<script>
export default {
    inject: ["assetsUrl"],
    props: {
        specialtyChangeName: {
            type: Object,
            default: () => {},
        },
        name: {
            type: String,
            default: "",
        },
    },
};
</script>
