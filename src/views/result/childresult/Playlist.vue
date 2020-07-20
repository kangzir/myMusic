<template>
  <div class="playlist-box">
    <div v-for="(item, index) in playlists" :key="index">
      <p>播放量:{{item.playCount}}</p>
      <p  @click="playSong(item.track.id)" ><i class="iconfont icon-bofang"></i></p>
      <img @click="playSong(item.track.id)" :src="item.coverImgUrl" alt="">
      <p>{{item.name}}</p>
    </div>
    <el-pagination
    class="pagination-box"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-size="15"
      background
      layout="prev, pager, next, jumper"
      :total="playlistCount">
    </el-pagination>
  </div>
</template>


<script>
import {getSong} from '../../../network/playsong'
  export default {
    name:'playlist',
    props:['playlists','playlistCount'],
    methods: {
      handleCurrentChange(page){
        this.$emit('playlistsPage',page)
      },
      playSong(id){
        getSong(id).then( res =>{
          this.$bus.$emit('songurl',res.data[0].url)
        })
      }
    },
  }
</script>


<style scoped lang="less">

.playlist-box{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  >div{
    width: 200px;
    position: relative;
    &:hover{
       p:nth-of-type(2){
         transition: .3s;
          opacity: 10;
       }
    }
    img{
      width: 100%;
      border-radius: 5px;
    }
    p{
      margin: 0;
    }
    p:nth-of-type(1){
      position: absolute;
      right: 7px;
      top: 2px;
      color: rgb(243, 243, 243);
      font-size: 14px;

    }
    p:nth-of-type(2){
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-150%);
      background: rgba(0, 0, 0, 0.4);
      padding: 7px;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      cursor: pointer;
      opacity: 0;
      i{
        position: absolute;
        left: 50%;
        top: 50%;
        color: #fff;
        transform: translate(-50%,-50%);
        font-size: 20px;
        margin-left: 3px;
      }
    }
    p:nth-of-type(3){
      margin: 10px 0;
    }
  }
}
.pagination-box{
  transform: translateX(-70%);
  margin-top: 30px !important;
  margin-bottom: 20px !important;
}
</style>