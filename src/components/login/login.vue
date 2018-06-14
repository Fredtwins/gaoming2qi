<template>
  <div class="login">
    <!--logo图  -->
    <div class="logo">

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

    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
}
</style>

