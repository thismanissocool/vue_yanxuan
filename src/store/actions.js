/**
 * Created by Administrator on 2018/12/29.
 */

import {reqwarplist, reqcontentinfo, reqclassify} from '../api'
import {RECEIVE_WARPLIST, RECEIVE_CONTENTINFO,RECEIVE_CLASSIFY} from './mutations-types'
export default {
  //异步获取warp列表
  async getwarplist({commit}){
    const result = await reqwarplist();
    if (result.code === 200){
      commit(RECEIVE_WARPLIST, {warpList: result.data})
    }
  },
  async getcontentinfo({commit}){
    const result = await reqcontentinfo();
    if (result.code === 200){
      commit(RECEIVE_CONTENTINFO, {contentInfo: result.data})
    }
  },
  async getclassify({commit}){
    const result = await reqclassify();
    if (result.code === 200){
      commit(RECEIVE_CLASSIFY, {classify: result.data})
    }
  },
}
