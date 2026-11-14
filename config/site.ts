export const siteConfig = {
  name: "Maruti Harbals",
  brandLine: "Natural Herbal Care | Skin and Hair Care Powders | Pure Ingredients, Thoughtful Care | Shop Online, Pan India",
  bio: [
    "Natural Herbal Care",
    "Skin and Hair Care Powders",
    "Pure Ingredients, Thoughtful Care",
    "Shop Online, Pan India",
  ],
  instagram: {
    handle: "@maruti_harbals",
    url: "https://instagram.com/maruti_harbals",
  },
  amazonStorefront:
    "https://www.amazon.in/l/27943762031?ie=UTF8&marketplaceID=A21TJRUUN4KGV&me=A2I2BD2UWRSJE0",
  whatsappNumber: "+91 78740 05234",
  whatsappNumberRaw: "917874005234",
  whatsappLink: "https://wa.me/917874005234",
  contactEmail: process.env.CONTACT_EMAIL ?? "hello@marutiharbals.com",
  whatsappWebhook: process.env.WHATSAPP_WEBHOOK_URL ?? "",
  shipping: "Pan India delivery",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];
