<template>
  <el-row :gutter="20" class="top-mix-menu-header">
    <el-col :span="12" class="text-left">
      <div class="h100 v-flex aic">
        <GlobalTitleLogo :SysTitle="SysStore.SysBaseConfig.title" class="top-mix-menu-header-logo"></GlobalTitleLogo>
        <GlobalBreadCrumb></GlobalBreadCrumb>
      </div>
    </el-col>

    <el-col :span="12" class="text-right">
      <GlobalLeftMenuCollapse></GlobalLeftMenuCollapse>
      <GlobalFullScreenIcon></GlobalFullScreenIcon>
      <GlobalSettingIcon></GlobalSettingIcon>
      <GlobalSysUserInfo></GlobalSysUserInfo>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { UseSysStore } from '@/store/modules/SysStore'

import GlobalTitleLogo from '../components/GlobalTitleLogo.vue'
import GlobalFullScreenIcon from '../components/GlobalFullScreenIcon.vue'
import GlobalSettingIcon from '../components/GlobalSettingIcon.vue'
import GlobalSysUserInfo from '../components/GlobalSysUserInfo.vue'
import GlobalLeftMenuCollapse from '../components/GlobalLeftMenuCollapse.vue'
import GlobalBreadCrumb from '../components/GlobalBreadCrumb.vue'

const SysStore = UseSysStore()
</script>

<style lang="less" scoped>
.top-mix-menu-header {
  .top-mix-menu-header-logo {
    margin-right: 5rem;
    margin-left: 1rem;
  }
}
</style>
