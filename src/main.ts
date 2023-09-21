import './assets/main.css'
import "vue-progressive-image/dist/style.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query'


import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

const vueQueryPluginOptions: VueQueryPluginOptions = {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    },
}

app.use(VueQueryPlugin, vueQueryPluginOptions)

app.mount('#app')
