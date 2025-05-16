'use cient'

import { useSession } from "next-auth/react"
import Dashboard from "./Dashboard";
import Landing from "./Landing";



export default function Content(){
 const {status} = useSession();
 if(status === 'loading') return <div>Loading...</div>
  if(status === 'unauthenticated') return <Landing/>
   if(status === 'authenticated') return <Dashboard/>
}