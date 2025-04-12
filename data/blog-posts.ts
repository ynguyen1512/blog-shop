import ai from '../public/images/ai.jpg'
import behavior from '../public/images/behavior.webp'
import revenue from '../public/images/builindg-revenue.webp'
import crossBorder from '../public/images/cross-border.png'
import trend from '../public/images/e-commerce-trend.png'
import sale from '../public/images/increase-sale.png'
import increaseShopping from '../public/images/increase-shopping.jpg'
import mobile from '../public/images/mobile-first.webp'
import optimize from '../public/images/optimize-product.jpeg'
import riseEcommerce from '../public/images/rise-ecommerce.png'
import seo from '../public/images/seo.jpg'
import strategy from '../public/images/strategy.webp'
import sus from '../public/images/sustainable.webp'
import transforming from '../public/images/transforming.webp'
import voice from '../public/images/voice.webp'

export const allPosts = [
  {
    id: 1,
    title: "10 E-commerce Trends That Will Define 2023",
    slug: "ecommerce-trends-2023",
    excerpt:
      "Discover the latest trends that are shaping the future of online retail and how to stay ahead of the competition.",
    date: "June 12, 2023",
    category: "Trends",
    image: trend
  },
  {
    id: 2,
    title: "How to Optimize Your Product Pages for Higher Conversion",
    slug: "optimize-product-pages-conversion",
    excerpt:
      "Learn the key elements of high-converting product pages and actionable tips to implement them on your store.",
    date: "May 28, 2023",
    category: "Guides",
    image: optimize
  },
  {
    id: 3,
    title: "Building a Sustainable E-commerce Business in 2023",
    slug: "sustainable-ecommerce-business",
    excerpt:
      "Explore strategies for creating an environmentally conscious online store that resonates with modern consumers.",
    date: "May 15, 2023",
    category: "Trends",
    image: sus
  },
  {
    id: 4,
    title: "How We Increased Conversion Rate by 45% for an Online Fashion Store",
    slug: "fashion-store-conversion-case-study",
    excerpt: "A detailed case study on how we optimized the user experience and checkout process to boost sales.",
    date: "May 5, 2023",
    category: "Case Studies",
    image: increaseShopping
  },
  {
    id: 5,
    title: "The Ultimate Guide to E-commerce SEO in 2023",
    slug: "ecommerce-seo-guide-2023",
    excerpt:
      "Everything you need to know about optimizing your online store for search engines to drive organic traffic.",
    date: "April 22, 2023",
    category: "Guides",
    image: seo
  },
  {
    id: 6,
    title: "How to Build an Effective Email Marketing Strategy for Your E-commerce Store",
    slug: "email-marketing-strategy-ecommerce",
    excerpt:
      "Learn how to create email campaigns that drive sales, build customer loyalty, and increase lifetime value.",
    date: "April 10, 2023",
    category: "Guides",
    image: strategy
  },
  {
    id: 7,
    title: "The Rise of Social Commerce: How to Sell on Instagram and TikTok",
    slug: "social-commerce-instagram-tiktok",
    excerpt: "A comprehensive guide to leveraging social media platforms as direct sales channels for your products.",
    date: "March 28, 2023",
    category: "Trends",
    image: riseEcommerce
  },
  {
    id: 8,
    title: "Mobile-First E-commerce: Optimizing Your Store for Smartphone Users",
    slug: "mobile-first-ecommerce-optimization",
    excerpt: "Best practices for creating a seamless shopping experience for the growing number of mobile shoppers.",
    date: "March 15, 2023",
    category: "Guides",
    image: mobile,
  },
  {
    id: 9,
    title: "How We Helped a Small Business Increase Online Sales by 200%",
    slug: "small-business-sales-increase-case-study",
    excerpt:
      "A case study exploring the strategies we implemented to help a local retailer thrive in the digital marketplace.",
    date: "March 3, 2023",
    category: "Case Studies",
    image: sale
  },
  {
    id: 10,
    title: "The Psychology of E-commerce: Understanding Customer Behavior",
    slug: "psychology-ecommerce-customer-behavior",
    excerpt:
      "Insights into the psychological factors that influence online shopping decisions and how to leverage them.",
    date: "February 20, 2023",
    category: "Guides",
    image: behavior
  },
  {
    id: 11,
    title: "Artificial Intelligence in Retail: Current Applications and Future Possibilities",
    slug: "ai-in-retail-applications-future",
    excerpt:
      "Exploring how AI is transforming the retail landscape and what innovations we can expect in the coming years.",
    date: "February 8, 2023",
    category: "Trends",
    image: ai
  },
  {
    id: 12,
    title: "Subscription Models: Building Recurring Revenue for Your E-commerce Business",
    slug: "subscription-models-recurring-revenue",
    excerpt:
      "A guide to implementing subscription services to create predictable income and increase customer lifetime value.",
    date: "January 25, 2023",
    category: "Guides",
    image: revenue
  },
  {
    id: 13,
    title: "Transforming a Traditional Retailer into an E-commerce Success Story",
    slug: "traditional-retailer-ecommerce-transformation",
    excerpt:
      "How we helped a 50-year-old brick-and-mortar business successfully transition to the digital marketplace.",
    date: "January 12, 2023",
    category: "Case Studies",
    image: transforming
  },
  {
    id: 14,
    title: "Voice Commerce: Preparing Your Store for the Audio Shopping Revolution",
    slug: "voice-commerce-audio-shopping",
    excerpt: "Strategies for optimizing your e-commerce business for voice search and smart speaker shopping.",
    date: "January 5, 2023",
    category: "Trends",
    image: voice
  },
  {
    id: 15,
    title: "Cross-Border E-commerce: Expanding Your Business Globally",
    slug: "cross-border-ecommerce-global-expansion",
    excerpt:
      "A comprehensive guide to international selling, including logistics, payment methods, and cultural considerations.",
    date: "December 20, 2022",
    category: "Guides",
    image: crossBorder
  },
]

export function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 2) {
  return allPosts.filter((post) => post.slug !== currentSlug && post.category === category).slice(0, limit)
}
