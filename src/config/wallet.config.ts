import { DefaultEVMWalletAdapter } from "@orderly.network/default-evm-adapter";
import { EthersProvider } from "@orderly.network/web3-provider-ethers";

export const walletAdapters = [
  new DefaultEVMWalletAdapter(new EthersProvider()),
];
