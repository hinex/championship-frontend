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
            path: '/team/create',
            name: 'create_team',
            component: () => import('./views/CreateTeam.vue')
        },
        {
            path: '/country/create',
            name: 'create_country',
            component: () => import('./views/CreateCountry.vue')
        },
        {
            path: '/teams',
            name: 'country_teams',
            component: () => import('./views/Teams.vue')
        },
        {
            path: '/country/:id',
            name: 'country_teams',
            component: () => import('./views/Teams.vue')
        }
    ]
})

export default router
