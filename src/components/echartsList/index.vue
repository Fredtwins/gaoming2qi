<template>
    <div class="index" style="height:100%">
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
.index {
  height: 3.8rem;
}
</style>