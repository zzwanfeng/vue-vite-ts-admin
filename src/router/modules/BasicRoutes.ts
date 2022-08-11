import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const BasicRoutes: Array<RouteRecordRaw> = [
	{
		path: '/Login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "Login" */ '@/views/Login/Login/Index.vue'),
		meta: {
			label: '登录',
			hidden: true
		}
	},
	{
		path: '/',
		name: 'Home',
		component: Layout,
		redirect: '/Home',
		meta: {
			label: '首页'
		},
		children: [
			{
				path: 'Home',
				name: 'Home',
				component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/Index.vue'),
				meta: {
					label: '仪表盘',
					icon: 'mdi:home'
				}
			}
		]
	},
	{
		path: '/404',
		name: 'Basic_404',
		component: () => import(/* webpackChunkName: "Others" */ '@/views/Others/404/Index.vue'),
		meta: {
			label: '404页面不存在',
			hidden: true
		}
	},
	{
		path: '/500',
		name: 'Basic_500',
		component: () => import(/* webpackChunkName: "Others" */ '@/views/Others/500/Index.vue'),
		meta: {
			label: '500',
			hidden: true
		}
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: () => import(/* webpackChunkName: "Others" */ '@/views/Others/404/Index.vue'),
		meta: {
			title: {
				'/zh-CN': '未找到',
				'/en-US': 'NOT FOUND'
			},
			hidden: true,
			hiddenTab: true
		}
	}
]

export default BasicRoutes
