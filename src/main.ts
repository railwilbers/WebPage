import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/base.css' // <-- ensure this import exists (global styles)
createApp(App).use(router).mount('#app')
