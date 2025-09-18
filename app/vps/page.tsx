import { Button } from "@/components/ui/button"
import { PlanCard } from "@/components/plan-card"
import { Zap, Shield, Clock, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function VPSPage() {
  const freeVPSSpecs = {
    CPU: "4 vCore",
    RAM: "12GB",
    Storage: "50GB SSD",
    Bandwidth: "1TB",
    OS: "Ubuntu/CentOS",
    Support: "24/7",
  }

  const freeVPSFeatures = [
    "Full root access",
    "Choice of Linux distributions",
    "1-click app installations",
    "Free SSL certificates",
    "DDoS protection included",
    "99.9% uptime guarantee",
    "24/7 community support",
    "Easy control panel",
    "Automatic backups",
    "IPv4 & IPv6 support",
  ]

  const gettingStartedSteps = [
    {
      step: "1",
      title: "Sign Up",
      description: "Create your free Aeplo account in under 2 minutes",
    },
    {
      step: "2",
      title: "Choose OS",
      description: "Select from Ubuntu, CentOS, or other Linux distributions",
    },
    {
      step: "3",
      title: "Deploy",
      description: "Your VPS will be ready in less than 60 seconds",
    },
    {
      step: "4",
      title: "Connect",
      description: "SSH into your server and start building",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Free <span className="text-primary">VPS Hosting</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Get started with completely free VPS hosting. Perfect for learning, testing, and small projects. No credit
              card required, no hidden fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild className="group">
                <Link href="#get-started">
                  Get Your Free VPS
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">Compare Plans</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                No Credit Card
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Ready in 60s
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Full Root Access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free VPS Plan */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What You Get for Free</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our free VPS comes with everything you need to get started with your projects.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <PlanCard
              name="Free VPS"
              price="$0"
              description="Perfect for learning, testing, and small projects"
              specs={freeVPSSpecs}
              features={freeVPSFeatures}
              ctaText="Get Started Free"
              ctaHref="#get-started"
              popular={true}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our Free VPS?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We believe everyone should have access to reliable hosting infrastructure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                SSD storage and optimized infrastructure for maximum performance.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Secure</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built-in DDoS protection and security monitoring included.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">99.9% Uptime</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reliable infrastructure with guaranteed uptime and monitoring.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Community support and documentation to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="get-started" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get Started in 4 Simple Steps</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your free VPS will be ready in under 60 seconds.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {gettingStartedSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mb-4 mx-auto font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="group">
              <Link href="/signup">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Perfect For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our free VPS is ideal for various use cases and projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Learning & Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Perfect for students and developers learning server administration, web development, or testing new
                technologies.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Small Projects</h3>
              <p className="text-muted-foreground leading-relaxed">
                Host personal websites, blogs, small applications, or development environments without any cost.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Testing & Staging</h3>
              <p className="text-muted-foreground leading-relaxed">
                Create testing environments, staging servers, or proof-of-concept deployments before going to
                production.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
