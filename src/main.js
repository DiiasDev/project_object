import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify' // Importa o Vuetify

const app = createApp(App)

app.use(createPinia())
app.use(vuetify) // Adiciona o Vuetify ao app
app.mount('#app')
