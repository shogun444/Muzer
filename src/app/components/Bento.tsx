"use client"

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import {motion, Variants} from 'motion/react'
 

type Props  = {
children : React.ReactNode,
className : string,
variant? : Variants
}

export default function Bento({children,className,variant}:Props){

return(<>
<motion.div
variants={variant}

whileHover={{
  scale : 1.01
}}
className={twMerge("border-2 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border-zinc-800 mx-1 my-1 rounded-lg p-2 pb-15 mask-b-from-99%",className)}>
  {children}
</motion.div>
</>)
}