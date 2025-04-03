<template>
  <div class="p-5">
    <div>中英文切换: {{ $t('message.welcome') }}</div>
    <div class="select-none cursor-pointer" @click="countStore.increment">
      Pinia Store - Click me {{ countStore.count }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const countStore = useCounterStore()
</script>
