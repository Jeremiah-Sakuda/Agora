"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background -z-10" />

            <div className="container mx-auto px-4 text-center space-y-8">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black tracking-tighter"
                >
                    Ready to dive in?
                </motion.h2>

                <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                    Join thousands of students discovering their next passion on Agora.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button size="lg" className="h-16 px-10 text-xl rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300" asChild>
                        <Link href="/login">
                            Join Now <ArrowRight className="ml-2 w-6 h-6" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
