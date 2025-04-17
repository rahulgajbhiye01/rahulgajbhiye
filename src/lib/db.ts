import { PrismaClient } from "@prisma/client";

// Use `globalThis` directly without redeclaring it in the global scope
const prismaGlobal = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};

export const db = prismaGlobal.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") prismaGlobal.prisma = db;
