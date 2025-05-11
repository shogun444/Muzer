import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "../../../../prisma/prisma";
const  VoteSchema = z.object({
  userId : z.string().min(1,{message : `Can't be empty`}),
  songId : z.string().min(1,{message : `Can't be empty`})
})

export async function POST(req : NextRequest){
  const {userId,songId} = await req.json()
try {
   const ValidSchema = VoteSchema.safeParse({userId,songId})
  
  if(!ValidSchema.success){
    return NextResponse.json({msg : "userId or songId not found"},{status : 422})
  }

  const removeVote = await prisma.upvotes.delete({
    where : {
      userId_songId : {
userId : userId,
songId : songId
      }
      
    }
  })
  return NextResponse.json({msg : "Deleted Vote"},{status : 200})
} catch ( error) {
   return NextResponse.json({msg : "Signin First"},{status : 411})
}
   
}