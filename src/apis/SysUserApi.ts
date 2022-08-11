

import request from '@/utils/request'

/**
 * 获取用户登录
 * @param username
 * @param password
 * @returns
 */
export const userLoginApi = async (data: object) => {
	return request({
		url: '/user/login',
		method: 'post',
		json: true,
		data: data
	}).then((res) => {
		if (res.code === 200) {
			return res
		}
		return Promise.reject(res)
	})
}

/**
 * @description POST 查询用户信息
 */
export const getUserInfo = () => {
	return request({
		url: '/user/info',
		method: 'get',
		json: true,
	}).then((res) => {
		if (res.code === 200) {
			return res
		}
		return Promise.reject(res)
	})
}

/**
 * 获取用户异步路由表
 * @returns
 */
export const getAsyncRouters = async () => {
	return request({
		url: '/user/asyncRouters',
		method: 'get',
		json: true,
	}).then((res) => {
		if (res.code === 200) {
			return res
		}
		return Promise.reject(res)
	})
}
