import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAppStore } from './stores/appStore';


const app = createApp(App)

app.use(createPinia())
app.use(router)

const appStore = useAppStore()

if (appStore.darkMode) {
    document.body.classList.add('dark')
  }

app.mount('#app')
