<template>
  <div>
    <div 
    class="jingping-box" 
    v-for="(item, index) in item" 
    :key="index"
    :style=" {background:'url('+item.coverImgUrl+')'}">
      <img class="bgImg" :src="item.coverImgUrl">
      <img :src="item.coverImgUrl">
      <div>
        <button>精品歌单</button>
        <p>{{item.name}}</p>
        <p>{{item.description}}</p>
      </div>
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
.jingping-box{
  display: flex;
  padding: 10px;
  height: 200px;
  border-radius: 10px;
  align-items: center;
  position: relative;
  .bgImg{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    filter:blur(5px)
  }
  img{
    width: 160px;
    height: 160px;
    position: relative;
    z-index: 99;
  }
  >div{
    position: relative;
    z-index: 99;
    padding-left: 10px;
    button{
      background-color: rgba(0, 0, 0, 0);
      border-radius: 5px;
      border: 1px solid rgb(203, 133, 61);
      color: rgb(203, 133, 61);
      padding: 3px 15px;
    }
    p:nth-of-type(1){
      color: #fff;
    }
    p:nth-of-type(2){
      width: 950px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: rgb(163, 163, 163);
      font-size: 13px;
    }
  }
}
</style>