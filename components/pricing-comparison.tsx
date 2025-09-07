import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, ArrowRight } from "lucide-react"
import Link from "next/link"

interface PricingTier {
  name: string
  price: string
  period?: string
  description: string
  features: { name: string; included: boolean; value?: string }[]
  ctaText: string
  ctaHref: string
  popular?: boolean
}

interface PricingComparisonProps {
  tiers: PricingTier[]
}

export function PricingComparison({ tiers }: PricingComparisonProps) {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <Card key={index} className={`relative ${tier.popular ? "ring-2 ring-primary" : ""}`}>
          {tier.popular && (
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
              Most Popular
            </Badge>
          )}

          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl">{tier.name}</CardTitle>
            <div className="mt-2">
              <span className="text-3xl font-bold text-foreground">{tier.price}</span>
              {tier.period && <span className="text-muted-foreground">/{tier.period}</span>}
            </div>
            <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
          </CardHeader>

          <CardContent className="space-y-4">
            <ul className="space-y-3">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm">
                  {feature.included ? (
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                  ) : (
                    <X className="h-4 w-4 text-muted-foreground mr-3 flex-shrink-0" />
                  )}
                  <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                    {feature.name}
                    {feature.value && <span className="font-medium"> ({feature.value})</span>}
                  </span>
                </li>
              ))}
            </ul>

            <Button asChild className="w-full group">
              <Link href={tier.ctaHref}>
                {tier.ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
