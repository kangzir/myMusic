<template>
  <div class="item-play-box">
    <div class="item-play" v-for="(item, index) in item" :key="index">
      <p class="min-he">{{item.copywriter}}</p>
      <img :src="item.picUrl" alt="">
      <p class="inco" @click="$router.push('/detailsRecommend/'+item.id)"><i class="iconfont icon-bofang"></i></p>
      <p>{{item.name}}</p>
    </div>
  </div>
</template>


<script>
  export default {
    name:'',
    props:['item']
  }
</script>


<style scoped lang="less">
.item-play-box{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item-play{
  position: relative;
    width: 217px;
    overflow: hidden;
    &:hover{
    .min-he{
      transition: all .7s;
      top: 0;
    }
    .inco{
      transition: all .7s;
      opacity: 10;
    }
  }
  p{
    margin: 0;
    width: 200px;
  }
  .min-he{
    position: absolute;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    width: 100%;
    font-size: 14px;
    min-height: 30px;
    // height: 0;
    overflow: hidden;
    line-height: 30px;
    padding-left: 5px;
    border-radius:10px 10px 0px 0;
    top: -60px;
  }
  .inco{
    position: absolute;
    bottom: 60px;
    right: 15px;
    background-color: rgba(255, 255, 255, 0.5);
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    opacity: 0;
    cursor: pointer;
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
  p:nth-of-type(3){
    text-align: center;
    font-size: 14px;
  }
  img{
    width: 100%;
    height: 217px;
    border-radius: 10px;
  }
}
</style>