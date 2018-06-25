import axios from 'axios'
import { httpUrl, ERR_TIMEOUT, ERR_TOKEN_NOTFOUND, system_id } from 'api/config'
import { removeUserIng, getUserIng } from 'common/js/util'
import { errorNotice, getSessionStorage } from 'common/js/dom'
import iView from 'iview';

iView.LoadingBar.config({
	height: 3,
	color: '#ff7f27'
})

const timeOut = '登录超时了，请重新登录'

//页面接口通用接口 get
export function ajaxGet(url = '', data = {}, option = {}) {
	// data.sanfang_integration_service_loginfo = sanfang_integration_service_loginfo
	url = `${httpUrl}${url}?${system_id}`
	return axios.get(url, {
		params: data,
		...option
	}).then(res => {
		if (res.data.message !== '用户名或密码错误' && res.data.code === ERR_TIMEOUT || res.data.code === ERR_TOKEN_NOTFOUND || res.data.code === '0005') {
			removeUserIng()
			alert(timeOut)
			window.location.href = location.pathname
			return
		}
		return Promise.resolve(res.data)
	}).catch(res => {
		return Promise.resolve(res.data)
	})
}

//页面接口通用接口 get
export function ajaxGet1(url = '', data = {}, option = {}) {
	return axios.get(url, {
		params: data,
		...option
	}).then(res => {
		if (res.data.message !== '用户名或密码错误' && res.data.code === ERR_TIMEOUT || res.data.code === ERR_TOKEN_NOTFOUND || res.data.code === '0005') {
			removeUserIng()
			alert(timeOut)
			window.location.href = location.pathname
			return
		}
		return Promise.resolve(res.data)
	}).catch(res => {
		return Promise.resolve(res.data)
	})
}

var timeOutArr = []
var timer = 1
//页面接口通用接口 Post
export function ajaxPost(url = '', data = {}, option = {}) {
	window.clearTimeout(timer)
	timer = setTimeout(() => {
		alert(timeOut)
		window.location.href = location.pathname
		return
	}, 3300000);
	iView.LoadingBar.start();
	// data.sanfang_integration_service_loginfo = sanfang_integration_service_loginfo
	url = `${httpUrl}${url}?${system_id}`
	return axios.post(url, data, option).then(res => {
		if (res.data.message !== '用户名或密码错误' && res.data.code === ERR_TIMEOUT || res.data.code === ERR_TOKEN_NOTFOUND || res.data.code === '0005') {
			removeUserIng()
			window.location.href = location.pathname
			return
		}
		iView.LoadingBar.finish();
		return Promise.resolve(res.data)
	}).catch(res => {
		iView.LoadingBar.error();
		return Promise.resolve(res.data)
	})
}

//页面接口通用接口 post 
export function ajaxPost1(url = '', data = {}, option = {}) {
	return axios.post(url, data, option).then(res => {
		if (res.data.message !== '用户名或密码错误' && res.data.code === ERR_TIMEOUT || res.data.code === ERR_TOKEN_NOTFOUND || res.data.code === '0005') {
			removeUserIng()
			alert(timeOut)
			window.location.href = location.pathname
			return
		}
		return Promise.resolve(res.data)
	}).catch(res => {
		return Promise.resolve(res.data)
	})
}

//页面接口通用接口 All
export function ajaxAll(arr, option = {}) {
	let ajaxArr = []
	// data.sanfang_integration_service_loginfo = sanfang_integration_service_loginfo
	arr.map(item => {
		if (item.method === 'get') {
			ajaxArr.push(axios.get(`${httpUrl}${item.url}`, {
				params: item.data,
				...option
			}))
		} else {
			ajaxArr.push(axios.post(`${httpUrl}${item.url}`, item.data, option))
		}
	})

	return axios.all(ajaxArr).then((...res) => {
		let timeout = false
		let data = []
		for (let item of res[0]) {
			if (ires.data.message !== '用户名或密码错误' && tem.data.code === ERR_TIMEOUT || res.data.code === ERR_TOKEN_NOTFOUND || res.data.code === '0005') {
				removeUserIng()
				alert(timeOut)
				window.location.href = location.pathname
				timeout = true
			}
			data.push(item)
		}

		return Promise.resolve(data)
	}).catch((...res) => {
		return Promise.resolve(res)
	})
}
