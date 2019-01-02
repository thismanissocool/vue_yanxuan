/**
 * Created by Administrator on 2018/12/28.
 */

import Msite from '../pages/Msite/Msite.vue'
import Cart from '../pages/Cart/Cart.vue'
import Classify from '../pages/Classify/Classify.vue'
import Personal from '../pages/Personal/Personal.vue'
import Article from '../pages/Article/Article.vue'


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
      component: Article
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

