<template>
  <div class="home">
    <!--头部导航条  -->
    <header class="home-header">
      <!--logo图  -->
      <div class="log"></div>
      <!--右边导航栏部分  -->
      <div class="right-header clear">
        <div class="topnav">
          <Menu mode="horizontal" :theme="theme1" active-name="1" class="menlist" @on-select="clickFn">
            <MenuItem v-for="(item,index) in menlist" :key="index" :name="item.name">
             <Icon :type="item.icon"></Icon> 
            {{item.title}}
            </MenuItem>
          </Menu>
        </div>
      </div>
    </header>
    <!--内容  -->
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      theme1: 'primary',
      menlist: [
        {
          name: '1',
          title: '内容管理',
          icon: 'ios-paper'
        }, {
          name: '2',
          title: '用户管理',
          icon: 'ios-people'
        }, {
          name: '3',
          title: '图形',
          icon: 'stats-bars',
          path: '/home/listcontent'
        }]
    }
  },
  mounted () {
  },
  methods: {
    clickFn (name) {
      if(name === '3') {
        this.$router.push('/home/echartsList');
      }
    }
  }
}
/* eslint-disable */
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height:3.9rem;
  color: green;
  .home-header {
    height: 100%;
    width: 100%;
    background-color: #41b0ff;
    .log {
      float: left;
    }
    .right-header {
      float: right;
      .topnav {
        .menlist {

        }
      }
    }
  }
}
</style>

