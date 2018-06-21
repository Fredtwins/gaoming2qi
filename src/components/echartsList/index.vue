<template>
    <div class="index">
      <i-col span="3">
        <side-nav></side-nav>
      </i-col>
        <hr>
        <i-col span="21">
        <router-view></router-view>
        </i-col>
    </div>
</template>

<script>
import sideNav from './SideNav.vue'
export default {
  components: {
    'side-nav': sideNav
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>