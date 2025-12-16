import { Button } from "@/components/ui/button"
import { Trophy, Users, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[url('/football-stadium-crowd.png')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-primary-foreground px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium">Season 2024/25 is live</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">Build Your Dream Team</h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty max-w-2xl mx-auto leading-relaxed">
            Pick your squad, compete with millions of managers worldwide, and prove you're the ultimate fantasy football
            champion
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 text-lg h-14"
            >
              Create Your Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 text-lg h-14 bg-transparent"
            >
              Watch Tutorial
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="w-8 h-8 text-accent" />
              <div className="text-3xl font-bold">11M+</div>
              <div className="text-sm text-primary-foreground/80">Active Managers</div>
            </div>
            <div className="flex flex-col items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <Trophy className="w-8 h-8 text-accent" />
              <div className="text-3xl font-bold">£500K</div>
              <div className="text-sm text-primary-foreground/80">Prize Pool</div>
            </div>
            <div className="flex flex-col items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <TrendingUp className="w-8 h-8 text-accent" />
              <div className="text-3xl font-bold">Free</div>
              <div className="text-sm text-primary-foreground/80">To Play</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
