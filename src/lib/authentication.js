import User from "@/controllers/user";
import { Prisma, PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import Helper from '@/lib/helper'
import jwt from 'jsonwebtoken'

export const authOptions = {
    pages: {
        sigIn: '/login'
    },
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            name: 'Sign In',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'email'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }
                const model = new Account()
                const params = {
                    email: credentials.email,
                    password: credentials.password
                }
                const user = await model.authenticate(params)
                return user
            }
        }),
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
            let newUser = new User();
            let result = await newUser.auth(user, account, profile)
            if (result) {
                return true
            } else {
                return false
            }
        },
        jwt: async ({ token, user, account }) => {
            if (user) {
                const helper = new Helper()
                // const cipher = await helper.cipherText(JSON.stringify(token))
                token.account_type = user.account_type
                token.accessToken = user.access_token;
            }
            return token
        },
        session: async ({ session, token, account }) => {
            let newUser = new User();

            console.log({
                token,
                session,
                account
            })

            let result = await newUser.get(session.user)
            if (result) {
                await newUser.updateToken(JSON.parse(result), token.accessToken)
                session.accessToken = token.accessToken;
                session.user = {
                    ...session.user,
                    ...JSON.parse(result)
                }
            }
            return session

        }
    }
}