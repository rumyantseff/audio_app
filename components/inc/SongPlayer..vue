<template>
    <v-row class="mx-n6 mt-8" mobile-breakpoint="1366">
        <v-col cols="12" transition="slide-x-transition">
            <v-card class="opened-song-card rounded-xl justify-center" ref="audio">
                <v-row class="primary--text mt-n7 justify-center">
                    <v-btn class="primary--text white d-flex align-center justify-center text-center mt-n6" depressed rounded x-large v-on:click="goback">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-row>
                <audio v-bind:src="song.songSrc" preload="auto" autoplay ref="audioPlayer" />
                <v-row class="px-2 pb-4 align-center">
                    <v-col cols="12" lg="2" md="12" sm="2">
                        <div class="align-center">
                            <v-list-item class="mx-n6">
                                <v-badge avatar bordered overlap bottom offset-x="36" offset-y="29">                                  
                                    <template v-slot:badge>
                                        <v-avatar class="rounded-lg">
                                            <v-img :src="song.albumCover"></v-img>
                                        </v-avatar>
                                    </template>
                                    <v-list-item-avatar class="rounded-lg primary" size="75">
                                        <v-img :src="song.artistAvatar"></v-img>
                                    </v-list-item-avatar>
                                </v-badge>

                                <v-col class="align-center ml-n4" lg="10" md="6">
                                    <v-list-item-title class="primary--text text-sm font-weight-bold text-wrap" max-width="250">
                                        {{ song.artistName }}
                                    </v-list-item-title>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-list-item-subtitle 
                                            class="secondary--text mt-1 font-weight-medium text-wrap" 
                                            max-width="250"
                                            v-bind="attrs" v-on="on">
                                                {{ song.songName }}
                                            </v-list-item-subtitle>
                                        </template>
                                        <span>{{ song.albumName }}</span>
                                    </v-tooltip>                                   
                                    <v-list-item-subtitle class="secondary--text mt-3">
                                        {{ song.date }}
                                    </v-list-item-subtitle>
                                </v-col>
                            </v-list-item>
                            <v-list-item>
                                <v-col lg="12" class="d-flex justify-end align-center">
                                    <v-btn class="primary--text" text plain depressed x-small>
                                        <v-icon left>mdi-headphones</v-icon>
                                        {{ song.hears | formatNumber }}
                                    </v-btn>
                                    <v-btn class="primary--text" text plain depressed x-small @click="song.likes++">
                                        <v-icon left>mdi-heart</v-icon>
                                        {{ song.likes | formatNumber }}
                                    </v-btn>
                                </v-col>
                            </v-list-item>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="8" md="12" sm="8" class="justify-end text-end mt-6">                       
                        <div class="d-flex align-center text-center justify-center">
                            <v-btn 
                            class="primary--text ms-auto" rounded small icon>
                                <v-icon>mdi-repeat</v-icon>
                            </v-btn>
                            <v-btn 
                            class="primary--text ms-4" rounded small icon v-on:click="previous">
                                <v-icon>mdi-rewind</v-icon>
                            </v-btn>
                            <v-btn 
                            class="play-pause-btn primary pentanary--text ms-6" 
                            outlined dark rounded large icon 
                            v-on:click="togglePlay">
                                <v-icon>{{ isPlaying ? 'mdi-pause' : 'mdi-play' }}</v-icon>
                            </v-btn>
                            <v-btn 
                            class="primary--text ms-6 me-4" rounded small icon v-on:click="next">
                                <v-icon>mdi-fast-forward</v-icon>
                            </v-btn>
                            <v-btn 
                            class="primary--text ms-0 me-auto" rounded small icon>
                                <v-icon>mdi-shuffle</v-icon>
                            </v-btn>
                        </div>
                        <div class="d-flex align-center text-center mt-6">
                            <v-slider 
                            class="track-bar" color="primary rounded-xl" thumb-color="secondary" 
                            track-color="quanterary rounded-xl" hide-details>
                            </v-slider>
                        </div>
                    </v-col>
                    <v-col lg="2" md="2" sm="2" class="justify-end px-12 mt-16">
                        <v-slider 
                        v-model="volume" class="volume-bar mt-7" color="primary rounded-xl" thumb-color="secondary" 
                        track-color="quanterary rounded-xl" prepend-icon="mdi-volume-high primary--text" hide-details>
                        </v-slider>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data () {
        return {
            isLarge: this.$vuetify.breakpoint.lgAndUp,
            isSmall: this.$vuetify.breakpoint.mdOnly,
            isXSmall: this.$vuetify.breakpoint.smAndDown,

            audioPlayer: undefined,
            sheet: true,
            isPlaying: true,
            volume: 50,

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

    watch: {
        
    },

    filters: {
        formatNumber(num) {
            if (num >= 1000000000) {
                return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
            }
            if (num >= 1000000) {
                return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
            }
            if (num >= 1000) {
                return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
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
    },

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
        },

    }
}
</script>

<style>

</style>