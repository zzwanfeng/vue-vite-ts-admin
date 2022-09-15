<template>
  <suspense>
    <router-view class="app" />
  </suspense>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'

import { UseSysStore } from '@/store/modules/SysStore'

const SysStore = UseSysStore()

// 系统相关内容初始化
watchEffect(() => {
  // 主题色修改动态监听
  SysStore.setThemeColor(SysStore.SysConfig.themeColor)
})
</script>

<style lang="less" scoped>
.app {
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
}
</style>
