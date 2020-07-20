<template>
  <div class="imgitem-box w">
    <div class="imgitem" v-for="(item, index) in item" :key="index">
      
      <img @click="$router.push('/mvdetails/'+item.id)" :src="item.cover" alt="">
      <p>{{item.name}}</p>

      <p @click="$router.push('/mvdetails/'+item.id)" class="inco"><i class="iconfont icon-bofang"></i></p>
    </div>
  </div>
</template>


<script>
  export default {
    name:'',
    props:['item'],
  }
</script>


<style scoped lang="less">
.w{
  width: 1160px;
  margin: 0 auto;
}
.imgitem-box{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  justify-content: end;
}
.imgitem{
  // float: left;
  margin: 10px 15px;
  position: relative;
  &:hover{
    .inco{
      transition: .3s;
      opacity: 10;
    }
  }
  img{
    width: 260px;
    border-radius: 5px;
    cursor: pointer;
  }
  p{
    margin: 0;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis; 
    width: 220px;
    margin-top: 3px;
  }
}
 .inco{
    position: absolute;
    bottom: 50%;
    right: 42%;
    background-color: rgba(255, 255, 255, 0.5);
    width: 30px !important;
    height: 30px ;
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
      background-color: rgb(250, 175, 34);
      color: #fff;
    }
  }
</style>