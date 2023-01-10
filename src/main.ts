import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VueGtag, {
  config: { id: "G-FYKPMJ6MBR" }
}, router)

app.mount('#app')
