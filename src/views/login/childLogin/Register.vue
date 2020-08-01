<template>
  <div>
    <el-form :model="registerForm" :rules="registerRules" ref="registerRef" label-width="100px" class="demo-ruleForm">
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="registerForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input  v-model="registerForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="registerForm.password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="captcha">
        <el-input style="width:238px"  v-model="registerForm.captcha"></el-input>
        <el-button :disabled="iStimeText" @click="Captcha">{{timeText}}</el-button>
      </el-form-item>
      <el-form-item class="btn-box">
        <el-button type="primary" class="registerbtn" @click="btnRegister">注册</el-button>
        <el-button type="primary" class="ToLogInbtn" @click="$router.push('/ToLogIn')">去登录</el-button>
      </el-form-item>
    </el-form>  
  </div>
</template>

<script>
import {getRegister,getCaptcha,getCaptcha1,getPhone} from '../../../network/login'
  export default {
    name:'register',
    components:{
      
    },
    data() {
      const checkNickname = (rule, value, callback) =>{
        const nickname = /^[a-z0-9_-]{3,16}$/
        if(nickname.test(value)){
          callback()
        }else{
          callback(new Error('用户名格式错误'))
        }
      }
      const checkphone = (rule, value, callback) =>{
        const phone = /^1[3456789]\d{9}$/
        if(phone.test(value)){
          callback()
        }else{
          callback(new Error('手机号格式错误'))
        }
      }
      return {
        registerForm:{
          nickname:"",
          phone:"",
          password:"",
          captcha:'',
        },
        registerRules:{
          nickname:[
            { required: true, message: '用户名', trigger: 'blur' },
            {validator: checkNickname, trigger: 'blur' }
          ],
          phone:[
            { required: true, message: '手机号', trigger: 'blur' },
            {validator: checkphone, trigger: 'blur' }
          ],
          password:[
            { required: true, message: '密码', trigger: 'blur' },
          ],
          captcha:[
            { required: true, message: '验证码', trigger: 'blur' },
          ],
        },
        // 验证码倒计时
        time:60,
        timeText:'发送验证码',
        iStimeText:false
      }
    },
    methods: {

      btnRegister(registerForm){
        this.$refs.registerRef.validate( valid =>{
          if(valid === false){
            return
          }else{
            console.log(valid);
            getCaptcha1(this.registerForm.phone,this.registerForm.captcha).then(res =>{
              console.log(res);
            },err =>{
              console.dir(err)
              this.message.error(err.response.data.message)
              return
            })
            
            getRegister(this.registerForm).then( res =>{
              if(res.data.code == 200){
                this.message.success('注册成功')
              }
              console.log(res);
            },err =>{
              this.message.error('注册失败')
              console.log(err);
            })
          }
        })
      },
      Captcha(){
        getCaptcha(this.registerForm.phone).then( res =>{
          console.log(res);
        })
        this.timeText = '60s'
        this.iStimeText = true
        let setin = setInterval(() => {
          this.time --
          this.timeText = this.time+'s'
          console.log(this.time);
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
</style>