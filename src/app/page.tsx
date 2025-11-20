import Image from "next/image";
import { EventCard } from "@/components/event-card";
import eventsData from "@/data/events.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Agora
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover what's happening on campus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </main>
  );
}
