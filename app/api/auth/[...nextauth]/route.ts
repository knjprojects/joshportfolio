import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: 'Iv23lily5ocyOg43Gp5m',//process.env.GITHUB_ID!,
      clientSecret: '332afdafbe440340a667cd0bc8dec648e1e41afc',//process.env.GITHUB_SECRET!,
      authorization: {//t ad user reps
        params: {
          scope: "read:user repo",
        },
      },
    }),
  ],
  callbacks: {//get github login name(knjprjects), nt just rea name and emai etc
  async jwt({ token, profile, account }) {
    if (profile) {
      token.githubUsername = (profile as any).login;
    if(account)
      token.accessToken = account.access_token;
    }
    return token;
  },

  async session({ session, token }) {
    (session as any).githubUsername =
      token.githubUsername;
    (session as any).accessToken = token.accessToken;

    return session;
  },
}
})


export { handler as GET, handler as POST }
//Iv23lily5ocyOg43Gp5m
//332afdafbe440340a667cd0bc8dec648e1e41afc