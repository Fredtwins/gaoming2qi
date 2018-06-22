<template>
  <div class="listcontent">
    <Breadcrumb class="listtop">
      <Breadcrumb-item class="black">图形</Breadcrumb-item>
      <Breadcrumb-item class="blue">图形管理</Breadcrumb-item>
    </Breadcrumb>
    <Collapse class="aa">
      <Panel name="1">
        条件筛选
        <template slot="content">
          <Form ref="formInline" :model="formInline" inline :label-width="80">
            <Form-item label="用户账号">
              <Input :maxlength="16" placeholder="请输入账号"></Input>
            </Form-item>
            <Button type="primary" @click="submitSearch">搜索</Button>
          </Form>
        </template>
        <template>
          <Modal v-model="looklists" class="modalx">
            <div slot="header" ref="inter">{{updateTitle}}</div>
            <Form :model="formItem">
              <Button class="addbtn" type="primary" @click="addbtn">雨量</Button>
              <Button class="addbtn" type="success" @click="fengbtn">风力</Button>
              <Button class="addbtn" type="error" @click="listbtns">柱形图</Button>
              <div id="main" class="main" style="width: 72rem;height: 530px"></div>
            </Form>
          </Modal>
        </template>
      </Panel>
    </Collapse>
    <div class="center table">
      <Table border :columns="columns1" :data="data1"></Table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from 'echarts'
import { listecharts } from 'common/js/table'
export default {
  data() {
    return {
      // option: {},
      formInline: {},
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
    edit() {

    },
    del() { },
    // 点击查看，出现模态框
    loooklist() {
      this.looklists = true
      this.collectionChart()
    },
    collectionChart() {
      // let option = {}
      let myChart = echarts.init(document.getElementById('main'));
      // console.log(myChart)
      let option = {
        title: {
          text: 'ECharts 图'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
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
    },
    addbtnslist() {
      let myChart = echarts.init(document.getElementById('main'));
      let option = {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      myChart.setOption(option);
    },
    submitSearch() {

    },
    addbtn() {
      this.addbtnslist()
    },
    fenglist() {
      let myChart = echarts.init(document.getElementById('main'));
      let option = {
        title: {
          text: '基础雷达图'
        },
        tooltip: {},
        legend: {
          data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '销售（sales）', max: 6500 },
            { name: '管理（Administration）', max: 16000 },
            { name: '信息技术（Information Techology）', max: 30000 },
            { name: '客服（Customer Support）', max: 38000 },
            { name: '研发（Development）', max: 52000 },
            { name: '市场（Marketing）', max: 25000 }
          ]
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          // type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配（Allocated Budget）'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销（Actual Spending）'
            }
          ]
        }]
      };
      myChart.setOption(option);
    },
    fengbtn() {
      this.fenglist()
    },
    listbtns() {
      this.collectionChart()
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
  .listtop {
    .black {}
    .blue {}
  }
}

.addbtn {
  margin-left: 20px;
}
</style>