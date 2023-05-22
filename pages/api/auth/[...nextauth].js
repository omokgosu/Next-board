import NextAuth from "next-auth";
import {GithubProvider} from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'fbce938f6f7e2e4af3e8',
      clientSecret: '053d5f41e4a6a260437bbfc60a60589082914ab5 ',
    }),
  ],
};
export default NextAuth(authOptions); 