import Vue from 'vue'
import App from './App'
import store from './store'
import api from './api'
import util from './common/util.js'
import { Api_url } from 'common/config.js'
import minxin from './common/mixins/shopro-share.js'
import http from './common/axios.js'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$getimg = Api_url
//Vue.use(ElementUI);
App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$api = api
Vue.prototype.$api = http
Vue.prototype.$util = util

Vue.mixin(minxin)

Vue.filter('dateformat', function (time) {
    const date = new Date(time)
    const year = date.getFullYear()
    const month = (date.getMonth() + 1 + '').padStart(2, '0')
    const day = (date.getDay() + '').padStart(2, '0')
    const hour = (date.getHours() + '').padStart(2, '0')
    const minute = (date.getMinutes() + '').padStart(2, '0')
    const second = (date.getSeconds() + '').padStart(2, '0')

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
})

const app = new Vue({
    store,
    ...App
})
app.$mount()
