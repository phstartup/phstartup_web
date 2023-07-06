import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import { PrismaClient, Prisma } from "@prisma/client"
import Account from "../models/account"

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      let newAccount = new Account();
      let result = await newAccount.auth(user, account, profile)
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