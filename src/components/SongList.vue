<template>
    <div v-if="!isPlayerVisible">
        <div class="title">
            My Playlist
        </div>
        <div
            v-for="(song, songIndex) in list" v-bind:key="song.id"
            class="songlist"
            v-on:click="playSong(songIndex)"
        >
            <div class="details" >
                <span class="name">{{ song.name }}</span>
                <br />
                <span class="artist">
                    {{ song.artistName }} - 
                    <span class="album"> {{ song.albumName }} ({{ song.year }})</span>
                </span>
            </div>
            <div>
                <img
                    class="max-h-12 rounded"
                    v-bind:src="song.src"
                />
            </div>
        </div>
    </div>
    <div v-if="isPlayerVisible">
        <SongPlayer
            v-bind:song="list[currentSongIndex]"
            @goback="isPlayerVisible = !isPlayerVisible"
            @next="playNext"
            @previous="playPrevious"
        />
    </div>

</template>

<script>
import SongPlayer from './SongPlayer.vue';

export default {
    data () {
        return {
            isPlayerVisible: false,
            currentSongIndex: 0,
            list: [
                {
                    id: 1,
                    name: '2002',
                    artistName: 'Anne-Marie',
                    albumName: 'Speak Your Mind',
                    year: 2018,
                    src: `https://i.scdn.co/image/ab67616d0000b273d04b0657298bd6401896de5e`,
                    songSrc: require('../assets/Anne-Marie.mp3')
                },
                {
                    id: 2,
                    name: 'Fine',
                    artistName: 'Taeyeon',
                    albumName: 'My Voice',
                    year: 2017,
                    src: `https://i.scdn.co/image/ab67616d0000b2738c7e7f435fdcc70772c5555e`,
                    songSrc: require('../assets/Taeyeon.mp3')
                
                },
                {
                    id: 3,
                    name: 'Like Im Gonna Lose You feat. John Legend',
                    artistName: 'Meghan Trainor',
                    albumName: 'Wonderland: BFF',
                    year: 2016,
                    src: `https://i.scdn.co/image/ab67616d0000b2733b11178cccd78ec77fc12dbc`,
                    songSrc: require('../assets/Meghan_trainor.mp3')
                },
                {
                    id: 4,
                    name: 'Heaven Knows',
                    artistName: 'Rick Price',
                    albumName: 'Heaven Knows',
                    year: 1992,
                    src: `https://i.scdn.co/image/ab67616d0000b2737d78b94f808fab8d4c1ef63c`,
                    songSrc: require('../assets/Rick_Price.mp3')
                }
            ]
        }
    },
    methods: {
        playSong (index) {
            this.currentSongIndex = index;
            this.isPlayerVisible = true;
        },
        playNext () {
            if (this.currentSongIndex < this.list.length - 1) {
                this.currentSongIndex += 1;
            } else {
                this.currentSongIndex = 0;
            }
        },
        playPrevious () {
            if (this.currentSongIndex != 0) {
                this.currentSongIndex -= 1;
            } else {
                this.currentSongIndex = this.list.length - 1;
            }
        } 
    },
    components: {
        SongPlayer
    },
    name: 'SongList'
}
</script>

<style>
    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        color: gold;
        font-size: 2rem;
        font-family: sans-serif;
        font-weight: bolder;
    }
    .songlist{
        flex-direction: row;
        margin-bottom: 10px;
        cursor: pointer;
        border-radius: 5px;
        padding: 3px;
        display: flex;
        justify-content: space-between;
    }
    .songlist:hover {
        background: linear-gradient(black, gold);
    }
    .songlist .details:hover {
        color: black;
    }
    
    .name{
        color: gold;
        font-family: sans-serif;
        font-weight: bold;
    }
    .artist{
        color: white;
        font-size: .8rem;
    }
    .album{
        color: gray;
        font-size: .8rem;
    }
    

</style>
