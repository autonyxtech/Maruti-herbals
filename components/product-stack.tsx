"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, MessageCircleMore, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function ProductStack() {
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const cards = Array.from(stage.querySelectorAll<HTMLElement>(".stack-card"));

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        y: 36,
        autoAlpha: 0,
        scale: 0.98,
      });
      gsap.set(cards[0], { y: 0, autoAlpha: 1, scale: 1 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top top+=80px",
          end: () => `+=${cards.length * Math.max(window.innerHeight * 0.85, 600)}`,
          scrub: 0.7,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, index) => {
        const position = index * 1.25;
        if (index === 0) {
          timeline.to(card, { y: 0, scale: 1, duration: 0.45 }, position);
        } else {
          timeline.fromTo(
            card,
            { y: 36, autoAlpha: 0, scale: 0.98 },
            { y: 0, autoAlpha: 1, scale: 1, duration: 0.45, ease: "power2.out" },
            position,
          );
        }

        if (index > 0) {
          timeline.to(
            cards[index - 1],
            { y: -24, autoAlpha: 0, scale: 0.98, duration: 0.4, ease: "power2.in" },
            position,
          );
        }
      });
    }, stage);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === stage) trigger.kill();
      });
    };
  }, []);

  return (
    <section className="section-shell">
      <div className="container-shell mb-20 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--green-700)]">
          <Leaf size={18} aria-hidden="true" /> Naturally powerful
        </div>
        <h2 className="mx-auto max-w-3xl text-4xl text-[var(--forest-green)] md:text-6xl">
          The goodness of nature, stacked in every ritual.
        </h2>
      </div>

      <div
        ref={stageRef}
        className="relative mx-auto h-[min(72svh,680px)] min-h-[620px] w-[calc(100%-2rem)] max-w-6xl md:min-h-[500px]"
      >
        {products.map((product, index) => (
          <article
            key={product.slug}
            className="stack-card absolute inset-0"
            style={{ zIndex: 10 + index, visibility: index === 0 ? "visible" : "hidden" }}
          >
            <div className="h-full overflow-hidden rounded-[30px] border border-[var(--border)] bg-white/80 shadow-[0_24px_70px_rgba(17,48,33,0.08)] backdrop-blur-sm">
              <div className="grid h-full min-h-0 lg:grid-cols-2">
                <div
                  className="relative flex min-h-[260px] items-center justify-center overflow-hidden p-3 sm:min-h-[300px] md:p-5 lg:min-h-0"
                  style={{ background: product.accent }}
                >
                  <div className="relative z-10 mx-auto flex h-full w-full max-w-[440px] items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={420}
                      height={420}
                      className="mx-auto h-[280px] w-full scale-[1.16] object-contain sm:h-[340px] md:h-[390px] lg:h-[min(58vh,460px)]"
                      priority={index === 0}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center overflow-y-auto p-5 md:p-8 lg:p-10">
                  <div className="mb-4 flex items-center justify-between md:mb-6">
                    <span className="inline-flex items-center rounded-full bg-[var(--soft-mint)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--green-700)]">
                      {product.category}
                    </span>
                    <div className="text-right text-sm text-[var(--muted)]">
                      <div className="text-xs uppercase tracking-[0.18em]">0{index + 1}</div>
                      <div className="font-semibold text-[var(--forest-green)]">/ {String(products.length).padStart(2, "0")}</div>
                    </div>
                  </div>

                  <div className="mb-2 text-3xl text-[var(--forest-green)] md:mb-4 md:text-5xl">{product.name}</div>
                  <p className="mb-3 max-w-md text-sm text-[var(--body-text)] md:mb-5 md:text-base">{product.benefit}</p>
                  <div className="mb-3 flex flex-wrap gap-2 md:mb-5">
                    {product.ingredients.map((item) => (
                      <span key={item} className="rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--green-700)]">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4 flex items-center gap-4 md:mb-8">
                    <span className="text-2xl font-semibold text-[var(--forest-green)]">{product.price}</span>
                    <span className="text-sm text-[var(--muted)]">{product.size}</span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a href={siteConfig.amazonStorefront} target="_blank" rel="noreferrer" className="btn-primary gap-2">
                      <ShoppingBag size={16} />
                      Buy on Amazon
                    </a>
                    <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary gap-2">
                      <MessageCircleMore size={16} />
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
