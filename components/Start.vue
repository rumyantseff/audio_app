<template>
  <v-container class="px-8 py-6" fluid>
    <v-row>
      <v-col lg="12">
        <v-card class="banner-card rounded-xl elevation-0">
          <div class="pa-6">
            <v-row>
              <v-col lg="4" class="my-auto">
                <v-card-text class="banner-text rounded-xl mx-lg-6">
                  <v-card-title 
                  class="banner-card-text primaryFont--text font-weight-bold text-lg-h4 text-sm-h4">
                    Catch a vibe
                  </v-card-title>
                  <v-card-subtitle 
                  class="primaryFont--text font-weight-medium text-lg-body-1 text-sm-body-2 mt-0">
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

