export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  onSale?: boolean;
  image: string;
  tag?: string;
}

const p = (bg: string, text: string) =>
  `https://placehold.co/400x500/${bg}/ffffff?text=${encodeURIComponent(text)}&font=montserrat`;

const cat = (bg: string, text: string) =>
  `https://placehold.co/400x300/${bg}/ffffff?text=${encodeURIComponent(text)}&font=montserrat`;


export const animeJerseys: Product[] = [
  {
    id: "aj-1",
    name: "Madara Uchiha | Premium Anime Jersey - Oversized Streetwear",
    price: 650,
    image: p("1a1a2e", "MADARA UCHIHA JERSEY"),
    tag: "NEW",
  },
  {
    id: "aj-2",
    name: "Roronoa Zoro Premium Anime Jersey - Oversized Streetwear",
    price: 650,
    image: p("162440", "RORONOA ZORO JERSEY"),
  },
  {
    id: "aj-3",
    name: "Monkey D. Luffy Premium Anime Jersey - Oversized Streetwear",
    price: 650,
    image: p("8B0000", "MONKEY D. LUFFY JERSEY"),
    tag: "BESTSELLER",
  },
  {
    id: "aj-4",
    name: "Ichigo Kurosaki | Premium Anime Jersey - Oversized Streetwear",
    price: 650,
    image: p("4a148c", "ICHIGO KUROSAKI JERSEY"),
  },
  {
    id: "aj-5",
    name: "Portgas D. Ace | Premium Anime Jersey - Oversized Streetwear",
    price: 650,
    image: p("b71c1c", "PORTGAS D. ACE JERSEY"),
  },
];

export const acidWashCollection: Product[] = [
  {
    id: "aw-1",
    name: "Fullmetal Alchemist - Brotherhood Streetwear Drop Tee - Acid Wash Edition",
    price: 699,
    image: p("263238", "FMA BROTHERHOOD ACID WASH"),
    tag: "NEW",
  },
  {
    id: "aw-2",
    name: "Spider-Inspired | Acid Wash Oversized Drop Shoulder T-Shirt",
    price: 699,
    image: p("b71c1c", "SPIDER INSPIRED ACID WASH"),
  },
  {
    id: "aw-3",
    name: "Eren Yeager Acid Wash Drop Shoulder Tee | Premium Streetwear",
    price: 699,
    image: p("1b5e20", "EREN YEAGER ACID WASH"),
  },
  {
    id: "aw-4",
    name: "Killua Zoldyck HxH Streetwear Tee - Acid Wash Edition",
    price: 699,
    image: p("0d47a1", "KILLUA ZOLDYCK ACID WASH"),
  },
  {
    id: "aw-5",
    name: "Denji Chainsawman Streetwear Tee - Acid Wash Edition",
    price: 699,
    image: p("4a148c", "DENJI CHAINSAWMAN ACID WASH"),
  },
];

export const bestSellers: Product[] = [
  {
    id: "bs-1",
    name: "Tanjiro Kamado Demon Slayer Streetwear Tee - Acid Wash Edition",
    price: 699,
    image: p("004d40", "TANJIRO DEMON SLAYER TEE"),
  },
  {
    id: "bs-2",
    name: "Sun God Nika Premium Shirt - Oversized Drop Shoulder Fit Streetwear",
    price: 999,
    originalPrice: 1600,
    onSale: true,
    image: p("e65100", "SUN GOD NIKA PREMIUM"),
    tag: "SALE",
  },
  {
    id: "bs-3",
    name: "Toji Anime Baggy Sweatpants Heavyweight 300 GSM Gym & Streetwear",
    price: 1199,
    image: p("212121", "TOJI BAGGY SWEATPANTS"),
  },
  {
    id: "bs-4",
    name: "Zoro Egghead Heavyweight Drop-Premium Zip Hoodie",
    price: 1599,
    originalPrice: 2000,
    onSale: true,
    image: p("0d1b2a", "ZORO EGGHEAD ZIP HOODIE"),
    tag: "SALE",
  },
  {
    id: "bs-5",
    name: "AOT: Wings of Freedom - Heavyweight Streetwear Hoodie",
    price: 1280,
    originalPrice: 1600,
    onSale: true,
    image: p("37474d", "AOT WINGS OF FREEDOM"),
    tag: "SALE",
  },
];

export const oversizedTees: Product[] = [
  {
    id: "ot-1",
    name: "Sung Jinwoo | Solo Leveling | Oversized Drop Shoulder T-shirt",
    price: 599,
    image: p("102040", "SUNG JINWOO SOLO LEVELING"),
    tag: "NEW",
  },
  {
    id: "ot-2",
    name: "Might Guy - Gate of Death Oversized Drop Shoulder Tee",
    price: 650,
    image: p("bf360c", "MIGHT GATE OF DEATH TEE"),
  },
  {
    id: "ot-3",
    name: "Maki Zenin - Oversized Drop Shoulder T-Shirt | Jujutsu Kaisen",
    price: 599,
    image: p("4a148c", "MAKI ZENIN JJK TEE"),
  },
  {
    id: "ot-4",
    name: "Rainbow Six Siege Inspired Oversized Drop Shoulder T-Shirt",
    price: 599,
    image: p("1565c0", "R6 SIEGE GAMING TEE"),
  },
  {
    id: "ot-5",
    name: "Player Unknown - Victory Tshirt | Premium Gaming Drop Shoulder",
    price: 599,
    image: p("37474d", "PUBG VICTORY TEE"),
  },
];

export const girlSquad: Product[] = [
  {
    id: "gs-1",
    name: "The Mother of Dragons | Beige Acid Wash Drop Shoulder Tee",
    price: 699,
    image: p("4e342e", "MOTHER OF DRAGONS TEE"),
  },
  {
    id: "gs-2",
    name: "Zero Two - Darling in the Franxx Oversized Drop Hoodie | Pink Edition",
    price: 890,
    image: p("c2185b", "ZERO TWO PINK HOODIE"),
    tag: "NEW",
  },
  {
    id: "gs-3",
    name: "Asuna - Sword Art Online Oversized Drop Hoodie | White Edition",
    price: 790,
    originalPrice: 1199,
    onSale: true,
    image: p("546e7a", "ASUNA SAO HOODIE"),
    tag: "SALE",
  },
  {
    id: "gs-4",
    name: "Mikasa - AOT Angel of Freedom Acid Wash Sweatshirt",
    price: 699,
    originalPrice: 1200,
    onSale: true,
    image: p("880e4f", "MIKASA AOT SWEATSHIRT"),
    tag: "SALE",
  },
  {
    id: "gs-5",
    name: "Violet Evergarden - Grace & Emotion Oversized Hoodie | Lavender Edition",
    price: 790,
    originalPrice: 1200,
    onSale: true,
    image: p("7b1fa2", "VIOLET EVERGARDEN HOODIE"),
    tag: "SALE",
  },
];

export const allProducts: Product[] = [
  ...animeJerseys,
  ...acidWashCollection,
  ...bestSellers,
  ...oversizedTees,
  ...girlSquad,
];

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

export const categories = [
  { name: "Anime Jerseys", slug: "anime-jerseys", image: cat("1a1a2e", "ANIME JERSEYS"), sectionId: "anime-jerseys" },
  { name: "Acid Wash Drop", slug: "acid-wash", image: cat("263238", "ACID WASH DROP"), sectionId: "acid-wash" },
  { name: "Girl Squad", slug: "girl-squad", image: cat("880e4f", "GIRL SQUAD"), sectionId: "girl-squad" },
  { name: "Hawaiian Shirts", slug: "hawaiian-shirts", image: cat("1b5e20", "HAWAIIAN SHIRTS"), sectionId: "#" },
];

export const instagramPosts = [
  { id: 1, color: "#1a1a2e", label: "@vaivene" },
  { id: 2, color: "#263238", label: "New Drop" },
  { id: 3, color: "#b71c1c", label: "Acid Wash" },
  { id: 4, color: "#0d47a1", label: "Anime Tee" },
  { id: 5, color: "#4a148c", label: "Hoodie" },
  { id: 6, color: "#1b5e20", label: "Process" },
  { id: 7, color: "#e65100", label: "Fan Edit" },
  { id: 8, color: "#004d40", label: "Behind" },
  { id: 9, color: "#880e4f", label: "Collection" },
  { id: 10, color: "#37474d", label: "Lookbook" },
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
