<template>
  <section class="h-full flex items-center justify-between">
    <div class="h-full flex items-center justify-between">
      <GlobalLeftMenuCollapse class="mr-[8px]"></GlobalLeftMenuCollapse>
      <GlobalBreadCrumb></GlobalBreadCrumb>
    </div>
    <div class="h-full">
      <GlobalFullScreenIcon></GlobalFullScreenIcon>
      <GlobalSettingIcon></GlobalSettingIcon>
      <GlobalSysUserInfo></GlobalSysUserInfo>
    </div>
  </section>
</template>

<script setup lang="ts">
import GlobalLeftMenuCollapse from '../components/GlobalLeftMenuCollapse.vue'
import GlobalFullScreenIcon from '../components/GlobalFullScreenIcon.vue'
import GlobalSettingIcon from '../components/GlobalSettingIcon.vue'
import GlobalSysUserInfo from '../components/GlobalSysUserInfo.vue'
import GlobalBreadCrumb from '../components/GlobalBreadCrumb.vue'
</script>
