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
                    <h2 class="pentanary--text text-no-wrap banner-card-img">Catch a vibe</h2>
                  </v-card-title>
                  <v-card-subtitle class="px-0 mt-0">
                    <h3 class="quanterary--text text-no-wrap banner-card-img">Find yours</h3>
                  </v-card-subtitle>
                </v-card-text>                   
              </v-col>   
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Songs -->
    <incSongList />

    <!-- Footer -->
    <incFooter />
  </v-container>
</template>

<script>
export default {
  name: 'StartLayout',
  data() {
    return {
      
    }
  },

}
</script>

