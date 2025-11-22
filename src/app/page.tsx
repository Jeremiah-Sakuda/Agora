import { EventCard } from "@/components/event-card";
import eventsData from "@/data/events.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0" />
        <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
            🚀 Discover Campus Life
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance">
            Your Campus, <span className="text-primary">Connected.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            The central hub for Boston University events, communities, and student life.
            Find your people and never miss out.
          </p>

          <div className="max-w-md mx-auto flex gap-2 mt-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                className="pl-10 bg-background/50 backdrop-blur-sm border-primary/20 focus-visible:ring-primary"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Upcoming Events</h2>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {eventsData.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              location={event.location}
              imageUrl={event.imageUrl}
              link={event.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
