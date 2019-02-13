import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: 'countries'
        },
        {
            path: '/countries',
            name: 'countries',
            component: () => import('./views/Countries.vue')
        },
        {
            path: '/country/:id',
            name: 'country_teams',
            component: () => import('./views/Teams.vue')
        },
        {
            path: '/create/team',
            name: 'create_team',
            component: () => import('./views/CreateTeam.vue')
        },
        {
            path: '/create/country',
            name: 'create_country',
            component: () => import('./views/CreateCountry.vue')
        }
    ]
})

export default router
