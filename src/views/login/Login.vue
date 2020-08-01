<template>
  <div class="login">
    <el-card class="form-box">
      <h2 class="login_title">欢迎注册</h2>
      <register class="form"/>
    </el-card>
  </div>
</template>


<script>
import Register from './childLogin/Register'
  export default {
    name:'login',
    components:{
      Register,
    },
    data() {
      return {
        
      }
    },
    created () {
      
    },
    methods: {

    },
  }
</script>

<style scoped lang="less">
.login{
  background-color: #f5f6f7;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.form-box{
  width: 500px;
  height: 550px;
  // background-color: rgb(228, 227, 227);
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  overflow: hidden;
  .form{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 450px;
    transform: translate(-55%,-40%);
  }
}
.login_title{
  position: absolute;
  font-size: 30px;
  font-weight: 500;
  color: #5d5d5d;
  left: 50%;
  transform: translateX(-40%);
}
</style>