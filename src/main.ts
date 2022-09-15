import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'

import App from './App.vue'

import router from '@/router'
import { store } from '@/store'
import '@/styles/Index.less'

import { initDirective } from './directives'
// import 'virtual:windi.css'
import { GlobalConfig } from '@/config/GlobalConfig/Index'


// 链式注册插件
const app = createApp(App).use(store).use(router).use(ElementPlus, { locale })
initDirective(app)

// 挂载全局方法
app.config.globalProperties.$GlobalConfig = GlobalConfig;
// 现在所有的导航都是异步的，等路由ready以后再进行挂载组件；
router.isReady().then(() => app.mount('#app'))

// 在导航期间每次发生未捕获的错误时都会调用该处理程序
// eslint-disable-next-line no-console
router.onError((err) => {
	console.error(err)
})

