import Vue from 'vue'
import Router from 'vue-router'
import home from '@app/home/routes'
import input from '@app/input/routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...home,
    ...input
  ]
})
