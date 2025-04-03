<template>
  <div class="flex justify-end p-5 gap-5">
    <ConnectWallet />
    <el-dropdown type="primary" @command="changeLanguage">
      <el-button type="primary">
        Change Language<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="en">English</el-dropdown-item>
          <el-dropdown-item command="zh">中文</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ConnectWallet from '../ConnectWallet/ConnectWallet.vue'
const { locale } = useI18n()

const changeLanguage = (lang: string) => {
  localStorage.setItem('lang', lang)
  locale.value = lang
}
</script>
