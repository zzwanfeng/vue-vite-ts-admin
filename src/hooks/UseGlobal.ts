import { getCurrentInstance } from 'vue'

export default function useGetGlobalProperties() {
	const InternalInstance = getCurrentInstance()
	const GlobalData = InternalInstance?.appContext.config.globalProperties

	return { ...GlobalData }
}
