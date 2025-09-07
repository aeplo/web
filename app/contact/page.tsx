import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Support",
      description: "Get help via email",
      contact: "hello@aeplo.com",
      action: "mailto:hello@aeplo.com",
      actionText: "Send Email",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 24/7",
      action: "#",
      actionText: "Start Chat",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Support",
      description: "Call us directly",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      actionText: "Call Now",
    },
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Suite 100",
      zipcode: "San Francisco, CA 94105",
      timezone: "PST (UTC-8)",
    },
    {
      city: "New York",
      address: "456 Innovation Ave, Floor 15",
      zipcode: "New York, NY 10001",
      timezone: "EST (UTC-5)",
    },
  ]

  const supportHours = [
    { type: "Email Support", hours: "24/7" },
    { type: "Live Chat", hours: "24/7" },
    { type: "Phone Support", hours: "Mon-Fri 9AM-6PM PST" },
    { type: "Emergency Support", hours: "24/7 (Paid plans only)" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Get in <span className="text-primary">Touch</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Have questions about our services? Need help getting started? Our friendly team is here to help you
              succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose the contact method that works best for you. We're here to help 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center border border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-2">{method.description}</p>
                  <p className="font-medium text-foreground mb-4">{method.contact}</p>
                  <Button asChild variant="outline" className="group bg-transparent">
                    <Link href={method.action}>
                      {method.actionText}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Support Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Support Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {supportHours.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                      >
                        <span className="text-muted-foreground">{item.type}</span>
                        <span className="font-medium text-foreground">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Our Offices</h3>
                  </div>
                  <div className="space-y-4">
                    {offices.map((office, index) => (
                      <div key={index} className="pb-4 border-b border-border last:border-b-0">
                        <h4 className="font-semibold text-foreground mb-1">{office.city}</h4>
                        <p className="text-muted-foreground text-sm">{office.address}</p>
                        <p className="text-muted-foreground text-sm">{office.zipcode}</p>
                        <p className="text-muted-foreground text-sm">{office.timezone}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <Link href="/vps" className="block text-muted-foreground hover:text-primary transition-colors">
                      → Get Started with Free VPS
                    </Link>
                    <Link href="/pricing" className="block text-muted-foreground hover:text-primary transition-colors">
                      → View Pricing Plans
                    </Link>
                    <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                      → Learn About Aeplo
                    </Link>
                    <Link
                      href="/dedicated"
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      → Dedicated Server Options
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Before You Contact Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Check out these common questions that might help you get started faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">How do I get started with free VPS?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Simply sign up for a free account and your VPS will be ready in under 60 seconds. No credit card
                required.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/vps">Learn More</Link>
              </Button>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">What's included in support?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Free users get community support, while paid plans include priority email and phone support.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/pricing">View Plans</Link>
              </Button>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Can I upgrade my plan anytime?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Yes! You can upgrade from free VPS to dedicated servers anytime with our migration assistance.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/dedicated">Dedicated Servers</Link>
              </Button>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Do you offer custom solutions?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Yes! Contact our sales team to discuss custom configurations and enterprise solutions.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="mailto:sales@aeplo.com">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
