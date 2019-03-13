import Vue from 'vue'
import Router from 'vue-router'

import comment from '@/components/comment.vue'
import mySetting from '@/components/mySetting.vue'
import order from '@/components/order.vue'
import us from '@/components/us.vue'
import intro from '../components/chirdren/intro.vue'
import advices from '../components/chirdren/advices.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'order'
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/mySetting',
      name: 'mySetting',
      component: mySetting
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/us',
      name: 'us',
      component: us,
      children:[
        {
          path:'/us',
          redirect:'intro'
        },
        {
        path:'intro',
        component:intro
      },
      {
        path:'advices',
        component:advices
      }
    ]
    },

  ],
  linkActiveClass:'mui-active'
})
