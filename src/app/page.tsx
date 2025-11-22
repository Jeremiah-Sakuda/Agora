"use client";

import { EventCard } from "@/components/event-card";
import { HeroSection } from "@/components/landing/hero-section";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { CTASection } from "@/components/landing/cta-section";
import { motion } from "framer-motion";

// Mock data for events
const FEATURED_EVENTS = [
  {
    id: 1,
    title: "BU vs BC Hockey Game",
    date: "Fri, Nov 24 • 7:00 PM",
    location: "Agganis Arena",
    imageUrl: "https://images.unsplash.com/photo-1515703403366-a73043a917a7?q=80&w=2070&auto=format&fit=crop",
    category: "Sports"
  },
  {
    id: 2,
    title: "Tech Career Fair 2025",
    date: "Tue, Dec 5 • 10:00 AM",
    location: "GSU Ballroom",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    category: "Career"
  },
  {
    id: 3,
    title: "Symphony Orchestra Concert",
    date: "Sat, Dec 9 • 8:00 PM",
    location: "CFA Concert Hall",
    imageUrl: "https://images.unsplash.com/photo-1465847899078-b413929f7120?q=80&w=2070&auto=format&fit=crop",
    category: "Arts"
  },
  {
    id: 4,
    title: "Global Food Festival",
    date: "Thu, Nov 30 • 5:00 PM",
    location: "BU Beach",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
    category: "Food"
  },
  {
    id: 5,
    title: "HackBoston 2025",
    date: "Sat, Jan 20 • 9:00 AM",
    location: "CDS Building",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c54be3855463?q=80&w=2070&auto=format&fit=crop",
    category: "Tech"
  },
  {
    id: 6,
    title: "Midnight Breakfast",
    date: "Wed, Dec 13 • 11:00 PM",
    location: "Marciano Commons",
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414395d8?q=80&w=2070&auto=format&fit=crop",
    category: "Social"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <HeroSection />

      <FeatureGrid />

      <section id="events" className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Trending Now</h2>
          <p className="text-muted-foreground text-lg">See what's happening on campus this week.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {FEATURED_EVENTS.map((event) => (
            <motion.div key={event.id} variants={item} className="h-full">
              <EventCard
                title={event.title}
                date={event.date}
                location={event.location}
                imageUrl={event.imageUrl}
                category={event.category}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <CTASection />
    </div>
  );
}
