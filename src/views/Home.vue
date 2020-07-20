<template>  
  <div class="home">
    <el-container class="home-container">
      <!-- 头部 -->
      <el-header>
        <div class="top-icons">
          <span @click="goFound"><i class="iconfont icon-shouye"></i></span>
          <span><i class="iconfont icon-icon--"></i></span>
          <span><i class="iconfont icon-jian"></i></span>
        </div>
        <div class="topGo">
          <span @click="$router.go(-1)"><i class="iconfont icon-jiantouzuo"></i></span>
          <span @click="$router.go(1)"><i class="iconfont icon-jiantouyou"></i></span>
        </div>
        <div class="top-input">
          <el-input placeholder="请输入歌曲内容" v-model="topConten" class="input-with-select">
            <el-button @click="Search" class="btn" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px" :title="cerrIndex">
          <div>
            <p v-for="(item, index) in texts" 
            :key="index"
            :class="{active : cerrIndex == index}"
            @click="ClickAE(index)">
              <i :class="icons[index]"></i>
              {{item}}
              </p>
          </div>
        </el-aside>
        <el-container class="zhuti">
          <!-- 主体 -->
          <el-main>
            <keep-alive exclude="mvdetails,DetailsRecommend">
              <router-view></router-view>
            </keep-alive>
          </el-main>
            <!-- 底部 -->
          <el-footer>
            <audio class="audio-box" :src="songurl" loop controls autoplay >
            </audio>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {getResult} from '../network/result'
export default {
  name: 'Home',
  data () {
    return {
      texts:['发现音乐','推荐歌单','最新音乐','最新MV'],
      icons:{
        0:'iconfont icon-yinle1',
        1:'iconfont icon-ziyuanldpi',
        2:'iconfont icon-yinle',
        3:'iconfont icon-bofang',
        },
      cerrIndex : 0,
      topConten:'',
      songurl:''
    }
  },
  created() {
    this.$bus.$on('songurl', url =>{
      console.log(url);
      this.songurl = url
    })
    
    if(sessionStorage.getItem('cerrIndex')){
      this.cerrIndex = sessionStorage.getItem('cerrIndex')
      return
    }
  },
  methods: {
    ClickAE(i){
      this.cerrIndex = i

      sessionStorage.setItem('cerrIndex',this.cerrIndex)
      switch (i) {
        case 0:
          this.$router.push('/found')
          break;
        case 1 :
          this.$router.push('/recommend')
          break
        case 2 :
          this.$router.push('/newMusic')
          break
        case 3 :
          this.$router.push('/newMV')
      }
    },
    Search(){
      this.$router.push('/result/'+this.topConten)
      getResult(this.topConten,15,0,1).then( res =>{
        this.$bus.$emit('btnsosuo',res)
      })
    },
    goFound(){
      this.$router.push('/found')
    }
  },
  watch: {
    $route(){
      switch (this.$route.path) {
        case '/found':
          this.cerrIndex = 0
          break;
        case '/recommend':
          this.cerrIndex = 1
          break;
        case '/newMusic':
          this.cerrIndex = 2
          break;
        case '/newMV':
          this.cerrIndex = 3
          break;
      }
    }
  },
}
</script>

<style scoped lang="less">
.home{
  .el-header{
    background-color: rgb(249, 249, 249);
    display: flex;
    .top-icons{
      margin-top: 7px;
      span{
        width: 10px;
        overflow: hidden;
        border-radius: 50%;
        margin: 0 5px;
        padding: 1px;
        width: 18px;
        height: 19px;
        display: inline-block;
        text-align: center;
        position: relative;
        cursor: pointer;
        &:hover{
          i{
            transition: all .3s;
            display: block;
          }
        }
        i{
          width: 5px;
          height: 5px;
          position: absolute;
          top: 2px;
          left: 2px;
          margin-right: 5px;
          display: none;
        }
      }
      span:nth-child(1){
        background-color:rgb(221, 109, 96) ;
      }
      span:nth-child(2){
        background-color:rgb(220, 192, 96) ;
      }
      span:nth-child(3){
        background-color:rgb(132, 187, 88) ;
      }
    }
    .topGo{
      align-self: center;
      margin-left: 100px;
      cursor: pointer;
      span{
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: inline-block;
        line-height: 40px;
        text-align: center;
        &:hover{
          transition: all .3s;
          background-color: rgb(235, 235, 235);
        }
      }

    }
    .top-input{
      align-self: center;
      position: absolute;
      right: 80px;
      .input-with-select{
        width: 200px;
        height: 32px;
        .btn{
          width: 55px;
        }
      }
    }
  }
  .el-aside{
    background-color: rgb(237, 237, 237);
    >div{
      p{
        margin: 0%;
        padding-left: 40px;
        font-size: 18px;
        width: 160px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        i{
          margin-right: 5px;
        }
        &:hover{
          transition: all 0.3s;
          background-color: rgb(231, 231, 231);
        }
      }
    }
  }
  .el-main{
    background-color: rgb(255, 255, 255);
  }
  .el-footer{
    background-color: rgb(241, 243, 244);
  }
}
.active{
  transition: all 0.3s;
  color: rgb(221, 110, 97);
}
.el-main{
  height: 84vh;
}
.audio-box{
  width: 100%;
  height: 100%;
}
</style>

