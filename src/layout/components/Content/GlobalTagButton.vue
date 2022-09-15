<template>
  <div class="global-tag-button h100 v-flex aic" :class="route.name === routeName ? 'tag-button-active' : ''">
    <span class="cursor-pointer">{{ label }}</span>
    <IconifyCom
      v-if="route.name !== routeName"
      name="clarity:window-close-line"
      width="18"
      height="18"
      @click.stop="deleteHistoryMenu(routeName)"
    ></IconifyCom>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { UseSysRouteMenuStore } from '@/store/modules/SysRouteMenu'

import IconifyCom from '@/components/IconifyCom/Index.vue'

defineProps<{
  icon: string
  label: string
  routeName: string
}>()

const SysRouteMenuStore = UseSysRouteMenuStore()
const route = useRoute()

const deleteHistoryMenu = (key: string) => {
  SysRouteMenuStore.deleteHistoryMenu(key)
}
</script>

<style scoped lang="less">
.global-tag-button {
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.375rem;
  border-color: var(--el-border-color);

  > span:nth-child(1) {
    margin-right: 0.5rem;
  }
}

div.tag-button-box:hover {
  color: var(--el-color-primary);
  border-color: var(--el-color-primary-light-3);
}

div.tag-button-box:last-of-type {
  margin-right: 0;
}

div.tag-button-active {
  color: var(--el-color-primary);
  background: var(--el-color-primary-light-7);
  border-color: var(--el-color-primary-light-7);
}
</style>
