"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { saveUserProfile } from "@/app/actions";

const INTERESTS = [
    "Music", "Arts", "Technology", "Sports", "Academic",
    "Social", "Career", "Health", "Food", "Volunteering"
];

export default function OnboardingPage() {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [saving, setSaving] = useState(false);
    const { user } = useAuth();
    const router = useRouter();

    const toggleInterest = (interest: string) => {
        setSelectedInterests(prev =>
            prev.includes(interest)
                ? prev.filter(i => i !== interest)
                : [...prev, interest]
        );
    };

    const handleContinue = async () => {
        if (!user) return;
        setSaving(true);
        try {
            await saveUserProfile(user.uid, user.email || "", user.displayName || null, selectedInterests);
            router.push("/");
        } catch (error) {
            console.error("Failed to save profile", error);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-muted/50 p-4">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl">What are you interested in?</CardTitle>
                    <CardDescription>
                        Select a few topics to help us recommend events you'll love.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        {INTERESTS.map((interest) => (
                            <div
                                key={interest}
                                onClick={() => toggleInterest(interest)}
                                className={`
                  cursor-pointer px-4 py-2 rounded-full border transition-all duration-200 flex items-center gap-2 select-none
                  ${selectedInterests.includes(interest)
                                        ? "bg-primary text-primary-foreground border-primary"
                                        : "bg-background hover:bg-muted border-input"}
                `}
                            >
                                {interest}
                                {selectedInterests.includes(interest) && <Check className="w-4 h-4" />}
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-4">
                    <Button variant="ghost" onClick={() => router.push("/")}>
                        Skip
                    </Button>
                    <Button onClick={handleContinue} disabled={selectedInterests.length === 0 || saving}>
                        {saving ? "Saving..." : "Continue"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
