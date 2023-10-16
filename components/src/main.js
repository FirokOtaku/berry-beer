import { createApp } from 'vue'

import { cheers } from './components.js'

import App from './App.vue'

const app = createApp(App)
cheers(app)
app.mount('#app')
