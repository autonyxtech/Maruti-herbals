import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://marutiharbals.com"),
  icons: {
    icon: "/MH.jpg",
    shortcut: "/MH.jpg",
    apple: "/MH.jpg",
  },
  title: {
    default: "Maruti Harbals | Natural Herbal Skin & Hair Care Powders",
    template: "%s | Maruti Harbals",
  },
  description:
    "Natural herbal skin and hair care powders made with pure ingredients. Shop online pan India with Maruti Harbals.",
  openGraph: {
    title: "Maruti Harbals",
    description:
      "Natural Herbal Care | Skin and Hair Care Powders | Pure Ingredients, Thoughtful Care | Shop Online, Pan India",
    url: "https://marutiharbals.com",
    siteName: "Maruti Harbals",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${poppins.variable} h-full`}>
      <body className="min-h-full bg-[var(--page-bg)] text-[var(--body-text)] antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
