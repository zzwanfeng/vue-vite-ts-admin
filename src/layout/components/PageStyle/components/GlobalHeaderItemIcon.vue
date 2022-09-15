<template>
  <!-- 页头 控制侧边栏icon -->
  <div class="global-header-item-icon h100 cursor-pointer text-center" id="fullScreen">
    <IconifyCom :name="label" :width="16"></IconifyCom>
  </div>
</template>

<script setup lang="ts">
/**
 * 头部图标基础组件
 */

import IconifyCom from '@/components/IconifyCom/Index.vue'

interface GlobalHeaderItemIconProps {
  label: string
}

defineProps<GlobalHeaderItemIconProps>()
</script>

<style lang="less" scoped>
.global-header-item-icon {
  width: 2.5rem;
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
