"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4 backdrop-blur-sm"
                >
                    <span className="mr-2">🚀</span> Discover Campus Life
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-6xl md:text-8xl font-extrabold tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                >
                    Your Campus, <br />
                    <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-600">Connected.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance font-light"
                >
                    The central hub for Boston University events, communities, and student life.
                    Find your people and never miss out.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-lg mx-auto flex gap-3 mt-8"
                >
                    <div className="relative flex-grow group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                            placeholder="Search events, clubs, or tags..."
                            className="pl-10 h-12 bg-background/50 backdrop-blur-md border-primary/20 focus-visible:ring-primary text-lg shadow-sm transition-all hover:border-primary/40"
                        />
                    </div>
                    <Button variant="outline" size="icon" className="h-12 w-12 shrink-0 border-primary/20 hover:border-primary hover:bg-primary/5 transition-colors">
                        <Filter className="h-5 w-5" />
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex justify-center gap-4 pt-4"
                >
                    <Button variant="ghost" className="text-muted-foreground hover:text-foreground group">
                        Trending:
                        <span className="ml-2 text-foreground font-medium group-hover:underline decoration-primary underline-offset-4">#Hackathon</span>
                        <span className="ml-2 text-foreground font-medium group-hover:underline decoration-primary underline-offset-4">#Basketball</span>
                        <span className="ml-2 text-foreground font-medium group-hover:underline decoration-primary underline-offset-4">#Music</span>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
