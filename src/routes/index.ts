import {createMemoryHistory, createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router