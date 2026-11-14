"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/config/site";
import { FloatingChatWidget } from "@/components/chatbot";

const CURRENT_YEAR = 2026;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = CURRENT_YEAR;

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--body-text)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(250,253,247,0.94)] shadow-[0_8px_24px_rgba(15,61,34,0.04)] backdrop-blur-xl">
        <div className="container-shell relative flex min-h-[76px] items-center justify-between gap-4 py-3">
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Maruti Harbals home">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[var(--border)] bg-white shadow-sm">
              <Image src="/MH.jpg" alt="Maruti Harbals logo" width={44} height={44} className="h-full w-full object-cover" priority />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--green-700)]">Maruti</div>
              <div className="text-base font-semibold leading-tight text-[var(--forest-green)]">Harbals</div>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-white/70 p-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-[var(--soft-mint)] text-[var(--green-700)]"
                    : "text-[var(--body-text)] hover:bg-[var(--soft-mint)]/70 hover:text-[var(--green-700)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center md:flex">
            <a href={siteConfig.amazonStorefront} target="_blank" rel="noreferrer" className="btn-primary">
              Shop on Amazon
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--forest-green)] shadow-sm transition-colors hover:border-[var(--green-700)] md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[var(--border)] bg-[rgba(250,253,247,0.98)] px-4 py-5 shadow-lg shadow-green-950/5 backdrop-blur-xl md:hidden">
            <div className="container-shell flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`rounded-xl px-3 py-2.5 text-sm font-medium ${
                    pathname === item.href
                      ? "bg-[var(--soft-mint)] text-[var(--green-700)]"
                      : "text-[var(--body-text)] hover:bg-[var(--soft-mint)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <a href={siteConfig.amazonStorefront} target="_blank" rel="noreferrer" className="btn-primary w-full">
                  Shop on Amazon
                </a>
                <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary w-full">
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-24 bg-[var(--forest-green)] text-white">
        <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_1.1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white/10">
                <Image src="/MH.jpg" alt="Maruti Harbals logo" width={40} height={40} className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--leaf-green-soft)]">Maruti</div>
                <div className="font-semibold">Harbals</div>
              </div>
            </div>
            <p className="max-w-sm text-sm text-white/75">
              Natural herbal care for skin and hair. Thoughtful ingredients, gentle routines and clean everyday rituals.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Explore</h3>
            <ul className="space-y-2 text-sm text-white/75">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <ul className="space-y-2 text-sm text-white/75">
              <li><a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp: {siteConfig.whatsappNumber}</a></li>
              <li><a href={siteConfig.instagram.url} target="_blank" rel="noreferrer" className="hover:text-white">Instagram: {siteConfig.instagram.handle}</a></li>
              <li><a href={siteConfig.amazonStorefront} target="_blank" rel="noreferrer" className="hover:text-white">Amazon storefront</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Disclaimer</h3>
            <p className="text-sm text-white/75">
              Patch test first, results vary from person to person, and product experiences may vary with individual skin or hair needs.
            </p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-shell flex flex-col gap-2 py-4 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
            <span>© {currentYear} Maruti Harbals. All rights reserved.</span>
            <span>Natural herbal care, thoughtfully made.</span>
          </div>
        </div>
      </footer>

      <FloatingChatWidget />
    </div>
  );
}
