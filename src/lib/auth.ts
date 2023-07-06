import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import { PrismaClient, Prisma } from "@prisma/client"
import User from "../models/user"

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      let newUser = new User();
      let result = await newUser.auth(user, account, profile)
      if(result){
        return true
      }else{
        return false
      }
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log('called jwt');
      // console.log(token, user, account, profile, isNewUser);
      // if (account) {
      //   const userLoggedIn = await SignToken(user?.email as string);
      //   token.loggedUser = userLoggedIn;
      // }
      return token;
    },
    async session({ session, token, user }) {
      // session.loggedUser = token.loggedUser;
      // return session;
      return session;
    },
  },

}

export default NextAuth(authOptions)