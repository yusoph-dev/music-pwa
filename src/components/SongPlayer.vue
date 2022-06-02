<template>
    <audio v-bind:src="song.songSrc" preload="auto" autoplay ref="audioPlayer" />
    <div class="text-white">
        <div class="head">
            <div class="backk"><button v-on:click="goback">Back</button></div>
            <div class="playnow">Now Playing</div>
        </div>
        <div>
            <div class="forimahe">
                <img class="" v-bind:src="song.src" />
            </div>
            <div class="text-center">
                <p class="playnow1">{{ song.name }}</p>
                <p class="backk1">{{ song.artistName }} - {{ song.albumName }} Album</p>
                <p class="gray">Year {{ song.year }}</p>
            </div>
        </div>
        <div class="mybuttons">
            <div class="backward">
                <button v-on:click="previous"><i class="fa fa-step-backward fa-2x"></i></button>
            </div>
            <div class="playpause">
                <button
                    class="circle"
                    v-on:click="togglePlay"
                >
                    {{ isPlaying ? 'Pause' : 'Play' }}
                </button>
            </div>
            <div class="forward">
                <button v-on:click="next"><i class="fa fa-step-forward fa-2x"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isPlaying: true
        }
    },
    name: 'SongPlayer',
    props: {
        song: {
            id: Number,
            name: String,
            artistName: String,
            albumName: String,
            year: Number,
            src: String,
            songSrc: String
        },
    },
    emits: ['goback', 'next', 'previous'],
    methods: {
        goback () {
            this.$emit('goback');
        },
        togglePlay () {
            if (this.isPlaying) {
                this.$refs.audioPlayer.pause();
            } else {
                this.$refs.audioPlayer.play();
            }

            this.isPlaying = !this.isPlaying;
        },
        next () {
            this.$emit('next');
        },
        previous () {
            this.$emit('previous');
        }
    }
}
</script>
<style>
    .head{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .playnow{
        color: gold;
        font-size: 1rem;
        font-weight: bold;
    }
    .backk{
        color: white;
        font-size: 1rem;
        font-weight: bold;
    }
    .backk:hover{
        color: gold;
    }
    .playnow1{
        color: gold;
        font-size: 1rem;
        font-weight: bold;
    }
    .backk1{
        color: white;
        font-size: .9rem;
    }
    .gray{
        color: gray;
        font-size: .9rem;
    }
    .forimahe{
        padding-top: 20px;
        margin: auto;
        display: block;
        width: 50%; 
        height: 50%;
    }
    .mybuttons{
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: space-around;
        padding: 20px;
        align-items: center;
    }
    .backward:hover, .forward:hover{
        color: gold;
    }
    .circle{
        border-radius: 50%;
        color: black;
        height: 80px;
        width: 80px;
        background: gold;
        font-weight: bolder;
    }
    .circle:hover{
        color: gold;
        background: black;
        border-color: white;
        border-width: 2px;
    }
</style>