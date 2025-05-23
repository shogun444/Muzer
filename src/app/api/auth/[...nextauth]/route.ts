import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "../../../../../prisma/prisma";
const handler = NextAuth({

  secret : process.env.NEXTAUTH_SECRET,
  providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
  })
],
callbacks : {
  async signIn({user,account}){
    if(user && account) { 
    
  await prisma.user.upsert({
    where : {
      email : user.email as string
    },
    update : {},
    create:{
      email : user.email as string,
      name : user.name as string,
      provider : account?.provider 
    }
  })
 
    }

  
return true
  }
}
})

export { handler as GET, handler as POST }