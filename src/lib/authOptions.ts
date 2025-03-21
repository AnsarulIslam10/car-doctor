import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import dbConnect, { collectionNamesObj } from "./dbConnect";
import { NextAuthOptions } from "next-auth";
import { User } from "next-auth"; // Type for the user returned in the callbacks
import { loginUser } from "@/app/actions/auth/loginUser";

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials): Promise<User | null> {
                // Check if credentials are defined
                if (!credentials || !credentials.email || !credentials.password) {
                    return null; // Return null if credentials are missing
                }

                // credentials is now guaranteed to have email and password
                const user = await loginUser(credentials);
                console.log(user);

                if (user) {
                    return user; // User object returned will be saved in `user` property of the JWT
                } else {
                    return null; // If user is not found, return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        })
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account) {
                const { providerAccountId, provider } = account;
                const { email: user_email, image, name } = user;
                const userCollection = dbConnect(collectionNamesObj.userCollection);
                const isExisted = await userCollection.findOne({ providerAccountId });

                if (!isExisted) {
                    const payload = { providerAccountId, provider, email: user_email, image, name };
                    await userCollection.insertOne(payload);
                }
            }
            return true;
        },
    }
};
