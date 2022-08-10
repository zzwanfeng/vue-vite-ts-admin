import { App } from 'vue'

import { UseUserStore } from '@/store/modules/User'

export default (app: App) => {
	app.directive('btn-permission', {
		created(el: HTMLElement, binding) {
			const UserStore = UseUserStore()

			const NeedPermission: string[] = binding.value
			const SystemPermission = UserStore.UserInfo.permissions || []
			const HavePermission = SystemPermission.some(permission => NeedPermission.includes(permission))
			if (!HavePermission) {
				el.style.display = 'none'
			}
		}
	})
}
