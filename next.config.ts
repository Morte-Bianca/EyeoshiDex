import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.20.10.2"],
  transpilePackages: [
    "@orderly.network/ui",
    "@orderly.network/react-app",
    "@orderly.network/trading",
    "@orderly.network/portfolio",
    "@orderly.network/markets",
    "@orderly.network/ui-scaffold",
    "@orderly.network/wallet-connector",
    "@orderly.network/hooks",
    "@orderly.network/affiliate",
    "@orderly.network/trading-rewards",
    "@orderly.network/default-evm-adapter",
    "@orderly.network/web3-provider-ethers",
    "@orderly.network/ui-connector",
    "@orderly.network/ui-chain-selector",
    "@orderly.network/ui-order-entry",
    "@orderly.network/ui-orders",
    "@orderly.network/ui-positions",
    "@orderly.network/ui-tpsl",
    "@orderly.network/ui-transfer",
    "@orderly.network/ui-share",
    "@orderly.network/ui-leverage",
    "@orderly.network/trading-points",
  ],
  turbopack: {},
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
};

export default nextConfig;
