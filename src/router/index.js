/**
 * Created by Administrator on 2018/12/28.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes
})
