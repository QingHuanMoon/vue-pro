import Vue from 'vue'
import Router from 'vue-router'
import router from './router.js'



Vue.use(Router)

export default new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: router
})
