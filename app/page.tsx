import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/typing-animation"
import { ServiceCard } from "@/components/service-card"
import { AnimatedSection } from "@/components/animated-section"
import { Server, Zap, Shield, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const typingTexts = [
    "Free VPS hosting for everyone.",
    "Affordable dedicated servers.",
    "Reliable cloud infrastructure.",
    "Simple server management.",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Welcome to <span className="text-primary">Aeplo</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-16 flex items-center justify-center">
                <TypingAnimation
                  texts={typingTexts}
                  speed={80}
                  deleteSpeed={40}
                  pauseDuration={2000}
                  className="font-medium"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Get started with free VPS hosting or upgrade to our affordable dedicated servers. No hidden fees, no
                complicated setup - just reliable cloud infrastructure that works.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="group">
                  <Link href="/vps">
                    Get Free VPS (SOON)
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Choose Your Perfect Solution</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Whether you're just starting out or need enterprise-grade performance, we have the right hosting
                solution for you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-left" delay={200}>
              <ServiceCard
                icon={<Zap className="h-6 w-6 text-primary" />}
                title="Free VPS"
                description="Perfect for learning, testing, and small projects. Get started with our completely free VPS hosting."
                price="Free"
                features={["4 vCPU Core", "12GB RAM", "50GB SSD Storage", "1TB Bandwidth", "24/7 Support"]}
                href="/vps"
                ctaText="Get Started Free"
                featured={true}
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <ServiceCard
                icon={<Zap className="h-6 w-6 text-primary" />}
                title="Free Storage VPS"
                description="Perfect for learning, testing, and small projects. Get started with our completely free VPS hosting."
                price="Free"
                features={["1 vCPU Core", "3GB RAM", "250GB SSD Storage", "1TB Bandwidth", "24/7 Support"]}
                href="/vps"
                ctaText="Get Started Free"
                featured={false}
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={400}>
              <ServiceCard
                icon={<Server className="h-6 w-6 text-primary" />}
                title="Dedicated Servers"
                description="High-performance dedicated servers for demanding applications and growing businesses."
                price="$29"
                features={[
                  "4+ vCPU Cores",
                  "32GB+ RAM",
                  "250GB+ SSD Storage",
                  "Unlimited Bandwidth",
                  "Priority Support",
                ]}
                href="/dedicated"
                ctaText="View Plans"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Aeplo?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We make cloud hosting simple, reliable, and accessible for everyone.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Secure & Reliable",
                description: "Enterprise-grade security with 99.9% uptime guarantee. Your data is safe with us.",
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Lightning Fast",
                description: "SSD storage and optimized infrastructure for maximum performance and speed.",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "24/7 Support",
                description: "Our expert team is always here to help you succeed with your projects.",
              },
            ].map((feature, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 200}>
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="scale-in">
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

              <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  No Setup Fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Cancel Anytime
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  24/7 Support
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
