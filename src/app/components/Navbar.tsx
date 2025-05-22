"use client"

import Link from "next/link";
import User from "./User";
import {motion, useMotionValueEvent, useScroll} from 'motion/react'
import { useState } from "react";
export default function Navbar(){


  const Links =[{
    href : '/pricing',
    heading : 'Pricing'
  },
{
    href : '/music',
    heading : 'Music'
},{
    href : '/dashboard',
    heading : 'Dashboard'}
    ,{
    href : '/products',
    heading : 'Products'},{
    href : '/features',
    heading : 'Features'}
]
  const [small,setSmall] = useState(false)
   const [hovered,setHovered] = useState<null | number>(null)
    const {scrollY} = useScroll()
    useMotionValueEvent(scrollY,"change",(latest)=>{
      if(latest > 0){
        setSmall(true)
      }
      else 
      setSmall(false)
    })
  return(<>
  <motion.div
  style={{
    maxWidth :small ? "80%" : "100%",

   }}
   layoutId="Scrolled"
   transition={{
    duration : 0.2,
    ease : 'easeInOut'
   }}
  className=" items-center z-20 sticky mx-auto top-2 left-0 pt-2 flex text-neutral-50 justify-around bg-neutral-900 border-1 rounded-md border-neutral-800 h-15 w-full">
<h1>Muzer</h1>
    <div onMouseLeave={()=>setHovered(null)} className="flex "> 
    {Links.map((itm,index)=>(<Link
      onMouseEnter={()=>setHovered(index)}
 className="text-sm relative px-5 py-2 mx-3" href={itm.href} key={index}

    >
   
   <h1 className="text-neutral-600 relative z-10">{itm.heading}   </h1>
   {hovered === index && 
    <motion.span 
   layoutId="Hover-Span"
    className=" bg-neutral-200 text-neutral-900 px-3 py-1 absolute inset-0 rounded-2xl "/>
   }

   
   
    </Link>))}
    </div>

    <div>
<User/>
    </div>
  </motion.div>
  </>)
}