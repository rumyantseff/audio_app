<template>
    <v-container class="pa-8" fluid>
        <v-row>
            <v-col lg="12">
                <v-card class="banner-card rounded-xl elevation-0 py-16 justify-center text-center">
                    <v-row class="justify-center">
                        <v-col lg="12" md="6" class="text-center justify-center">
                            <h2 class="pentanary--text mb-4 text-wrap">Welcome to AudioApp!</h2>
                            <p class="quanterary--text mb-8 mx-auto text-wrap">Login to your account</p>
                        </v-col>   
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

        <!-- Login Card -->
        <v-row class="mt-n16 justify-center" no-gutters>     
            <v-col lg="4" md="4">
                <v-card class="login-card elevation-0 py-6 px-1 rounded-xl">
                    <v-card-text class="text-center mb-8">
                        <v-img src="/logo.png" alt="Shirtplatform logo" contain height="50"></v-img>
                    </v-card-text>
                    <v-card-text class="">
                        <v-form ref="form">
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field 
                                        placeholder="EMAIL" name="login" hide-details="" label="Email"
                                        class="" dense outlined required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field                                       
                                        label="Password" 
                                        class="" dense outlined hide-details=""
                                        required >                                      
                                    </v-text-field>
                                    <div class="d-flex align-center flex-wrap justify-space-between mt-2">
                                        <v-checkbox class="primary--text" label="Remember me"></v-checkbox>
                                        <a class="primary--text" style="text-decoration: none;">Forgot password?</a>
                                    </div>
                                    <v-btn 
                                    class="signin-btn pentanary--text rounded-lg pa-5 mt-7" type="submit" block>
                                        Sign In
                                    </v-btn> 
                                    <hr class="divider mt-12 mb-6" data-content="OR">
                                    <p class="primary--text text-sm text-center mt-3 mb-0">
                                        No account? 
                                        <a class="text-decoration-none font-weight-bold" href="/signup">Sign Up</a>
                                    </p>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'LoginLayout',
  data() {
    return {

    }
  },

  watch: {

  },
}
</script>