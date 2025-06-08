"use client"

import Link from "next/link";
import User from "./User";
import {motion, useMotionValueEvent, useScroll} from 'motion/react'
import { useState } from "react";
export default function Navbar(){


  const Links =[
{
    href : '/howto',
    heading : 'Howto'}
    ,{
    href : '/blog',
    heading : 'Blog'},{
    href : '/features',
    heading : 'Features'},
    {
    href : '/about',
    heading : 'About'
}
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
  className={`${small ? 'rounded-lg border-1' : ''} items-center z-20 sticky  mx-auto top-2 left-0 pt-2 flex text-neutral-50 justify-around bg-neutral-900   border-neutral-800 h-15 w-full`}>
<Link className="flex items-center " href={'/'}>
<img className="h-8 rounded-md" src={'/phto.jpeg'} alt="" />
<h1 className="pl-2">Muzer</h1>
</Link>
    <div onMouseLeave={()=>setHovered(null)} className="flex "> 
    {Links.map((itm,index)=>(<Link
      onMouseEnter={()=>setHovered(index)}
 className="hidden md:block md:text-sm md:relative md:px-5 md:py-2 md:mx-3 " href={itm.href} key={index}

    >
   
   <h1 className="text-neutral-600 font-semibold relative z-10">{itm.heading}   </h1>
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