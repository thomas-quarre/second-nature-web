import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Second Nature",
    template: "%s · Second Nature",
  },
  description:
    "Human performance that feels natural. Regenerative protocols for recovery, clarity, and long-term vitality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="overflow-x-clip">
      <body className="min-h-dvh overflow-x-clip bg-canvas text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
