<template>
  <div>
    <el-card>
      <div id="guide-info" class="guide-container">
        <div class="info">
          <el-divider content-position="left">引导页</el-divider>
          <span style="text-align: left">通常用于首次进入应用时,介绍应用供能等。 </span>
          <el-link href="https://github.com/kamranahmedse/driver.js" type="primary" target="_blank">driver.js</el-link>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './step'

export default defineComponent({
  name: 'Guide',
  setup() {
    const driver = ref()
    const handleShowGuide = () => {
      driver.value.defineSteps(steps)
      driver.value.start()
    }
    onMounted(() => {
      driver.value = new Driver({
        // className: 'scoped-class', // className to wrap driver.js popover
        animate: true, // Animate while changing highlighted element
        doneBtnText: '完成', // Text on the final button
        closeBtnText: '关闭', // Text on the close button for this step
        nextBtnText: '下一步', // Next button text for this step
        prevBtnText: '上一步', // Previous button text for this step
        keyboardControl: true // Allow controlling through keyboard (escape to close, arrow keys to move)
      })
      handleShowGuide()
    })
    return {
      handleShowGuide
    }
  }
})
</script>
<style lang="less" scoped>
.guide-container {
  margin-top: 20px;

  .info {
    text-align: left;
    padding-left: 20px;
    margin-bottom: 20px;
    font-size: 12px;
  }

  .section {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .el-row {
    margin-bottom: 20px;
  }
}
</style>
