"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Container } from "@/components/container"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value) => {
    setFormState((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSelectChange = (value) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "general",
      })
    }, 1500)
  }

  return (
    <Container className="py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have questions, feedback, or partnership inquiries? We'd love to hear from you.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-primary" />
              Email Us
            </CardTitle>
            <CardDescription>For general inquiries and support</CardDescription>
          </CardHeader>
          <CardContent>
            <a href="mailto:hello@shopsage.com" className="text-primary hover:underline">
              hello@shopsage.com
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-primary" />
              Call Us
            </CardTitle>
            <CardDescription>Monday-Friday, 9am-5pm EST</CardDescription>
          </CardHeader>
          <CardContent>
            <a href="tel:+1234567890" className="text-primary hover:underline">
              +1 (234) 567-890
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-primary" />
              Visit Us
            </CardTitle>
            <CardDescription>Our headquarters</CardDescription>
          </CardHeader>
          <CardContent>
            <address className="not-italic">
              123 Retail Row
              <br />
              Suite 456
              <br />
              San Francisco, CA 94103
            </address>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Inquiry Type</Label>
                <RadioGroup
                  value={formState.inquiryType}
                  onValueChange={handleRadioChange}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="general" />
                    <Label htmlFor="general" className="cursor-pointer">
                      General Inquiry
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partnership" id="partnership" />
                    <Label htmlFor="partnership" className="cursor-pointer">
                      Partnership
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="support" id="support" />
                    <Label htmlFor="support" className="cursor-pointer">
                      Support
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="feedback" id="feedback" />
                    <Label htmlFor="feedback" className="cursor-pointer">
                      Feedback
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select value={formState.subject} onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general-question">General Question</SelectItem>
                    <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                    <SelectItem value="content-suggestion">Content Suggestion</SelectItem>
                    <SelectItem value="partnership-proposal">Partnership Proposal</SelectItem>
                    <SelectItem value="technical-issue">Technical Issue</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? (
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
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-1 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}

const faqs = [
  {
    question: "How can I contribute content to ShopSage?",
    answer:
      "We welcome guest contributions from retail experts. Please send us a message using the form above with the subject 'Content Suggestion' and include your proposed topic and credentials.",
  },
  {
    question: "Do you offer consulting services for e-commerce businesses?",
    answer:
      "Yes, we provide tailored consulting services for businesses at various stages. Contact us with details about your needs, and our team will get back to you with more information.",
  },
  {
    question: "How do you select products for your curated collection?",
    answer:
      "Our product curation team evaluates items based on quality, innovation, value, and sustainability. We only feature products that meet our high standards and that we believe will benefit our community.",
  },
  {
    question: "Can I advertise my brand or product on ShopSage?",
    answer:
      "We offer select partnership opportunities for brands that align with our values. Please reach out with details about your brand for consideration.",
  },
]
