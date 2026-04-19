"use client";

import { TradingPage } from "@orderly.network/trading";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function TradingRoute() {
  const params = useParams();
  const router = useRouter();
  const symbolParam = (params.symbol as string) || "PERP_ETH_USDC";
  const [symbol, setSymbol] = useState(symbolParam);

  return (
    <TradingPage
      symbol={symbol}
      tradingViewConfig={{
        scriptSRC: "/tradingview/charting_library/charting_library.js",
        library_path: "/tradingview/charting_library/",
      }}
      onSymbolChange={(newSymbol) => {
        const s = newSymbol.symbol;
        setSymbol(s);
        router.replace(`/trading/${s}`);
      }}
    />
  );
}
