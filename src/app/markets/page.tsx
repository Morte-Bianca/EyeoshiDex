"use client";

import { MarketsHomePage } from "@orderly.network/markets";
import { useRouter } from "next/navigation";

export default function MarketsPage() {
  const router = useRouter();

  return (
    <MarketsHomePage
      onSymbolChange={(symbol) => {
        router.push(`/trading/${symbol.symbol}`);
      }}
    />
  );
}
