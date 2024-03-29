import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import logo from "@/components/Logo.vue";

createApp(App).use(store).use(router).component('logo', logo).mount('#app')
