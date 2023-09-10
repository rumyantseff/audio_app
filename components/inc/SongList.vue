<template>
    <v-container class="pa-n16" fluid>
        <v-row v-if="!isPlayerVisible" class="mx-n6">
            <v-col cols="12" lg="3" md="6" v-for="(song, songIndex) in list" v-bind:key="song.id">
                <v-card class="song-card elevation-0 mt-4 rounded-xl">
                    <v-list-item class="pa-0">
                        <v-badge avatar bordered overlap bottom offset-x="25" offset-y="20">
                            <template v-slot:badge>
                                <v-avatar class="secondary">
                                    <v-img :src="song.albumCover"></v-img>
                                </v-avatar>
                            </template>
                            <v-list-item-avatar class="rounded primary" size="85">
                                <v-img :src="song.artistAvatar"></v-img>
                            </v-list-item-avatar>
                        </v-badge>
                        <v-col class="align-center ml-n4" lg="10" md="6">
                            <a style="text-decoration: none;">
                                <v-list-item-title class="primaryFont--text text-sm font-weight-bold text-wrap" max-width="250">
                                    {{ song.artistName }}
                                </v-list-item-title>
                            </a>
                            <v-tooltip bottom open-on-hover>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-list-item-subtitle 
                                    class="secondaryFont--text mt-1 font-weight-medium text-wrap" 
                                    max-width="250"
                                    v-bind="attrs" v-on="on">
                                        {{ song.songName }}
                                    </v-list-item-subtitle>
                                </template>
                                <span>{{ song.albumName }}</span>
                            </v-tooltip>                           
                            <p class="secondaryFont--text text-caption mt-3">
                                {{ song.date }}
                            </p>
                        </v-col>
                    </v-list-item>
                    <v-list-item>
                        <v-col lg="6" md="8">
                            <div class="text-end mx-n3 d-flex align-center text-overline secondary--text" max-width="208">
                                <v-btn 
                                class="play-btn text-center rounded-lg primaryFont--text mt-11" absolute 
                                fab x-small depressed v-on:click="playSong(songIndex), song.hears++">
                                    <v-icon>mdi-play</v-icon>
                                </v-btn>
                            </div>
                        </v-col>
                        <v-col lg="6" class="d-flex justify-end align-center">
                            <v-btn class="primaryFont--text" text plain depressed x-small>
                                <v-icon left>mdi-headphones</v-icon>
                                {{ song.hears | formatNumber }}
                            </v-btn>
                            <v-btn class="primaryFont--text" text plain depressed x-small @click="song.likes++">
                                <v-icon left>mdi-heart</v-icon>
                                {{ song.likes | formatNumber }}
                            </v-btn>
                        </v-col>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>

        <div class="mb-16" style="margin-top: -287px !important;" v-if="isPlayerVisible">
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
                    hears: '2499',
                    likes: '137',
                },
                {
                    id: 2,
                    artistName: 'Klimeks',
                    artistAvatar: 'photo-1611773951410-3099ecbfd5ea.jpg',
                    songName: 'Eternally Yours',
                    albumName: 'Unknown',
                    date: '15.03.2023',
                    albumCover: 'kratos-avatar.jpg',
                    songSrc: 'Klimeks - Eternally Yours.mp4',
                    hears: '199',
                    likes: '13',
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
    name: 'SongList'
}
</script>