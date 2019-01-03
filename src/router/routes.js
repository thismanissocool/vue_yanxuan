/**
 * Created by Administrator on 2018/12/28.
 */

import Msite from '../pages/Msite/Msite.vue'
import Cart from '../pages/Cart/Cart.vue'
import Classify from '../pages/Classify/Classify.vue'
import Personal from '../pages/Personal/Personal.vue'
import Article from '../pages/Article/Article.vue'
import Tab1 from '../pages/Article/Tab1/Tab1.vue'
import Tab2 from '../pages/Article/Tab2/Tab2.vue'
import Tab3 from '../pages/Article/Tab3/Tab3.vue'
import Tab4 from '../pages/Article/Tab4/Tab4.vue'
import Tab5 from '../pages/Article/Tab5/Tab5.vue'


export default [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/article',
      component: Article,
      children:[
        {
          path: '/article/tab1',
          component: Tab1
        },
        {
          path: '/article/tab2',
          component: Tab2
        },
        {
          path: '/article/tab3',
          component: Tab3
        },
        {
          path: '/article/tab4',
          component: Tab4
        },
        {
          path: '/article/tab5',
          component: Tab5
        },
        {
          path: '/article',
          redirect: '/article/tab1'
        },
      ]
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/personal',
      component: Personal
    }
  ]

