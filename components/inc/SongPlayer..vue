<template>
    <v-row class="mx-n6 mt-n16" mobile-breakpoint="1366">
        <v-col class="justify-center d-flex" cols="12" transition="slide-x-transition">
            <v-card class="opened-song-card rounded-xl" ref="audio" max-width="600">
                <v-row class="primary--text mt-0 justify-end mx-0">
                    <v-btn class="close-btn primary--text white" 
                    depressed fab v-on:click="goback"
                    before="background-color: none !important;">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-row>
                <audio :src="song.songSrc" preload="auto" autoplay ref="audioPlayer" />
                <v-row class="px-2 pb-4">
                    <v-col>
                        <v-list-item>
                            <v-row>
                                <v-col class="text-center">
                                    <v-badge avatar bordered overlap bottom offset-x="36" offset-y="29">                                  
                                        <template v-slot:badge>
                                            <v-avatar class="rounded-lg">
                                                <v-img :src="song.albumCover"></v-img>
                                            </v-avatar>
                                        </template>
                                        <v-list-item-avatar class="rounded-lg primary" size="200">
                                            <v-img :src="song.artistAvatar"></v-img>
                                        </v-list-item-avatar>
                                    </v-badge>
                                </v-col>
                                <v-col cols="12">
                                    <v-list-item-title class="primary--text text-center text-sm font-weight-bold text-wrap" max-width="250">
                                        {{ song.artistName }}
                                    </v-list-item-title>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-list-item-subtitle 
                                            class="secondary--text text-center mt-1 font-weight-medium text-wrap" 
                                            max-width="250"
                                            v-bind="attrs" v-on="on">
                                                {{ song.songName }}
                                            </v-list-item-subtitle>
                                        </template>
                                        <span>{{ song.albumName }}</span>
                                    </v-tooltip>                                   
                                </v-col>
                            </v-row>
                        </v-list-item>
                        <v-list-item class="mt-4 mx-n2">
                            <v-col class="d-flex align-center">
                                <v-btn class="primary--text" text plain depressed small>
                                    <v-icon left>mdi-headphones</v-icon>
                                    {{ song.hears | formatNumber }}
                                </v-btn>
                                <v-btn class="primary--text" text plain depressed small @click="song.likes++">
                                    <v-icon left>mdi-heart</v-icon>
                                    {{ song.likes | formatNumber }}
                                </v-btn>
                            </v-col>
                        </v-list-item>
                    </v-col>
                    <v-col cols="12">    
                        <v-list-item>
                            <v-slider 
                            v-model="percentage" 
                            class="seek-slider" 
                            color="primary rounded-xl" 
                            thumb-color="secondary"
                            track-color="quanterary rounded-xl" 
                            hide-details 
                            @click.native="setPosition()" 
                            :disabled="!loaded">
                            </v-slider>
                        </v-list-item>
                        <v-list-item class="d-flex mt-n4">
                            <v-chip 
                            class="primary--text quanterary rounded-xl font-weight-medium mx-1" small>
                                {{ currentTime }}
                            </v-chip>
                            <v-spacer></v-spacer>
                            <v-chip 
                            class="primary--text quanterary rounded-xl font-weight-medium mx-1" small>
                                {{ duration }}
                            </v-chip>
                        </v-list-item>
                        <v-list-item class="d-flex align-center text-center justify-center mt-8">
                            <v-btn 
                            class="primary--text ms-auto" rounded small icon @click="repeat">
                                <v-icon>mdi-repeat</v-icon>
                            </v-btn>
                            <v-btn 
                            class="primary--text ms-4" rounded small icon @click="previous">
                                <v-icon>mdi-rewind</v-icon>
                            </v-btn>
                            <v-btn 
                            class="play-pause-btn primary pentanary--text ms-6 rounded-lg" 
                            x-large icon @click.native="playing ? pause() : play()" :disabled="!loaded">
                                <v-icon>{{ !playing || paused ? 'mdi-play' : 'mdi-pause' }}</v-icon>
                            </v-btn>
                            <v-btn 
                            class="primary--text ms-6 me-4" rounded small icon @click="next">
                                <v-icon>mdi-fast-forward</v-icon>
                            </v-btn>
                            <v-btn 
                            class="primary--text ms-0 me-auto" rounded small icon>
                                <v-icon>mdi-shuffle</v-icon>
                            </v-btn>
                        </v-list-item>                     
                    </v-col>
                    <v-col></v-col>
                    <v-col cols="12" lg="6" md="6" class="mt-16">
                        <v-list-item>
                            <v-btn icon @click.native="mute()" :disabled="!loaded">
                                <v-icon>
                                    {{ !isMuted ? 'mdi-volume-high primary--text' : 'mdi-volume-mute primary--text' }}
                                </v-icon>
                            </v-btn>                     
                            <v-slider 
                            v-model="playerVolume" 
                            class="volume-slider" 
                            color="primary rounded-xl" 
                            track-color="quanterary rounded-xl" 
                            hide-details
                            thumb-label="always"
                            max="1" step="0.01" min="0">
                                <template #thumb-label="{ value }">{{ Math.ceil(value * 100) }}</template>
                            </v-slider>  
                        </v-list-item>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
const formatTime = second => new Date(second * 1000).toISOString().substr(15, 4)
export default {
    data () {
        return {
            firstPlay: true,
            isMuted: false,
            loaded: false,
            playing: false,
            paused: false,
            percentage: 0,
            currentTime: '00:00',
            audioPlayer: undefined,
            totalDuration: 0,
            playerVolume: 0.35,
        }
    },
    name: 'SongPlayer',
    props: {
        song: {
            id: Number,
            artistName: String,
            artistAvatar: String,
            songName: String,          
            albumName: String,
            date: String,
            albumCover: String,
            songSrc: String,
            hears: String,
            likes: String,
        },
    },
    emits: ['goback', 'next', 'previous'],

    filters: {
        formatNumber(num) {
            if (num >= 1000000000) {
                return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B'
            }
            if (num >= 1000000) {
                return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
            }
            if (num >= 1000) {
                return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
            }
            return num;
        },
    },

    computed: {
        screenBreakpoint () {
            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return true
            case 'sm': return true
            case 'md': return true
            case 'lg': return false
            case 'xl': return false
            }
            return false
        },
        
        duration () {
            console.log(this.totalDuration)
            return this.$refs.audioPlayer ? formatTime(this.totalDuration) : ''
        },
    },

    methods: {
        goback () {
            this.$emit('goback')
        },

        setPosition () {
            this.$refs.audioPlayer.currentTime = parseInt(this.$refs.audioPlayer.duration / 100 * this.percentage)
        },
        stop () {
            this.$refs.audioPlayer.pause()
            this.paused = true
            this.playing = false
            this.$refs.audioPlayer.currentTime = 0
        },
        play () {
            if (this.playing) return
            this.$refs.audioPlayer.play().then(_ => this.playing = true)
            this.paused = false
        },
        pause () {
            this.paused = !this.paused
            this.paused ? this.$refs.audioPlayer.pause() : this.$refs.audioPlayer.play()
        },
        mute () {
            if (this.isMuted = !this.isMuted) {
                this.$refs.audioPlayer.muted = this.isMuted
                this.playerVolume = 0.0               
            }
            else {
                this.$refs.audioPlayer.muted = this.isMuted
                this.playerVolume = !this.playerVolume
                this.playerVolume = 0.2
            }
        },
        reload () {
            this.$refs.audioPlayer.load()
        },
        _handleLoaded () {
            if (this.$refs.audioPlayer.readyState >= 2) {
                if (this.$refs.audioPlayer.duration === Infinity) {
                    // Fix duration for streamed audio source or blob based
                    this.$refs.audioPlayer.currentTime = 1e101
                    this.$refs.audioPlayer.ontimeupdate = () => {
                        this.$refs.audioPlayer.ontimeupdate = () => {}
                        this.$refs.audioPlayer.currentTime = 0
                        this.totalDuration = parseInt(this.$refs.audioPlayer.duration)
                        this.loaded = true
                    }
                } else {
                    this.totalDuration = parseInt(this.$refs.audioPlayer.duration)
                    this.loaded = true
                }
                if (this.autoPlay) this.$refs.audioPlayer.play()

            } else {
                throw new Error('Failed to load sound file')
            }
        },
        _handlePlayingUI (e) {
            this.$refs.audioPlayer.volume = this.playerVolume
            this.percentage = this.$refs.audioPlayer.currentTime / this.$refs.audioPlayer.duration * 100
            this.currentTime = formatTime(this.$refs.audioPlayer.currentTime)
            this.playing = true
        },
        _handlePlayPause (e) {
            if (e.type === 'play' && this.firstPlay) {
                // in some situations, audio.currentTime is the end one on chrome
                this.$refs.audioPlayer.currentTime = 0
                if (this.firstPlay) {
                    this.firstPlay = false;
                }
            }
            if (e.type === 'pause' && this.paused === false && this.playing === false) {
                this.currentTime = '00:00'
            }
        },
        _handleEnded () {
            this.paused = this.playing = false
        },
        init () {
            this.$refs.audioPlayer.addEventListener('timeupdate', this._handlePlayingUI)
            this.$refs.audioPlayer.addEventListener('loadeddata', this._handleLoaded)
            this.$refs.audioPlayer.addEventListener('pause', this._handlePlayPause)
            this.$refs.audioPlayer.addEventListener('play', this._handlePlayPause)
            this.$refs.audioPlayer.addEventListener('ended', this._handleEnded)
        },

        next () {
            this.$emit('next')
        },
        previous () {
            this.$emit('previous')
        },

        repeat () {
            this.$refs.audioPlayer.currentTime = 0
        },
    },

    mounted () {
        this.$refs.audioPlayer = this.$refs.audioPlayer
        this.init()
    },
    beforeDestroy () {
        this.$refs.audioPlayer.removeEventListener('timeupdate', this._handlePlayingUI)
        this.$refs.audioPlayer.removeEventListener('loadeddata', this._handleLoaded)
        this.$refs.audioPlayer.removeEventListener('pause', this._handlePlayPause)
        this.$refs.audioPlayer.removeEventListener('play', this._handlePlayPause)
        this.$refs.audioPlayer.removeEventListener('ended', this._handleEnded)
    }
}
</script>