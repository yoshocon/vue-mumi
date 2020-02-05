/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Basic from './components/Basic'
import Image from './components/Image'
import About from './components/About'

const routes = [
  {
    path: '/basic',
    component: Basic
  },
  {
    path: '/image',
    component: Image
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
