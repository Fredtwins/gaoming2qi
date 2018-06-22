<template>
  <div class="listcontent">
    <Table border :columns="columns1" :data="data1"></Table>
    <template>
        <Modal v-model="looklists" class="modalx">
           <div slot="header" ref="inter">{{updateTitle}}</div>
            <Form :model="formItem"> 
              <div id="main" class="main" style="width: 72rem;height: 530px"></div>
            </Form> 
			  </Modal>
    </template>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from 'echarts'
import { listecharts } from 'common/js/table'
export default {
  data () {
    return {
      // option: {},
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
      this.collectionChart()
    },
    collectionChart () {
      // let option = {}
      let myChart = echarts.init(document.getElementById('main'));
      // console.log(myChart)
      let option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
        myChart.setOption(option);
        // console.log(option);
        
    }
  },
  mounted() {
    
  }
}
/* eslint-enable */
</script>

<style lang="scss" scoped>
.listcontent {
  width: 100%;
}
</style>