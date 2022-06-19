import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueFeather from 'vue-feather';

import App from './App.vue'

const app = createApp(App)

app.component(VueFeather.name, VueFeather);
app.use(createPinia())

app.mount('#app')
