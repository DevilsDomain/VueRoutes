import { createApp, createRenderer } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Jokes from './views/Jokes.vue'
import Christmas from './views/JokesChristamas.vue'
import Dark from './views/JokesDark.vue'
import Misc from './views/JokesMisc.vue'
import Programming from './views/JokesProgramming.vue'
import Pun from './views/JokesPun.vue'
import Spooky from './views/JokesSpooky.vue'






const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/jokes', name: 'jokes', component: Jokes},
        {path: '/programming', name: 'programming', component: Programming},
        {path: '/misc', name: 'misc', component: Misc},
        {path: '/dark', name: 'dark', component: Dark},
        {path: '/pun', name: 'pun', component: Pun},
        {path: '/spooky', name: 'spooky', component: Spooky},
        {path: '/christmas', name: 'christmas', component: Christmas},







    ]
})


createApp(App).use(router).mount('#app')