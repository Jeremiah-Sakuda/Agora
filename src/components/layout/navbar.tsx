"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Menu, User as UserIcon, LogOut, Bell } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export function Navbar() {
    const { user, logout } = useAuth();

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-red-600 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
                            <span className="text-white font-bold text-xl">A</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">Agora</span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        {["Events", "Communities", "About"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="relative hover:text-primary transition-colors py-1 group"
                            >
                                {item}
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3 pl-6 border-l border-border/50">
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors">
                            <Search className="h-5 w-5" />
                        </Button>

                        {user ? (
                            <>
                                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors">
                                    <Bell className="h-5 w-5" />
                                </Button>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="relative h-9 w-9 rounded-full ring-2 ring-transparent hover:ring-primary/20 transition-all p-0 overflow-hidden">
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User"} />
                                                <AvatarFallback className="bg-primary/10 text-primary font-bold">{user.displayName?.[0] || "U"}</AvatarFallback>
                                            </Avatar>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56 mt-2" align="end" forceMount>
                                        <DropdownMenuLabel className="font-normal">
                                            <div className="flex flex-col space-y-1">
                                                <p className="text-sm font-medium leading-none">{user.displayName}</p>
                                                <p className="text-xs leading-none text-muted-foreground">
                                                    {user.email}
                                                </p>
                                            </div>
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem asChild>
                                            <Link href="/profile" className="cursor-pointer">Profile</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => logout()} className="cursor-pointer text-red-500 focus:text-red-500 focus:bg-red-50 dark:focus:bg-red-950/30">
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>Log out</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </>
                        ) : (
                            <Button variant="default" size="sm" asChild className="font-semibold shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all">
                                <Link href="/login">Sign In</Link>
                            </Button>
                        )}
                    </div>
                </div>

                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                </Button>
            </div>
        </motion.header>
    );
}
