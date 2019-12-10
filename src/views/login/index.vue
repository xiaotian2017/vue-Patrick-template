<template>
  <div class="login_container">
    <div class="login_box">
      <!-- login header img-->
      <div class="avator_box">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <!-- login form -->
      <el-form class="el_form_login" ref="loginFormRef" :model="loginForm" :rules="loginRules">
        <el-form-item label="" prop="userForm">
          <el-input v-model="loginForm.userForm" placeholder="请输入账号" prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <el-form-item label="" prop="passForm">
          <el-input v-model="loginForm.passForm" placeholder="请输入密码" type="password"><i slot="suffix" class="el-input_icon el-icon-date"></i></el-input>
        </el-form-item>
        <el-form-item class="el_form_login_btns" label="">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLogin">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        userForm: "",
        passForn: ""
      },
      token: "XWrqweqweqrqtqweqx",
      loginRules: {
        userForm: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 8, max: 18, message: "长度是8-18个", trigger: "blur" }
        ],
        passForm: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 10, max: 20, message: "长度是10-20个", trigger: "blur" }
        ]
      }
    }
  },
  components: {},
  methods: {
    // 表单重置
    resetLogin() {
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      // 表单预验证
      this.$refs.loginFormRef.validate(valid => {
        console.log(valid)
        if (!valid) return
        window.sessionStorage.setItem("token", this.token)
        this.$message.error("登录成功")
        this.$router.push("/home")
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
  .login_box {
    background-color: #ccc;
    width: 450px;
    height: 300px;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .avator_box {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      //   border: 1px solid blue;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: aqua;
      }
    }
    .el_form_login {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .el_form_login_btns {
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
    }
  }
}
</style>
