import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'VN',
  projectId: 'eaa7d7408ab20b56e829528c5aaf8b42',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    {
      id: 9200,
      name: 'TOK',
      iconUrl: 'https://scan.tokchain.org/favicon.ico',
      iconBackground: '#000',
      nativeCurrency: {
        decimals: 18,
        name: 'tok',
        symbol: 'TOK',
      },
      rpcUrls: {
        default: {
          http: ['https://rpc.tokchain.org'],
        },
      },
      blockExplorers: {
        default: { name: 'Explorer', url: 'https://scan.tokchain.org/' },
      },
    },
    {
      id: 15042,
      name: 'TOK Dev',
      iconUrl: 'https://scan.tokchain.org/favicon.ico',
      iconBackground: '#000',
      nativeCurrency: {
        decimals: 18,
        name: 'tok',
        symbol: 'TOK',
      },
      rpcUrls: {
        default: {
          http: ['https://devrpc.tokchain.org'],
        },
      },
      blockExplorers: {
        default: { name: 'Explorer', url: 'https://devscan.tokchain.org/' },
      },
    },
    // ...[defineChain],
    // ...(process.env.UMI_ENV !== 'production'
    //   ? [
    //       {
    //         id: 9205,
    //         name: 'TOK TEST',
    //         iconUrl: 'https://scan.tokchain.org/favicon.ico',
    //         iconBackground: '#000',
    //         nativeCurrency: {
    //           decimals: 18,
    //           name: 'tok',
    //           symbol: 'TOK',
    //         },
    //         rpcUrls: {
    //           default: {
    //             http: ['https://test-rpc.tokchain.org'],
    //           },
    //         },
    //         blockExplorers: {
    //           default: { name: 'Explorer', url: 'https://scan.tokchain.org/' },
    //         },
    //       },
    //     ]
    //   : []),
  ],
})
