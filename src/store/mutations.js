/**
 * Created by Administrator on 2018/12/29.
 */

import {RECEIVE_WARPLIST, RECEIVE_CONTENTINFO,RECEIVE_CLASSIFY} from './mutations-types'
export default {
  [RECEIVE_WARPLIST](state, {warpList}){
    state.warpList = warpList;
  },
  [RECEIVE_CONTENTINFO](state, {contentInfo}){
    state.contentInfo = contentInfo;
  },
  [RECEIVE_CLASSIFY](state, {categoryL1List}){
    state.categoryL1List = categoryL1List;
  },
}
