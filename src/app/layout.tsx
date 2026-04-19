import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers/Providers";
import { DexLayout } from "@/layouts/DexLayout";

export const metadata: Metadata = {
  title: "Eyeoshi - Perpetual Trading",
  description: "Decentralized perpetual trading powered by Eyeoshi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0f172a] text-white">
        <Providers>
          <DexLayout>{children}</DexLayout>
        </Providers>
      </body>
    </html>
  );
}
