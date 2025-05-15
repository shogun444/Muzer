import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function POST(req:NextRequest){
const {email} =  await req.json()

const User = await prisma.user.findUnique({
  where : {
    email : email
  }
})
return NextResponse.json({
  msg : 'Your Id is' , User
},{status : 200})
}