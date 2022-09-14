<template>
  <div class="iconify-plugin">
    <el-card>
      <template #header>
        <div class="v-flex aic">
          <span class="title">Iconify</span>
        </div>
      </template>

      <div class="icon">
        <IconifyCom v-for="item in IconList" :key="item" :width="40" :height="40" :name="item"></IconifyCom>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import IconifyCom from '@/components/IconifyCom/Index.vue'

const IconList: string[] = [
  'uil:0-plus',
  'uil:10-plus',
  'uil:12-plus',
  'uil:13-plus',
  'uil:16-plus',
  'uil:17-plus',
  'uil:18-plus',
  'uil:21-plus',
  'uil:3-plus',
  'uil:500px',
  'uil:6-plus',
  'uil:abacus',
  'uil:accessible-icon-alt',
  'uil:adjust',
  'uil:adjust-alt',
  'uil:adjust-circle',
  'uil:adjust-half',
  'uil:adobe',
  'uil:amazon',
  'uil:ambulance',
  'uil:analysis',
  'uil:analytics',
  'uil:android',
  'uil:android-alt',
  'uil:angle-double-down',
  'uil:angle-double-left',
  'uil:angle-double-right',
  'uil:angle-double-up',
  'uil:angle-down',
  'uil:angle-left',
  'uil:angle-left-b'
]
</script>

<style lang="less" scoped>
.iconify-plugin {
  .title {
    font-size: 2rem;
    line-height: 1;
  }

  .icon {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(10, minmax(0, 1fr));
    grid-column-gap: 9rem;
    column-gap: 9rem;
    grid-row-gap: 1rem;
    row-gap: 1rem;
  }
}
</style>
