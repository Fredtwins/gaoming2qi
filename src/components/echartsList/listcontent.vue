<template>
  <div class="listcontent">
    <Table border :columns="columns1" :data="data1"></Table>
    <template>
        <Modal v-model="looklists" class="modalx">
           <div slot="header" ref="inter">{{updateTitle}}</div>
           <Form :model="formItem">
              <p>111111111</p>
              <p>111111111</p>
              <p>111111111</p>
              <p>111111111</p>
           </Form>
			  </Modal>
    </template>
  </div>
</template>

<script>
import { listecharts } from 'common/js/table'
export default {
  data () {
    return {
      formItem: {},
      updateTitle: '图形',
      looklists: false,
      columns1: listecharts(this),
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    edit () {

    },
    del () {},
    // 点击查看，出现模态框
    loooklist () {
      this.looklists = true
    }
  }
}
</script>

<style lang="scss" scoped>
.listcontent {
  width: 100%;
}
</style>