<template>
  <div class="found">
    <banner></banner>
    <h3 class="tuijian w">推荐歌单</h3>
    <playlist class="w" :item="Personalized"></playlist>
    <h3 class="tuijian w">最新音乐</h3>
    <new-playlist class="w" :item="NewPlaylist"></new-playlist>
    <h3 class="tuijian w">推荐MV</h3>
    <new-m-v class="w" :item="NewMV"></new-m-v>
  </div>
</template>


<script>
// 轮播图
import Banner from './childFound/Banner'
// 推荐歌单
import Playlist from './childFound/Playlist'

import NewPlaylist from './childFound/NewPlaylist'

import NewMV from './childFound/NewMV'

// 请求数据
import {getPersonalized,getPersonalizedNew,getRersonalizedMV} from '../../network/found'
  export default {
    name:'found',
    components:{
      Banner,
      Playlist,
      NewPlaylist,
      NewMV,
    },
    data () {
      return {
        Personalized:null,
        NewPlaylist:null,
        NewMV:null
      }
    },
    created() {
      // 推荐歌单
      this._getPersonalized()
      // 可获取推荐新音乐
      this._getPersonalizedNew()
      //推荐MV
      this._getRersonalizedMV()
    },
    methods: {
      // 推荐歌单
      _getPersonalized(){
        getPersonalized().then( res =>{
          this.Personalized = res.result
          // console.log(this.Personalized);
        })
      },
      // 推荐新音乐
      _getPersonalizedNew(){
        getPersonalizedNew().then( res =>{
          this.NewPlaylist = res.result
          console.log(this.NewPlaylist);
        })
      },
      //推荐MV
      _getRersonalizedMV(){
        getRersonalizedMV().then( res=>{
          this.NewMV = res.result
        })
      }
    },
  }
</script>


<style scoped lang="less">
.w{
  width: 1130px;
  margin: 0 auto;
}
.tuijian{
  // margin: 20px;
  padding-bottom: 20px;
  font-weight: 500;
}
</style>