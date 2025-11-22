"use client";

import { useAuth } from "@/context/auth-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
    const { user, signInWithGoogle } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/onboarding");
        }
    }, [user, router]);

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-muted/50">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">Welcome to Agora</CardTitle>
                    <CardDescription>
                        Sign in to discover events and connect with your community.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center pb-8">
                    <Button
                        size="lg"
                        className="w-full max-w-xs font-semibold"
                        onClick={signInWithGoogle}
                    >
                        Sign in with Google
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
