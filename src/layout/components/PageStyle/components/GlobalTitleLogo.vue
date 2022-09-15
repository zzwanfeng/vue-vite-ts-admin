<template>
  <div class="global-title-logo">
    <div v-if="SysStore.SysConfig.layoutMode === 'LEFT_MENU_MODE'" class="v-flex jsc aic w100 h-60">
      <img :src="getImageUrl('SysLogo.png')" :alt="SysTitle" />

      <span v-show="!SysStore.SysConfig.leftMenuIsCollapsed">{{ SysTitle }}</span>
    </div>

    <div v-else class="flex items-center h-full">
      <img :src="getImageUrl('SysLogo.png')" :alt="SysTitle" />
      <span>{{ SysTitle }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UseSysStore } from '@/store/modules/SysStore'
import { getImageUrl } from '@/utils/common/AsyncImportImg'

const SysStore = UseSysStore()

interface GlobalTitleLogoProps {
  SysTitle: string
}

defineProps<GlobalTitleLogoProps>()
</script>

<style lang="less" scoped>
.global-title-logo {
  .h-60 {
    height: 60px;
  }

  img {
    width: 2rem;
  }

  span {
    margin-left: 0.5rem;
    color: var(--el-color-primary);
    font-size: 1.1rem;
    line-height: 1;
    font-weight: 700;
  }
}
</style>
