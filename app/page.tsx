import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Droplets, Flower2, Leaf, ShieldCheck, Sparkles, Star, SunMedium } from "lucide-react";
import { ProductStack } from "@/components/product-stack";
import { siteConfig } from "@/config/site";
import { testimonials } from "@/data/testimonials";

const trustBadges = ["100% Natural", "Chemical Free", "Premium Quality", "Ayurvedic Care", "Pan India Delivery"];
const benefitCards = [
  { title: "Skin care", copy: "Gentle herbal powders that support a fresh and balanced skincare rhythm.", icon: SunMedium },
  { title: "Hair care", copy: "Botanical blends for shine, softness and a naturally cared-for hair feel.", icon: Droplets },
  { title: "Natural ingredients", copy: "Pure herbal care designed for mindful routines and everyday confidence.", icon: Leaf },
  { title: "Thoughtful care", copy: "A simple ritual with premium-quality ingredients and clean routines.", icon: ShieldCheck },
];
const ingredients = [
  { name: "Moringa", details: "Known for nourishment and a fresh botanical feel in herbal rituals." },
  { name: "Neem", details: "A classic cleanser associated with calm, balanced skin routines." },
  { name: "Rose", details: "Soft, floral comfort for skin and a gentle glow-oriented ritual." },
  { name: "Orange Peel", details: "A brightening addition that brings freshness and cheerful energy." },
  { name: "Bentonite", details: "A clay favourite for a clean, mineral-rich face-pack feel." },
];

export default function HomePage() {
  return (
    <>
      <section className="container-shell relative overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-80px] top-8 h-56 w-56 rounded-full bg-[rgba(165,214,167,0.35)] blur-3xl" />
          <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-[rgba(76,175,80,0.12)] blur-3xl" />
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--green-700)] shadow-sm">
              <Flower2 size={14} /> Connect With Nature
            </div>
            <h1 className="max-w-xl text-5xl leading-none text-[var(--forest-green)] sm:text-6xl lg:text-7xl">Connect With Nature. Glow Naturally.</h1>
            <p className="mt-6 max-w-lg text-lg text-[var(--body-text)]">Pure herbal powders for skin and hair care, thoughtfully blended with natural ingredients and designed for mindful daily rituals.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={siteConfig.amazonStorefront} target="_blank" rel="noreferrer" className="btn-primary gap-2">Shop on Amazon <ArrowRight size={16} /></a>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary gap-2">Order on WhatsApp</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {trustBadges.slice(0, 3).map((badge) => (
                <span key={badge} className="rounded-full border border-[var(--border)] bg-white px-3 py-2 text-xs font-medium text-[var(--green-700)] shadow-sm">{badge}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-5 top-8 h-20 w-20 rounded-full bg-[rgba(46,125,50,0.1)] blur-2xl" />
            <div className="absolute -right-10 bottom-1 h-24 w-24 rounded-full bg-[rgba(242,140,40,0.12)] blur-2xl" />
            <div className="relative mx-auto w-full max-w-[540px] overflow-hidden rounded-[32px] border border-[var(--border)] bg-white shadow-[0_22px_70px_rgba(17,48,33,0.08)]">
              <Image
                src="/images/products/moringa-product.png"
                alt="Maruti Harbals Moringa Powder pouch with moringa leaves and powder"
                width={569}
                height={475}
                sizes="(max-width: 1024px) 100vw, 540px"
                priority
                className="h-auto w-full object-contain"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] bg-white px-5 py-4">
                <div>
                  <span className="inline-flex items-center rounded-full bg-[var(--soft-mint)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--green-700)]">Best seller</span>
                  <h3 className="mt-2 text-2xl text-[var(--forest-green)]">Moringa Powder</h3>
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--forest-green)]">
                  <span className="text-2xl font-semibold">₹499</span>
                  <span className="rounded-full border border-[var(--border)] px-2 py-1">150 g</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-white/60">
        <div className="container-shell flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-5 text-sm font-medium text-[var(--forest-green)] md:justify-between">
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-2"><BadgeCheck size={16} className="text-[var(--green-700)]" /><span>{badge}</span></div>
          ))}
        </div>
      </section>

      <ProductStack />

      <section className="section-shell">
        <div className="container-shell">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--green-700)]">Why people choose us</div>
            <h2 className="text-4xl text-[var(--forest-green)] md:text-5xl">Feel the difference of natural care.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefitCards.map(({ title, copy, icon: Icon }) => (
              <div key={title} className="soft-card p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--soft-mint)] text-[var(--green-700)]"><Icon size={22} /></div>
                <h3 className="mb-2 text-2xl text-[var(--forest-green)]">{title}</h3>
                <p className="text-sm leading-7 text-[var(--body-text)]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[var(--soft-mint)]/70">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--green-700)]">Herbal ingredients</div>
              <h2 className="text-4xl text-[var(--forest-green)] md:text-5xl">Pure ingredients, thoughtful care.</h2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--green-700)] hover:text-[var(--green-800)]">Explore all products <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {ingredients.map((item) => (
              <div key={item.name} className="group rounded-[24px] border border-[var(--border)] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--soft-mint)] text-[var(--green-700)]"><Leaf size={18} /></div>
                <h3 className="mb-2 text-2xl text-[var(--forest-green)]">{item.name}</h3>
                <p className="text-sm leading-7 text-[var(--body-text)]">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell">
          <div className="rounded-[32px] bg-[var(--forest-green)] p-8 text-white md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--leaf-green-soft)]">About Maruti Harbals</div>
                <h2 className="mb-5 max-w-md text-4xl md:text-5xl">Pure ingredients. Thoughtful care.</h2>
                <p className="max-w-md text-base leading-8 text-white/80">Maruti Harbals brings together nature-led care and everyday simplicity—offering herbal powders that feel clean, fresh and rooted in mindful rituals.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5"><div className="mb-3 text-4xl font-semibold text-[var(--leaf-green-soft)]">100%</div><div className="text-sm text-white/75">Natural inspiration</div></div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5"><div className="mb-3 text-4xl font-semibold text-[var(--leaf-green-soft)]">Pan</div><div className="text-sm text-white/75">India delivery</div></div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5"><div className="mb-3 text-4xl font-semibold text-[var(--leaf-green-soft)]">+3</div><div className="text-sm text-white/75">Botanical focus areas</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell">
          <div className="mb-10 text-center"><div className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--green-700)]">How to use</div><h2 className="text-4xl text-[var(--forest-green)] md:text-5xl">A simple ritual, step by step.</h2></div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { step: "01", title: "Mix", copy: "Blend the powder with water, rose water or yogurt to create a smooth, easy-to-apply paste." },
              { step: "02", title: "Apply", copy: "Gently spread it over clean skin or hair and let it sit for the recommended time." },
              { step: "03", title: "Rinse & glow", copy: "Wash off with lukewarm water and enjoy a fresh, naturally cared-for finish." },
            ].map((item) => (
              <div key={item.step} className="soft-card p-6">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[var(--soft-mint)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--green-700)]">{item.step}</div>
                <h3 className="mb-3 text-3xl text-[var(--forest-green)]">{item.title}</h3>
                <p className="text-sm leading-7 text-[var(--body-text)]">{item.copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[var(--muted)]">Patch test first; results vary from person to person.</p>
        </div>
      </section>

      <section className="section-shell bg-white/80">
        <div className="container-shell">
          <div className="mb-10 text-center"><div className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-[var(--soft-mint)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--green-700)]">Customer love</div><h2 className="text-4xl text-[var(--forest-green)] md:text-5xl">Real routines, real natural care.</h2></div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="soft-card p-6">
                <div className="mb-4 flex text-[var(--orange-accent)]">{Array.from({ length: 5 }).map((_, index) => <Star key={`${item.name}-${index}`} size={16} fill="currentColor" />)}</div>
                <p className="mb-6 text-base leading-8 text-[var(--body-text)]">“{item.quote}”</p>
                <div className="border-t border-[var(--border)] pt-4"><div className="font-semibold text-[var(--forest-green)]">{item.name}</div><div className="text-sm text-[var(--muted)]">{item.tag}</div></div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-4 rounded-[28px] border border-[var(--border)] bg-[var(--soft-mint)] p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--forest-green)] text-white"><Sparkles size={18} /></div>
            <div><div className="font-semibold text-[var(--forest-green)]">Follow us on Instagram</div><a href={siteConfig.instagram.url} target="_blank" rel="noreferrer" className="text-sm text-[var(--green-700)]">{siteConfig.instagram.handle}</a></div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell">
          <div className="mb-10 text-center"><div className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--green-700)]">FAQs</div><h2 className="text-4xl text-[var(--forest-green)] md:text-5xl">Everything you need to know.</h2></div>
          <div className="mx-auto max-w-4xl space-y-4">
            {[
              { question: "Do you offer pan India delivery?", answer: "Yes. You can shop online through Amazon with pan India delivery and you can also place enquiries through WhatsApp." },
              { question: "Are the powders chemical free?", answer: "The brand positions its products as natural and chemical free, with pure ingredients and thoughtful care." },
              { question: "Which powder is best for my skin or hair?", answer: "For skin, Neem, Rose and Bentonite are popular. For hair, Amla, Hibiscus and Moringa are often chosen; patch test first and consult a doctor for skin conditions." },
              { question: "How do I order?", answer: "Order from the Amazon storefront or message us on WhatsApp at +91 78740 05234 for a quick order or enquiry." },
            ].map((item) => (
              <details key={item.question} className="group rounded-[22px] border border-[var(--border)] bg-white p-5 shadow-sm open:bg-[var(--soft-mint)]/50" open={item.question === "Do you offer pan India delivery?"}>
                <summary className="cursor-pointer list-none text-lg font-medium text-[var(--forest-green)]">{item.question}</summary>
                <p className="mt-3 text-sm leading-7 text-[var(--body-text)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="container-shell">
          <div className="rounded-[32px] bg-[var(--soft-mint)] p-8 text-center shadow-sm md:p-12">
            <div className="mb-4 inline-flex rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--green-700)]">Bring home the goodness of nature</div>
            <h2 className="mx-auto max-w-2xl text-4xl text-[var(--forest-green)] md:text-5xl">Ready to begin your herbal care ritual?</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={siteConfig.amazonStorefront} target="_blank" rel="noreferrer" className="btn-primary gap-2">Buy on Amazon <ArrowRight size={16} /></a>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary gap-2">Order on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = { title: "Home" };
