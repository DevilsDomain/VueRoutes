import { createApp, createRenderer } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Jokes from './views/Jokes.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/jokes', name: 'jokes', component: Jokes}


    ]
})


createApp(App).use(router).mount('#app')