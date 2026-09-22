import lookMaroon1 from "../assets/images/look-maroon-1.png";
import lookMaroon2 from "../assets/images/look-maroon-2.png";
import lookMaroon3 from "../assets/images/look-maroon-3.png";
import lookBlack1 from "../assets/images/look-black-1.png";
import lookBlack2 from "../assets/images/look-black-2.png";

export const products = [
  {
    id: "oversized-boxy-shirt-maroon",
    name: "Oversized Boxy Shirt — Maroon",
    category: "Shirts",
    price: 349000,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Maroon"],
    description:
      "An oversized boxy-cut shirt in anti-crease fabric — stays sharp without ever touching an iron, built for people always on the move. Breathable material made for tropical weather. Every piece comes with a QR code linking to styling guides and care instructions.",
    details: [
      "Anti-crease, wrinkle-resistant fabric",
      "Easy-care finish — stains lift out easily",
      "Breathable, cool-to-the-touch material",
      "Oversized boxy fit, easy to dress up or down",
      "QR code for styling guide & membership perks",
    ],
    images: [lookMaroon1, lookMaroon2, lookMaroon3],
  },
  {
    id: "signature-bandana-scarf",
    name: "Signature Bandana Scarf",
    category: "Accessories",
    price: 129000,
    sizes: ["One Size"],
    colors: ["Navy Stripe"],
    description:
      "The striped scarf that's become the STRAIT&CO signature look — clip it to your pants, tie it to a bag, or wrap it around your neck. A small detail that elevates a casual outfit.",
    details: [
      "Soft, lightweight satin fabric",
      "Signature STRAIT&CO stripe pattern",
      "Wear it three ways: waist, bag, or neck",
      "One size, fits all",
    ],
    images: [lookBlack1, lookBlack2],
  },
  {
    id: "wide-leg-trousers-black",
    name: "Wide-Leg Trousers — Black",
    category: "Pants",
    price: 379000,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    description:
      "Wide-leg trousers with a flowy drape built for all-day comfort. Designed to pair with any STRAIT&CO boxy shirt — the fabric falls clean, breathes well, and stays looking sharp.",
    details: [
      "Wide-leg, flowy silhouette",
      "Breathable drape, never stuffy",
      "Anti-crease treatment",
      "Pairs with every STRAIT&CO top",
    ],
    images: [lookBlack2, lookBlack1],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const formatIDR = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
