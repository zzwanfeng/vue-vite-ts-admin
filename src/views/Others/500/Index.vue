<template>
  <el-result title="500" sub-title="服务发生错误" class="page500">
    <template #icon>
      <SvgFileCom name="server-error" class="svg"></SvgFileCom>
    </template>
    <template #extra>
      <el-button type="primary" @click="router.push({ name: 'Home' })">回到首页</el-button>
    </template>
  </el-result>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import SvgFileCom from '@/components/SvgFileCom/Index.vue'

const router = useRouter()
</script>

<style lang="less" scoped>
.page500 {
  .svg {
    color: var(--el-color-primary);
    min-width: 400px;
    height: 400px !important;
  }
}
</style>
