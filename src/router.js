import { createRouter, createWebHistory } from "vue-router";
import Main from './modules/main-page'
import About from './modules/components/about-page.vue'
import Services from './modules/components/services-page.vue'
import Webkassa from './modules/components/webk-service.vue'
import CloudService from './modules/components/cloud-service.vue'
import SrvPage from './modules/components/srv-page.vue'
import Tillypad from './modules/components/tillypad-service.vue'
import Product1C from './modules/components/1c-product.vue'
import Contacts from './modules/components/contacts.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/services',
        name: 'Services',
        component: Services
    },
    {
        path: '/webkassa',
        name: 'Webkassa',
        component: Webkassa
    },
    {
        path: '/cloudservice',
        name: 'CloudService',
        component: CloudService
    },
    {
        path: '/srvpage',
        name: 'SrvPage',
        component: SrvPage
    },
    {
        path: '/tillypad',
        name: 'Tillypad',
        component: Tillypad
    },
    {
        path: '/product1C',
        name: 'product1C',
        component: Product1C 
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

