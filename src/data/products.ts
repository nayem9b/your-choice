export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  onSale?: boolean;
  image: string;
}

export const animeJerseys: Product[] = [
  {
    id: "aj-1",
    name: "Madara Uchiha | Premium Anime Jersey - Oversized Streetwear",
    price: 650,
    image: "/products/madara-jersey.svg",
  },
  {
    id: "aj-2",
    name: "Roronoa Zoro Premium Anime Jersey - Oversized Streetwear",
    price: 650,
    image: "/products/zoro-jersey.svg",
  },
  {
    id: "aj-3",
    name: "Monkey D. Luffy Premium Anime Jersey - Oversized Streetwear",
    price: 650,
    image: "/products/luffy-jersey.svg",
  },
  {
    id: "aj-4",
    name: "Ichigo Kurosaki | Premium Anime Jersey - Oversized Streetwear",
    price: 650,
    image: "/products/ichigo-jersey.svg",
  },
  {
    id: "aj-5",
    name: "Portgas D. Ace | Premium Anime Jersey - Oversized Streetwear",
    price: 650,
    image: "/products/ace-jersey.svg",
  },
];

export const acidWashCollection: Product[] = [
  {
    id: "aw-1",
    name: "Fullmetal Alchemist - Brotherhood Streetwear Drop Tee - Acid Wash Edition",
    price: 699,
    image: "/products/fma-acidwash.svg",
  },
  {
    id: "aw-2",
    name: "Spider-Inspired | Acid Wash Oversized Drop Shoulder T-Shirt | Premium Streetwear",
    price: 699,
    image: "/products/spider-acidwash.svg",
  },
  {
    id: "aw-3",
    name: "Eren Yeager Acid Wash Drop Shoulder Tee | Premium Streetwear",
    price: 699,
    image: "/products/eren-acidwash.svg",
  },
  {
    id: "aw-4",
    name: "Killua Zoldyck HxH Streetwear Tee - Acid Wash Edition",
    price: 699,
    image: "/products/killua-acidwash.svg",
  },
  {
    id: "aw-5",
    name: "Denji Chainsawman Streetwear Tee - Acid Wash Edition",
    price: 699,
    image: "/products/denji-acidwash.svg",
  },
];

export const bestSellers: Product[] = [
  {
    id: "bs-1",
    name: "Tanjiro Kamado Demon Slayer Streetwear Tee - Acid Wash Edition",
    price: 699,
    image: "/products/tanjiro-bs.svg",
  },
  {
    id: "bs-2",
    name: "Sun God Nika Premium Shirt - Oversized Drop Shoulder Fit Streetwear",
    price: 999,
    originalPrice: 1600,
    onSale: true,
    image: "/products/nika-bs.svg",
  },
  {
    id: "bs-3",
    name: "Toji Anime Baggy Sweatpants Heavyweight 300 GSM Gym & Streetwear Bangladesh",
    price: 1199,
    image: "/products/toji-bs.svg",
  },
  {
    id: "bs-4",
    name: "Zoro Egghead Heavyweight Drop-Premium Zip Hoodie",
    price: 1599,
    originalPrice: 2000,
    onSale: true,
    image: "/products/zoro-hoodie.svg",
  },
  {
    id: "bs-5",
    name: "AOT: Wings of Freedom - Heavyweight Streetwear Hoodie",
    price: 1280,
    originalPrice: 1600,
    onSale: true,
    image: "/products/aot-hoodie.svg",
  },
];

export const oversizedTees: Product[] = [
  {
    id: "ot-1",
    name: "Sung Jinwoo | Solo Leveling | Oversized Drop Shoulder / Half Sleeve T-shirt",
    price: 599,
    image: "/products/jinwoo-oversized.svg",
  },
  {
    id: "ot-2",
    name: "Might Guy - Gate of Death Oversized Drop Shoulder Tee",
    price: 650,
    image: "/products/guy-oversized.svg",
  },
  {
    id: "ot-3",
    name: "Maki Zenin - Oversized Drop Shoulder T-Shirt | Premium Jujutsu Kaisen Anime Streetwear",
    price: 599,
    image: "/products/maki-oversized.svg",
  },
  {
    id: "ot-4",
    name: "Rainbow Six Siege Inspired Oversized Drop Shoulder T-Shirt | Premium Gaming Streetwear",
    price: 599,
    image: "/products/r6-oversized.svg",
  },
  {
    id: "ot-5",
    name: "Player Unknown - Victory Tshirt | Premium Gaming Drop Shoulder",
    price: 599,
    image: "/products/pubg-oversized.svg",
  },
];

export const girlSquad: Product[] = [
  {
    id: "gs-1",
    name: "The Mother of Dragons | Beige Acid Wash Drop Shoulder Tee",
    price: 699,
    image: "/products/dragons-girls.svg",
  },
  {
    id: "gs-2",
    name: "Zero Two - Darling in the Franxx Oversized Drop Hoodie | Pink Edition",
    price: 890,
    image: "/products/zerotwo-girls.svg",
  },
  {
    id: "gs-3",
    name: "Asuna - Sword Art Online Oversized Drop Hoodie | White Edition",
    price: 790,
    originalPrice: 1199,
    onSale: true,
    image: "/products/asuna-girls.svg",
  },
  {
    id: "gs-4",
    name: "Mikasa - AOT Angel of Freedom Acid Wash Sweatshirt",
    price: 699,
    originalPrice: 1200,
    onSale: true,
    image: "/products/mikasa-girls.svg",
  },
  {
    id: "gs-5",
    name: "Violet Evergarden - Grace & Emotion Oversized Hoodie | Lavender Edition",
    price: 790,
    originalPrice: 1200,
    onSale: true,
    image: "/products/violet-girls.svg",
  },
];

export const categories = [
  { name: "Anime Jerseys", slug: "anime-jerseys", image: "/categories/anime-jerseys.svg" },
  { name: "Acid Wash Drop Collection", slug: "acid-wash", image: "/categories/acid-wash.svg" },
  { name: "Girl Squad Collections", slug: "girl-squad", image: "/categories/girl-squad.svg" },
  { name: "Hawaiian Shirts", slug: "hawaiian-shirts", image: "/categories/hawaiian.svg" },
];

export const faqItems = [
  {
    question: "Do you have any bundle offers or discounts?",
    answer:
      "Yes! We frequently run bundle deals and seasonal discounts. Follow our Instagram page and subscribe to our newsletter to stay updated on the latest offers and exclusive promo codes.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply browse our collections, add your favorite items to the cart, and proceed to checkout. Fill in your delivery details, choose your payment method, and confirm your order. You'll receive an order confirmation via SMS or email.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bKash, Nagad, Rocket, and bank transfers. For outside Dhaka orders, we may require advance payment via any of these methods.",
  },
  {
    question: "Do you offer Cash on Delivery?",
    answer:
      "Yes, we offer Cash on Delivery (COD) within Dhaka. For orders outside Dhaka, a partial advance payment may be required.",
  },
  {
    question: "Can I cancel my order after confirming?",
    answer:
      "You can cancel your order within 2 hours of placing it by contacting our support team. After the order has been processed for shipping, cancellation is no longer possible.",
  },
  {
    question: "Do you have discount codes?",
    answer:
      "Yes, we regularly share discount codes on our Instagram page and through our email newsletter. Make sure to follow us @vaivene to catch the latest codes!",
  },
  {
    question: "For outside Dhaka, how does the advance work?",
    answer:
      "For deliveries outside Dhaka, we require a 50% advance payment via bKash, Nagad, or bank transfer. Once the advance is confirmed, your order will be processed and shipped within 2-3 business days.",
  },
];
