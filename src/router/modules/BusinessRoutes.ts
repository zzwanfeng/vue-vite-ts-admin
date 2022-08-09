import BasicIframe from '@/layout/BasicIframe.vue'
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'


const BusinessRoutes: Array<RouteRecordRaw> = [
	{
		path: '/Others',
		name: 'Others',
		component: Layout,
		meta: {
			label: '其它',
			icon: 'flat-color-icons:about'
		},
		children: [
			{
				path: 'About',
				name: 'AboutIndex',
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
	{
		path: '/Docs',
		name: 'Docs',
		component: Layout,
		meta: {
			label: '文档',
			icon: 'vscode-icons:folder-type-docs-opened'
		},
		children: [
			{
				path: 'vue',
				name: 'Docs-Vue',
				component: BasicIframe,
				meta: {
					label: 'Vue3新中文文档',
					icon: 'vscode-icons:file-type-vue',
					link: 'INTERNAL_LINK',
					url: 'https://staging-cn.vuejs.org'
				}
			},
			{
				path: 'elementPlus',
				name: 'Docs-ElementPlus',
				component: BasicIframe,
				meta: {
					label: 'ElementPlus',
					icon: 'ep:element-plus',
					link: 'INTERNAL_LINK',
					url: 'https://element-plus.gitee.io/zh-CN'
				}
			},
			{
				path: 'vite',
				name: 'Docs-Vite',
				component: BasicIframe,
				meta: {
					label: 'Vite2（外链）',
					icon: 'vscode-icons:file-type-vite',
					link: 'EXTERNAL_LINK',
					url: 'https://cn.vitejs.dev'
				}
			},
			{
				path: 'VAdminPlus',
				name: 'Docs-VAdmin',
				component: BasicIframe,
				meta: {
					label: 'VAdmin Plus（内链）',
					icon: 'iconoir:google-docs',
					link: 'INTERNAL_LINK',
					url: 'https://docs.VAdmin.top'
				}
			}
		]
	},
	{
		path: '/Common',
		name: 'Common',
		component: Layout,
		meta: {
			label: '常用组件',
			icon: 'material-symbols:energy-program-time-used'
		},
		children: [
			{
				path: 'CommonComponent',
				name: 'CommonComponent',
				component: () => import(/* webpackChunkName: "Common" */ '@/views/Common/CommonComponent/Index.vue'),
				meta: {
					label: 'ElementPlus常用组件',
					icon: 'ep:element-plus'
				}
			},

			{
				path: 'Table',
				name: 'Table',
				component: () => import(/* webpackChunkName: "Common" */ '@/views/Common/Table/Index.vue'),
				meta: {
					label: '常用模块-表格',
					icon: 'bx:table'
				}
			}
		]
	},
	{
		path: '/Plugins',
		name: 'Plugin',
		component: Layout,
		meta: {
			label: '相关插件',
			icon: 'material-symbols:energy-program-time-used'
		},
		children: [
			{
				path: 'IconifyPlugin',
				name: 'IconifyPlugin',
				component: () => import(/* webpackChunkName: "Plugins" */ '@/views/Plugins/IconifyPlugin/Index.vue'),
				meta: {
					label: 'Iconify图标'
				}
			},
			{
				path: 'EchartPlugin',
				name: 'EchartPlugin',
				component: () => import(/* webpackChunkName: "Plugins" */ '@/views/Plugins/EchartPlugin/Index.vue'),
				meta: {
					label: 'Echarts图表',
					icon: 'et:piechart',
					cache: false
				}
			},
			{
				path: 'RichTextPlugin',
				name: 'RichTextPlugin',
				component: () => import(/* webpackChunkName: "Plugins" */ '@/views/Plugins/RichTextPlugin/Index.vue'),
				meta: {
					label: '富文本编辑器',
					icon: 'bi:journal-richtext'
				}
			},
			{
				path: 'MarkdownTextPlugin',
				name: 'MarkdownTextPlugin',
				component: () => import(/* webpackChunkName: "Plugins" */ '@/views/Plugins/MarkdownTextPlugin/Index.vue'),
				meta: {
					label: 'Markdown编辑器',
					icon: 'bi:markdown'
				}
			},
			{
				path: 'GaodeMapPlugin',
				name: 'GaodeMapPlugin',
				component: () => import(/* webpackChunkName: "Plugins" */ '@/views/Plugins/GaodeMapPlugin/Index.vue'),
				meta: {
					label: '高德地图',
					icon: 'carbon:map-center'
				}
			},
			{
				path: 'TencentMapPlugin',
				name: 'TencentMapPlugin',
				component: () => import(/* webpackChunkName: "Plugins" */ '@/views/Plugins/TencentMapPlugin/Index.vue'),
				meta: {
					label: '腾讯地图',
					icon: 'carbon:map-center'
				}
			},
			{
				path: 'ExcelHandle',
				name: 'ExcelHandle',
				component: () => import(/* webpackChunkName: "Plugins" */ '@/views/Plugins/ExcelHandle/Index.vue'),
				meta: {
					label: 'Table表格',
					icon: 'icon-park:excel'
				}
			},
			{
				path: 'VideoPlugin',
				name: 'VideoPlugin',
				component: () => import(/* webpackChunkName: "Plugins" */ '@/views/Plugins/VideoPlugin/Index.vue'),
				meta: {
					label: '视频插件',
					icon: 'akar-icons:video'
				}
			}
		]
	},
	{
		path: '/Permission',
		name: 'Permission',
		component: Layout,
		meta: {
			label: '权限管理',
			icon: 'arcticons:permissionchecker'
		},
		children: [
			{
				path: 'PermissionUser',
				name: 'PermissionUser',
				component: () => import(/* webpackChunkName: "Permission" */ '@/views/Permission/PermissionUser/Index.vue'),
				meta: {
					label: '普通用户权限页面',
					permissions: ['sys:user:*']
				}
			},
			{
				path: 'PermissionAdmin',
				name: 'PermissionAdmin',
				component: () => import(/* webpackChunkName: "Permission" */ '@/views/Permission/PermissionAdmin/Index.vue'),
				meta: {
					label: '超级管理员权限页面',
					permissions: ['sys:root:*']
				}
			},
			{
				path: 'PermissionCommon',
				name: 'PermissionCommon',
				component: () => import(/* webpackChunkName: "Permission" */ '@/views/Permission/PermissionCommon/Index.vue'),
				meta: {
					label: '均可访问权限页面'
				}
			},
			{
				path: 'PermissionButton',
				name: 'PermissionButton',
				component: () => import(/* webpackChunkName: "Permission" */ '@/views/Permission/PermissionButton/Index.vue'),
				meta: {
					label: '按钮级权限指令控制'
				}
			}
		]
	}
]

export default BusinessRoutes
