import { defineStore } from 'pinia'
import { getUserInfo } from '@/apis/SysUserApi'

export interface IUserInfo {
	id?: number
	username?: string
	nickname?: string
	birthday?: string
	roles?: Array<string>
	permissions?: Array<string>
}

interface IUserState {
	UserInfo: IUserInfo
}

export const UseUserStore = defineStore('UserStore', {
	state(): IUserState {
		return {
			UserInfo: {}
		}
	},
	getters: {

	},
	actions: {
		/**
			 * 获取用户信息
			 */
		async setUserInfo() {
			const { data: UserInfo } = await getUserInfo()

			if (UserInfo) {
				this.UserInfo = UserInfo
			}
		},
	},
})
