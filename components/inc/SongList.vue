<template>
    <v-container class="pa-n16" fluid>
        <v-row class="mx-n6">
            <v-col cols="12" lg="3" md="6" v-for="(song, songIndex) in list" :key="song.id">
                <v-card class="song-card elevation-0 py-2 mt-4 rounded-xl">   
                    <v-card-actions>
                        <v-list-item class="grow">
                            <v-list-item-avatar color="primary">
                                <v-img class="elevation-6" :src="song.artistAvatar"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title 
                                class="primaryFont--text text-sm font-weight-bold text-wrap" max-width="250">
                                {{ song.artistName }}
                                </v-list-item-title>
                            </v-list-item-content>
                            <v-btn class="quanterary--text" text plain depressed x-small>
                                <v-icon left>mdi-headphones</v-icon>
                                {{ song.hears | formatNumber }}
                            </v-btn>
                            <v-btn class="quanterary--text" text plain depressed x-small @click="song.likes++">
                                <v-icon left>mdi-heart</v-icon>
                                {{ song.likes | formatNumber }}
                            </v-btn>
                        </v-list-item>
                    </v-card-actions>   
                    <v-card-actions class="image-card py-0">
                        <v-img class="song-cover pa-3 rounded-xl" cover height="150" :src="song.albumCover">
                            <v-chip color="rgba(46, 56, 77, 0.75)" class="tertiaryFont--text font-weight-medium">     
                                <v-icon dark left small>mdi-fire</v-icon>
                                {{ song.date }}
                            </v-chip>                          
                        </v-img>
                    </v-card-actions>   
                    <v-card-actions class="mb-8">
                        <v-list-item class="grow">
                            <v-list-item-content>
                                <v-list-item-title class="primaryFont--text text-body-sm-2 font-weight-bold text-wrap" max-width="250">
                                    {{ song.songName }}
                                </v-list-item-title>   
                                <v-list-item-subtitle class="secondaryFont--text font-weight-medium text-wrap" max-width="250">
                                    {{ song.artistName }}
                                </v-list-item-subtitle>
                            </v-list-item-content>  
                            <v-tooltip color="rgba(46, 56, 77, 0.75)" left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-list-item-avatar tile size="40" class="secondary rounded" v-bind="attrs" v-on="on">
                                        <v-img :src="song.albumCover"></v-img>
                                    </v-list-item-avatar>
                                </template>
                                <span class="tertiaryFont--text">{{ song.albumName }}</span>
                            </v-tooltip>                                      
                        </v-list-item>
                    </v-card-actions>
                    <div class="text-end mx-6 d-flex align-center text-overline secondary--text" max-width="208">
                        <v-btn 
                        class="play-btn primaryFont tertiaryFont--text text-center mt-4" absolute 
                        fab x-small depressed @click="playSong(songIndex), song.hears++, showOverlay = true">
                            <v-icon>mdi-play</v-icon>
                        </v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-overlay :value="showOverlay" @input="showOverlay = $event">
            <incSongPlayer
            v-if="isPlayerVisible" :song="list[currentSongIndex]" transition="slide-x-transition"
            @close="showOverlay = false"
            @goback="isPlayerVisible = !isPlayerVisible" @next="playNext" @previous="playPrevious" />
        </v-overlay>
    </v-container>
</template>

<script>
export default {
    name: 'SongList',
    data () {
        return {
            showOverlay: false,
            isPlayerVisible: false,
            currentSongIndex: 0,
            list: [
                {
                    id: 1,
                    artistName: 'Klimeks',
                    artistAvatar: 'kratos-avatar.jpg',
                    songName: 'Eternally Yours',
                    albumName: 'The Album',
                    date: '15.03.2023',
                    albumCover: 'photo-1611773951410-3099ecbfd5ea.jpg',
                    songSrc: 'Klimeks - Eternally Yours.mp4',
                    hears: '199',
                    likes: '13',
                },
                {
                    id: 2,
                    artistName: 'Klimeks 2',
                    artistAvatar: 'photo-1611773951410-3099ecbfd5ea.jpg',
                    songName: 'Eternally Yours 2',
                    albumName: 'The Album 2',
                    date: '15.03.2023',
                    albumCover: 'kratos-avatar.jpg',
                    songSrc: 'SKELER - NRG.mp4',
                    hears: '200',
                    likes: '14',
                },
            ]
        }
    },

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

    methods: {
        openOverlay() {
            this.isOverlayOpen = true
        },
        closeOverlay() {
            this.isOverlayOpen = false
        },
        toggleOverlay(value) {
            this.isOverlayOpen = value
        },
        playSong (index) {
            this.currentSongIndex = index
            this.isPlayerVisible = true
        },
        playNext () {
            if (this.currentSongIndex < this.list.length - 1) {
                this.currentSongIndex += 1
            } else {
                this.currentSongIndex = 0
            }
        },
        playPrevious () {
            if (this.currentSongIndex != 0) {
                this.currentSongIndex -= 1
            } else {
                this.currentSongIndex = this.list.length - 1
            }
        }, 
    },
}
</script>