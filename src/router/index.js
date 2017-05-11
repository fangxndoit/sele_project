import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main/Main'
import Person from '@/components/Personal/Person'
import Community from '@/components/Community/Community'
import Bookstore from '@/components/Bookstore/Bookstore'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/bookstore',
      name: 'Bookstore',
      component: Bookstore
    }
  ]
})
