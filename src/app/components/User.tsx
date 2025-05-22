'use client'

import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"
import {motion} from "motion/react"
export default function User(){
  const {data : session} = useSession()
return(<>
<motion.div className="space-x-2">
  <button className="font-semibold text-sm" onClick={()=>signOut()}>{session &&
  <motion.h1 
  className="text-semibold hover:bg-neutral-200 hover:text-neutral-800 hover:rounded-xl px-3 py-2 hover:cursor-pointer">SignOut</motion.h1>} </button>
  <button className="font-semibold text-sm " onClick={()=>signIn()}>{!session &&  <motion.h1 className="text-semibold hover:bg-neutral-200 hover:text-neutral-800 hover:rounded-xl px-3 py-2 hover:cursor-pointer ">Login</motion.h1>}  </button>
<Button 

variant={'ghost'} className="p-4 rounded-3xl bg-neutral-950">Get Started</Button>
</motion.div>
</>)
}