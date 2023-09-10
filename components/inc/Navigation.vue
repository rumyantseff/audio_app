<template>
    <div>
        <v-app-bar class="pentanary primaryFont--text elevation-0 ma-8 rounded-xl justify-center">
            <v-toolbar-title class="primaryFont--text mx-4 justify-center align-center">
                <v-img src="logo.png" width="25" height="25" contain></v-img>
            </v-toolbar-title>
            <h2>MUSIX</h2>
            <v-spacer></v-spacer>
            <v-icon class="primaryFont--text mx-4" @click.stop="drawer = !drawer">mdi-menu</v-icon>
        </v-app-bar>
        <v-navigation-drawer
        v-model="drawer" class="navigation my-8 px-4 elevation-0 rounded-xl mx-auto"
        :clipped="true" :app="!demo" overlay-color="none" fixed floating temporary right
        style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px !important;">
            <v-list nav dense>
                <v-list-item to="">         
                    <v-toolbar-title class="primaryFont--text mr-4">
                        <v-img src="logo.png" width="25" height="25" contain></v-img>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-icon 
                        class="primaryFont--text mx-8" 
                        style="box-shadow: none !important;" 
                        @click.stop="drawer = !drawer">mdi-close
                    </v-icon>
                </v-list-item>
                <v-divider class="divider primary my-4"></v-divider>

                <!-- Main section -->
                <v-list-item-group class="my-8" v-model="group">
                    <v-list-item class="navItem rounded-lg px-4" to="/">
                        <v-list-item-icon class="align-center">
                            <v-icon class="sectionIcon rounded pa-1 secondary">mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Main Page</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>

                <!-- Categories section -->
                <v-list-item-group v-model="group" class="my-8">
                    <v-list-item-content>
                        <v-list-item-title class="secondaryFont--text px-3">
                            <h6>CATEGORIES</h6>
                        </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item class="navItem rounded-lg px-4 py-1" to="/popular">
                        <v-list-item-icon class="align-center"><v-icon class="sectionIcon rounded pa-1 secondary">mdi-arrow-up-bold-circle</v-icon></v-list-item-icon>
                        <v-list-item-title>Popular</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
                <v-divider class="divider secondaryFont my-8"></v-divider>

                <!-- Styles section -->
                <v-list-item-group v-model="group" class="my-8">
                    <v-list-item-content>
                        <v-list-item-title class="secondaryFont--text px-3">
                            <h6>STYLES</h6>
                        </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item class="navItem rounded-lg px-4 py-1" to="/rock">
                        <v-list-item-icon class="align-center"><v-icon class="sectionIcon rounded pa-1 secondary">mdi-guitar-electric</v-icon></v-list-item-icon>
                        <v-list-item-title>Rock</v-list-item-title>
                    </v-list-item>
                    <v-list-item class="navItem rounded-lg px-4 py-1" to="/popular">
                        <v-list-item-icon class="align-center"><v-icon class="sectionIcon rounded pa-1 secondary">mdi-star</v-icon></v-list-item-icon>
                        <v-list-item-title>Pop</v-list-item-title>
                    </v-list-item>
                    <v-list-item class="navItem rounded-lg px-4 py-1" to="/jazz">
                        <v-list-item-icon class="align-center"><v-icon class="sectionIcon rounded pa-1 secondary">mdi-saxophone</v-icon></v-list-item-icon>
                        <v-list-item-title>Jazz</v-list-item-title>
                    </v-list-item>
                    <v-list-item class="navItem rounded-lg px-4 py-1" to="/hiphop">
                        <v-list-item-icon class="align-center"><v-icon class="sectionIcon rounded pa-1 secondary">mdi-disc</v-icon></v-list-item-icon>
                        <v-list-item-title>Hip-Hop</v-list-item-title>
                    </v-list-item>
                    <v-list-item class="navItem rounded-lg px-4 py-1" to="/others">
                        <v-list-item-icon class="align-center"><v-icon class="sectionIcon rounded pa-1 secondary">mdi-dots-grid</v-icon></v-list-item-icon>
                        <v-list-item-title>Others</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'StartLayout',
    data () {
      return {
        drawer: false,
        group: null,
        
        geners: [
            ['Pop', ''],
            ['Rock', ''],
            ['Jazz', ''],
            ['Hip-Hop', ''],
            ['Others', ''],
        ],
        
      }
    },

    watch: {
      group () {
        this.drawer = false
      },
    },

    computed: {
      demo () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return true
          case 'sm': return true
          case 'md': return false
          case 'lg': return false
          case 'xl': return false
        }
        return false
      },
    },
}
</script>