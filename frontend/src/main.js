import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import Header from './components/Header.vue'
import SignUp from './views/SignUp.vue'
import NewListing from './views/NewListing.vue'
import Listings from './views/Listings.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/listings'
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/new-listing',
        name: 'NewListing',
        component: NewListing
    },
    {
        path: '/listings',
        name: 'Listings',
        component: Listings
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App)
app.use(router)
app.mount('#app')
