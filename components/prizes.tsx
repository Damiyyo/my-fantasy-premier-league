import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Award } from "lucide-react"

const prizes = [
  {
    icon: Trophy,
    rank: "1st Place",
    prize: "£250,000",
    description: "Overall Champion",
  },
  {
    icon: Medal,
    rank: "2nd Place",
    prize: "£75,000",
    description: "Runner Up",
  },
  {
    icon: Award,
    rank: "3rd Place",
    prize: "£35,000",
    description: "Third Place",
  },
]

export function Prizes() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Incredible Prizes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
            Compete for a share of the massive prize pool. Monthly and gameweek prizes also available.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {prizes.map((prize, index) => {
            const Icon = prize.icon
            return (
              <Card
                key={index}
                className="p-8 text-center border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-sm font-medium text-muted-foreground mb-2">{prize.rank}</div>
                <div className="text-4xl font-bold text-primary mb-2">{prize.prize}</div>
                <div className="text-sm text-muted-foreground">{prize.description}</div>
              </Card>
            )
          })}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 text-lg h-14"
          >
            Start Playing For Free
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Plus gameweek and monthly prizes worth thousands more</p>
        </div>
      </div>
    </section>
  )
}
