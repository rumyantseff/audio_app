<template>
    <v-container class="pa-n16" fluid>
        <v-row v-if="!isPlayerVisible" class="mx-n6">
            <v-col cols="12" lg="6" v-for="(song, songIndex) in list" v-bind:key="song.id">
                <v-card class="song-card elevation-0 pa-0 mt-4 rounded-xl">
                    <v-list-item class="mx-2">
                        <v-list-item-avatar class="rounded-lg primary" size="75">
                            <v-img :src="song.albumCover"></v-img>
                        </v-list-item-avatar>
                        <v-col class="align-center ml-n4" lg="10" md="6">
                            <v-list-item-title class="primary--text text-sm font-weight-bold text-wrap" max-width="250">
                                {{ song.artistName }}
                            </v-list-item-title>
                            <v-tooltip bottom open-on-hover>
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
                        <v-col lg="6" md="8">
                            <div class="text-end mx-n1 d-flex align-center text-overline secondary--text" max-width="208">
                                <v-btn 
                                class="play-btn text-center rounded-lg pentanary--text mt-15" absolute 
                                outlined fab x-small depressed v-on:click="playSong(songIndex), song.hears++">
                                    <v-icon>mdi-play</v-icon>
                                </v-btn>
                            </div>
                        </v-col>
                        <v-col lg="6" class="d-flex justify-end align-center">
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
                </v-card>
            </v-col>
        </v-row>

        <div v-if="isPlayerVisible">
            <incSongPlayer
                v-bind:song="list[currentSongIndex]" transition="slide-x-transition"
                @goback="isPlayerVisible = !isPlayerVisible"
                @next="playNext"
                @previous="playPrevious" />
        </div>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            isPlayerVisible: false,
            currentSongIndex: 0,
            list: [
                {
                    id: 1,
                    artistName: 'SKELER',
                    artistAvatar: 'kratos-avatar.jpg',
                    songName: 'NRG',
                    albumName: 'Unknown',
                    date: '14.03.2023',
                    albumCover: 'photo-1611773951410-3099ecbfd5ea.jpg',
                    songSrc: 'SKELER - NRG.mp4',
                    hears: '1999',
                    likes: '137',
                },
                {
                    id: 1,
                    artistName: 'SKELER',
                    artistAvatar: 'kratos-avatar.jpg',
                    songName: 'NRG',
                    albumName: 'Unknown',
                    date: '14.03.2023',
                    albumCover: 'photo-1611773951410-3099ecbfd5ea.jpg',
                    songSrc: 'SKELER - NRG.mp4',
                    hears: '1999',
                    likes: '137',
                },
            ]
        }
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
        }, 
    },
    components: {

    },
    name: 'AuthorSongList'
}
</script>