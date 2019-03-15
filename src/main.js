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
import VueAMap from 'vue-amap';

Vue.use(MintUI)
Vue.use(VueResource)
Vue.use(VueAMap);

Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateHTTP = true;
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { Swipe, SwipeItem, Search,Field,Button,Lazyload  } from 'mint-ui';
import moment from 'moment';
// Vue.use(Lazyload);
import 'mint-ui/lib/style.css'

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
// Vue.component(Swipe.name, Swipe,SwipeItem.name, SwipeItem,Search.name, Search,Field.name, Field, Button.name, Button );

Vue.config.productionTip = false


Vue.filter('dataFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
