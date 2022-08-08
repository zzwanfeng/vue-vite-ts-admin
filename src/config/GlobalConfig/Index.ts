export const SysBaseConfig: SysBasicConfig.SysBaseConfig = {
	title: 'VAdmin Plus',
	logo: '@/assets/img/SysLogo.png', // 注意：不可使用别名 @
	layoutMode: 'LEFT_MENU_MODE',
	handleSysPermission: 'STATIC_PERMISSION',
	whiteRouteByName: ['Login', 'Sys_404'] // 白名单（不需要Token可以访问的路由名称）
}

export const GlobalConfig = {
	projectName: 'VAdmin Plus',
}

