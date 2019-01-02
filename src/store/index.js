/**
 * Created by Administrator on 2018/12/29.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'


Vue.use(Vuex);

export default new Vuex.Store ({
  actions,
  mutations,
  getters,
  state
})
