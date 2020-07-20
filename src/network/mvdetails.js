import {$axios} from './axios'
// 推荐mv
export function getNominate(mvid){
  return $axios({
    url:`/simi/mv`,
    params:{
      mvid,
    }
  })
}
// 详情mv 
export function getMvDateils(id){
  return $axios({
    url:`/mv/url`,
    params:{
      id
    }
  })
}
// MV评论
export function getMvComment(id,limit,offset){
  return $axios({
    url:`/comment/mv`,
    params:{
      id,
      limit,
      offset,
    }
  })
}
// MV详情 MV信息
export function getMvInfo(mvid){
  return $axios({
    url:`/mv/detail`,
    params:{
      mvid
    }
  })
}
// MV详情 歌手信息
export function getMvUser(id){
  return $axios({
    url:`/artists`,
    params:{
      id
    }
  })
}
// MV详情 点击右侧切换