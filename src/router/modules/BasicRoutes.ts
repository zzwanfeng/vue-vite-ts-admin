import type { SysRouterMenu } from 'types/SysRouterMenu'

const BasicRoutes: SysRouterMenu.VAdminRoute[] = [
	{
		path: '/Login',
		name: 'Login',
		component: '@/views/Login/Login/Index.vue',
		meta: {
			label: '登录',
			isShow: false
		}
	},
	{
		path: '/',
		name: 'Index',
		redirect: '/Home',
		meta: {
			label: '首页',
			isShow: false
		}
	},
	{
		path: '/Home',
		name: 'Home',
		component: 'Layout',
		meta: {
			label: '仪表盘'
		},
		children: [
			{
				path: '',
				name: 'Home',
				component: '@/views/Home/Index.vue',
				meta: {
					label: '仪表盘',
					icon: 'flat-color-icons:about'
				}
			}
		]
	},
	{
		path: '/404',
		name: 'Basic_404',
		component: '@/views/Others/404/Index.vue',
		meta: {
			label: '404页面不存在',
			isShow: false
		}
	},
	{
		path: '/500',
		name: 'Basic_500',
		component: '@/views/Others/500/Index.vue',
		meta: {
			label: '500',
			isShow: false
		}
	}
]

export default BasicRoutes

export const Redirect404Router: SysRouterMenu.VAdminRoute = {
	path: '/:catchAll(.*)',
	name: '404',
	redirect: '/404',
	meta: {
		isShow: false
	}
}
