import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Zap, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Human-First Approach",
      description:
        "We believe technology should serve people, not the other way around. Every decision we make puts our users first.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Accessibility for All",
      description:
        "Quality hosting shouldn't be a luxury. We make reliable infrastructure accessible to everyone, regardless of budget.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Simplicity & Performance",
      description: "Complex doesn't mean better. We focus on simple, fast, and reliable solutions that just work.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Trust & Transparency",
      description:
        "No hidden fees, no fine print, no surprises. We believe in honest, transparent relationships with our users.",
    },
  ]

  const team = [
    {
      name: "Allexander B",
      role: "Founder & CEO",
      description:
        "Passionate about democratizing access to reliable hosting.",
    },

  ]

  const milestones = [
    {
      year: "2025",
      title: "The Beginning",
      description: "Founded with a simple mission: make quality hosting accessible to everyone.",
    },
  
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              We're <span className="text-primary">Aeplo</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              A cloud hosting company built on the belief that everyone deserves access to reliable, affordable
              infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link href="/vps">
                  Try Our Free VPS
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To democratize access to reliable cloud infrastructure by providing free and affordable hosting
                solutions that empower developers, students, and businesses to build and grow without barriers.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <blockquote className="text-lg text-foreground leading-relaxed italic text-center">
                "We started Aeplo because we believe that great ideas shouldn't be limited by hosting costs. Whether
                you're a student learning to code, a developer building the next big thing, or a business looking to
                scale, you deserve reliable infrastructure that doesn't break the bank."
              </blockquote>
              <div className="text-center mt-6">
                <p className="text-muted-foreground">— Allexander B, Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              These principles guide everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story/Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From a simple idea to serving thousands of users worldwide.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {milestone.year} - {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The people behind Aeplo who are passionate about making hosting accessible for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center border border-border">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">0+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">0%</div>
              <p className="text-muted-foreground">Uptime</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">24/7</div>
              <p className="text-muted-foreground">Support</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">2+</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Be part of a growing community of developers and businesses who believe in accessible, reliable hosting
              for everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link href="/vps">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
