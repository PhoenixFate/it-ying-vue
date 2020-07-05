import Vue from 'vue'
import Router from 'vue-router'
import Base from '../components/base'
import Index from '../components/index'
import DoubleBind from '../components/doubleBind'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/base',
      name: 'Base',
      component: Base
    },
    {
      path: '/doubleBind',
      name: 'Dboule',
      component: DoubleBind
    }
  ]
})
