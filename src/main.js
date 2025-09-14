import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/base.css'
import router from './router'

const app = createApp(App)
app.use(router)              // <-- register router
app.mount('#app')