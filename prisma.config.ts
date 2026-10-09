import { defineConfig } from "prisma/config";
import "dotenv/config";

export default defineConfig({
  schema: "prisma/contract.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DIRECT_URL || process.env.DATABASE_URL,
  },
});