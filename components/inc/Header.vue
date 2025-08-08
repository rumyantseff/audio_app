<template>
  <v-app-bar class="pentanary px-8 rounded-xl" :app="!nav" flat height="96">
    <v-btn class="search-btn" type="button" icon outlined large>
      <v-icon class="primaryFont--text">mdi-magnify</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-menu transition="slide-y-transition" rounded="xl" offset-y left>
      <template #activator="{ on, attrs }">
        <v-badge bordered bottom color="green" dot offset-x="-7" offset-y="9">  
          <v-avatar class="primary mx-n4" size="44" contain v-bind="attrs" v-on="on">
            <v-img src="avatar.jpg" class="primary"/>
          </v-avatar>
        </v-badge> 
      </template>
      <v-card>
        <v-list>
          <v-list-item class="justify-center d-flex mr-8">
            <v-badge bordered bottom color="green" dot offset-x="27" offset-y="16">  
              <v-list-item-avatar class="primary" size="44">
                <v-img src="avatar.jpg" class="primary"/>
              </v-list-item-avatar>
            </v-badge>
            <v-list-item-content>
              <v-list-item-title class="primaryFont--text text-body-1 font-weight-medium">Vladislav Rumyantsev</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="primary--text mx-"></v-divider>
          <v-list-item class="mt-4" to="/profile">
            <v-list-item-action>
              <v-icon class="primaryFont--text">mdi-account-cog-outline</v-icon>
            </v-list-item-action>
            <v-list-item-title class="primaryFont--text">Profile</v-list-item-title>
          </v-list-item>
          <v-list-item class="mt-4" to="/logout">
            <v-list-item-action>
              <v-icon class="primaryFont--text">mdi-logout-variant</v-icon>
            </v-list-item-action>
            <v-list-item-title class="primaryFont--text">Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
  export default {
    data () {
      return {
        menuItems: [
          { title: 'Settings', icon: 'mdi-account-cog-outline' },
          { title: 'Logout', icon: 'mdi-logout-variant' },
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
      searchBar() {
        $("#custom-search").click(function() {
          $(".search-query").focus();
        });
      },
    },
  }
</script>