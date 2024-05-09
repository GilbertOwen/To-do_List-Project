import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./db";
const bcrypt = require("bcrypt");

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user:any = await prisma.user.findUnique({ where: { email:email } });
        if (user) {
          const passwordMatch = await bcrypt.compareSync(password, user.password);
          if (!passwordMatch) {return null};
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.username = user.username;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      if ("email" in token) {
        session.email = token.email;
      }
      if ("username" in token) {
        session.username = token.username;
      }
      if ("id" in token) {
        session.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth-to-do",
  },
};
