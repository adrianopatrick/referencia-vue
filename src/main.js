import Vue from 'vue'
import TheContainer from './the-container'
import router from './router'
import eventBus from './plugins/event-bus'

import('./assets/css/fonts.css')
import('./assets/css/inss.css')
import('./assets/css/gitlab.css')

Vue.use(eventBus)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<TheContainer/>',
  components: { TheContainer }
})
