<template>
    <v-row no-gutters>
        <v-col cols="12" lg="3"></v-col>
        <v-col cols="12" lg="6">
            <v-card class="song-card mt-n16 elevation-0 rounded-xl">
                <v-row class="mx-0 mt-10 justify-center rounded-xl elevation-0">
                    <v-avatar class="song-card rounded-lg primary mt-n10" size="75" style="border: 2px solid #B4D9DB !important;">
                        <v-img :src="list[0].artistAvatar"></v-img>
                    </v-avatar>
                </v-row>
                <v-row class="mx-0 rounded-xl elevation-0">
                    <v-col class="text-center">
                        <h5 class="justify-center secondary--text font-weight-regular text-no-wrap">Followers</h5>
                        <h4 class="primary--text font-weight-bold">{{ statistics.followers }}</h4>                         
                    </v-col>
                    <v-divider class="quanterary my-4" vertical></v-divider>
                    <v-col class="text-center">
                        <h5 class="justify-center secondary--text font-weight-regular text-no-wrap">Following</h5>
                        <h4 class="primary--text font-weight-bold">{{ statistics.following }}</h4>
                    </v-col>
                    <v-divider class="quanterary my-4" vertical></v-divider>
                    <v-col class="text-center">
                        <h5 class="justify-center secondary--text font-weight-regular text-no-wrap">Tracks</h5>
                        <h4 class="primary--text font-weight-bold">{{ statistics.tracks }}</h4>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
        <v-col cols="12" lg="3"></v-col>
    </v-row>
</template>

<script>
export default {
    data () {
        return {
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
                    hears: '1234',
                    likes: '137',
                },
            ],
            statistics: {
                followers : '137',
                following : '13',
                tracks : '1',
            },  
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
        
    },
    components: {

    },
    name: 'AuthorStatistic'
}
</script>