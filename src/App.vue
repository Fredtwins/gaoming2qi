<template>
  <div class="app">
        <router-view></router-view>
  </div>
</template>

<script>
  export default {
    mounted () {
      // console.log(Promise.resolve)
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .app {
    height: 100%;
  }
</style>

