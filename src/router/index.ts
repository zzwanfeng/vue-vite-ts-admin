import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import { store } from '../store'
import BasicRoutes from './modules/BasicRoutes'


const router = createRouter({
	history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
	scrollBehavior: () => ({
		top: 0
	}),
	routes: BasicRoutes
})
router.beforeEach((to, from, next) => {
	// const tabsOption = store.getters['tabModule/getTabsOption']
	// // 判断当前路由中是否已经入栈
	// const flag = tabsOption.findIndex((tab: { route: string }) => tab.route === to.path) > -1
	// if (!flag && !to.meta.hiddenTab) {
	//   store.commit('tabModule/ADD_TAB', { route: to.path, title: to.meta.title, name: to.name })
	// }
	// store.commit('tabModule/SET_TAB', to.path)
	// if (sessionStorage.getItem('auth')) {
	//   next()
	// } else if (to.path === '/login') {
	//   console.log('/login')
	//   next()
	// } else {
	//   console.log('unauthed into login')
	//   next({
	//     path: '/login',
	//     query: { redirect: to.fullPath }
	//   })
	// }
	next()
})

export default router
