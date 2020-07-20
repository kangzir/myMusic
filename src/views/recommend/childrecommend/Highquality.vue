<template>
  <div class="highquality-box">
    <div class="tags-box">
      <p @click="tabsclick(item,index)"
       v-for="(item, index) in tags" 
       :key="index"
       :class="{active:currIndex === index}">
        {{item}}
      </p>
    </div>
    <div class="item-play-box">
      <div class="item-play" v-for="(item) in item" :key="item.coverImgId">
        <p class="min-he">播放量{{item.playCount}}</p>
        <img @click="$router.push('/detailsRecommend/'+item.id)" :src="item.coverImgUrl" alt="">
        <p @click="btnDetails(item.id)" class="inco"><i class="iconfont icon-bofang"></i></p>
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    name:'',
    props:['item'],
    data() {
      return {
        tags:['全部',
              '欧美',
              '华语',
              '流行',
              '说唱',
              '摇滚',
              '民谣',
              '电子',
              '轻音乐',
              '影视原声',
              'ACG',
              '怀旧',
              '治愈',
              '旅行',],
          currIndex:0
      }
    },
    methods: {
      tabsclick(item,i){
        this.currIndex = i
        this.$emit('getDatapages',item)
      },
      btnDetails(id){
        this.$router.push('/detailsRecommend/'+id)
      }
    },
  }
</script>

<style scoped lang="less">
.highquality-box{
  // display: flex;
  .item-play-box{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 40px;
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
}
.tags-box{
  display: flex;
  margin-left: 300px;
  p{
    cursor: pointer;
    margin: 40px 0;
    text-align: center;
    min-width: 50px;
    transform: translateX(140px);
    color: rgb(128, 128, 128);
  }
}
.active{
  color: rgb(221, 109, 96) !important;
}
</style>