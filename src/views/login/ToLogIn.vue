<template>
<div class="tologin">
  <el-card class="form-box">
   <h2 class="tologin_title">欢迎登陆</h2>
    <el-form v-if="isToLogin" class="form" :model="loginForm" :rules="loginRules" ref="loginRef" label-width="100px">
      <el-form-item label="手机号" prop="phone">
        <el-input  v-model="loginForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item class="btn-box">
        <el-button type="primary" class="Loginbtn" @click="btnLogin">登录</el-button>
        <el-button type="warning" class="Loginbtn" @click="isToLogin = !isToLogin">手机验证码登录</el-button>
        <el-button type="primary" class="ToLogInbtn" @click="$router.push('/login')">去注册</el-button>
      </el-form-item>
    </el-form>

    <el-form v-else class="form" :rules="phoneRules" ref="phoneRef" label-width="100px">
      <el-form-item label="手机号" prop="Codephone">
        <el-input  v-model="Codephone"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input style="width:238px" v-model="Code"></el-input>
        <el-button style="width:112px" :disabled="iStimeText" @click="Captcha">{{timeText}}</el-button>
      </el-form-item>
      <el-form-item class="btn-box">
        <el-button type="primary" class="Loginbtn" @click="btnLoginCode">登录</el-button>
        <el-button type="warning" class="Loginbtn" @click="btnLogin = isToLogin =!isToLogin">密码登录</el-button>
        <el-button type="primary" class="ToLogInbtn" @click="$router.push('/login')">去注册</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</div>
</template>

<script>
import {getLogin,getRefresh,getCaptcha,getCaptcha1,getPhone} from '../../network/login'
  export default {
    name:'ToLogIn',
    data () {
      const checkphone = (rule, value, callback) =>{
        const phone = /^1[3456789]\d{9}$/
        if(phone.test(value)){
          callback()
        }else{
          callback(new Error('手机号格式错误'))
        }
      }
      return {
        // 手机密码登录
        loginForm:{
          phone:'',
          password:''
        },
        loginRules:{
          phone:[
            { required: true, message: '手机号', trigger: 'blur' },
            {validator: checkphone, trigger: 'blur' }
          ],
          password:[
            { required: true, message: '密码', trigger: 'blur' },
          ],
        },
        isToLogin:true,
        // 手机验证码登录
        Codephone:'',
        Code:'',

        phoneRules:{
          Codephone:[
            { required: true, message: '手机号', trigger: 'blur' },
            {validator: checkphone, trigger: 'blur' }
          ]
        },
        // 验证码倒计时
        time:60,
        timeText:'发送验证码',
        iStimeText:false
      }
    },
    methods: {
      //手机密码登录
      btnLogin(){
        getLogin(this.loginForm).then( res =>{
            console.log(res);
          if(res.code === 200){
            this.$msg.success('登录成功')
            localStorage.setItem('token',res.token)
            this.$router.push('/home')
          }else{
            this.$msg.error(res.data.msg)
          }
          console.log(res);
        })
      },

      // 手机验证码登录
      btnLoginCode(){
        getCaptcha1(this.Codephone,this.Code).then( res =>{
          console.log(res);
        },err =>{
          console.dir(err)
          this.$msg.error(err.response.data.message)
          return
        })

        getRefresh().then( res =>{
          console.log(res);
          if(res.data.code === 200){
            this.$msg.success('登录成功'); 
            this.$router.push('/home')
            return
          } 
        })
      },

      Captcha(){
        getCaptcha(this.Codephone).then( res =>{
          console.log(res);
        })
        // 验证码倒计时
        this.timeText = '60s'
        this.iStimeText = true
        let setin = setInterval(() => {
          this.time --
          this.timeText = this.time+'s'
          if(this.time === 0){
            this.timeText = '重新发送验证码'
            this.iStimeText = false
            this.time = 60
            clearInterval(setin)
          }
        }, 1000);
      },
    },
  }
</script>

<style scoped lang="less">
.tologin{
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
  height: 400px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  .form{
    position: absolute;
    top: 65%;
    left: 50%;
    width: 450px;
    transform: translate(-55%,-50%);
  }
}
.tologin_title{
  position: absolute;
  font-weight: 500;
  font-size: 30px;
  left: 41%;
}
</style>