"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { label: "Overview", href: "/portfolio" },
  { label: "Positions", href: "/portfolio/positions" },
  { label: "Orders", href: "/portfolio/orders" },
  { label: "Assets", href: "/portfolio/assets" },
  { label: "Fee tier", href: "/portfolio/fee-tier" },
  { label: "API Keys", href: "/portfolio/api-keys" },
  { label: "Settings", href: "/portfolio/settings" },
];

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-1 min-h-0">
      <aside className="w-48 shrink-0 border-r border-white/10 p-4">
        <h2 className="text-sm font-semibold text-white/60 mb-4">Portfolio</h2>
        <nav className="flex flex-col gap-1">
          {sidebarItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/portfolio" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded text-sm transition-colors ${
                  isActive
                    ? "bg-white/10 text-white font-medium"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 min-h-0 overflow-auto">{children}</main>
    </div>
  );
}
