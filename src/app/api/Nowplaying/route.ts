import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";

export async function GET(req:NextRequest){
  const res = await prisma.song.findMany({
    orderBy : {
  upvotes : {
    _count : 'desc'
  }
    }

  })

  return NextResponse.json({msg : "The Current Song is", res},{status : 200})
}