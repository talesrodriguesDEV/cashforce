import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { LaHandshake } from 'oh-vue-icons/icons'

addIcons(LaHandshake)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
