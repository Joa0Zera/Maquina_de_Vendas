import { jsonb, pgEnum, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { id, timestamps } from "./helpers.js";
import { offers } from "./offers.js";
import { organizations } from "./organizations.js";
import { products } from "./products.js";

export const landingPageStatusEnum = pgEnum("landing_page_status", [
  "draft",
  "generating",
  "ready",
  "published",
  "archived",
]);

export const landingPages = pgTable("landing_pages", {
  id: id(),
  organizationId: uuid("organization_id")
    .notNull()
    .references(() => organizations.id, { onDelete: "cascade" }),
  productId: uuid("product_id").references(() => products.id, { onDelete: "set null" }),
  offerId: uuid("offer_id").references(() => offers.id, { onDelete: "set null" }),
  title: varchar("title", { length: 160 }).notNull(),
  slug: varchar("slug", { length: 80 }).notNull(),
  status: landingPageStatusEnum("status").notNull().default("draft"),
  sections: jsonb("sections"),
  deployConfig: jsonb("deploy_config"),
  publishedUrl: varchar("published_url", { length: 512 }),
  ...timestamps,
});

export type LandingPage = typeof landingPages.$inferSelect;
export type NewLandingPage = typeof landingPages.$inferInsert;
