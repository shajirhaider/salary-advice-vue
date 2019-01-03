import Vue from 'vue'
import Router from 'vue-router'


const Login = () => import(/* webpackChunkName: "about" */ './components/Login.vue')
const Home = () => import('./components/Home.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: { title: 'Login' }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { title: 'Home' }
    }

  ]
})
