/**
 * 转换 VAdminRouteRecordRaw: RouteRecordRaw 相关工具函数
 */

import type { SysRouterMenu } from 'types/SysRouterMenu'
import { RouteRecordRaw, RouteRecordRedirectOption } from 'vue-router'
import lodash from 'lodash'

import PageView404 from '@/views/Others/404/Index.vue'

import { GlobFileModule } from './GlobModules'

/**
 * 工具函数：转换 VAdminRoute[] -> RouteRecordRaw[]
 * @param VAdminRoutes： VAdminRoutes[]
 * @returns
 */
const transformVAdminRouteToRouteRecordRaw = (VAdminRoutes: SysRouterMenu.VAdminRoute[]): RouteRecordRaw[] => {
  const NeedHandleVAdminRoutes = lodash.cloneDeep(VAdminRoutes)

  const SysRouterMenuRecordRawArr: RouteRecordRaw[] = []

  NeedHandleVAdminRoutes.forEach(VAdminRoute => {
    // eslint-disable-next-line no-use-before-define
    SysRouterMenuRecordRawArr.push(transform(VAdminRoute))
  })
  return SysRouterMenuRecordRawArr
}

/**
 * 转换函数：转换 VAdminRoute -> RouteRecordRaw
 * @param VAdminRoute：VAdminRoutes
 * @returns
 */
const transform = (VAdminRoute: SysRouterMenu.VAdminRoute) => {
  // @ts-ignore
  const CurrentRouteRecordRaw: RouteRecordRaw = {
    path: VAdminRoute.path,
    name: VAdminRoute.name,
    meta: VAdminRoute.meta,
    component: (VAdminRoute.component && GlobFileModule(VAdminRoute.component)) || PageView404, // 如果定义的路由路径在项目页面文件目录中不存在则返回404页面
    redirect: VAdminRoute.redirect && (VAdminRoute.redirect as RouteRecordRedirectOption)
  }
  if (VAdminRoute.children) {
    CurrentRouteRecordRaw.children = transformVAdminRouteToRouteRecordRaw(VAdminRoute.children)
  }

  return CurrentRouteRecordRaw
}

export default transformVAdminRouteToRouteRecordRaw
