import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'

import App from './App.vue'

import router from '@/router'
import { store } from '@/store'
import '@/styles/Index.less'

import { initDirective } from './directives'
import 'virtual:windi.css'
// import GlobalConfig from '@/config/GlobalConfig/Index'

// /**
//  * 初始化应用
//  */
// const initApplication = async () => {
// 	// 创建实例
// 	const app = createApp(App)
// 	// app.config.globalProperties.$GlobalConfig = GlobalConfig;

// 	// ElementPlus
// 	app.use(ElementPlus, {
// 		locale: zhCn
// 	})

// 	// 初始化路由
// 	initRouter(app)

// 	// 初始化状态管理
// 	initStore(app)

// 	// 初始化相关样式
// 	initStyle()

// 	// 全局指令的安装
// 	initDirective(app)

// 	// 实例挂载
// 	app.mount('#app')

// }

// initApplication()

// 链式注册插件
const app = createApp(App).use(store).use(router).use(ElementPlus, { locale })
// 挂载全局方法 isPermission
// app.config.globalProperties.$isPermission = isPermission
// 现在所有的导航都是异步的，等路由ready以后再进行挂载组件；
router.isReady().then(() => app.mount('#app'))

// 在导航期间每次发生未捕获的错误时都会调用该处理程序
// eslint-disable-next-line no-console
router.onError((err) => {
	console.error(err)
})

