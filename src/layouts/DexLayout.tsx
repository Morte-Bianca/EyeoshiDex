"use client";

import { Scaffold } from "@orderly.network/ui-scaffold";
import { useRouter, usePathname } from "next/navigation";
import { mainMenus, bottomMenus } from "@/config/nav.config";

export function DexLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Scaffold
      mainNavProps={{
        logo: {
          src: "/eyeoshi_logo.jpg",
          alt: "Eyeoshi",
        },
        leading: (
          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#C8E64A",
              letterSpacing: "0.5px",
            }}
          >
            Eyeoshi
          </span>
        ),
        mainMenus,
        onItemClick: (item: { href?: string }) => {
          if (item.href) {
            router.push(item.href);
          }
        },
      }}
      footerProps={{
        telegramUrl: "https://t.me/orderly",
        twitterUrl: "https://x.com/orderly",
        discordUrl: "https://discord.gg/orderly",
      }}
      routerAdapter={{
        onRouteChange: (option: { href: string; target?: string }) => {
          if (option.target === "_blank") {
            window.open(option.href, "_blank");
          } else {
            router.push(option.href);
          }
        },
        currentPath: pathname,
      }}
    >
      {children}
    </Scaffold>
  );
}
