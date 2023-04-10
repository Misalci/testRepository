import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import elementIcon from './plugins/icons'

createApp(App).use(elementIcon).use(store).use(router).mount('#app')
