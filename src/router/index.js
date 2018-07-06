import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/components/Example'
import Feature from '@/components/Feature'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Example',
            component: Example,
        }, {
            path: '/feature',
            name: 'Feature',
            component: Feature,
        },
    ],
})
