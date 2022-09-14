<template>
  <section class="h100 v-flex aic jsb">
    <div class="h100 v-flex aic jsb">
      <GlobalLeftMenuCollapse class="mr-8" id="Hamburger"></GlobalLeftMenuCollapse>

      <GlobalBreadCrumb></GlobalBreadCrumb>
    </div>
    <div class="h100">
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

<style lang="less" scoped>
.mr-8 {
  margin-right: 8px;
}
</style>
