<template>
  <v-app-bar class="elevation-0 ma-8 rounded-xl" 
  style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px !important;">
      <v-toolbar-title class="primaryFont--text mx-4">Audio App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon class="primaryFont--text mx-4" @click.stop="drawer = !drawer">mdi-menu</v-icon>
  </v-app-bar>
</template>

<script>
  export default {
    data () {
      return {

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