import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Search from '@/components/Search'
import Forecast from '@/components/Forecast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/weather/:woeid',
      name: 'weather',
      component: Forecast
    },
    {
      path: '/search/:location',
      name: 'search',
      component: Search
    }
  ]
})
