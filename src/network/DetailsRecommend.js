import {$axios} from './axios'
export function getPlaylist(id){
  return $axios({
    url:`/playlist/detail`,
    params:{
      id
    }
  })
}
export function getComment(id,limit,offset){
  return $axios({
    url: `/comment/playlist`,
    params:{
      id,
      limit,
      offset,
    }
  })
}