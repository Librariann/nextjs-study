import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client/extension";
import NextAuth from "next-auth/next";

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma)
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
