"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Menu, Search, ShoppingCart, X } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Logo from "./logo"
import { useCart } from "@/context/cart-context"
import { Badge } from "@/components/ui/badge"

// Mock data for search
import { allPosts } from "@/data/blog-posts"
import { allProducts } from "@/data/products"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const pathname = usePathname()
  const { itemCount } = useCart()
  const router = useRouter()
  const searchInputRef = useRef<HTMLInputElement>(null)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Insights", href: "/blog" },
    { name: "Shop", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  useEffect(() => {
    if (searchQuery.length > 1) {
      // Search in products
      const productResults = allProducts
        .filter(
          (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .slice(0, 3)
        .map((product) => ({
          ...product,
          type: "product",
          url: `/products/${product.slug}`,
        }))

      // Search in blog posts
      const blogResults = allPosts
        .filter(
          (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .slice(0, 3)
        .map((post) => ({
          ...post,
          type: "blog",
          url: `/blog/${post.slug}`,
        }))

      setSearchResults([...productResults, ...blogResults])
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  const handleSearchResultClick = (url: string) => {
    router.push(url)
    setIsSearchOpen(false)
    setSearchQuery("")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
            <div className="flex gap-6 md:gap-10">
              <Logo />
              <nav className="hidden gap-6 md:flex">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === item.href ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-2">
              {isSearchOpen ? (
                <div className="relative flex items-center">
                  <form onSubmit={handleSearchSubmit}>
                    <Input
                      ref={searchInputRef}
                      type="search"
                      placeholder="Search products or articles..."
                      className="w-[150px] md:w-[300px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                  </form>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setIsSearchOpen(false)
                      setSearchQuery("")
                    }}
                    className="ml-2"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close search</span>
                  </Button>

                  {searchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50 max-h-[400px] overflow-auto">
                      {searchResults.map((result, index) => (
                        <div
                          key={`${result.type}-${result.id}`}
                          className="p-3 hover:bg-muted cursor-pointer border-b last:border-0"
                          onClick={() => handleSearchResultClick(result.url)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">{result.name || result.title}</div>
                              <div className="text-sm text-muted-foreground line-clamp-1">
                                {result.description || result.excerpt}
                              </div>
                            </div>
                            <Badge variant="outline">{result.type === "product" ? "Product" : "Article"}</Badge>
                          </div>
                        </div>
                      ))}
                      <div
                        className="p-2 text-center text-sm text-primary hover:underline cursor-pointer"
                        onClick={() => handleSearchSubmit({ preventDefault: () => {} } as any)}
                      >
                        View all results
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="mr-2">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              )}
              <Link href="/cart">
                <div className="relative">
                  <Button variant="ghost" size="icon" className="mr-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span className="sr-only">Cart</span>
                  </Button>
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {itemCount}
                    </span>
                  )}
                </div>
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="grid gap-6 text-lg font-medium">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`hover:text-primary ${
                          pathname === item.href ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
