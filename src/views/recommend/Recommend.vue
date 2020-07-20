<template>
  <div class="recomm">
    <jingping class="w" :item="jingping"/>
    <highquality @getDatapages="getDatapages" class="w" :item="Highquality" />
    <el-pagination
    class="pagination"
      ref="current"
      @current-change="handleCurrentChange"
      :current-page="1"
      layout="prev, pager, next, jumper"
      :total="total/10">
    </el-pagination>
  </div>
</template>


<script>
import {getHighquality,getQuality} from '../../network/recommend'
import Highquality from './childrecommend/Highquality'
import jingping from './childrecommend/jingping'
  export default {
    name:'recommend',
    components:{
      Highquality,
      jingping,
    },
    data() {
      return {
        Highquality:null,
        total:0,
        items:null,
        jingping:null
      }
    },
    created() {
      this._getHighquality()
      this._getQuality()
    },
    methods: {
      _getHighquality(order,pages,offset,type){
        getHighquality(order,pages,offset,type).then( res =>{
          this.Highquality = res.playlists
          this.total = res.total
        })
      },
      getDatapages(item){
        this._getHighquality('hot',10,0,item)
        this._getQuality(1,item)
        this.items = item
      },

      handleCurrentChange(page){
        this._getHighquality('hot',10,(page-1)*10,this.items)
      } ,

      _getQuality(page,type){
        getQuality(page,type).then( res =>{
          console.log(res);
          this.jingping = res.playlists
        })
      }
    },
    computed: {
      // hilength(){
      //   return this.total.length/10
      // }
    },
  }
</script>


<style scoped lang="less">
.w{
  width: 1170px;
  margin: 0 auto;
}
.recomm{
  position: relative;
}
.pagination{
  position: absolute;
  right: 30%;
  margin-bottom: 10px;
}
</style>