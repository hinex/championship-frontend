import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.SERVER_URL || 'http://localhost:5000'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
