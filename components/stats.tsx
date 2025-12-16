import { Card } from "@/components/ui/card"

const stats = [
  {
    value: "380",
    label: "Premier League Matches",
    detail: "Full season coverage",
  },
  {
    value: "38",
    label: "Gameweeks",
    detail: "Make transfers weekly",
  },
  {
    value: "£100M",
    label: "Team Budget",
    detail: "Build your squad",
  },
  {
    value: "15",
    label: "Squad Players",
    detail: "Choose wisely",
  },
]

export function Stats() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Numbers Game</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
            Master the stats and dominate your competition with data-driven decisions
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center border-2 hover:border-primary transition-colors hover:shadow-lg"
            >
              <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.detail}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
