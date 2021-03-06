import Vue from 'vue'
import Router from 'vue-router'
import home from '@app/home/routes'
import input from '@app/input/routes'
import { bus } from '@/plugins/event-bus'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    ...home,
    ...input
  ]
})

const clearAlerts = () => {
  bus.$emit('clear-alerts')
}

router.beforeEach((to, from, next) => {
  clearAlerts()
  next()
})

export default router
