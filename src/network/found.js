import {$axios} from './axios'
// 轮播图
export function getBanner(type = 0){
  return $axios({
    url:`/banner`,
    praams:{
      type,
    }
  })
}
// 推荐歌单
export function getPersonalized(limit = 10){
  return $axios({
    url:'personalized',
    params:{
      limit,
    }
  })
} 
// 可获取推荐新音乐
export function getPersonalizedNew(){
  return $axios({
    url:'/personalized/newsong',
  })
}
//推荐MV
export function getRersonalizedMV(){
  return $axios({
    url:'/personalized/mv'
  })
}