/**
 * Created by Administrator on 2018/12/29.
 */

import Mock from 'mockjs'
import data from './datas/fenlei_list.json'
import data2 from './datas/shouye_data.json'
import classify from './datas/fenlei_zhuanqu.json'



Mock.mock('/fenlei', {code: 200, data: data});

Mock.mock('/shouye', {code: 200, data: data2});

//分类专区
Mock.mock('/classify', {code: 200, data: classify});
