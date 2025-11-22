"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Menu, User as UserIcon, LogOut } from "lucide-react";
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

export function Navbar() {
    const { user, logout } = useAuth();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-xl">A</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">Agora</span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="/" className="hover:text-foreground transition-colors">
                            Events
                        </Link>
                        <Link href="/communities" className="hover:text-foreground transition-colors">
                            Communities
                        </Link>
                        <Link href="/about" className="hover:text-foreground transition-colors">
                            About
                        </Link>
                    </nav>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                            <Search className="h-5 w-5" />
                        </Button>

                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User"} />
                                            <AvatarFallback>{user.displayName?.[0] || "U"}</AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end" forceMount>
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
                                        <Link href="/profile">Profile</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => logout()}>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Log out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Button variant="default" size="sm" asChild>
                                <Link href="/login">Sign In</Link>
                            </Button>
                        )}
                    </div>
                </div>

                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                </Button>
            </div>
        </header>
    );
}
