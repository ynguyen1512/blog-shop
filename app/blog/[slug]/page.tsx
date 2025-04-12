"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { useEffect, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/container"
import { getPostBySlug, getRelatedPosts } from "@/data/blog-posts"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Get post data based on the slug
  const post = getPostBySlug(params.slug)
  const progressBarRef = useRef<HTMLDivElement>(null)

  if (!post) {
    return (
      <Container className="py-6 md:py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <p className="mt-4 text-muted-foreground">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/blog">
            <Button className="mt-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </Container>
    )
  }

  // Get related posts
  const relatedPosts = getRelatedPosts(params.slug, post.category)

  // Simulate reading progress
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollTop = window.scrollY
        const docHeight = document.body.offsetHeight - window.innerHeight
        const scrollPercent = (scrollTop / docHeight) * 100

        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${scrollPercent}%`
        }
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-gray-100 z-50">
        <div
          id="reading-progress"
          className="h-full bg-primary transition-all duration-150"
          ref={progressBarRef}
          style={{ width: "0%" }}
        ></div>
      </div>

      <Container className="py-6 md:py-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/blog">
            <Button variant="ghost" className="mb-4 pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <time dateTime={post.date} className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {post.date}
              </time>
              <span>•</span>
              <span className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                Jane Smith
              </span>
              <span>•</span>
              <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{post.category}</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
          </div>
          <div className="mb-8 overflow-hidden rounded-lg">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>
          <div
            className="prose prose-gray max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{
              __html: `
              <p>${post.excerpt}</p>
              <p>The e-commerce landscape is constantly evolving, with new technologies, consumer preferences, and market dynamics shaping the way businesses operate online. As we move further into 2023, several key trends are emerging that will define the future of online retail. In this article, we'll explore the top 10 e-commerce trends that businesses should be aware of to stay competitive and meet the changing needs of their customers.</p>
              
              <h2>1. Personalization at Scale</h2>
              <p>Personalization has been a buzzword in e-commerce for years, but in 2023, we're seeing it implemented at a much larger scale and with greater sophistication. Advanced AI algorithms are now capable of analyzing vast amounts of customer data to deliver highly personalized shopping experiences, from product recommendations to customized email marketing campaigns.</p>
              <p>Businesses that leverage these technologies effectively can create more engaging and relevant experiences for their customers, leading to higher conversion rates and increased customer loyalty.</p>
              
              <h2>2. Sustainable and Ethical E-commerce</h2>
              <p>Consumers are increasingly conscious of the environmental and social impact of their purchasing decisions. In response, e-commerce businesses are adopting more sustainable practices, from eco-friendly packaging to ethical sourcing of products.</p>
              <p>Transparency about sustainability efforts is becoming a key differentiator for brands, with many consumers willing to pay a premium for products that align with their values.</p>
              
              <h2>3. Social Commerce Integration</h2>
              <p>The line between social media and e-commerce continues to blur, with platforms like Instagram, TikTok, and Pinterest enhancing their shopping features. Social commerce allows businesses to create seamless shopping experiences directly within social media platforms, reducing friction in the customer journey.</p>
              <p>Brands that effectively leverage user-generated content and influencer partnerships can drive significant sales through these channels.</p>
              
              <h2>4. Voice Commerce</h2>
              <p>As voice assistants like Amazon's Alexa, Google Assistant, and Apple's Siri become more sophisticated, voice commerce is gaining traction. Consumers are increasingly comfortable using voice commands to search for products and make purchases.</p>
              <p>E-commerce businesses should optimize their product listings for voice search and consider developing voice-specific shopping experiences to stay ahead of this trend.</p>
              
              <h2>5. Augmented Reality Shopping Experiences</h2>
              <p>Augmented reality (AR) is transforming the online shopping experience by allowing customers to visualize products in their own space before making a purchase. This is particularly valuable for categories like furniture, home decor, and fashion.</p>
              <p>AR can help reduce return rates and increase customer confidence in their purchasing decisions, making it a valuable investment for e-commerce businesses.</p>
            `,
            }}
          />

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id} className="group">
                  <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <time dateTime={relatedPost.date}>{relatedPost.date}</time>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{relatedPost.category}</span>
                      </div>
                      <h3 className="font-semibold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
