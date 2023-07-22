import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/main.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import '@fortawesome/fontawesome-free/css/solid.min.css'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.use(VueGtag, {
  config: { id: "G-FYKPMJ6MBR" }
}, router)

app.mount('#app')
