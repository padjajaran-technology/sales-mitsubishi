import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    { 
        path: '/',
        component: () => import('./pages/Home.vue')
    },
    {
        path: '/produk/:slug',
        component: () => import('./pages/ProductDetail.vue')
    },
    {
        path: '/berita/:slug',
        component: () => import('./pages/NewsDetail.vue')
    },
    {
        path: '/ajukan-kredit',
        component: () => import('./pages/CreditRequest.vue')
    },
    {
        path: '/kontak',
        component: () => import('./pages/Contact.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;