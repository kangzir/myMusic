import {$axios} from './axios'
//精品歌单
export function getQuality(limit=1,cat='全部'){
  return $axios({
    url:'/top/playlist/highquality',
    params:{
      limit,
      cat,
    }
  })
}
// 全部歌单
export function getHighquality(order='hot',limit=10,offset=0,cat='全部'){
  return $axios({
    url:'/top/playlist',
    params:{
      order,
      limit,
      offset,
      cat,
    }
  })
}