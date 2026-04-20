"use client";

import { OrderlyAppProvider } from "@orderly.network/react-app";
import { WalletConnectorProvider } from "@orderly.network/wallet-connector";
import { i18n } from "@orderly.network/i18n";
import { ORDERLY_CONFIG } from "@/config/orderly.config";
import { walletAdapters } from "@/config/wallet.config";

// Force English locale — prevents PointSystemPage's isolated LocaleProvider
// from auto-detecting browser language (e.g. Turkish) via i18next-browser-languagedetector
i18n.changeLanguage("en");

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WalletConnectorProvider>
      <OrderlyAppProvider
        brokerId={ORDERLY_CONFIG.brokerId}
        brokerName={ORDERLY_CONFIG.brokerName}
        networkId={ORDERLY_CONFIG.networkId}
        appIcons={ORDERLY_CONFIG.appIcons}
        walletAdapters={walletAdapters}
      >
        {children}
      </OrderlyAppProvider>
    </WalletConnectorProvider>
  );
}
