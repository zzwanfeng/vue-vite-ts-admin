import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false })

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import BasicRoutes from './modules/BasicRoutes'

// router.beforeEach
import { getLocalKey } from '@/utils/common/HandleLocalStorageUtil'
import { setDocumentTitle, domTitle } from '@/utils/Router/domUtil'
import transformVAdminRouteToRouteRecordRaw from '@/utils/Router/TransformVAdminRoute'
import { UseSysStore } from '@/store/modules/SysStore'
import { UseSysRouteMenuStore } from '@/store/modules/SysRouteMenu'
import { UseUserStore } from '@/store/modules/User'
import createSysMenuRecord from '@/utils/Router/CreateSysMenu'
import BusinessRoutes from '@/router/modules/BusinessRoutes'

const router = createRouter({
	// hash模式：createWebHashHistory，history模式：createWebHistory
	history: createWebHashHistory(),
	scrollBehavior: () => ({
		top: 0
	}),
	routes: BasicRoutes
})


// router.beforeEach
const allowList = ['/Login']
router.beforeEach(async (to, from, next) => {
	NProgress.start()
	setDocumentTitle('VAdmin')
	to.meta && typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`)
	const VAdminToken = getLocalKey('VAdminToken')?.trim()
	// 已经获取的所有VueRouter异步路由
	const SysRouteMenuStore = UseSysRouteMenuStore()
	if (VAdminToken) {
		if (to.path === '/Login') {
			next()
			NProgress.done()
		} else {
			if (SysRouteMenuStore.AllAsyncRouterRecord.length > 0) {
				next()
				NProgress.done()
			} else {
				// 获取登录人信息
				const UserStore = UseUserStore()
				await UserStore.setUserInfo()

				// 获取异步路由数据
				const SysStore = UseSysStore()
				const VAdminAsyncRouters = await SysStore.getUserAsyncRouterBasicServe()

				// 获取到的路由数据转换为需要的路由格式(后端接口获取的路由和部分在前端本地的数据 可根据业务处理)
				const NewVAdminAsyncRouters: RouteRecordRaw[] = transformVAdminRouteToRouteRecordRaw(VAdminAsyncRouters).concat(BusinessRoutes)
				// 动态添加路由  vue-router4.x 暂时没有addRoutes
				NewVAdminAsyncRouters.forEach(route => {
					router.addRoute(route)
				})

				// 存储当前获取的异步路由数据
				SysRouteMenuStore.AllAsyncRouterRecord = NewVAdminAsyncRouters
				// 异步路由转换成菜单
				const CreateSuccessSysMenuRecord = createSysMenuRecord([...NewVAdminAsyncRouters])
				// 所有的菜单
				SysRouteMenuStore.AllMenuRecord = [...SysRouteMenuStore.AllMenuRecord, ...CreateSuccessSysMenuRecord]

				// 请求带有 redirect 重定向时，登录自动重定向到该地址
				const redirect = from.query.redirect
				if (redirect) {
					if (to.path === redirect) {
						// set the replace: true so the navigation will not leave a history record
						next({ ...to, replace: true })
					} else {
						// 跳转到目的路由
						next({ path: redirect.toString() })
					}
				} else {
					next({ path: to.path })
				}
				NProgress.done()
			}
		}

	} else {
		if (allowList.includes(to.path)) {
			next()
		} else {
			next({
				path: '/Login',
				query: { redirect: to.fullPath }
			})
			SysRouteMenuStore.AllAsyncRouterRecord = []
			SysRouteMenuStore.AllMenuRecord = []
			SysRouteMenuStore.IsAddAsyncRouter = false
		}
		NProgress.done()

	}
})

export default router
