import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Events from './views/Events.vue'
import Chapters from './views/Chapters.vue'
import Contact from './views/Contact.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/events',
            component: Events
        },
        {
            path: '/chapters',
            component: Chapters
        },
        {
            path: '/contact-us',
            component: Contact
        }
    ]
})