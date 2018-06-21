<template>
    <div class="leftnav">
            <Menu active-name="multiple" width="auto" @on-select="clickFn">
                <Submenu name="1" v-for="item in dataArr" :key="item.index">
                    <template slot="title">
                        <span>{{item.text}}</span>
                    </template>
                    <Menu-item v-for="i in dowArr" :key="i.index" @click="clickFn(i.link)" style="cursor:pointer" :name="i.link">{{i.name}}</Menu-item>
                    </MenuGroup>
                </Submenu>
            </Menu>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data() {
        return {
            theme: 'light',
            acName: "",
            opName: [],
            dataArr: [
                {
                    text: '管理',
                    name: '1',
                }
            ],
            dowArr: [
                {
                    // text: '图形管理',
                    name: '图形管理',
                    link: 'listcontent'
                    // link: 'listcontent',
                },
                {
                    // text: '数据图层',
                    name: '数据图层',
                    link: 'shuju',
                },
                {
                    // text: '折线图',
                    name: '折线图',
                    link: '',
                },
                {
                    // text: '风力风向',
                    name: '风力风向',
                    link: '',
                }
            ]
        }
    },
    methods: {
        clickFn(name) {
            this.$router.push('/home/echartsList/' + name);
        }
    }
}
/* eslint-disable */
</script>

<style lang="scss" scoped>
@import url('../../common/scss/reset.scss');
// .leftnav {
//     width: 100%;
//     height: 100%; // background-color: #41b0ff;
//     position: relative;
// }
</style>
