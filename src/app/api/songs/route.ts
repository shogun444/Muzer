import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma";
import {string, z} from 'zod'
import axios from "axios";

export async function GET(req : NextRequest){

const AllSongs = await prisma.song.findMany({})
return NextResponse.json({msg : "All current Songs",AllSongs},{status:200})
}

export async function POST(req : NextRequest){
const validYtlink = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[\w-]{11}(&[\w=&-]*)?$/
const LinkSchema = z.string().min(1,{message : `Link can't be empty`})


try {
  const {link} = await req.json();
  const ValidateLink =  LinkSchema.safeParse(link)
  if(!ValidateLink.success){
     return NextResponse.json({msg : 'Link is Empty'},{status : 400})
  }
 else {
 const checklink = validYtlink.test(link) 

 if(checklink && typeof link === 'string'){
 const videoId = link.split('?')[1]

 const res = await axios.get(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?${videoId}&format=json`)
 if(res){
  const existingData = await prisma.song.findFirst({
    where : {
      link : link
    }
  })
  if(existingData){
    return NextResponse.json({msg : "The Link has already been Added"},{status : 400})
  }
const Song = await prisma.song.create({
  data : {
    link : link , 
    videoId : videoId,
    name : res.data.author_name,
    description : res.data.title,
    thumbnail : res.data.thumbnail_url ,
  }
})
return NextResponse.json({msg : "Link Created Succsfully",Song},{status : 200})
 } 
 else return NextResponse.json({msg : "Can't find data with the link provided"},{status:404})
 }
  
 }
} catch (error) {
  return NextResponse.json({msg : "Please Enter a Valid Link"},{status : 400})
}

  
}