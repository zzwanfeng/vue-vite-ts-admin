<template>
  <GlobalTitleLogo :SysTitle="SysStore.SysBaseConfig.title"></GlobalTitleLogo>

  <GlobalMenu mode="vertical" defaultKey="1"></GlobalMenu>
</template>

<script setup lang="ts">
import GlobalMenu from '../components/GlobalMenu.vue'
import GlobalTitleLogo from '../components/GlobalTitleLogo.vue'

import { UseSysStore } from '@/store/modules/SysStore'

const SysStore = UseSysStore()
</script>
