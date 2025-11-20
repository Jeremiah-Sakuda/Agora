import { pgTable, serial, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    firebaseUid: text("firebase_uid").notNull().unique(),
    email: text("email").notNull(),
    name: text("name"),
    createdAt: timestamp("created_at").defaultNow(),
});

export const events = pgTable("events", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    date: timestamp("date"),
    location: text("location"),
    sourceUrl: text("source_url"), // For scraped events
    createdAt: timestamp("created_at").defaultNow(),
});
