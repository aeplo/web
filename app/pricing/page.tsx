import { Button } from "@/components/ui/button"
import { PricingComparison } from "@/components/pricing-comparison"
import { CheckCircle, ArrowRight, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "Free VPS",
      price: "$0",
      description: "Perfect for learning and small projects",
      features: [
        { name: "CPU Cores", included: true, value: "4 vCore" },
        { name: "RAM", included: true, value: "16GB" },
        { name: "Storage", included: true, value: "50GB SSD" },
        { name: "Bandwidth", included: true, value: "1TB" },
        { name: "Operating System", included: true, value: "Linux" },
        { name: "Root Access", included: true },
        { name: "SSL Certificates", included: true },
        { name: "DDoS Protection", included: true },
        { name: "24/7 Support", included: true, value: "Community" },
        { name: "Backups", included: true, value: "Manual" },
        { name: "Control Panel", included: true },
        { name: "Priority Support", included: false },
        { name: "Windows OS", included: false },
        { name: "Phone Support", included: false },
      ],
      ctaText: "Get Started Free",
      ctaHref: "/vps",
      popular: true,
    },
    {
      name: "Starter",
      price: "$2.5",
      period: "month",
      description: "Great for small to medium applications",
      features: [
        { name: "CPU Cores", included: true, value: "4 vCores" },
        { name: "RAM", included: true, value: "20GB" },
        { name: "Storage", included: true, value: "100GB SSD" },
        { name: "Bandwidth", included: true, value: "Unlimited" },
        { name: "Operating System", included: true, value: "Any" },
        { name: "Root Access", included: true },
        { name: "SSL Certificates", included: true },
        { name: "DDoS Protection", included: true },
        { name: "24/7 Support", included: true, value: "Priority" },
        { name: "Backups", included: true, value: "Daily" },
        { name: "Control Panel", included: true },
        { name: "Priority Support", included: true },
        { name: "Windows OS", included: true },
        { name: "Phone Support", included: false },
      ],
      ctaText: "Choose Starter",
      ctaHref: "/contact",
    },
    {
      name: "Professional",
      price: "$9.99",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        { name: "CPU Cores", included: true, value: "5 vCores" },
        { name: "RAM", included: true, value: "22GB" },
        { name: "Storage", included: true, value: "250GB SSD" },
        { name: "Bandwidth", included: true, value: "Unlimited" },
        { name: "Operating System", included: true, value: "Any" },
        { name: "Root Access", included: true },
        { name: "SSL Certificates", included: true },
        { name: "DDoS Protection", included: true },
        { name: "24/7 Support", included: true, value: "Priority" },
        { name: "Backups", included: true, value: "Daily" },
        { name: "Control Panel", included: true },
        { name: "Priority Support", included: true },
        { name: "Windows OS", included: true },
        { name: "Phone Support", included: true },
      ],
      ctaText: "Choose Professional",
      ctaHref: "/contact",
    },
    // {
    //   name: "Enterprise",
    //   price: "$24.99",
    //   period: "month",
    //   description: "Maximum performance for demanding workloads",
    //   features: [
    //     { name: "CPU Cores", included: true, value: "6 vCores" },
    //     { name: "RAM", included: true, value: "32GB" },
    //     { name: "Storage", included: true, value: "1TB SSD" },
    //     { name: "Bandwidth", included: true, value: "Unlimited" },
    //     { name: "Operating System", included: true, value: "Any" },
    //     { name: "Root Access", included: true },
    //     { name: "SSL Certificates", included: true },
    //     { name: "DDoS Protection", included: true },
    //     { name: "24/7 Support", included: true, value: "Dedicated" },
    //     { name: "Backups", included: true, value: "Daily" },
    //     { name: "Control Panel", included: true },
    //     { name: "Priority Support", included: true },
    //     { name: "Windows OS", included: true },
    //     { name: "Phone Support", included: true },
    //   ],
    //   ctaText: "Choose Enterprise",
    //   ctaHref: "/contact",
    // },
  ]

  const faqs = [
    {
      question: "Is the free VPS really free?",
      answer:
        "Yes! Our free VPS is completely free with no hidden costs, no credit card required, and no time limits. We believe everyone should have access to reliable hosting infrastructure.",
    },
    {
      question: "Can I upgrade from free VPS to dedicated servers?",
      answer:
        "You can upgrade at any time. We'll help you migrate your data and applications to ensure a smooth transition with minimal downtime.",
    },
    {
      question: "What's included in the 24/7 support?",
      answer:
        "Free VPS users get community support through our forums and documentation. Paid plans include priority email support, and Professional/Enterprise plans include phone support.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, we'll provide a full refund, no questions asked.",
    },
    {
      question: "Can I install custom software?",
      answer:
        "Yes! All plans include full root/administrator access, so you can install any software you need. We support all major Linux distributions and Windows Server.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay by invoice with NET 30 terms.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Simple, <span className="text-primary">Transparent</span> Pricing
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Start with our free VPS and upgrade when you need more power. No hidden fees, no complicated contracts.
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground mb-12">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                30-Day Money Back
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                No Setup Fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Compare All Plans</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose the perfect plan for your needs. Start free and upgrade anytime.
            </p>
          </div>

          <PricingComparison tiers={pricingTiers} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center">
                      <HelpCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join thousands of developers and businesses who trust Aeplo for their hosting needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link href="/vps">
                  Start with Free VPS
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
