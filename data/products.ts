export const allProducts = [
  {
    id: 1,
    name: "Eco-Friendly Water Bottle",
    slug: "eco-friendly-water-bottle",
    description: "Sustainable, BPA-free water bottle made from recycled materials.",
    price: 24.99,
    category: "Home & Living",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    slug: "wireless-noise-cancelling-headphones",
    description: "Premium sound quality with active noise cancellation technology.",
    price: 149.99,
    category: "Electronics",
    image: "/placeholder.svg?height=400&width=400",
    longDescription: `
      <p>Experience audio like never before with our Wireless Noise-Cancelling Headphones. These premium headphones combine cutting-edge technology with exceptional comfort to deliver an immersive listening experience.</p>
      
      <p>The active noise cancellation technology effectively blocks out ambient noise, allowing you to focus on your music, podcasts, or calls without distractions. Whether you're commuting, working in a busy office, or traveling, these headphones create a peaceful audio environment.</p>
      
      <p>With high-resolution audio and finely tuned acoustics, every note and word comes through with remarkable clarity and depth. The balanced sound profile ensures that you hear your audio content exactly as it was intended to be heard.</p>
      
      <p>The wireless design gives you freedom of movement, while the long-lasting battery provides up to 30 hours of playback time on a single charge. A quick 10-minute charge gives you an additional 5 hours of listening time, ensuring that your headphones are ready when you are.</p>
      
      <p>Designed for all-day comfort, the soft ear cushions and adjustable headband allow for extended listening sessions without discomfort. The intuitive touch controls make it easy to adjust volume, skip tracks, and answer calls with simple gestures.</p>
    `,
    colors: ["Black", "Silver", "Blue"],
    features: [
      "Active Noise Cancellation",
      "30-hour Battery Life",
      "High-Resolution Audio",
      "Comfortable Over-Ear Design",
      "Touch Controls",
      "Voice Assistant Compatible",
    ],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      Impedance: "32 Ohm",
      "Bluetooth Version": "5.0",
      "Battery Life": "Up to 30 hours",
      "Charging Time": "2 hours",
      Weight: "250g",
    },
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    slug: "organic-cotton-tshirt",
    description: "Soft, comfortable t-shirt made from 100% organic cotton.",
    price: 29.99,
    category: "Clothing",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Smart Fitness Tracker",
    slug: "smart-fitness-tracker",
    description: "Track your workouts, heart rate, sleep, and more with this advanced fitness wearable.",
    price: 89.99,
    category: "Electronics",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    name: "Bamboo Cutting Board Set",
    slug: "bamboo-cutting-board-set",
    description: "Durable, eco-friendly bamboo cutting boards in three convenient sizes.",
    price: 34.99,
    category: "Home & Living",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 6,
    name: "Natural Face Serum",
    slug: "natural-face-serum",
    description: "Hydrating face serum with natural ingredients for all skin types.",
    price: 45.99,
    category: "Beauty & Personal Care",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 7,
    name: "Yoga Mat",
    slug: "yoga-mat",
    description: "Non-slip, eco-friendly yoga mat perfect for all types of yoga practices.",
    price: 39.99,
    category: "Sports & Outdoors",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 8,
    name: "Portable Bluetooth Speaker",
    slug: "portable-bluetooth-speaker",
    description: "Waterproof, durable speaker with amazing sound quality for outdoor adventures.",
    price: 79.99,
    category: "Electronics",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 9,
    name: "Minimalist Wallet",
    slug: "minimalist-wallet",
    description: "Slim, RFID-blocking wallet that holds all your essentials without the bulk.",
    price: 19.99,
    category: "Clothing",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 10,
    name: "Smart Home Security Camera",
    slug: "smart-home-security-camera",
    description: "HD security camera with motion detection, night vision, and smartphone alerts.",
    price: 129.99,
    category: "Electronics",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 11,
    name: "Organic Skincare Set",
    slug: "organic-skincare-set",
    description: "Complete skincare routine with natural, cruelty-free ingredients for all skin types.",
    price: 89.99,
    category: "Beauty & Personal Care",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 12,
    name: "Adjustable Dumbbell Set",
    slug: "adjustable-dumbbell-set",
    description: "Space-saving adjustable dumbbells perfect for home workouts and strength training.",
    price: 199.99,
    category: "Sports & Outdoors",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 13,
    name: "Ceramic Coffee Mug Set",
    slug: "ceramic-coffee-mug-set",
    description: "Set of 4 handcrafted ceramic mugs in modern, minimalist design.",
    price: 49.99,
    category: "Home & Living",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 14,
    name: "Linen Bedding Set",
    slug: "linen-bedding-set",
    description: "Luxurious, breathable 100% linen bedding for a comfortable night's sleep.",
    price: 159.99,
    category: "Home & Living",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 15,
    name: "Wireless Earbuds",
    slug: "wireless-earbuds",
    description: "Premium sound quality with long battery life and comfortable fit for all-day wear.",
    price: 99.99,
    category: "Electronics",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Home & Living" },
  { id: 4, name: "Beauty & Personal Care" },
  { id: 5, name: "Sports & Outdoors" },
]

export const priceRanges = [
  { value: "all", label: "All Prices" },
  { value: "under-25", label: "Under $25" },
  { value: "25-50", label: "$25 to $50" },
  { value: "50-100", label: "$50 to $100" },
  { value: "over-100", label: "Over $100" },
]

export function getProductBySlug(slug: string) {
  return allProducts.find((product) => product.slug === slug)
}

export function getRelatedProducts(currentSlug: string, category: string, limit = 2) {
  return allProducts.filter((product) => product.slug !== currentSlug && product.category === category).slice(0, limit)
}
