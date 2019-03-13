// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css' 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css' 
import VueResource from 'vue-resource'
import '@/assets/css/reset.css'
import BaiduMap from 'vue-baidu-map'

Vue.use(MintUI)
Vue.use(VueResource)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Swipe, SwipeItem, Search,Field,Button   } from 'mint-ui';


library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component(Swipe.name, Swipe,SwipeItem.name, SwipeItem,Search.name, Search,Field.name, Field, Button.name, Button );


Vue.use(BaiduMap, {
  
  ak: 'uMgkOk4VIumypsVx5h3xk8KR8YqmDHQR'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
