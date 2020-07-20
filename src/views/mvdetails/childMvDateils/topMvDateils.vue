<template>
  <div v-if="topmv" class="topmv">
    <div>
      <h3>MV详情</h3>
      <div class="video-box">
        <video v-if="topmv[0]" controls :src="topmv[0].url"></video>
          <div v-if="topmv[2]" class="mvinfo-box">
            <div class="title-info">
              <img :src="topmv[2].cover" alt="">
              <span>{{topmv[2].artistName}}</span>
            </div>
            <h2>{{topmv[2].name}}</h2>
            <p>
              <span>发布: {{topmv[2].publishTime}}</span>
              <span>播放: {{topmv[2].playCount | formatCount}}此</span>
            </p>
            <p>{{topmv[2].desc}}</p>
          </div>
      </div>
    </div>
    <div class="NominateMv">
      <h3>相关推荐</h3>
      <div v-for="(item, index) in topmv[1]" :key="index">
        <img @click="btnmv(item.id)" :src="item.cover" alt="">
        <p ><i class="iconfont icon-bofangsanjiaoxing"></i>{{item.playCount | formatCount}}</p>
        <p>{{item.duration|formatDuration}}</p>
        <p @click="btnmv(item.id)" class="inco"><i class="iconfont icon-bofang"></i></p>
        <div>
          <p>{{item.name}}</p>
          <p>{{item.artistName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name:'',
    props:['topmv'],
    methods: {
      btnmv(id){
        this.$emit('btnmv',id)
      }
    },
  }
</script>


<style scoped lang="less">
.topmv{
  display: flex;
}
.video-box{
  width: 690px;
  height: 300px;
  video{
    width: 100%;
    border-radius: 5px;
  }
}
.NominateMv{
  width: 400px;
  margin-left: 50px;
  img{
    width: 200px;
    border-radius: 5px;
    height: 100%;
  }
  >div{
    display: flex;
    margin: 20px 0;
    position: relative;
    align-items: center;
    height: 110px;
    padding: 5px;
    &:hover{
      transition: .5s;
      background-color: rgb(245, 245, 245);
    .inco{
      transition: .2s;
      opacity: 10;
    }
  }
    >p{
      color: #fff;
    }
    >p:nth-of-type(1){
      position: absolute;
      top: -5px;
      left: 140px;
    }
    >p:nth-of-type(2){
      position: absolute;
      bottom: 5px;
      left: 160px;
      font-size: 14px;
    }
    div{
      padding: 10px;
      p:nth-of-type(2){
        color: rgb(210, 210, 210);
        font-size: 14px;
      }
    }
  }
}

 .inco{
    position: absolute;
    bottom: 30%;
    right: 70%;
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

.mvinfo-box{
  margin-top: 10px;
  .title-info{
    display: flex;
    align-items: center;
    img{
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    span{
      margin-left: 10px;
    }
  }
  p:nth-of-type(1){
    color: rgb(201, 201, 201);
    font-size: 15px;
    span{
      margin-right: 30px;
    }
  }
  p:nth-of-type(2){
    margin-top: 30px;
  }
}
</style>