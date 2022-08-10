import { defineStore } from 'pinia'
import { userInfoApi } from '@/apis/SysUserApi'

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
			const UserInfo = await userInfoApi()
			if (UserInfo) {
				this.UserInfo = UserInfo
			}
		},
	},
})
