/*
  You don't really need to know what this is doing for now.
  Just know this is what is being loaded and is connecting everything together.
  Think of this as your app.js file if you're using Vue from a CDN.
*/

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
