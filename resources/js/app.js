import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './views/App'
import routes from './routes'
import store from './store'
import vSelect from 'vue-select'
import DatePicker from 'vue2-datepicker'
import izitoast from 'izitoast'

import 'vue-select/dist/vue-select.css'
import 'vue2-datepicker/index.css'
import 'izitoast/dist/css/iziToast.min.css'

Vue.use(VueRouter)

Vue.component('v-select', vSelect)
Vue.component('date-picker', DatePicker)

let domain = window.location.origin + '/hospital'
let apiBaseURL = `${domain}/api/`
window.publicPath = `${domain}/public`

window.axios = axios.create({ baseURL: apiBaseURL })

window.snackbar = {
    success: (msg, position) => {
        izitoast.success({
            title: "Success",
            message: msg,
            position: position || "bottomRight",
        });
    },
    error: (msg, position) => {
        izitoast.error({
            title: "Error",
            message: msg,
            position: position || "bottomRight",
        });
    },
    warning: (msg, position) => {
        izitoast.warning({
            title: "Warning",
            message: msg,
            position: position || "bottomRight",
        });
    }
}

const router = new VueRouter({
    base: 'hospital',
    routes,
    mode: 'history'
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")
