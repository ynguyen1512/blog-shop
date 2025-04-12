"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Heart, ShoppingBag, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/context/cart-context"
import { getProductBySlug, getRelatedProducts } from "@/data/products"
import { Container } from "@/components/container"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { toast } = useToast()
  const { addItem } = useCart()
  const [selectedColor, setSelectedColor] = useState("Black")
  const [quantity, setQuantity] = useState("1")
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  // Get product data based on the slug
  const product = getProductBySlug(params.slug)

  if (!product) {
    return (
      <Container className="py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="mt-4 text-muted-foreground">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/products">
            <Button className="mt-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </Container>
    )
  }

  // Get related products
  const relatedProducts = getRelatedProducts(params.slug, product.category)

  const handleAddToCart = () => {
    setIsAddingToCart(true)

    // Simulate a small delay for better UX
    setTimeout(() => {
      addItem({
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        image: product.image,
        category: product.category,
      })

      toast({
        title: "Added to cart",
        description: `${product.name} (${selectedColor}, Qty: ${quantity}) has been added to your cart.`,
      })

      setIsAddingToCart(false)
    }, 600)
  }

  return (
    <Container className="py-6 md:py-8">
      <Link href="/products">
        <Button variant="ghost" className="mb-6 pl-0">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {Array(4)
              .fill(product.image)
              .map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg border">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - Image ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full object-cover"
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(42 reviews)</span>
            </div>
            <div className="mt-4 text-3xl font-bold">${product.price.toFixed(2)}</div>
          </div>

          <div className="space-y-4">
            {product.colors && (
              <div className="space-y-2">
                <Label htmlFor="color">Color</Label>
                <RadioGroup id="color" value={selectedColor} onValueChange={setSelectedColor} className="flex gap-2">
                  {product.colors.map((color) => (
                    <Label
                      key={color}
                      htmlFor={`color-${color.toLowerCase()}`}
                      className="cursor-pointer rounded-md border px-3 py-2 transition-colors [&:has(:checked)]:bg-primary [&:has(:checked)]:text-primary-foreground"
                    >
                      <RadioGroupItem id={`color-${color.toLowerCase()}`} value={color} className="sr-only" />
                      {color}
                    </Label>
                  ))}
                </RadioGroup>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Select value={quantity} onValueChange={setQuantity}>
                <SelectTrigger id="quantity" className="w-24">
                  <SelectValue placeholder="Quantity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button size="lg" className="w-full" onClick={handleAddToCart} disabled={isAddingToCart}>
                {isAddingToCart ? (
                  <>
                    <svg
                      className="mr-2 h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Adding...
                  </>
                ) : (
                  <>
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <Heart className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Key Features</h3>
            <ul className="space-y-1">
              {product.features?.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <div
              className="prose prose-gray max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: product.longDescription || `<p>${product.description}</p>` }}
            />
          </TabsContent>
          <TabsContent value="specifications" className="mt-6">
            <div className="overflow-hidden rounded-lg border">
              <table className="w-full text-sm">
                <tbody>
                  {product.specifications ? (
                    Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key} className="border-b last:border-0">
                        <th className="p-4 text-left font-medium">{key}</th>
                        <td className="p-4 text-muted-foreground">{value}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2} className="p-4 text-center text-muted-foreground">
                        No specifications available for this product.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <div className="text-lg font-medium">4.0 out of 5</div>
              </div>
              <p className="text-muted-foreground">Based on 42 reviews</p>
              <Button>Write a Review</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((relatedProduct) => (
            <Link href={`/products/${relatedProduct.slug}`} key={relatedProduct.id}>
              <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-square w-full overflow-hidden bg-gray-100">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold line-clamp-1 mb-2">{relatedProduct.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{relatedProduct.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="font-bold">${relatedProduct.price.toFixed(2)}</div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  )
}
