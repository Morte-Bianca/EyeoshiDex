"use client";

import { PointSystemPage } from "@orderly.network/trading-points";
import { useRouter } from "next/navigation";

export default function PointsPage() {
  const router = useRouter();

  return (
    <PointSystemPage
      onRouteChange={(option) => {
        if (option.target === "_blank") {
          window.open(option.href, "_blank");
        } else {
          router.push(option.href);
        }
      }}
    />
  );
}
