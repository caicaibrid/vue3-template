<script setup lang="ts">
import { RouterView } from 'vue-router'
import VNHeader from './components/VNHeader/VNHeader.vue'
import RainbowKit from './components/RainbowKitWallet/RainbowKit.vue'
</script>

<template>
  <RainbowKit>
    <div class="flex flex-col">
      <VNHeader />
      <div class="flex-1 overflow-y-auto">
        <RouterView />
      </div>
    </div>
  </RainbowKit>
</template>
