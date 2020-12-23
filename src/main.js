import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

import './assets/sass/main.scss'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA52lmpapNHbvmXlOW3sw6ues0QxvuCSTc',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
