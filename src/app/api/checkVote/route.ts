import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";
import axios from "axios";

export async function GET (req : NextRequest){
  try {
    const getAll = await prisma.upvotes.findMany({

})
return NextResponse.json({msg : 'The Upvotes are',getAll},{status : 200})
  } catch (error) {
    return NextResponse.json({msg : 'The Upvotes are not found'},{status : 400})
  }

}