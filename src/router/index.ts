import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'

import { App } from 'vue'

// 路由守卫处理函数
import routeMenuHandleProcess from './RouterBeforeEachHandle'

// 转换 VAdminRoutes 转换为 RouteRecordRaw[] 工具函数
import transformVAdminToVRouterRecordRaw from './utils/TransformVAdminRoute'

// 常量路由
import BasicRoutes from './modules/BasicRoutes'

NProgress.configure({ easing: 'ease', speed: 500 })

/**
 * 路由实例
 */
const routerInstance = createRouter({
	history: createWebHashHistory(),
	routes: transformVAdminToVRouterRecordRaw(BasicRoutes),
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	},
})

/**
 * 全局路由守卫
 */
//  前置守卫
routerInstance.beforeEach(async (to, from, next) => {
	// 进度条开始
	NProgress.start()
	// 全局路由守卫处理
	await routeMenuHandleProcess(to, from, next, routerInstance)
})

// 后置钩子
routerInstance.afterEach(async () => {
	// 进度条结束
	NProgress.done()
})

/**
 * 初始化路由
 * @param app
 */
const initRouter = (app: App<Element>) => {
	app.use(routerInstance)
}

export { routerInstance, initRouter }
