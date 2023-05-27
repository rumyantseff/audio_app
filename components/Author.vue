<template>
    <v-container class="pa-8" fluid>
      <v-row>
        <v-col lg="12">
          <v-card class="banner-card rounded-xl elevation-0">
            <div class="px-4 py-16">
              <v-row>
                <v-col lg="3" class="my-auto">
                  <v-card-text class="logo-bg">
                    <v-card-title class="px-0">
                      <h2 class="pentanary--text text-no-wrap banner-card-img">{{ list[0].artistName }}</h2>
                    </v-card-title>
                    <v-card-subtitle class="px-0 mt-0">
                      <h3 class="quanterary--text text-no-wrap banner-card-img">Bratislava, Slovakia</h3>
                    </v-card-subtitle>
                    <!-- <v-avatar class="song-card rounded-lg primary mb-n12 mx-auto" size="50" style="border: 2px solid #B4D9DB !important;">
                      <v-img :src="list[0].artistAvatar"></v-img>
                    </v-avatar>   -->
                  </v-card-text>  
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- <v-row class="justify-center"> -->
        <!-- <v-avatar class="song-card rounded-lg primary mt-n16" size="75" style="border: 2px solid #B4D9DB !important;">
          <v-img :src="list[0].artistAvatar"></v-img>
        </v-avatar> -->
      <!-- </v-row> -->

      <!-- User Statistics -->
      <incAuthorStatistics />
  
      <!-- Songs -->
      <incAuthorSongList />
  
      <!-- Footer -->
      <incFooter />
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'StartLayout',
    data() {
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
      }
    },
  
  }
  </script>
  
  