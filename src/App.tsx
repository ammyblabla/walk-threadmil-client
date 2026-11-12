import { Button } from '@/components/ui/button'

// Placeholder until the app shell and routing land (task 1.7).
export default function App() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Walk Planner</h1>
      <p className="max-w-xs text-muted-foreground">
        Treadmill plans for today. Setting things up…
      </p>
      <Button size="lg" disabled>
        Start
      </Button>
    </main>
  )
}
