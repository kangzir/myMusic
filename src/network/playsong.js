import {$axios} from './axios'
export function getSong(id){
  return $axios({
    url: `/song/url`,
    params:{
      id,
    }
  })
}