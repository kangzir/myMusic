<template>
  <div class="newmv">
    <div v-for="(item, index) in item" :key="index">
      <p><i class="iconfont icon-bofangsanjiaoxing"></i>{{item.playCount}}</p>
      <p @click="$router.push('/mvdetails/'+item.id)" class="inco"><i class="iconfont icon-bofang"></i></p>
      <img @click="$router.push('/mvdetails/'+item.id)" :src="item.picUrl">
      <p>{{item.copywriter}}</p>
      <p>{{item.artistName}}</p>
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
.newmv{
  display: flex;
  justify-content: space-around;
  >div{
    position: relative;
    &:hover{
      .inco,p:nth-of-type(1){
        transition: 0.3s;
        opacity: 10;
      }
    }
    img{
      width: 250px;
      border-radius: 10px;
    }
    p{
      margin: 0;
    }
    p:nth-of-type(1){
      position: absolute;
      right: 0;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 5px;
      opacity: 0;
      border-radius: 10px;
    }
    // p:nth-of-type(3){

    // }
    p:nth-of-type(4){
      color: rgb(199, 199, 199);
      font-size: 15px;
      margin: 3px 0;
    }
  }
}
  .inco{
    position: absolute;
    left: 50%;
    bottom: 55%;
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
</style>