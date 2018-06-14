<template>
  <div class="home">
    home
  </div>
</template>

<script>
  // import { mapState, mapGetters, mapMutations } from 'vuex'
  // import { Static } from 'api/config'
  export default {
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
      changeUser () {
        // this.SET_USER('Zzc')
        // this.$store.state.user = 'Zzc'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    color: green;
  }
</style>

