import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './index.css'
import { mask } from '@ionited/mask-vue';
const app = createApp(App)
app.directive('mask', mask);
app.use(createPinia())
app.use(router)
app.mount('#app')
