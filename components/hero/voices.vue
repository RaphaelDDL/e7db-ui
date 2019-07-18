<template>
    <section class="section-container">
        <div class="section-box">
            <h1>{{ $t("heroes.voice") }}</h1>
            <hr />
            <no-ssr placeholder="Audio files are being rendered..">
                <ul class="heroes-voice-list">
                    <li v-for="voice in voiceList" :key="voice">
                        <aplayer
                            :mini="true"
                            preload="none"
                            :mutex="true"
                            :volume="1"
                            :autoplay="false"
                            repeat="no-repeat"
                            :controls="false"
                            controlslist="nodownload"
                            theme="#050a13"
                            :music="generateMusicObject(voice)"
                        />
                        <span>
                            {{ voice | noUnderscore(true) }}
                        </span>
                    </li>
                </ul>
            </no-ssr>
        </div>
    </section>
</template>

<script>
export default {
    inject: ["assetsUrl"],
    props: {
        voiceList: {
            type: Array,
            default: () => [],
        },
        id: {
            type: String,
        },
    },
    methods: {
        generateMusicObject(voice) {
            return {
                title: voice,
                src: `${this.assetsUrl}/voice/${this.id}/${voice}.wav`,
                pic: `${this.assetsUrl}/hero/${this.id}/icon.png`,
            };
        },
    },
};
</script>
