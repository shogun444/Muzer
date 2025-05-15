import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "../../../../prisma/prisma";

const  VoteSchema = z.object({
  userId : z.string().min(1,{message : `Can't be empty`}),
  songId : z.string().min(1,{message : `Can't be empty`})
})



export async function  POST(req : NextRequest){
const {userId,songId} = await req.json()
try {
  
  const ValidSchema = await VoteSchema.safeParse({userId,songId})

if(!ValidSchema.success){
  return NextResponse.json({msg : "userId or songId not found"},{status : 404})
}

const existingVote = await prisma.upvotes.findFirst({
  where : {
    userId : userId,
    songId : songId
  }
})

if(existingVote) { 
  const deleteVote = await prisma.upvotes.delete({
where : {
  id : existingVote.id
}
  
})

if(deleteVote){
  return NextResponse.json({msg : "Vote Removed Succesfully"},{status : 200})
}
}


const createVote = await prisma.upvotes.create({
  data : {
    userId : userId,
    songId : songId
  }
})

if(createVote){
  return NextResponse.json({msg : "Voted Succesfully", status : "votes"},{status : 200})
}


return NextResponse.json({msg : "Vote Removed" , status : "removed"},{status : 200})
} catch (error) {
  return NextResponse.json({msg : "Not Signed In"},{status : 400})
}
}