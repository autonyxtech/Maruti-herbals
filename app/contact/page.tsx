"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MapPinned, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation/contact";

const initialValues: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  interest: "Buy products",
  product: "",
  message: "",
  consent: true,
  website: "",
};

export default function ContactPage() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (field: keyof ContactFormValues, value: string | boolean) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setServerMessage("");

    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormValues | undefined;
        if (field) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      setStatus("error");
      setServerMessage("Please correct the highlighted fields and try again.");
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    const result = await response.json();

    if (response.ok) {
      setStatus("success");
      setServerMessage(result.message || "Thank you! We will get back to you soon.");
      setValues(initialValues);
    } else {
      setStatus("error");
      setServerMessage(result.error || "Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="container-shell section-shell">
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--green-700)]">We’re here to help</div>
        <h1 className="text-4xl text-[var(--forest-green)] md:text-6xl">Contact Maruti Harbals</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
          <div className="soft-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--soft-mint)] text-[var(--green-700)]"><MessageCircle size={23} /></div>
            <h2 className="mb-2 text-2xl text-[var(--forest-green)]">WhatsApp</h2>
            <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" className="text-base text-[var(--green-700)] hover:text-[var(--green-800)]">{siteConfig.whatsappNumber}</a>
          </div>

          <div className="soft-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--soft-mint)] text-[var(--green-700)]"><Mail size={23} /></div>
            <h2 className="mb-2 text-2xl text-[var(--forest-green)]">Instagram</h2>
            <a href={siteConfig.instagram.url} target="_blank" rel="noreferrer" className="text-base text-[var(--green-700)] hover:text-[var(--green-800)]">{siteConfig.instagram.handle}</a>
          </div>

          <div className="soft-card p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--soft-mint)] text-[var(--green-700)]"><MapPinned size={23} /></div>
            <h2 className="mb-2 text-2xl text-[var(--forest-green)]">Pan India delivery</h2>
            <p className="text-base text-[var(--body-text)]">Shop online with easy access across India.</p>
          </div>
        </div>

        <div className="soft-card p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--forest-green)]">Full name</label>
                <input value={values.name} onChange={(event) => handleChange("name", event.target.value)} className="h-12 w-full rounded-full border border-[var(--border)] bg-[var(--soft-mint)] px-4 outline-none transition focus:border-[var(--green-700)]" placeholder="Your name" />
                {errors.name && <p className="mt-2 text-xs text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--forest-green)]">Phone</label>
                <input value={values.phone} onChange={(event) => handleChange("phone", event.target.value)} className="h-12 w-full rounded-full border border-[var(--border)] bg-[var(--soft-mint)] px-4 outline-none transition focus:border-[var(--green-700)]" placeholder="+91 98765 43210" />
                {errors.phone && <p className="mt-2 text-xs text-red-600">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--forest-green)]">Email (optional)</label>
                <input value={values.email} onChange={(event) => handleChange("email", event.target.value)} className="h-12 w-full rounded-full border border-[var(--border)] bg-[var(--soft-mint)] px-4 outline-none transition focus:border-[var(--green-700)]" placeholder="you@example.com" />
                {errors.email && <p className="mt-2 text-xs text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--forest-green)]">I am interested in</label>
                <select value={values.interest} onChange={(event) => handleChange("interest", event.target.value as ContactFormValues["interest"])} className="h-12 w-full rounded-full border border-[var(--border)] bg-[var(--soft-mint)] px-4 outline-none transition focus:border-[var(--green-700)]">
                  <option value="Buy products">Buy products</option>
                  <option value="Bulk or wholesale">Bulk or wholesale</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--forest-green)]">Product of interest</label>
              <input value={values.product} onChange={(event) => handleChange("product", event.target.value)} className="h-12 w-full rounded-full border border-[var(--border)] bg-[var(--soft-mint)] px-4 outline-none transition focus:border-[var(--green-700)]" placeholder="Moringa powder, Neem powder, etc." />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--forest-green)]">Message</label>
              <textarea value={values.message} onChange={(event) => handleChange("message", event.target.value)} className="min-h-[140px] w-full rounded-[24px] border border-[var(--border)] bg-[var(--soft-mint)] px-4 py-3 outline-none transition focus:border-[var(--green-700)]" placeholder="Tell us what you need…" />
              {errors.message && <p className="mt-2 text-xs text-red-600">{errors.message}</p>}
            </div>

            <div className="hidden" aria-hidden="true">
              <input type="text" value={values.website} onChange={(event) => handleChange("website", event.target.value)} tabIndex={-1} autoComplete="off" />
            </div>

            <label className="flex items-start gap-3 text-sm text-[var(--body-text)]">
              <input type="checkbox" checked={values.consent} onChange={(event) => handleChange("consent", event.target.checked)} className="mt-1 h-4 w-4 rounded border-[var(--border)] text-[var(--green-700)]" />
              <span>I agree to be contacted about my enquiry and I understand patch test guidance applies before use.</span>
            </label>
            {errors.consent && <p className="mt-2 text-xs text-red-600">{errors.consent}</p>}

            {status !== "idle" && (
              <div className={`rounded-2xl border px-4 py-3 text-sm ${status === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-red-200 bg-red-50 text-red-700"}`}>
                {serverMessage || (status === "success" ? "Form sent successfully." : "Please try again.")}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <button type="submit" disabled={status === "loading"} className="btn-primary gap-2 disabled:cursor-not-allowed disabled:opacity-60">{status === "loading" ? "Sending…" : "Send enquiry"}</button>
              <a href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(`Hi Maruti Harbals, I am interested in ${values.interest}. Name: ${values.name || ""}. Phone: ${values.phone || ""}. Email: ${values.email || ""}. Product: ${values.product || ""}. Message: ${values.message || ""}.`)}`} target="_blank" rel="noreferrer" className="btn-secondary gap-2">Continue on WhatsApp</a>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-10 rounded-[30px] border border-[var(--border)] bg-[var(--soft-mint)] p-6 text-center">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--green-700)]"><CheckCircle2 size={18} />Need help choosing the right powder?</div>
        <div className="mt-3 text-sm text-[var(--body-text)]">Connect with us on WhatsApp or browse the full collection.</div>
        <div className="mt-5 flex justify-center gap-3">
          <Link href="/products" className="btn-secondary gap-2">View products <ArrowRight size={16} /></Link>
          <a href={siteConfig.amazonStorefront} target="_blank" rel="noreferrer" className="btn-primary gap-2">Buy on Amazon</a>
        </div>
      </div>
    </section>
  );
}

