<template>
    <div class="index">
        <side-nav></side-nav>
        <hr>
        <router-view></router-view>
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