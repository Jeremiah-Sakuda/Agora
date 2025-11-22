import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";

interface EventCardProps {
    title: string;
    date: string;
    location: string;
    imageUrl: string | null;
    link: string;
}

export function EventCard({ title, date, location, imageUrl, link }: EventCardProps) {
    return (
        <Card className="group overflow-hidden flex flex-col h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
            <div className="relative w-full h-48 overflow-hidden">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full bg-muted text-muted-foreground">
                        No Image
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <Badge className="absolute top-3 right-3 bg-white/90 text-black hover:bg-white/100 backdrop-blur-md shadow-sm">
                    Event
                </Badge>
            </div>
            <CardHeader className="p-5 pb-2 space-y-1">
                <h3 className="font-bold text-xl leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>
            </CardHeader>
            <CardContent className="p-5 pt-2 flex-grow space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="w-4 h-4 text-primary" />
                    <span className="line-clamp-1 font-medium">{date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="line-clamp-1">{location}</span>
                </div>
            </CardContent>
            <CardFooter className="p-5 pt-0">
                <Button asChild className="w-full font-semibold shadow-sm" variant="default">
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                        View Details
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
