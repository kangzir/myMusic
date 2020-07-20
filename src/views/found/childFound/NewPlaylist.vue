<template>
  <div class="new-playlist">
    <div v-for="(item, index) in item" :key="index">
      <img @click="playSong(item.song.id)" :src="item.picUrl" alt="">
      <p  @click="playSong(item.song.id)"  class="inco"><i class="iconfont icon-bofang"></i></p>
      <div>
        <p>{{item.name}}</p>
        <p>{{item.song.artists[0].name}}</p>
      </div>
    </div>
  </div>
</template>


<script>
import {getSong} from '../../../network/playsong'
  export default {
    name:'',
    props:['item'],
    methods: {
      playSong(id){
        getSong(id).then( res =>{
          this.$bus.$emit('songurl',res.data[0].url)
        })
      }
    },
  }
</script>


<style scoped lang="less">
.new-playlist{
  display: flex;
  flex-wrap: wrap;
  position: relative;
  // align-content: center;
  justify-content: center;
  >div{
    display: flex;
    margin: 10px;
    width: 528px;
    height: 124px;
    align-items: center;
    padding-left: 10px;
      &:hover{
        .inco{
          transition: 0.5s;
          opacity: 10;
        }
      }
    &:hover{
      transition: all .3s;
      background-color: rgb(245, 245, 245);
    }
    >div{
      padding: 0 10px;
      p:nth-child(2){
        color: rgb(141, 141, 141);
        font-size: 14px;
      }
    }
    img{
      width: 80px;
    }
  }
}
  .inco{
    transform: translateX(-55px);
    bottom: 60px;
    left: 15px;
    background-color: rgba(255, 255, 255, 0.5);
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    opacity: 0;
    cursor: pointer;
    z-index: 99;
    i{
      margin-left: 7px;
      font-size: 20px;
    }
    &:hover{
    transition: all 0.3s;
    background-color: rgb(255, 176, 30);
    color: #fff;
    }
  }
</style>