<template>
  <v-container class="pa-8" fluid>
    <v-row>
      <v-col lg="12">
        <v-card class="banner-card rounded-xl elevation-0">
          <div class="px-4 py-16">
            <v-row>
              <v-col lg="4" class="my-auto">
                <v-card-text class="rounded">
                  <v-card-title 
                  class="banner-card-text tertiaryFont--text font-weight-bold text-lg-h3 text-sm-h4">
                    Catch a vibe
                  </v-card-title>
                  <v-card-subtitle 
                  class="secondaryFont--text font-weight-medium text-lg-h5 text-sm-h6 mt-0">
                    Find yours
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

