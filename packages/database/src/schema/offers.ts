import { jsonb, pgEnum, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { id, timestamps } from "./helpers.js";
import { organizations } from "./organizations.js";
import { products } from "./products.js";

export const offerStatusEnum = pgEnum("offer_status", [
  "draft",
  "generating",
  "ready",
  "published",
  "archived",
]);

export const offers = pgTable("offers", {
  id: id(),
  organizationId: uuid("organization_id")
    .notNull()
    .references(() => organizations.id, { onDelete: "cascade" }),
  productId: uuid("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 160 }).notNull(),
  headline: varchar("headline", { length: 280 }),
  copy: jsonb("copy"),
  pricing: jsonb("pricing"),
  status: offerStatusEnum("status").notNull().default("draft"),
  ...timestamps,
});

export type Offer = typeof offers.$inferSelect;
export type NewOffer = typeof offers.$inferInsert;
