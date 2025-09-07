import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  price: string
  features: string[]
  href: string
  ctaText: string
  featured?: boolean
}

export function ServiceCard({
  icon,
  title,
  description,
  price,
  features,
  href,
  ctaText,
  featured = false,
}: ServiceCardProps) {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        featured ? "ring-2 ring-primary" : ""
      }`}
    >
      {featured && (
        <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardContent className={`p-6 ${featured ? "pt-12" : ""}`}>
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">{icon}</div>

        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

        <div className="mb-4">
          <span className="text-3xl font-bold text-foreground">{price}</span>
          {price !== "Free" && <span className="text-muted-foreground">/month</span>}
        </div>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Button asChild className="w-full group">
          <Link href={href}>
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
