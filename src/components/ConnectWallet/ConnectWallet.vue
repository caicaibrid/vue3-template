<template>
  <!-- <el-button type="primary">Connect</el-button> -->
  <ConnectButtonComponent showBalance="false" chainStatus="none" />
</template>

<script setup lang="ts">
import { applyPureReactInVue } from 'veaury'
import { ConnectButton } from '@rainbow-me/rainbowkit'
const ConnectButtonComponent = applyPureReactInVue(ConnectButton)
</script>
