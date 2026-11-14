# Maruti Harbals

Premium natural herbal skin and hair care storefront built with Next.js, Tailwind CSS, Framer Motion, GSAP, and Lenis.

## Features

- Premium storefront homepage for Maruti Harbals
- Product catalogue with category filters and quick-view modal
- Contact form with validation and WhatsApp continuation flow
- Floating chat widget and WhatsApp-storefront CTAs
- Editable content in `config/site.ts` and `data/*.ts`

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the example env file:
   ```bash
   cp .env.example .env.local
   ```
3. Update your environment values if needed.
4. Start the app:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000

## Environment variables

- `CONTACT_EMAIL`: fallback contact email
- `WHATSAPP_WEBHOOK_URL`: optional WhatsApp webhook endpoint
- `NEXT_PUBLIC_SITE_URL`: site URL used for metadata or generated links

## Content editing

Update branding and business information in:

- `config/site.ts`
- `data/products.ts`
- `data/chatbot.ts`
- `data/testimonials.ts`

## Deployment

The project is configured for Vercel. Import the repository, keep the detected Next.js framework and `npm run build` command, then add these environment variables in **Project Settings → Environment Variables**:

- `NEXT_PUBLIC_SITE_URL`: the canonical production URL, such as `https://marutiharbals.com`
- `CONTACT_EMAIL`: fallback contact email
- `WHATSAPP_WEBHOOK_URL`: optional webhook endpoint

Set the variables for the Vercel environments where they are needed, then redeploy after changing them. For local development, copy `.env.example` to `.env.local` and change `NEXT_PUBLIC_SITE_URL` to `http://localhost:3000`.

## Notes

- Product images are currently stored under `public/images` and can be replaced with final brand assets.
- The WhatsApp and Amazon storefront links should remain aligned with the business details in `config/site.ts`.
- The contact API route validates inbound form data and rejects obvious bot submissions.
