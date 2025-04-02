<template>
  <v-app>
    <v-main style="background-image: linear-gradient(to right top, #051937, #002667, #0b2e97, #462dc4, #8312eb);">
        <loginApp />
    </v-main>
  </v-app>
</template>

<script>

import loginApp from './components/loginApp.vue'

export default {
  name: 'App',
  components: {
    loginApp
  }
}
</script>

<style></style>