import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

import Home from './pages/Home.vue'
import Favorites from './pages/Favorites.vue'
import NotFound from './pages/404.vue'
import Menshoes from './pages/Menshoes.vue'
import Womanshoes from './pages/Womanshoes.vue'
import Drawer from './components/Drawer.vue'

const app = createApp(App)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/menshoes', name: 'Menshoes', component: Menshoes },
  { path: '/womanshoes', name: 'Womanshoes', component: Womanshoes },
  { path: '/drawer', name: 'Drawer', component: Drawer },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
