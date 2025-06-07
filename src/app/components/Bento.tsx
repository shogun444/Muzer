"use client"

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import {animate, delay, motion, stagger, Variants} from 'motion/react'
 

type Props  = {
children : React.ReactNode,
className : string,
variant? : Variants
}

export default function Bento({children,className,variant}:Props){

const parentVariant = {
initial : {
  opacity : 0,
  y : 50,
  filter : 'blur(10px)'
},
animate : {
  opacity : 1,
  y:0  ,
filter : 'blur(0px)'  , transition  : { 
    staggerChildren : 0.8,
    ease : 'easeIn'
  }
 
}
}
const childVariant = {
  initial : {
  opacity : 0,
  y : 10,
  filter : 'blur(10px)'
 },
 animate :{
  opacity : 1,
  y:0,
   filter : 'blur(0px)'
 }
}
return(<>
<motion.div
variants={parentVariant}
initial = 'initial'
animate = 'animate'
whileHover={{
  scale : 1.01
}}
className={twMerge("border-2 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border-zinc-800 mx-1 my-1 rounded-lg p-2 pb-15 mask-b-from-99%",className)}>
  <motion.div
  variants={childVariant}
  >
  {children}
  </motion.div>

</motion.div>
</>)
}