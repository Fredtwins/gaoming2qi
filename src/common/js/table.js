/* eslint-disable */
import { cloneObj } from 'common/js/util'
import { likeSearchRule } from 'common/js/config'
import { getLocalStorage } from 'common/js/dom'

//图形
export function listecharts(that) {
    return [
        {
            title: '名称',
            align: 'center',
            key: 'name'
        }, {
            title: '年龄',
            align: 'center',
            key: 'age'
        }, {
            title: 'Address',
            align: 'center',
            key: 'address'
        }, {
            title: '操作',
            align: 'center',
            render: (h, param) => {
                return h('div', [
                    h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                let data = cloneObj(param.row);
                                delete data['_index']
                                delete data['_rowKey']
                                that.edit(data)
                            }
                        }
                    }, '编辑'),
                    h('Button', {
                        props: {
                            type: 'success',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                that.loooklist(cloneObj(param.row))
                            }
                        }
                    },'查看'),
                    h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        on: {
                            click: () => {
                                that.del(cloneObj(param.row))
                            }
                        }
                    }, '删除'),
                ])
            }
        }
    ]
}
/* eslint-enable */
