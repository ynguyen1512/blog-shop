"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, FileText, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Container } from "@/components/container"
import { allPosts } from "@/data/blog-posts"
import { allProducts } from "@/data/products"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  // Search in products
  const productResults = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()),
  )

  // Search in blog posts
  const blogResults = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()),
  )

  const totalResults = productResults.length + blogResults.length

  return (
    <Container className="py-6 md:py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Search Results</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {totalResults} results for "{query}"
        </p>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Results ({totalResults})</TabsTrigger>
          <TabsTrigger value="products">Products ({productResults.length})</TabsTrigger>
          <TabsTrigger value="articles">Articles ({blogResults.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          {productResults.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Products</h2>
                <Link href="/search?q={query}&type=products">
                  <Button variant="ghost" size="sm">
                    View all products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {productResults.slice(0, 3).map((product) => (
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
                      <CardHeader className="p-4">
                        <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                      </CardContent>
                      <CardFooter className="p-4 flex justify-between">
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
            </div>
          )}

          {blogResults.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Articles</h2>
                <Link href="/search?q={query}&type=articles">
                  <Button variant="ghost" size="sm">
                    View all articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {blogResults.slice(0, 3).map((post) => (
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
            </div>
          )}

          {totalResults === 0 && (
            <div className="text-center py-16">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">No results found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn't find any matches for "{query}". Try adjusting your search term.
              </p>
              <Link href="/">
                <Button>Back to Home</Button>
              </Link>
            </div>
          )}
        </TabsContent>

        <TabsContent value="products">
          {productResults.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productResults.map((product) => (
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
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between">
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
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                <ShoppingBag className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">No products found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn't find any products matching "{query}". Try adjusting your search term.
              </p>
              <Link href="/products">
                <Button>Browse All Products</Button>
              </Link>
            </div>
          )}
        </TabsContent>

        <TabsContent value="articles">
          {blogResults.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogResults.map((post) => (
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
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">No articles found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn't find any articles matching "{query}". Try adjusting your search term.
              </p>
              <Link href="/blog">
                <Button>Browse All Articles</Button>
              </Link>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </Container>
  )
}
