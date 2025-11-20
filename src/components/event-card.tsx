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
        <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-full h-48 bg-muted">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                        No Image
                    </div>
                )}
            </div>
            <CardHeader className="p-4 pb-2">
                <h3 className="font-bold text-lg leading-tight line-clamp-2">{title}</h3>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-grow space-y-2">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1">{date}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1">{location}</span>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full" variant="outline">
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                        View Details
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
