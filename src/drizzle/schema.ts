import {
  int,
  mysqlTable,
  varchar,
  text,
  timestamp,
  boolean,
  primaryKey,
} from "drizzle-orm/mysql-core";
import type { AdapterAccountType } from "next-auth/adapters";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),

  name: varchar("name", { length: 255 }).notNull(),

  email: varchar("email", { length: 255 }).notNull().unique(),

  emailVerified: timestamp("emailVerified", { mode: "date", fsp: 3 }),

  image: varchar("image", { length: 255 }),

  password: text("password"), // store hashed password, optional for OAuth users

  role: varchar("role", { length: 20 }).default("editor").notNull(), // 'admin' | 'editor'

  isActive: boolean("is_active").default(true).notNull(),
  deletedAt: timestamp("deleted_at"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export const messages = mysqlTable("messages", {
  id: int("id").autoincrement().primaryKey(),

  name: varchar("name", { length: 255 }).notNull(),

  email: varchar("email", { length: 255 }).notNull(),

  subject: varchar("subject", { length: 255 }), // optional

  message: text("message").notNull(),

  status: varchar("status", { length: 20 }).default("unread").notNull(), // 'unread', 'read', 'archived'

  deletedAt: timestamp("deleted_at"), // soft delete

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export const accounts = mysqlTable(
  "account",
  {
    userId: int("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: varchar("type", { length: 255 })
      .$type<AdapterAccountType>()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: int("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: text("id_token"),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const sessions = mysqlTable("session", {
  sessionToken: varchar("sessionToken", { length: 255 }).primaryKey(),
  userId: int("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = mysqlTable(
  "verificationToken",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
);

export const authenticators = mysqlTable(
  "authenticator",
  {
    credentialID: varchar("credentialID", { length: 255 }).notNull().unique(),
    userId: int("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    credentialPublicKey: varchar("credentialPublicKey", {
      length: 255,
    }).notNull(),
    counter: int("counter").notNull(),
    credentialDeviceType: varchar("credentialDeviceType", {
      length: 255,
    }).notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: varchar("transports", { length: 255 }),
  },
  (authenticator) => ({
    compoundKey: primaryKey({
      columns: [authenticator.userId, authenticator.credentialID],
    }),
  }),
);
