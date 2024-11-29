import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { callGetMe, callLogin } from "@/client/apiClient";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                username: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials:any) {
                if (!credentials) return null;
                const tokens = await callLogin(credentials.email, credentials.password);
                if (!tokens) return null;
                const user = await callGetMe(tokens._accessToken);
                if (user) {
                    return {
                        id: user.id,
                        email: user.email,
                        imageUrl: user.photoUrl,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        accessToken: tokens._accessToken,
                    };
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken as string;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };