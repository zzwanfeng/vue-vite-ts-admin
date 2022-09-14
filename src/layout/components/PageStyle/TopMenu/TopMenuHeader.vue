<template>
  <el-row :gutter="20">
    <el-col :span="3" class="text-left">
      <GlobalTitleLogo :SysTitle="SysStore.SysBaseConfig.title" class="pl-1"></GlobalTitleLogo>
    </el-col>

    <el-col :span="16">
      <GlobalMenu mode="horizontal" defaultKey="1" class="v-flex aic jsc"></GlobalMenu>
    </el-col>

    <el-col :span="5" class="text-right">
      <GlobalFullScreenIcon></GlobalFullScreenIcon>
      <GlobalSettingIcon></GlobalSettingIcon>
      <GlobalSysUserInfo></GlobalSysUserInfo>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { UseSysStore } from '@/store/modules/SysStore'

import GlobalTitleLogo from '../components/GlobalTitleLogo.vue'
import GlobalMenu from '../components/GlobalMenu.vue'
import GlobalFullScreenIcon from '../components/GlobalFullScreenIcon.vue'
import GlobalSettingIcon from '../components/GlobalSettingIcon.vue'
import GlobalSysUserInfo from '../components/GlobalSysUserInfo.vue'

const SysStore = UseSysStore()
</script>

<style lang="less" scoped>
.pl-1 {
  padding-left: 1rem;
}
</style>
