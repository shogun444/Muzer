import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma";


export async function GET(req : NextRequest,{params} : {params : Promise<{ slug : string[]}>}){


  try {


    const song = await prisma.song.findFirst({
    where : {
      id : (await params).slug[0]
    },include : {
      _count : {
        select : { upvotes : true}
      }
    }
  })
  return NextResponse.json({msg : 'The Details are',song})
  } catch (error) {
     return NextResponse.json({msg : 'No song available with this Id'})
  }
  
}