"use client";

import { useWsStatus, WsNetworkStatus } from "@orderly.network/hooks";
import { Text } from "@orderly.network/ui";
import { Scaffold } from "@orderly.network/ui-scaffold";
import { useRouter, usePathname } from "next/navigation";
import { mainMenus } from "@/config/nav.config";

const socialLinks = [
  {
    label: "Telegram",
    href: "https://t.me/+2cz9q1G1tiI5YzRk",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M4.108 9.464S9.645 7.13 11.565 6.31c.736-.328 3.233-1.38 3.233-1.38s1.152-.46 1.056.658c-.032.46-.288 2.069-.544 3.81-.384 2.463-.8 5.157-.8 5.157s-.064.755-.608.887c-.544.13-1.44-.46-1.6-.592-.129-.098-2.401-1.576-3.233-2.299-.224-.197-.48-.591.032-1.051a124 124 0 0 0 3.36-3.285c.384-.394.768-1.313-.832-.197-2.272 1.61-4.513 3.12-4.513 3.12s-.512.33-1.472.034-2.08-.69-2.08-.69-.768-.493.544-1.018" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/XqCx7AS9",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M14.956 5.522c1.604 2.374 2.396 5.053 2.1 8.136a.05.05 0 0 1-.02.033 11.7 11.7 0 0 1-3.55 1.805.045.045 0 0 1-.047-.016 8.4 8.4 0 0 1-.725-1.489.046.046 0 0 1 .024-.06q.745-.265 1.455-.62a.05.05 0 0 0 .005-.085 7 7 0 0 1-.299-.247.05.05 0 0 0-.052-.007c-3.03 1.384-6.31 1.384-9.304 0a.04.04 0 0 0-.052.006 10 10 0 0 1-.3.249.05.05 0 0 0 .004.084q.711.356 1.457.62c.025.01.037.039.025.063a8.4 8.4 0 0 1-.726 1.487.045.045 0 0 1-.047.016 11.7 11.7 0 0 1-3.55-1.805.05.05 0 0 1-.02-.032c-.252-2.667.41-5.314 2.101-8.137a.04.04 0 0 1 .018-.017 11.7 11.7 0 0 1 2.89-.903.05.05 0 0 1 .046.022c.125.224.269.51.366.744a10.7 10.7 0 0 1 3.246 0 8 8 0 0 1 .36-.744.044.044 0 0 1 .046-.022 11.7 11.7 0 0 1 2.89.903q.012.005.019.017m-6.018 5.07c.011-.788-.56-1.44-1.276-1.44-.71 0-1.276.647-1.276 1.44 0 .795.576 1.442 1.276 1.442.71 0 1.276-.647 1.276-1.441m4.718 0c.011-.788-.56-1.44-1.276-1.44-.71 0-1.276.647-1.276 1.44 0 .795.577 1.442 1.276 1.442.717 0 1.276-.647 1.276-1.441" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/Eyeoshi",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="m4.42 4.73 4.633 6.194-4.662 5.037H5.44l4.082-4.41 3.298 4.41h3.57l-4.893-6.543 4.34-4.689h-1.05l-3.759 4.062-3.037-4.062zm1.543.772h1.64l7.244 9.686h-1.64z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/eyeoshi",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
      >
        <path d="M6.94 8.5H4.13V19h2.81V8.5ZM5.53 4C4.63 4 4 4.6 4 5.39c0 .78.62 1.39 1.5 1.39h.02c.92 0 1.52-.61 1.52-1.39C7 4.6 6.42 4 5.53 4ZM20 12.58c0-3.22-1.72-4.72-4.02-4.72-1.85 0-2.68 1.02-3.14 1.73V8.5H10.03c.04.72 0 10.5 0 10.5h2.81v-5.86c0-.31.02-.62.11-.84.25-.62.81-1.27 1.76-1.27 1.24 0 1.74.95 1.74 2.35V19H19v-5.42Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/eyeoshi_/",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

function FooterIconLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "20px",
        height: "20px",
        color: "rgba(255, 255, 255, 0.54)",
        textDecoration: "none",
        transition: "color 160ms ease",
      }}
    >
      {icon}
    </a>
  );
}

function FooterDivider() {
  return (
    <span
      aria-hidden="true"
      style={{
        width: "1px",
        height: "18px",
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        flexShrink: 0,
      }}
    />
  );
}

function FooterStatusDot({ status }: { status: WsNetworkStatus }) {
  const color =
    status === WsNetworkStatus.Connected
      ? "#22c55e"
      : status === WsNetworkStatus.Unstable
        ? "#f59e0b"
        : "#ef4444";

  return (
    <span
      aria-hidden="true"
      style={{
        width: "8px",
        height: "8px",
        borderRadius: "999px",
        backgroundColor: color,
        boxShadow: `0 0 8px ${color}`,
        flexShrink: 0,
      }}
    />
  );
}

function TradingViewLink() {
  return (
    <a
      href="https://www.tradingview.com/"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "rgba(255, 255, 255, 0.54)",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <Text size="2xs" intensity={54}>
        Charts powered by TradingView
      </Text>
    </a>
  );
}

function CustomFooter() {
  const wsStatus = useWsStatus();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        minHeight: "28px",
        padding: "0 12px",
        gap: "12px",
        overflowX: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          minWidth: 0,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <FooterStatusDot status={wsStatus} />
          <Text size="2xs">Operational</Text>
        </div>
        <FooterDivider />
        <Text size="2xs" intensity={54}>
          Join our community
        </Text>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {socialLinks.map((link) => (
            <FooterIconLink
              key={link.label}
              href={link.href}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </div>
        <FooterDivider />
        <TradingViewLink />
      </div>
    </div>
  );
}

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
      footer={<CustomFooter />}
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
