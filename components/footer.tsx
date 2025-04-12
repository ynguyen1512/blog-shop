import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto w-full">
        <div className="container px-4 py-12 md:px-6 md:py-16 mx-auto">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">About</h3>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  Our Story
                </Link>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-foreground">
                  Our Team
                </Link>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">Insights</h3>
                <Link href="/blog/category/trends" className="text-sm text-muted-foreground hover:text-foreground">
                  Trends
                </Link>
                <Link href="/blog/category/guides" className="text-sm text-muted-foreground hover:text-foreground">
                  Guides
                </Link>
                <Link
                  href="/blog/category/case-studies"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Case Studies
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">Products</h3>
                <Link
                  href="/products/category/electronics"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Electronics
                </Link>
                <Link
                  href="/products/category/clothing"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Clothing
                </Link>
                <Link href="/products/category/home" className="text-sm text-muted-foreground hover:text-foreground">
                  Home & Living
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">Contact</h3>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
                <Link href="/support" className="text-sm text-muted-foreground hover:text-foreground">
                  Support
                </Link>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} ShopSage. All rights reserved.
              </div>
              <div className="flex gap-4">
                <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
