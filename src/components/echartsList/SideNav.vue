<template>
    <div class="leftnav">
        <Col span="3">
        <Menu active-name="multiple" width="auto" @on-select="changeActive">
            <Submenu name="1" v-for="(item,index) in dataArr" :key="index">
                <template slot="title">
                    <span>{{item.text}}</span>
                </template>
                <Menu-item v-for="(i,index) in dowArr" :key="index" @click="changeActive(i.link)" style="cursor:pointer" :name="i.name">{{i.text}}</Menu-item>
                </MenuGroup>
            </Submenu>
        </Menu>
        </aside>
        </Col>
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
                    text: '图形管理',
                    name: '1-1',
                    link: 'listcontent',
                },
                {
                    text: '数据图层',
                    name: '1-2',
                    link: '',
                },
                {
                    text: '折线图',
                    name: '1-3',
                    link: '',
                },
                {
                    text: '风力风向',
                    name: '1-4',
                    link: '',
                }
            ]
        }
    },
    methods: {
        changeActive(name) {
            console.log(name);
            if (name) {
                this.$router.push('/home/echartsList/' + name);
            }
        }
    }
}
/* eslint-disable */
</script>

<style lang="scss" scoped>
.leftnav {
	height: 100%;
	background-color: #41b0ff;
}
</style>
