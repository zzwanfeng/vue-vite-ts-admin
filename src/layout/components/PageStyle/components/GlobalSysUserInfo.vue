<template>
  <!-- 页头 右部 个人信息 -->
  <el-dropdown class="global-sys-user-info h100" @command="clickDropdownMenuItem">
    <div class="cursor-pointer">
      <el-avatar :size="25" :src="getImageUrl('UserLogo.png')" />
      <span>{{ UserStore.UserInfo.nickname || '系统昵称' }}</span>
    </div>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="SIGN_OUT">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getImageUrl } from '@/utils/common/AsyncImportImg'
import { removeLocalKey } from '@/utils/common/HandleLocalStorageUtil'
import { UseUserStore } from '@/store/modules/User'
import { UseSysRouteMenuStore } from '@/store/modules/SysRouteMenu'

const router = useRouter()
const UserStore = UseUserStore()
const SysRouteMenuStore = UseSysRouteMenuStore()

const clickDropdownMenuItem = (command: string) => {
  if (command === 'SIGN_OUT') {
    removeLocalKey('VAdminToken')
    removeLocalKey('layoutMode')
    removeLocalKey('historyMenu')
    SysRouteMenuStore.IsAddAsyncRouter = false
    SysRouteMenuStore.AllHistoryMenuRecord = []
    router.push({ name: 'Login' })
  }
}
</script>

<style lang="less" scoped>
.global-sys-user-info {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  > div:nth-child(1) {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    .el-avatar {
      margin-right: 0.5rem;
    }
  }
}
</style>
