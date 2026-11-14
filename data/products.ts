export type ProductCategory = "Skin Care" | "Hair Care" | "Face Pack" | "Herbal Powder";

export type Product = {
  slug: string;
  name: string;
  benefit: string;
  category: ProductCategory;
  price: string;
  size: string;
  image: string;
  description: string;
  ingredients: string[];
  howToUse: string;
  accent: string;
};

export const products: Product[] = [
  {
    slug: "multani-mitti",
    name: "Multani Mitti",
    benefit: "Exfoliating, soothing and smoothing",
    category: "Face Pack",
    price: "₹131",
    size: "100 g",
    image: "/images/products/multani-mitti-product.jpg",
    description:
      "100% natural Multani Mitti powder for exfoliating, soothing, nourishing and smoothing skin with a fresh finish.",
    ingredients: ["Multani mitti", "Mineral clay", "Pure blend"],
    howToUse: "Blend with water into a smooth mask, apply evenly and rinse once it dries for clean skin feel.",
    accent: "#E8C689",
  },
  {
    slug: "rose-petal-powder",
    name: "Rose Petals Powder",
    benefit: "Soft floral glow and skin comfort",
    category: "Skin Care",
    price: "₹149",
    size: "100 g",
    image: "/images/products/rose-petal-product.jpg",
    description:
      "Rose Petals Powder designed for a calming, floral skincare ritual with a naturally soft and fresh feel.",
    ingredients: ["Rose petals", "Botanical charm", "Natural blend"],
    howToUse: "Mix with water or yogurt to form a paste, apply gently and rinse with lukewarm water.",
    accent: "#F8D5E6",
  },
  {
    slug: "bentonite-clay-powder",
    name: "Bentonite Clay Powder",
    benefit: "Natural detox for face and skin pores",
    category: "Face Pack",
    price: "₹150",
    size: "100 g",
    image: "/images/products/bentonite-product.jpg",
    description:
      "Pure natural detox clay for face mask, acne, skin pores, hair growth and a cleaner everyday skincare ritual.",
    ingredients: ["Bentonite clay", "Minerals", "Pure earth"],
    howToUse: "Mix with rose water or plain water, apply evenly, let dry briefly, and rinse with lukewarm water.",
    accent: "#D8D6D2",
  },
  {
    slug: "orange-peel-pack",
    name: "Orange Peel Powder",
    benefit: "Vitamin C rich natural skin brightening",
    category: "Face Pack",
    price: "₹129",
    size: "100 g",
    image: "/images/products/orange-peel-product.jpg",
    description:
      "Orange Peel Powder for Face Pack – Vitamin C rich, natural skin brightening and tan removal face mask for a fresh glow.",
    ingredients: ["Orange peel", "Vitamin C", "Natural care"],
    howToUse: "Mix with water or rose water to make a smooth paste, apply gently and rinse after a few minutes.",
    accent: "#F9D17C",
  },
  {
    slug: "neem-powder",
    name: "Neem Leaf Powder",
    benefit: "Skin care and hair mask support",
    category: "Skin Care",
    price: "₹131",
    size: "100 g",
    image: "/images/products/neem-leaf-product.jpg",
    description:
      "Neem Leaf Powder 100g pure for face pack and hair mask with a clean, herbal skin-care routine.",
    ingredients: ["Neem", "Botanical herbs", "Natural blend"],
    howToUse: "Blend with water to create a simple paste, apply on the face or scalp, then rinse gently.",
    accent: "#DDF5D7",
  },
  {
    slug: "henna-powder",
    name: "Natural Henna Powder",
    benefit: "Hair care and mehendi support",
    category: "Hair Care",
    price: "₹140",
    size: "100 g",
    image: "/images/products/henna-product.jpg",
    description:
      "Natural henna powder for hair 100g with organic hair-care and mehendi support for a smooth herbal ritual.",
    ingredients: ["Henna", "Botanical herbal blend", "Pure powder"],
    howToUse: "Mix with water to form a paste, apply on the hair, leave for the recommended time and rinse thoroughly.",
    accent: "#D8EBAA",
  },
];

export const productCategories = [
  "All",
  "Skin Care",
  "Hair Care",
  "Face Pack",
] as const;
