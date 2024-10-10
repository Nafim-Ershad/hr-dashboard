import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcrypt';

import { connectToDB } from "@/mongo/db";
import User from "@/mongo/model/user.model";

const authOptions: NextAuthOptions = {
    session:
    {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: {},
          password: {}
        },
        async authorize(credentials) {
            try
            {
                if(!credentials?.email || !credentials?.password){
                    throw new Error("Please provide a email and password");
                }
                const { email, password } = credentials;

                await connectToDB();
                const user = await User.findOne({email});
                const userPassword = (await User.findOne({ email }).select('+password')).password;
                // .select selects the whole doc required portion of the doc
                // like in user, there will be no password field when retrieved. But using the .select we can get the password field too
                // ref: https://stackoverflow.com/questions/12096262/how-to-protect-the-password-field-in-mongoose-mongodb-so-it-wont-return-in-a-qu
                if(user)
                {
                    const match = await compare(password, userPassword);
                    // console.log("Match?:", match);
                    if(match)
                    {
                        // console.log(user);
                        return user;
                    }
                    throw new Error("Email or Password doesn't match")
                }
                throw new Error("No user found. Create an Account first");
            }catch(error)
            {
                throw new Error(`Failed to log in. ${error}`)
            }
        }
      })
    ],
    callbacks: {
        async jwt({ token, user, account }){
            // console.log(user);
            if(user){
                return {
                    ...token,
                    accessToken: account?.access_token,
                    email: user.email,
                    id: user.id
                }
            }

            return token;
        },
        async session({ session, token }){
            return {
                ...session,
                accessToken: token.accessToken,
                user: {
                    ...session.user,
                    id: token.id,
                    email: token.email
                }
            }
        }
        
    }
}


export default authOptions;