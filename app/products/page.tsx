"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, ShoppingBag, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Container } from "@/components/container"
import { Badge } from "@/components/ui/badge"

const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Home & Living" },
  { id: 4, name: "Beauty & Personal Care" },
  { id: 5, name: "Sports & Outdoors" },
]

const priceRanges = [
  { value: "all", label: "All Prices" },
  { value: "under-25", label: "Under $25" },
  { value: "25-50", label: "$25 to $50" },
  { value: "50-100", label: "$50 to $100" },
  { value: "over-100", label: "Over $100" },
]

const products = [
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

export default function ProductsPage() {
  // Filter states
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState("all")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  // Pagination
  const ITEMS_PER_PAGE = 6
  const [visibleProducts, setVisibleProducts] = useState(ITEMS_PER_PAGE)

  const loadMore = () => {
    setVisibleProducts((prev) => prev + ITEMS_PER_PAGE)
  }

  // Apply filters whenever filter states change
  useEffect(() => {
    let result = [...products]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (product) => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query),
      )
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter((product) => selectedCategories.includes(product.category))
    }

    // Apply price filter
    if (priceRange !== "all") {
      switch (priceRange) {
        case "under-25":
          result = result.filter((product) => product.price < 25)
          break
        case "25-50":
          result = result.filter((product) => product.price >= 25 && product.price <= 50)
          break
        case "50-100":
          result = result.filter((product) => product.price > 50 && product.price <= 100)
          break
        case "over-100":
          result = result.filter((product) => product.price > 100)
          break
      }
    }

    setFilteredProducts(result)
    // Reset visible products when filters change
    setVisibleProducts(ITEMS_PER_PAGE)
  }, [searchQuery, selectedCategories, priceRange])

  // Handle category checkbox changes
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setPriceRange("all")
  }

  // Get currently visible products
  const currentlyVisibleProducts = filteredProducts.slice(0, visibleProducts)

  return (
    <Container className="py-6 md:py-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Curated Collection</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Handpicked products selected for quality, design, and innovation.
          </p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden w-full">
                <Filter className="mr-2 h-4 w-4" />
                Filter
                {(selectedCategories.length > 0 || priceRange !== "all") && (
                  <Badge variant="secondary" className="ml-2">
                    {selectedCategories.length + (priceRange !== "all" ? 1 : 0)}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="flex flex-row items-center justify-between">
                <SheetTitle>Filters</SheetTitle>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </SheetHeader>
              <div className="grid gap-6 py-4">
                <div>
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mb-4"
                  />
                  {searchQuery && (
                    <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => setSearchQuery("")}>
                      <X className="h-4 w-4 mr-1" /> Clear search
                    </Button>
                  )}
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category.id}-mobile`}
                          checked={selectedCategories.includes(category.name)}
                          onCheckedChange={(checked) => handleCategoryChange(category.name, checked as boolean)}
                        />
                        <Label htmlFor={`category-${category.id}-mobile`}>{category.name}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Price Range</h3>
                  <RadioGroup value={priceRange} onValueChange={setPriceRange}>
                    {priceRanges.map((range) => (
                      <div key={range.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={range.value} id={`price-${range.value}-mobile`} />
                        <Label htmlFor={`price-${range.value}-mobile`}>{range.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="mt-4">
                  <Button onClick={() => setIsSheetOpen(false)} className="w-full">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden md:flex md:w-[300px]">
            <Input
              placeholder="Search products..."
              className="w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="hidden md:block">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Filters</h3>
              {(selectedCategories.length > 0 || priceRange !== "all") && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              )}
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category.id}`}
                      checked={selectedCategories.includes(category.name)}
                      onCheckedChange={(checked) => handleCategoryChange(category.name, checked as boolean)}
                    />
                    <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                  </div>
                ))}
              </div>
            </div>
            <Separator />
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Price Range</h3>
              <RadioGroup value={priceRange} onValueChange={setPriceRange}>
                {priceRanges.map((range) => (
                  <div key={range.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={range.value} id={`price-${range.value}`} />
                    <Label htmlFor={`price-${range.value}`}>{range.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="flex md:hidden">
            <Input
              placeholder="Search products..."
              className="w-full mb-6"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          ) : (
            <>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {Math.min(visibleProducts, filteredProducts.length)} of {filteredProducts.length} products
                </p>
                {(selectedCategories.length > 0 || priceRange !== "all" || searchQuery) && (
                  <div className="flex flex-wrap gap-2">
                    {searchQuery && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Search: {searchQuery}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0 ml-1"
                          onClick={() => setSearchQuery("")}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    )}
                    {selectedCategories.map((category) => (
                      <Badge key={category} variant="secondary" className="flex items-center gap-1">
                        {category}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0 ml-1"
                          onClick={() => handleCategoryChange(category, false)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                    {priceRange !== "all" && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {priceRanges.find((r) => r.value === priceRange)?.label}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-4 w-4 p-0 ml-1"
                          onClick={() => setPriceRange("all")}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    )}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {currentlyVisibleProducts.map((product) => (
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

              {visibleProducts < filteredProducts.length && (
                <div className="mt-8 flex justify-center">
                  <Button variant="outline" onClick={loadMore}>
                    Load More ({filteredProducts.length - visibleProducts} more)
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Container>
  )
}
