import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">FPL</span>
              </div>
              <span className="font-bold text-xl hidden sm:inline">Fantasy Premier League</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Fixtures
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Statistics
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Rules
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Prizes
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Log In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Sign Up</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
