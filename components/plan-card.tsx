import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

interface PlanCardProps {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  specs: { [key: string]: string }
  ctaText: string
  ctaHref: string
  popular?: boolean
  className?: string
}

export function PlanCard({
  name,
  price,
  period,
  description,
  features,
  specs,
  ctaText,
  ctaHref,
  popular = false,
  className = "",
}: PlanCardProps) {
  return (
    <Card className={`relative ${popular ? "ring-2 ring-primary" : ""} ${className}`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
          Most Popular
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl">{name}</CardTitle>
        <div className="mt-2">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          {period && <span className="text-muted-foreground">/{period}</span>}
        </div>
        <p className="text-muted-foreground mt-2">{description}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Specifications */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Specifications</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {Object.entries(specs).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-muted-foreground">{key}:</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Features</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button asChild className="w-full group">
          <Link href={ctaHref}>
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
