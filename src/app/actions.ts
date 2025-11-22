"use server";

import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function saveUserProfile(firebaseUid: string, email: string, name: string | null, interests: string[]) {
    try {
        // Check if user exists
        const existingUser = await db.select().from(users).where(eq(users.firebaseUid, firebaseUid));

        if (existingUser.length > 0) {
            // Update existing user
            await db.update(users)
                .set({ interests, name })
                .where(eq(users.firebaseUid, firebaseUid));
        } else {
            // Create new user
            await db.insert(users).values({
                firebaseUid,
                email,
                name,
                interests,
            });
        }
        return { success: true };
    } catch (error) {
        console.error("Error saving user profile:", error);
        return { success: false, error: "Failed to save profile" };
    }
}
