import { Card } from "@/components/ui/card"
import { Users, BarChart3, Zap, Crown, Target, Shield } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Build Your Squad",
    description:
      "Select 15 players from the Premier League within your £100M budget. Choose your formation and captain wisely.",
  },
  {
    icon: BarChart3,
    title: "Live Stats & Points",
    description:
      "Track your team performance in real-time. Watch points roll in as your players score, assist, and keep clean sheets.",
  },
  {
    icon: Zap,
    title: "Weekly Transfers",
    description:
      "Make unlimited transfers before the season starts, then enjoy one free transfer per gameweek to optimize your squad.",
  },
  {
    icon: Crown,
    title: "Global Leagues",
    description:
      "Compete in the overall league or create private leagues with friends, family, and colleagues. Bragging rights included.",
  },
  {
    icon: Target,
    title: "Strategy Tools",
    description:
      "Use advanced statistics, fixture difficulty ratings, and form guides to make informed decisions every gameweek.",
  },
  {
    icon: Shield,
    title: "Chips & Boosts",
    description:
      "Deploy special chips like Triple Captain, Bench Boost, and Wildcard at crucial moments to maximize your points.",
  },
]

export function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How To Play</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
            Master these key features to climb the rankings and become a fantasy football legend
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
