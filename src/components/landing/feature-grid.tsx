"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Sparkles, Zap } from "lucide-react";

const features = [
    {
        title: "Real-time Events",
        description: "Live updates from TerrierCentral and student orgs.",
        icon: Calendar,
        className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20",
    },
    {
        title: "Community Hub",
        description: "Find your tribe. Join clubs that match your vibe.",
        icon: Users,
        className: "md:col-span-1 md:row-span-1 bg-white/5 border-white/10",
    },
    {
        title: "Smart Recommendations",
        description: "AI-powered suggestions based on your interests.",
        icon: Sparkles,
        className: "md:col-span-1 md:row-span-1 bg-white/5 border-white/10",
    },
    {
        title: "Instant Updates",
        description: "Never miss a beat with push notifications.",
        icon: Zap,
        className: "md:col-span-2 md:row-span-1 bg-white/5 border-white/10",
    },
];

export function FeatureGrid() {
    return (
        <section className="py-24 container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Agora?</h2>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                    Everything you need to navigate campus life, all in one beautiful app.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative rounded-3xl p-8 border backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-colors ${feature.className}`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="p-3 rounded-2xl bg-white/10 w-fit backdrop-blur-md">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">{feature.title}</h3>
                                <p className="text-muted-foreground text-lg">{feature.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
