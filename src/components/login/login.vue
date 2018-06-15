<template>
  <div class="login">
    <!--logo图  -->
    <div class="logo">
      <img src="static/img/login/logo_02.png" alt="">
    </div>
    <!--输入用户账号密码  -->
    <div class="login-right">
      <div class="input-group">
        <h1>用户名登录</h1>
        <p>
          <Input v-model="username" autofocus icon="person" placeholder="请输入账号"></Input>
        </p>
        <p>
          <Input v-model="password" @on-enter="submit" type="password" icon="locked" placeholder="请输入密码"></Input>
        </p>
        <p>
          <Button type="success" @click="submit">登录</Button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 用户登录
    submit () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  height: 100%;
  background: url('../../../static/img/login/bg.jpg');
  background-size: cover;
  .logo {
    width: 23vw;
    padding-bottom: 2vh;
    text-align: center;
    img {
      width: 100%;
      max-width: 525px;
    }
  }
  .login-right {
    position: absolute;
    width: 32vw;
    right: 2vw;
    top: 35vh;
    .input-group {
      border: 1px solid white;
      margin: 0 2vw;
      padding: 3vh 0;
      text-align: center;
      background: rgba(255, 255, 255, 0.2);
      h1 {
        padding-bottom: 20px;
        color: #fff;
        font-size: 24px;
      }
      p {
        padding-bottom: 30px;
        .ivu-input-wrapper {
          width: 63%;
          height: 45px;

          .ivu-input {
            height: 100%;
          }

          .ivu-icon {

            //height: 100%;
            line-height: 30px;
            font-size: 23px;
            margin-top: 6px;
          }
        }
        .ivu-btn {
          width: 63%;
          height: 50px;
          font-size: 23px;
          background: #4fceaa;
        }
      }
    }
  }
}
</style>

