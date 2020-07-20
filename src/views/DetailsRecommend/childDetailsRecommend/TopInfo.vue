<template>
  <div>
    <div class="topPlaylist">
      <img :src="playlist.coverImgUrl">
      <div class="PlaylistInfo">
        <p>{{playlist.name}}</p>
        <p>
          <img :src="playlist.creator.avatarUrl" alt="">
          <span>{{playlist.creator.nickname}}</span>
          <span>:{{playlist.creator.birthday|ToTime}}创建</span>
        </p>
        <p>标签:
          <span v-for="(item, index) in playlist.tags" :key="index">
            {{item}} /
          </span>
        </p>
        <p>简介:{{playlist.creator.signature}}</p>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name:'',
    props:['playlist'],
    filters: {
      ToTime(timestamp){
          var date = new Date(parseInt(timestamp));//时间戳为10位需*1000，时间戳为13位的话不需乘1000
          var Y = date.getFullYear() + '-';
          var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
          var D = date.getDate() + ' ';
          var h = (date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()) + ':';
          var m = (date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()) + ':';
          var s = (date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds());
          return Y + M + D; 
      }
    }
  }
</script>


<style scoped lang="less">
.topPlaylist{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  >img{
    width: 240px;
    border-radius: 10px;
  }
  .PlaylistInfo{
    padding: 0px 20px;
    p:nth-child(2){
      line-height: 40px;
      height: 40px;
      img{
        width: 40px;
        border-radius: 50%;
        vertical-align: bottom;
      }
      span:nth-child(1){
        font-size: 17px;
      }
      span{
        margin: 0 5px;
        font-size: 15px;
      }
    }
    p:nth-child(3){
      span{
        color: rgb(90, 90, 90);
      }
    }
  }
}
</style>