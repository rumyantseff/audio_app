<template>
    <v-footer class="mt-16 py-8 rounded-xl pentanary">
      <v-card class="flex transparent" flat>
        <v-card-text class="px-0">
          <v-row class="" no-gutters>
            <v-col cols="12" lg="8" class="mb-2 mx-auto text-center">
              <v-btn
                v-for="link in footerLinks" :key="link" text rounded class="my-2 primaryFont--text">
                {{ link }}
              </v-btn>
            </v-col>
            <v-col cols="8" class="mx-auto text-center">
              <v-btn v-for="icon in footerIcons" :key="icon" class="mx-1 primaryFont--text" icon>
                <v-icon size="20px">{{ icon }}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider class="divider secondaryFont mt-4" />
          <v-row>
            <v-col cols="8" class="mx-auto text-center">
              <v-card-text class="secondaryFont--text">
                Copyright © {{ new Date().getFullYear() }} created by 
                <strong><a class="text-decoration-none secondaryFont--text" href="">Vladislav Rumyantsev</a></strong>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-footer>
</template>


<script>
export default {
    data() {
        return {
            footerLinks: [
                'Home',
                'About Us',
                'Contact Us',
            ],
            footerIcons: [
                'mdi-application-outline',
                'mdi-github',
                'mdi-linkedin',
            ],
        }
    }
}
</script>