<template>
  <div class="rich-text-plugin">
    <RichTextCom v-model:content="RichTextContent"></RichTextCom>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import RichTextCom from '@/components/RichTextCom/Index.vue'

const RichTextContent = ref('')
</script>

<style scoped lang="less">
.rich-text-plugin {
  width: 90%;
  margin: 1rem auto;
  border: 1px solid #ccc;
  overflow: hidden;
}
</style>
