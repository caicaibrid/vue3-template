<script setup lang="ts">
import { applyPureReactInVue } from 'veaury'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './wagmi'
const queryClient = new QueryClient()
const WagmiProviderComponent = applyPureReactInVue(WagmiProvider)
const QueryClientProviderComponent = applyPureReactInVue(QueryClientProvider)
const RainbowKitProviderComponent = applyPureReactInVue(RainbowKitProvider)
</script>

<template>
  <WagmiProviderComponent :config="config">
    <QueryClientProviderComponent :client="queryClient">
      <RainbowKitProviderComponent locale="en-US">
        <slot />
      </RainbowKitProviderComponent>
    </QueryClientProviderComponent>
  </WagmiProviderComponent>
</template>
