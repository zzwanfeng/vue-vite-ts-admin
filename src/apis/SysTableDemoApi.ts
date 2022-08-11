import request from '@/utils/request'

/**
 * 表格组件Demo 获取用户列表
 * @returns
 */
export const getUserTableApi = async () => {
	return request({
		url: '/user/list',
		method: 'post',
		json: true,
	}).then((res) => {
		if (res.code === 200) {
			return res
		}
		return Promise.reject(res)
	})
}
