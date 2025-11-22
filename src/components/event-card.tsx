"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface EventCardProps {
    title: string;
    date: string;
    location: string;
    imageUrl: string;
    category?: string;
}

export function EventCard({ title, date, location, imageUrl, category = "Event" }: EventCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-full"
        >
            <Card className="overflow-hidden border-0 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                    <Badge className="absolute top-3 left-3 bg-primary/90 hover:bg-primary text-white border-none backdrop-blur-md shadow-sm">
                        {category}
                    </Badge>
                </div>

                <CardHeader className="p-5 pb-2">
                    <h3 className="font-bold text-xl leading-tight tracking-tight text-balance group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                </CardHeader>

                <CardContent className="p-5 pt-2 flex-grow space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-2.5 text-sm">
                        <CalendarDays className="w-4 h-4 text-primary/80" />
                        <span className="font-medium">{date}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                        <MapPin className="w-4 h-4 text-primary/80" />
                        <span className="line-clamp-1">{location}</span>
                    </div>
                </CardContent>

                <CardFooter className="p-5 pt-0">
                    <Button className="w-full font-semibold shadow-sm group-hover:bg-primary group-hover:text-white transition-all" variant="secondary">
                        View Details
                        <ArrowUpRight className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
