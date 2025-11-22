import { pgTable, serial, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    firebaseUid: text("firebase_uid").notNull().unique(),
    email: text("email").notNull(),
    name: text("name"),
    interests: text("interests").array(), // Array of strings for interests
    createdAt: timestamp("created_at").defaultNow(),
});

export const events = pgTable("events", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    date: timestamp("date"),
    location: text("location"),
    imageUrl: text("image_url"),
    tags: text("tags").array(), // Array of strings for ML features
    sourceUrl: text("source_url"),
    createdAt: timestamp("created_at").defaultNow(),
});
