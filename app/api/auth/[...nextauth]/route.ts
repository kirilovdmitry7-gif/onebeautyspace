import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID as string,
      clientSecret: process.env.APPLE_SECRET as string,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT as string),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave this out if you want to redirect less new users to a five page)
  },
  callbacks: {
    async signIn({ user }) {
      // Custom logic for positive messages during registration
      if (user) {
        console.log(
          `Пользователь ${user.email} успешно зарегистрирован/вошел!`
        );
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Allows for custom redirection logic
      if (url.startsWith(baseUrl)) return url;
      // Fallback for relative URLs
      else if (url.startsWith("/")) return new URL(url, baseUrl).toString();
      return baseUrl;
    },
  },
  // Custom error messages for authorization
  theme: {
    colorScheme: "light",
    brandColor: "#22c55e", // emerald-600
    logo: "/next.svg", // Placeholder logo
    buttonText: "#ffffff",
  },
  // Add custom error handling for positive messages
  events: {
    async signIn(message) {
      /* on successful sign in */
    },
    async signOut(message) {
      /* on sign out */
    },
    async createUser(message) {
      /* user created */
    },
    async linkAccount(message) {
      /* account linked to a user */
    },
    async session(message) {
      /* session is active */
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
