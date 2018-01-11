import Vue from 'vue'
import Router from 'vue-router'
import InicioHome from '@/features/inicio-home'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'inicioHome',
      component: InicioHome
    }
  ]
})
