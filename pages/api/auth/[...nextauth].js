import { verifyPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db/connectToDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        if (
          !email ||
          !email.includes("@") ||
          !password ||
          password.trim() === ""
        ) {
          throw new Error("Invalid user inputs!");
        }
        const client = await connectToDatabase();
        const db = client.db();
        const user = await db
          .collection("users")
          .findOne({ email: credentials.email });

        if (!user) {
          client.close();
          throw new Error("User not Found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Wrong password!");
        }
        client.close();
        return { email: user.email };
      },
    }),
  ],
});
