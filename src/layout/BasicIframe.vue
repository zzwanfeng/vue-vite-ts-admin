<template>
  <iframe :src="route.meta.url" :name="String(route.name)" class="w100 iframe p0"></iframe>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="less" scoped>
.iframe {
  max-width: 100%;
}
</style>
