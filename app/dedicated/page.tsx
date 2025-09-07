import { Button } from "@/components/ui/button"
import { PlanCard } from "@/components/plan-card"
import { Server, Cpu, HardDrive, Wifi, Shield, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DedicatedPage() {
  const dedicatedPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "month",
      description: "Perfect for small to medium applications",
      specs: {
        CPU: "6 vCores",
        RAM: "32GB",
        Storage: "1TB NVMe",
        Bandwidth: "Unlimited",
        OS: "Any Linux/Windows",
        Support: "Priority",
      },
      features: [
        "Full root/admin access",
        "Choice of operating system",
        "Free SSL certificates",
        "DDoS protection",
        "99.9% uptime SLA",
        "Priority support",
        "Daily backups",
        "Control panel included",
        "IPv4 & IPv6",
        "Free migration assistance",
      ],
    },
    {
      name: "Professional",
      price: "$59",
      period: "month",
      description: "Ideal for growing businesses and applications",
      specs: {
        CPU: "12 vCores",
        RAM: "64GB",
        Storage: "2TB SSD",
        Bandwidth: "Unlimited",
        OS: "Any Linux/Windows",
        Support: "Priority",
      },
      features: [
        "Everything in Starter",
        "Enhanced performance",
        "Load balancer ready",
        "Advanced monitoring",
        "Custom configurations",
        "Dedicated IP pool",
        "White-label options",
        "API access",
        "Advanced security",
        "24/7 phone support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$119",
      period: "month",
      description: "Maximum performance for demanding workloads",
      specs: {
        CPU: "36 vCores",
        RAM: "128GB",
        Storage: "6TB SSD",
        Bandwidth: "Unlimited",
        OS: "Any Linux/Windows",
        Support: "Dedicated",
      },
      features: [
        "Everything in Professional",
        "Maximum performance",
        "Dedicated resources",
        "Custom hardware configs",
        "Compliance ready",
        "Dedicated account manager",
        "SLA guarantees",
        "Priority provisioning",
        "Advanced analytics",
        "Enterprise integrations",
      ],
    },
  ]

  const benefits = [
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Dedicated Resources",
      description: "100% dedicated CPU, RAM, and storage. No sharing, no performance degradation.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enterprise Security",
      description: "Advanced DDoS protection, firewalls, and security monitoring included.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "High Performance",
      description: "Latest generation processors and NVMe SSD storage for maximum speed.",
    },
    {
      icon: <HardDrive className="h-8 w-8 text-primary" />,
      title: "Scalable Storage",
      description: "Easily upgrade storage and resources as your application grows.",
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: "Premium Network",
      description: "Multiple Tier-1 network providers ensure optimal connectivity worldwide.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "99.9% Uptime SLA",
      description: "Guaranteed uptime with service level agreements and monitoring.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              <span className="text-primary">Dedicated Servers</span> for Serious Performance
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Get the power and reliability of dedicated hardware at affordable prices. Perfect for demanding
              applications and growing businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild className="group">
                <Link href="#plans">
                  View Plans & Pricing
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                99.9% Uptime SLA
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                24/7 Support
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Free Migration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Choose Your Perfect Plan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              All plans include unlimited bandwidth, premium support, and our 99.9% uptime guarantee.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dedicatedPlans.map((plan, index) => (
              <PlanCard
                key={index}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                specs={plan.specs}
                features={plan.features}
                ctaText="Get Started"
                ctaHref="/contact"
                popular={plan.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Dedicated Servers?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get the performance, security, and reliability your business demands.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Perfect For Enterprise Applications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our dedicated servers power mission-critical applications across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">E-commerce Platforms</h3>
              <p className="text-muted-foreground leading-relaxed">
                Handle high traffic volumes and secure transactions with dedicated resources and PCI compliance
                capabilities.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">SaaS Applications</h3>
              <p className="text-muted-foreground leading-relaxed">
                Scale your software-as-a-service platform with reliable performance and multi-tenant architecture
                support.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Gaming Servers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Low-latency, high-performance servers perfect for multiplayer games and real-time applications.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Data Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Process large datasets and run complex analytics with dedicated CPU and memory resources.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Media Streaming</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deliver high-quality video and audio content with guaranteed bandwidth and CDN integration.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Enterprise Apps</h3>
              <p className="text-muted-foreground leading-relaxed">
                Run mission-critical business applications with enterprise-grade security and compliance features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Upgrade to Dedicated?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get enterprise-grade performance at affordable prices. Our team is here to help you choose the perfect
              configuration for your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Contact Sales Team
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/vps">Start with Free VPS</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
