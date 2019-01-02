/**
 * Created by Administrator on 2018/12/29.
 */
import ajax from './ajax'

export const reqwarplist = () => ajax('/fenlei'); //请求首页分类数据

export const reqcontentinfo = () => ajax('/shouye'); //请求首页数据


export const reqclassify = () => ajax('/classify'); //请求分类数据
