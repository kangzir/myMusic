<template>
  <div class="mv-box">
    <div v-for="(item, index) in item[0]" :key="index">
      <p>播放量:{{item.playCount}}</p>
      <p  @click="$router.push('/mvdetails/'+item.id)"><i class="iconfont icon-bofang"></i></p>
      <img @click="$router.push('/mvdetails/'+item.id)" :src="item.cover" alt="">
      <p>{{item.name}}</p>
      <p>{{item.duration | formatDuration}}</p>
      <p>{{item.artistName}}</p>
    </div>

    <el-pagination
    class="pagination-box"
    background
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-size="15"
      layout="prev, pager, next, jumper"
      :total="item[1]">
    </el-pagination>
  </div>
</template>


<script>
  export default {
    name:'mv',
    props:['item'],
    methods: {
      handleCurrentChange(page){
        this.$emit('mvPage',page)
      }
    },
  }
</script>


<style scoped lang="less">
.mv-box{
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  >div{
    width: 270px;
    position: relative;
    margin: 2px 10px;
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
      color: #fff;
    }
    p:nth-of-type(2){
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-100%);
      background: rgba(0, 0, 0, 0.4);
      padding: 7px;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      opacity: 0;
      cursor: pointer;
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
      margin-bottom: 2px;
    }
    p:nth-of-type(4){
      margin: 10px 0;
      position: absolute;
      right: 5px;
      bottom: 50px;
      color: #fff;
      font-size: 14px;
    }
    p:nth-of-type(5){
      margin:  0;
      margin-bottom: 5px;
      color: rgb(143, 153, 153);
      font-size: 14px;
    }
  }
}
.pagination-box{
  transform: translateX(133%);
  margin-top: 30px !important;
  margin-bottom: 20px !important;
}
</style>