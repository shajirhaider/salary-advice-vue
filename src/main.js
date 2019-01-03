import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './assets/Styles.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
