<template>
  <v-app>
    <v-main style="background-image: linear-gradient(to right top, #051937, #002667, #0b2e97, #462dc4, #8312eb);">
        <loginApp v-if="this.store.logado == false"/>
        <homePage v-else />
    </v-main>
  </v-app>
</template>

<script>
import { useAppStore } from './store/app';
import loginApp from './components/telas/loginApp.vue'
import homePage from './components/telas/homePage.vue'

export default {
  name: 'App',
  components: {
    loginApp,
    homePage
  },
  data(){
    return{
      store: useAppStore(),
      login: false
    }
  }
}
</script>

<style></style>