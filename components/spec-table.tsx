import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface SpecItem {
  feature: string
  value: string
  highlight?: boolean
}

interface SpecTableProps {
  title: string
  specs: SpecItem[]
  className?: string
}

export function SpecTable({ title, specs, className = "" }: SpecTableProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
              <span className="text-muted-foreground">{spec.feature}</span>
              <div className="flex items-center">
                <span className={`font-medium ${spec.highlight ? "text-primary" : "text-foreground"}`}>
                  {spec.value}
                </span>
                {spec.highlight && <CheckCircle className="h-4 w-4 text-primary ml-2" />}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
