<template>
    <div>
        <v-navigation-drawer
        v-model="drawer" :mini-variant="mini" :app="!nav" width="240" mini-variant-width="72" floating 
        class="navigation px-2 elevation-0 hidden-sm-and-down" flat permanent fixed>
            <v-list class="mt-4">
                <v-list-item class="mx-n2 mt-0">
                    <v-img src="musix_logo.svg" alt="Shirtplatform logo" contain max-width="42"/>
                    <v-list-item-title  class="primaryFont--text font-weight-medium text-h5 mx-6">Mbrosia</v-list-item-title>
                </v-list-item> 
            </v-list>

            <v-list class="mt-8" nav dense rounded>
                <v-list-item-group v-model="group">
                    <v-list-item class="navItem" to="/">   
                        <v-list-item-icon>
                            <v-icon class="primaryFont--text">mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="primaryFont--text font-weight-bold">Home</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                </v-list-item-group>
            </v-list>

            <v-list nav dense rounded>
                <v-list-item-group v-model="group">
                    <v-list-item-content>
                        <h6 v-show="!mini" class="mx-2 secondaryFont--text font-weight-medium text-overline">GENERS</h6>                     
                    </v-list-item-content>
                    <v-list-item class="navItem" to="/shops">   
                        <v-list-item-icon>
                            <v-icon class="primaryFont--text">mdi-store</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="primaryFont--text font-weight-bold ">Styles</v-list-item-title>
                        </v-list-item-content> 
                    </v-list-item>
                </v-list-item-group>
            </v-list>

            <template #append>
                <v-list class="mx-" nav dense>
                    <v-btn class="navItemCollapse" @click.stop="toggleDrawer" icon text small fab>
                        <v-icon :class="!mini ? 'quanterary--text' : 'primaryFont--text'" icon text>
                            {{ !mini ? 'mdi-chevron-double-left' : 'mdi-chevron-double-right' }}
                        </v-icon>
                    </v-btn>
                </v-list>
            </template>
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
        mini: true,
        isIconAlt: true,
        
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
      nav () {
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

    methods: {
      toggleDrawer() {
        this.mini = !this.mini
      }
    }
}
</script>