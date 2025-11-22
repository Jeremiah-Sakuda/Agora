import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background py-8 md:py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-lg font-bold">Agora</span>
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        The central hub for Boston University<br /> student life and events.
                    </p>
                </div>

                <div className="flex gap-8 text-sm text-muted-foreground">
                    <Link href="/privacy" className="hover:text-foreground transition-colors">
                        Privacy
                    </Link>
                    <Link href="/terms" className="hover:text-foreground transition-colors">
                        Terms
                    </Link>
                    <Link href="/contact" className="hover:text-foreground transition-colors">
                        Contact
                    </Link>
                </div>

                <div className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Agora. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
