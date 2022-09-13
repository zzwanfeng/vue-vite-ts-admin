<template>
  <div class="login v-flex aic jsc">
    <div>
      <!-- 登录表单 -->
      <el-container direction="vertical" class="login-form dark:aaa">
        <h1 class="v-flex aic jsc">
          <img :src="getImageUrl('SysLogo.png')" :alt="SysStore.SysBaseConfig.title" srcset="" class="w-[2rem] mr-2" />
          <span class="text-[1rem] font-medium text-[var(--el-text-color-primary)] <2xl:(text-[1.5rem])">{{
            SysStore.SysBaseConfig.title
          }}</span>
        </h1>

        <h1 class="text-[2rem] font-bold font-serif mb-[1.5rem]">登录</h1>

        <el-form ref="LoginFormRef" size="large" :model="LoginModel" :rules="LoginRules">
          <el-form-item prop="username">
            <el-input placeholder="请输入用户名" v-model="LoginModel.username" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="请输入密码" type="password" show-password v-model="LoginModel.password" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" w:w="full" @click="onHandleLogin(LoginFormRef)">登录</el-button>
          </el-form-item>
        </el-form>
        <el-divider />
        <div class="flex justify-around items-center">
          <IconifyCom
            :name="SysStore.SysConfig.themeMode !== 'dark' ? 'emojione-v1:sun' : 'fxemoji:lastquartermoonface'"
            :width="30"
            class="cursor-pointer"
            @click="changeThemeMode"
          ></IconifyCom>
        </div>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

import { useRouter } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import { UseSysStore } from '@/store/modules/SysStore'

import SvgFileCom from '@/components/SvgFileCom/Index.vue'
import IconifyCom from '@/components/IconifyCom.vue'

import { userLoginApi } from '@/apis/SysUserApi'
import { setLocalKey } from '@/utils/common/HandleLocalStorageUtil'
import { getImageUrl } from '@/utils/common/AsyncImportImg'
import { vAdminLoading } from '@/utils/common/Feedback'
import { useThemeMode } from '@/hooks/UseThemeMode'

import { ElLoading } from 'element-plus'

const router = useRouter()
const SysStore = UseSysStore()
const { toggleThemeMode } = useThemeMode()

const changeThemeMode = () => {
  toggleThemeMode()
}

// 表单实例
const LoginFormRef = ref<FormInstance>()
// 登录校验表单
const LoginModel = reactive({
  username: 'admin',
  password: 'admin'
})
// 登录校验规则
const LoginRules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    }
  ]
})
// 处理登录逻辑
const onHandleLogin = async (FormRef: FormInstance | undefined) => {
  if (!FormRef) return
  await FormRef.validate(async (valid, fields) => {
    if (!valid) return
    // 校验成功 进行登录
    const params = {
      username: LoginModel.username,
      password: LoginModel.password
    }

    vAdminLoading('登录中...')
    const { data: UserToken } = await userLoginApi(params)
    vAdminLoading('', true)

    if (UserToken) {
      setLocalKey('VAdminToken', UserToken)

      setTimeout(() => {
        // 登录后台系统
        router.push({ name: 'Home' })
      }, 0)
    }
  })
}
</script>

<style scoped lang="less">
* {
  transition: all 0s;
}

.login {
  background: url('@/assets/img/login.jpg') 0 0 no-repeat;
  background-size: 100% 100%;

  .login-form {
    width: 35rem;
    height: auto;
    padding: 3rem;
    border-radius: 1rem;
    background: var(--el-bg-color-page, blue);
  }
  .aaa {
    background: red;
  }
}
</style>
