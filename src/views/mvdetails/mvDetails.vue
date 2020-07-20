<template>
  <div class="w">
    <top-mv-dateils @btnmv="btnmv" :topmv="[topmv,NominateMv,mvInfo]"/>
    <mv-comments @mvpage="mvpage" :commentsmv="commentsmv"/>
  </div>
</template>


<script>
import {getMvDateils,getNominate,getMvComment,getMvInfo,getMvUser} from '../../network/mvdetails'

import topMvDateils from './childMvDateils/topMvDateils'
import MvComments from './childMvDateils/MvComments'
  export default {
    name:'mvdetails',
    components:{
      topMvDateils,
      MvComments,
    },
    data () {
      return {
        id:null,
        topmv:null,
        NominateMv:null,
        mvInfo:null,
        w:null,
        commentsmv:null
      }
    },
    created() {
      this.id = this.$route.params.id
      console.log(this.id);
      // 详情mv 
      this._getMvDateils(this.id)
      // 推荐mv
      this._getNominate(this.id)
      // // MV评论
      this._getMvComment(this.id,5,0)
      // // MV详情 MV信息
      this._getMvInfo(this.id)
    },
    methods: {
      // 详情mv 
      _getMvDateils(id){
        getMvDateils(id).then( res =>{
          this.topmv = res.data
        })
      },
       // 推荐mv
      _getNominate(id){
        getNominate(id).then( res =>{
          this.NominateMv = res.mvs
        })
      },
      // MV详情 MV信息
      _getMvInfo(id){
        getMvInfo(id).then( res =>{
          this.mvInfo = res.data
          // console.log(res);
        })
      },
      _getMvComment(id,limit,offset){
        getMvComment(id,limit,offset).then( res =>{
             this.commentsmv = res
        })
      },
      mvpage(page){
        this._getMvComment(this.id,5,(page-1)*5)
      },
      btnmv(id){
        this.$router.push('/mvdetails/'+id)
        
        this._getMvDateils(id)
        // 推荐mv
        this._getNominate(id)
        // // MV评论
        this._getMvComment(id,5,0)
        // // MV详情 MV信息
        this._getMvInfo(id)
      }
    },
  }
</script>


<style scoped lang="less">
.w{
  width: 1100px;
  margin: 0 auto;
}
</style>