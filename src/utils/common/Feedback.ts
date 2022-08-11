import { ElLoading } from 'element-plus'

export const vAdminLoading = (text: string = '加载中...', close: boolean = false, background: string = 'rgba(0, 0, 0, 0.7)') => {
	let loadingInstance = ElLoading.service({
		lock: true,
		text: text,
		background: background
	})

	return close ? loadingInstance?.close() : loadingInstance
}
