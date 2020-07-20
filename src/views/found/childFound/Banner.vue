<template>
  <div class="banner-box">
    <el-carousel class="banner" :interval="4000" type="card" height="200px">
      <el-carousel-item class="imgItem" v-for="(item,index) in imgs" :key="index">
        <img :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<script>
import {getBanner} from '../../../network/found'
  export default {
    name:'banner',
    data() {
      return {
        imgs:null
      }
    },
    created() {
      this._getBanner()
    },
    methods: {
      _getBanner(){
        getBanner().then( res=>{
          this.imgs = res.banners
        })
      }
    },
  }
</script>


<style lang="less">
.banner-box{
  margin: 0 auto;
  margin-left: 50%;
  transform: translateX(-87%);
  margin-bottom: 10px;
  .banner{
    width: 1130px;
  }
  .imgItem{
          border-radius: 20px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
  }
}
.el-carousel__container{
  height: 250px !important;
}
</style>