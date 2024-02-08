/*
 * @Date: 2024-01-15 16:41:27
 * @Author: Lv
 * @LastEditors: Lv
 * @LastEditTime: 2024-01-15 19:41:44
 */
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('../view/HomeVue.vue')
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/products/:id',
            component: () => import('../view/ProductsVue.vue')
        },
        {
            path: '/company',
            component: () => import('../view/CompanyVue.vue')
        },
        {
            path: '/contact',
            component: () => import('../view/ContactVue.vue')
        },
        {
            path: '/details/:id',
            component: () => import('../view/DetailsVue.vue')
        },
    ]
})


export default router

