import {$axios} from './axios'
export function getResult(keywords,limit,offset,type){
  return $axios({
    url:`/search`,
    params:{
      keywords,
      limit,
      offset,
      type
    }
  })
}