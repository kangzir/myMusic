import {$axios} from './axios'
export function getMVAll(area='全部',type='全部',order='上升最快',limit=30,offset=0){
  return $axios({
    url:'/mv/all',
    params:{
      area,
      type,
      order,
      limit,
      offset,
    }
  })
}