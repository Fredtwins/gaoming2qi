<template>
  <div class="home">
    <Top-Nav></Top-Nav>  
  </div>
</template>

<script>
  import { TopNav } from '../topNav/topNav.vue'
  // import { mapState, mapGetters, mapMutations } from 'vuex'
  // import { Static } from 'api/config'
  export default {
    component: {
      TopNav
    },
    // props: {
    //   id: {
    //     type: String
    //   }
    // },
    // computed: {
    //   ...mapState([
    //     'user',
    //     'num'
    //   ]),
    //   ...mapGetters([
    //     'filterUser'
    //   ])
    // },
    data () {
      return {}
    },
    mounted () {
      // console.log(this.id)
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .home {
    color: green;
  }
</style>

