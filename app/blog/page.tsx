"use client"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import ai from '../../public/images/ai.jpg'
import behavior from '../../public/images/behavior.webp'
import buildingRevenue from '../../public/images/builindg-revenue.webp'
import trends from '../../public/images/e-commerce-trend.png'
import increaseSale from '../../public/images/increase-sale.png'
import increaseShopping from '../../public/images/increase-shopping.jpg'
import mobileFirst from '../../public/images/mobile-first.webp'
import optimize from '../../public/images/optimize-product.jpeg'
import riseEcommerce from '../../public/images/rise-ecommerce.png'
import seo from '../../public/images/seo.jpg'
import strategy from '../../public/images/strategy.webp'
import sustainable from '../../public/images/sustainable.webp'
export default function BlogPage() {
  const ITEMS_PER_PAGE = 6
  const [visiblePosts, setVisiblePosts] = useState(ITEMS_PER_PAGE)
  const [visibleTrendsPosts, setVisibleTrendsPosts] = useState(ITEMS_PER_PAGE)
  const [visibleGuidesPosts, setVisibleGuidesPosts] = useState(ITEMS_PER_PAGE)
  const [visibleCaseStudiesPosts, setVisibleCaseStudiesPosts] = useState(ITEMS_PER_PAGE)

  const loadMore = () => {
    setVisiblePosts((prev) => prev + ITEMS_PER_PAGE)
  }

  const loadMoreTrends = () => {
    setVisibleTrendsPosts((prev) => prev + ITEMS_PER_PAGE)
  }

  const loadMoreGuides = () => {
    setVisibleGuidesPosts((prev) => prev + ITEMS_PER_PAGE)
  }

  const loadMoreCaseStudies = () => {
    setVisibleCaseStudiesPosts((prev) => prev + ITEMS_PER_PAGE)
  }

  return (
    <Container className="py-6 md:py-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Retail Insights</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Expert analyses, strategies, and forecasts to help your business stay ahead of the curve.
          </p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button variant="outline" className="w-full md:w-auto">
            Subscribe
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mt-6">
        <TabsList className="mb-6 w-full justify-start overflow-auto">
          <TabsTrigger value="all">All Posts</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allPosts.slice(0, visiblePosts).map((post) => (
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
          {visiblePosts < allPosts.length && (
            <div className="flex justify-center">
              <Button variant="outline" onClick={loadMore}>
                Load More
              </Button>
            </div>
          )}
        </TabsContent>
        <TabsContent value="trends" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allPosts
              .filter((post) => post.category === "Trends")
              .slice(0, visibleTrendsPosts)
              .map((post) => (
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
          {visibleTrendsPosts < allPosts.filter((post) => post.category === "Trends").length && (
            <div className="flex justify-center">
              <Button variant="outline" onClick={loadMoreTrends}>
                Load More
              </Button>
            </div>
          )}
        </TabsContent>
        <TabsContent value="guides" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allPosts
              .filter((post) => post.category === "Guides")
              .slice(0, visibleGuidesPosts)
              .map((post) => (
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
          {visibleGuidesPosts < allPosts.filter((post) => post.category === "Guides").length && (
            <div className="flex justify-center">
              <Button variant="outline" onClick={loadMoreGuides}>
                Load More
              </Button>
            </div>
          )}
        </TabsContent>
        <TabsContent value="case-studies" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allPosts
              .filter((post) => post.category === "Case Studies")
              .slice(0, visibleCaseStudiesPosts)
              .map((post) => (
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
          {visibleCaseStudiesPosts < allPosts.filter((post) => post.category === "Case Studies").length && (
            <div className="flex justify-center">
              <Button variant="outline" onClick={loadMoreCaseStudies}>
                Load More
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </Container>
  )
}

const allPosts = [
  {
    id: 1,
    title: "10 E-commerce Trends That Will Define 2023",
    slug: "ecommerce-trends-2023",
    excerpt:
      "Discover the latest trends that are shaping the future of online retail and how to stay ahead of the competition.",
    date: "June 12, 2023",
    category: "Trends",
    image: trends
  },
  {
    id: 2,
    title: "How to Optimize Your Product Pages for Higher Conversion",
    slug: "optimize-product-pages-conversion",
    excerpt:
      "Learn the key elements of high-converting product pages and actionable tips to implement them on your store.",
    date: "May 28, 2023",
    category: "Guides",
    image: optimize,
  },
  {
    id: 3,
    title: "Building a Sustainable E-commerce Business in 2023",
    slug: "sustainable-ecommerce-business",
    excerpt:
      "Explore strategies for creating an environmentally conscious online store that resonates with modern consumers.",
    date: "May 15, 2023",
    category: "Trends",
    image: sustainable
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
    image: seo,
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
    image: mobileFirst
  },
  {
    id: 9,
    title: "How We Helped a Small Business Increase Online Sales by 200%",
    slug: "small-business-sales-increase-case-study",
    excerpt:
      "A case study exploring the strategies we implemented to help a local retailer thrive in the digital marketplace.",
    date: "March 3, 2023",
    category: "Case Studies",
    image: increaseSale
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
    image: buildingRevenue
  },
]
