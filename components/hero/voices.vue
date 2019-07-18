<template>
    <section class="section-container">
        <div class="section-box">
            <h1>{{ $t("heroes.voice") }}</h1>
            <hr />
            <no-ssr placeholder="Audio files are being rendered..">
                <aplayer
                    :music="firstMusic"
                    preload="none"
                    :mutex="true"
                    :volume="1"
                    :autoplay="false"
                    repeat="no-repeat"
                    :controls="false"
                    controlslist="nodownload"
                    theme="#050a13"
                    :list="musicList"
                />
                <!-- <ul class="heroes-voice-list">
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
                </ul> -->
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
    computed: {
        firstMusic() {
            return this.generateMusicObject(this.voiceList[0]);
        },
        musicList() {
            const list = [];
            this.voiceList.forEach(voice => {
                list.push(this.generateMusicObject(voice));
            });
            list.shift();
            return list;
        },
    },
    methods: {
        generateMusicObject(voice) {
            return {
                title: this.$options.filters.noUnderscore(voice, true),
                src: `${this.assetsUrl}/voice/${this.id}/${voice}.wav`,
                pic: `${this.assetsUrl}/hero/${this.id}/icon.png`,
                artist: " ",
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.aplayer {
    color: white;
    background: transparent;
    box-shadow: none;
    overflow: visible;
}
</style>
