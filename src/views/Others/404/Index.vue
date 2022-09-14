<template>
  <el-result title="404" sub-title="页面不存在" class="page404">
    <template #icon>
      <SvgFileCom name="not-found" class="svg"></SvgFileCom>
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
.page404 {
  .svg {
    color: var(--el-color-primary);
    min-width: 400px;
    height: 400px !important;
  }
}
</style>
