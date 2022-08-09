import type { UserConfigExport, ConfigEnv } from 'vite';

import legacy from '@vitejs/plugin-legacy'
import viteCompression from 'vite-plugin-compression'

import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';

import WindiCSS from 'vite-plugin-windicss';

import { viteMockServe } from 'vite-plugin-mock';

import { resolve } from 'path';


// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
function pathResolve(dir: string = 'src') {
	return resolve(__dirname, dir);
}

/**
 * 在Vue3+Vite中使用SVG
 * https://juejin.cn/post/6932037172178616334#heading-3
 * https://github.com/JetBrains/svg-sprite-loader/issues/434
 */
import SvgBuilder from './src/plugins/SvgBuilder';

const HOST = "0.0.0.0"

export default ({ mode }: ConfigEnv): UserConfigExport => {
	const judgeLocalIsEnabledMock = () => {
		if (mode === 'dev') return true;
		return false;
	};

	const judgeProdIsEnabledMock = () => {
		if (mode === 'prod_mock') return true;
		return false;
	};

	return {
		// 项目根目录
		root: process.cwd(),
		base: './',
		mode: 'development',
		define: {
			'process.env': process.env,
		},
		// 配置别名
		resolve: {
			alias: {
				'@': pathResolve('src'),
				'~': pathResolve("./node_modules"),
			},
			extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
		},
		server: {
			host: HOST,
			port: 9527,
			// port: process.env.PORT,
			strictPort: false,
			open: false,
			https: false,
			cors: true,
			force: true,
			proxy: {
				'/api': {
					//#gitignoreline_start
					target: 'xxx',
					//#gitignoreline_end
					changeOrigin: true,
					ws: true,
				},
				'/workflow': {
					target: 'xxx',
					changeOrigin: true,
					ws: true,
				},
			},
		},
		plugins: [
			legacy({
				targets: ['ie >= 11'],
				additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
			}),
			viteCompression({
				ext: '.gz',
				algorithm: 'gzip',
				deleteOriginFile: true
			}),
			vue(),
			viteMockServe({
				mockPath: 'mock',
				localEnabled: judgeLocalIsEnabledMock(),
				prodEnabled: judgeProdIsEnabledMock(),
				injectCode: `
          import { setupProdMockServer } from './MockProdServer';
          setupProdMockServer();
        `,
				watchFiles: true,
				logger: true,
			}),
			WindiCSS(),
			AutoImport({
				// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
				// imports: ['vue'],
				// 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
				resolvers: [
					ElementPlusResolver(),
					// 自动导入图标组件
					IconsResolver({
						prefix: 'Icon',
					}),
				],

				dts: resolve(pathResolve('src'), 'auto-imports.d.ts'),
			}),
			// unplugin-vue-components插件 自动导入自己的插件 需要的可以打开
			// Components({
			// 	// ui库解析器，也可以自定义
			// 	resolvers: [
			// 		// 自动注册图标组件
			// 		// 在这里配置 Iconify 图标的前缀
			// 		IconsResolver({
			// 			enabledCollections: [],
			// 		}),
			// 		// 自动导入 Element Plus 组件
			// 		ElementPlusResolver(),
			// 	],
			// 	// 要搜索组件的目录的相对路径
			// 	dts: resolve(pathResolve('src'), 'components.d.ts'),
			// 	// 组件的有效文件扩展名。
			// 	extensions: ['vue'],
			// 	// 允许子目录作为组件的命名空间前缀。
			// 	directoryAsNamespace: true,
			// }),
			Icons({
				autoInstall: true,
			}),
			SvgBuilder('./src/assets/svg/'),
		],
		css: {
			postcss: {
				plugins: [
					{
						postcssPlugin: 'internal:charset-removal',
						AtRule: {
							charset: (atRule) => {
								if (atRule.name === 'charset') {
									atRule.remove()
								}
							}
						}
					}
				],
			},
		},
		build: {
			outDir: 'dist',
			assetsDir: 'static',
			minify: 'terser',
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (id.includes('node_modules')) {
							return id.toString().split('node_modules/')[1].split('/')[0].toString()
						}
					}
				}
			},
			terserOptions: {
				compress: {
					drop_console: process.env.VITE_APP_NAME !== 'development',
					drop_debugger: process.env.VITE_APP_NAME !== 'development'
				},
			},
			chunkSizeWarningLimit: 1000,
			reportCompressedSize: false
		},
	};
};
