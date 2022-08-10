import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'


const BusinessRoutes: Array<RouteRecordRaw> = [
	{
		path: '/Others',
		name: 'Others',
		component: Layout,
		// redirect: '/About',
		redirect: '/Home',
		meta: {
			label: '其它',
			icon: 'flat-color-icons:about'
		},
		children: [
			{
				path: 'About',
				name: 'About',
				component: () => import(/* webpackChunkName: "Others" */ '@/views/Others/About/Index.vue'),
				meta: {
					label: '关于',
					icon: 'flat-color-icons:about'
				}
			},
			{
				path: '404',
				name: 'PageView404',
				component: () => import(/* webpackChunkName: "Others" */ '@/views/Others/404/Index.vue'),
				meta: {
					label: '404',
					icon: 'tabler:error-404'
				}
			},
			{
				path: '500',
				name: 'PageView500',
				component: () => import(/* webpackChunkName: "Others" */ '@/views/Others/500/Index.vue'),
				meta: {
					label: '500',
					icon: 'raphael:500px'
				}
			}
		]
	},
]

export default BusinessRoutes
