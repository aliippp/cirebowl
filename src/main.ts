import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/main.scss'
import router from './router/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import Toast, { POSITION } from 'vue-toastification'

import type { PluginOptions } from 'vue-toastification'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

const options: PluginOptions = {
  position: POSITION.BOTTOM_CENTER,
  transition: 'Vue-Toastification__fade',
  pauseOnHover: false
}

app.use(pinia)
app.use(router)
app.use(Toast, options)
app.mount('#app')
