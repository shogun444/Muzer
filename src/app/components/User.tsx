'use client'

import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"

import {motion} from "motion/react"
import Link from "next/link"
export default function User(){
  const {data : session} = useSession()
return(<>
<motion.div className="space-x-2">
  <button className="font-semibold text-sm" onClick={()=>signOut()}>{session &&
  <motion.h1 
  className="text-semibold hover:bg-neutral-200 hover:text-neutral-800 hover:rounded-xl px-3 py-2 hover:cursor-pointer">SignOut</motion.h1>} </button>
  <button className="font-semibold text-sm " onClick={()=>signIn()}>{!session &&  <motion.h1 className="text-semibold hover:bg-neutral-200 hover:text-neutral-800 hover:rounded-xl px-3 py-2 hover:cursor-pointer ">Login</motion.h1>}  </button>
<Link 
href={'/signUp?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2FsignUp'}
 className="px-3 py-2 text-sm rounded-3xl bg-neutral-950 hover:bg-neutral-200 hover:text-neutral-800 font-semibold ">Get Started</Link>
</motion.div>
</>)
}