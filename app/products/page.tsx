"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Eye, MessageCircleMore, ShoppingBag, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { productCategories, products, type Product } from "@/data/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof productCategories)[number]>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const visibleProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <section className="container-shell section-shell pb-10">
        <div className="rounded-[28px] border border-[var(--border)] bg-white/80 p-8 shadow-sm">
          <div className="mb-4 inline-flex rounded-full border border-[var(--border)] bg-[var(--soft-mint)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--green-700)]">Shop naturally</div>
          <h1 className="text-4xl text-[var(--forest-green)] md:text-6xl">Our herbal powders</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--body-text)]">Explore carefully chosen herbal powders for skin, hair and face-pack rituals. Every product is designed for clean, mindful self-care.</p>
        </div>
      </section>

      <section className="container-shell pb-14">
        <div className="mb-8 flex flex-wrap gap-3">
          {productCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${selectedCategory === category ? "bg-[var(--green-700)] text-white" : "border border-[var(--border)] bg-white text-[var(--forest-green)]"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => (
            <article key={product.slug} className="soft-card overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="p-4" style={{ background: product.accent }}>
                <div className="rounded-[22px] bg-white/70 p-3 shadow-sm backdrop-blur-sm">
                  <Image src={product.image} alt={product.name} width={420} height={420} className="h-[260px] w-full object-contain" />
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[var(--soft-mint)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--green-700)]">{product.category}</span>
                  <span className="text-sm text-[var(--muted)]">{product.size}</span>
                </div>
                <h2 className="mb-2 text-3xl text-[var(--forest-green)]">{product.name}</h2>
                <p className="mb-4 text-sm text-[var(--muted)]">{product.benefit}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient) => (
                    <span key={ingredient} className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] font-medium text-[var(--green-700)]">{ingredient}</span>
                  ))}
                </div>
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-2xl font-semibold text-[var(--forest-green)]">{product.price}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`Quick view ${product.name}`}
                    className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-[var(--border)] px-3 text-xs font-semibold text-[var(--green-700)] transition hover:border-[var(--green-700)] sm:text-sm"
                  >
                    <Eye size={16} aria-hidden="true" />
                    Quick view
                  </button>
                </div>
                <div className="flex gap-3">
                  <a href={siteConfig.amazonStorefront} target="_blank" rel="noreferrer" className="btn-primary flex-1 gap-2"><ShoppingBag size={16} />Buy</a>
                  <a href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(`Hi, I am interested in ${product.name}. Please share more details.`)}`} target="_blank" rel="noreferrer" className="btn-secondary flex-1 gap-2"><MessageCircleMore size={16} />WhatsApp</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="rounded-[30px] border border-[var(--border)] bg-[var(--soft-mint)] p-8 text-center">
          <div className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--green-700)]">Bulk or wholesale</div>
          <h2 className="text-4xl text-[var(--forest-green)]">Looking for larger orders?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--body-text)]">We’d love to hear from retailers, resellers and wellness businesses looking for a natural herbal range.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--green-700)] hover:text-[var(--green-800)]">Enquire today <ArrowRight size={16} /></Link>
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(15,61,34,0.52)] p-3 sm:p-4" role="dialog" aria-modal="true" aria-labelledby="quick-view-title">
          <div className="max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl overflow-y-auto rounded-[24px] bg-white shadow-[0_26px_80px_rgba(15,61,34,0.22)] sm:max-h-[calc(100dvh-2rem)] sm:rounded-[28px]">
            <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-[var(--border)] bg-white/95 px-4 py-3 backdrop-blur sm:px-5 sm:py-4">
              <h2 id="quick-view-title" className="text-lg font-semibold text-[var(--forest-green)] sm:text-xl">{selectedProduct.name}</h2>
              <button type="button" onClick={() => setSelectedProduct(null)} className="inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--body-text)]" aria-label="Close quick view">
                <X size={16} /> <span className="hidden sm:inline">Close</span>
              </button>
            </div>
            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              <div className="p-3 sm:p-5" style={{ background: selectedProduct.accent }}>
                <div className="rounded-[20px] bg-white/70 p-2 shadow-sm sm:rounded-[22px] sm:p-4"><Image src={selectedProduct.image} alt={selectedProduct.name} width={420} height={420} className="h-[190px] w-full object-contain sm:h-[320px]" /></div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="mb-3 inline-flex rounded-full bg-[var(--soft-mint)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--green-700)]">{selectedProduct.category}</div>
                <h3 className="text-3xl text-[var(--forest-green)] sm:text-4xl">{selectedProduct.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--body-text)] sm:mt-4 sm:text-base sm:leading-8">{selectedProduct.description}</p>
                <div className="mt-3 flex items-center gap-3 sm:mt-5"><span className="text-2xl font-semibold text-[var(--forest-green)]">{selectedProduct.price}</span><span className="text-sm text-[var(--muted)]">{selectedProduct.size}</span></div>
                <div className="mt-4 sm:mt-5"><div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--green-700)] sm:text-sm">Key ingredients</div><div className="flex flex-wrap gap-2">{selectedProduct.ingredients.map((ingredient) => <span key={ingredient} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--forest-green)]">{ingredient}</span>)}</div></div>
                <div className="mt-4 sm:mt-6"><div className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--green-700)] sm:mb-2 sm:text-sm">How to use</div><p className="text-sm leading-6 text-[var(--body-text)] sm:leading-7">{selectedProduct.howToUse}</p></div>
                <div className="mt-5 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:gap-3">
                  <a href={siteConfig.amazonStorefront} target="_blank" rel="noreferrer" className="btn-primary w-full gap-2 sm:w-auto"><ShoppingBag size={16} />Buy on Amazon</a>
                  <a href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(`Hi, I want to know more about ${selectedProduct.name}.`)}`} target="_blank" rel="noreferrer" className="btn-secondary w-full gap-2 sm:w-auto"><MessageCircleMore size={16} />Order on WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
