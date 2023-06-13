import { PrismaClient } from "@prisma/client";

const globalForPrsma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrsma.prisma ?? new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrsma.prisma = prisma;
