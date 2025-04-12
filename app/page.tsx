import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import bottle from '../public/images/bottle.jpg'
import trends from '../public/images/e-commerce-trend.png'
import headphone from '../public/images/headphone.webp'
import heroImg from '../public/images/hero-img.avif'
import optimizeImg from '../public/images/optimize-product.jpeg'
import sustainable from '../public/images/sustainable.webp'
import tShirt from '../public/images/tshirt.jpg'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Retail Wisdom for the Modern Merchant
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Curated insights, trend forecasts, and handpicked products to elevate your online business.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link href="/blog">
                  <Button size="lg" className="w-full sm:w-auto px-8">
                    Read Latest Posts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Browse Products
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                alt="E-commerce blog hero image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                height={400}
                src={heroImg}
                width={800}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <Container>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Featured Content
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest from ShopSage</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover actionable strategies, emerging trends, and expert analyses to help your business thrive.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {featuredPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <time dateTime={post.date}>{post.date}</time>
                      <div className="text-xs px-2 py-1 bg-gray-100 rounded-full">{post.category}</div>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="font-medium">Read more</div>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                View All Posts
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* E-commerce Highlights */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trending Products</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover our most popular items that customers are loving right now.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {trendingProducts.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id}>
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square w-full overflow-hidden bg-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <div className="font-bold text-lg">${product.price.toFixed(2)}</div>
                    <Button size="sm" variant="outline">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/products">
              <Button size="lg">
                Shop All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <Container>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join the Sage Circle</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get weekly retail insights, trend forecasts, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Button type="submit" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

const featuredPosts = [
  {
    id: 1,
    title: "10 E-commerce Trends That Will Define 2023",
    slug: "ecommerce-trends-2023",
    excerpt:
      "Discover the latest trends that are shaping the future of online retail and how to stay ahead of the competition.",
    date: "June 12, 2023",
    category: "Trends",
    image: trends,
  },
  {
    id: 2,
    title: "How to Optimize Your Product Pages for Higher Conversion",
    slug: "optimize-product-pages-conversion",
    excerpt:
      "Learn the key elements of high-converting product pages and actionable tips to implement them on your store.",
    date: "May 28, 2023",
    category: "Conversion",
    image: optimizeImg,
  },
  {
    id: 3,
    title: "Building a Sustainable E-commerce Business in 2023",
    slug: "sustainable-ecommerce-business",
    excerpt:
      "Explore strategies for creating an environmentally conscious online store that resonates with modern consumers.",
    date: "May 15, 2023",
    category: "Sustainability",
    image: sustainable
  },
]

const trendingProducts = [
  {
    id: 1,
    name: "Eco-Friendly Water Bottle",
    slug: "eco-friendly-water-bottle",
    description: "Sustainable, BPA-free water bottle made from recycled materials.",
    price: 24.99,
    image: bottle
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    slug: "wireless-noise-cancelling-headphones",
    description: "Premium sound quality with active noise cancellation technology.",
    price: 149.99,
    image: headphone
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    slug: "organic-cotton-tshirt",
    description: "Soft, comfortable t-shirt made from 100% organic cotton.",
    price: 29.99,
    image: tShirt
  },
]
