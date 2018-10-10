import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Swindow from '@/components/Swindow'
import ShowBox from '@/components/ShowBox'
import Detail from '@/components/Detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowBox',
      component: ShowBox
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
