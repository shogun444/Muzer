'use client'

import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"

export default function User(){
  const {data : session} = useSession()
return(<>
<div className="space-x-2">
  <button className="font-semibold text-sm" onClick={()=>signOut()}>{session &&'SignOut'} </button>
  <button className="font-semibold text-sm" onClick={()=>signIn()}>{!session &&  'Login'}  </button>
<Button className="p-4 rounded-3xl ">Get Started</Button>
</div>
</>)
}