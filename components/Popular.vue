<template>
  <v-container class="pa-8" fluid>
    
  </v-container>
</template>

<script>
export default {
  name: 'StartLayout',
  data() {
    return {
      drawer: false,
      group: null,
    }
  },

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>