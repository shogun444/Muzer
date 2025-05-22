"use-client"

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import {motion} from 'motion/react'
 

type Props  = {
children : React.ReactNode,
className : string
}

export default function Bento({children,className}:Props){

return(<>
<motion.div


whileHover={{
  scale : 1.01
}}
className={twMerge("bg-zinc-800 border-zinc-600 m-px rounded-lg p-2",className)}>
  {children}
</motion.div>
</>)
}