import {$axios} from './axios'
export function getNewSong(type=0){
  return $axios({
    url:'/top/song',
    params:{
      type
    }
  })
}