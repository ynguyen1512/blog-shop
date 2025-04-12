import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Container } from "@/components/container"

export default function AboutPage() {
  return (
    <Container className="py-12 md:py-16 lg:py-24">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Empowering merchants with knowledge, insights, and carefully curated products since 2020.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-16 items-center">
        <div>
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="ShopSage team working together"
            width={600}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            At ShopSage, we believe that retail success comes from a blend of timeless wisdom and cutting-edge
            innovation. Our mission is to bridge this gap by providing merchants with actionable insights, trend
            forecasts, and carefully selected products that help them thrive in today's competitive landscape.
          </p>
          <p className="text-muted-foreground">
            We're passionate about empowering businesses of all sizes with the knowledge and tools they need to create
            exceptional shopping experiences. Whether you're just starting out or looking to scale your established
            brand, ShopSage is your trusted partner in retail excellence.
          </p>
        </div>
      </div>

      <Separator className="my-16" />

      {/* Values Section */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <p className="mt-2 text-muted-foreground">The principles that guide everything we do</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title}>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-emerald-500">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-16" />

      {/* Team Section */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">Meet Our Team</h2>
          <p className="mt-2 text-muted-foreground">The experts behind ShopSage</p>
        </div>

        <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mb-4 overflow-hidden rounded-full mx-auto max-w-[120px] sm:max-w-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="aspect-square object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-16" />

      {/* Partners Section */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">Our Partners</h2>
          <p className="mt-2 text-muted-foreground">Trusted brands we work with</p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="max-h-12 w-auto grayscale transition-all hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 rounded-lg bg-gradient-to-r from-teal-50 to-emerald-50 p-8 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Join the ShopSage Community</h2>
          <p className="mt-4 text-muted-foreground">
            Connect with fellow merchants, access exclusive content, and stay updated on the latest retail trends.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/blog">
              <Button className="w-full sm:w-auto">
                Explore Our Insights
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

// Sample data
import { Lightbulb, Shield, Zap, BarChart, Users, Heart } from "lucide-react"

const values = [
  {
    title: "Quality Over Quantity",
    description:
      "We focus on delivering high-value content and products that truly make a difference for our community.",
    icon: Lightbulb,
  },
  {
    title: "Integrity & Transparency",
    description: "We're committed to honest recommendations and transparent practices in everything we do.",
    icon: Shield,
  },
  {
    title: "Innovation",
    description:
      "We constantly explore new ideas and technologies to keep our community at the cutting edge of retail.",
    icon: Zap,
  },
  {
    title: "Data-Driven Insights",
    description: "Our recommendations and strategies are backed by thorough research and analysis.",
    icon: BarChart,
  },
  {
    title: "Community First",
    description: "We prioritize building meaningful relationships with our community of merchants and partners.",
    icon: Users,
  },
  {
    title: "Sustainability",
    description: "We promote responsible business practices that benefit people and the planet.",
    icon: Heart,
  },
]

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Jamie Chen",
    role: "Head of Content",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Taylor Williams",
    role: "Product Curator",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Jordan Smith",
    role: "Marketing Director",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const partners = [
  {
    name: "Shopify",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Stripe",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "BigCommerce",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "WooCommerce",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Klaviyo",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Mailchimp",
    logo: "/placeholder.svg?height=60&width=120",
  },
]
