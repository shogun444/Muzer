'use cient'

import { useSession } from "next-auth/react"
import Dashboard from "./Dashboard";



export default function Content(){
 const {status} = useSession();
 if(status === 'loading') return <div>Loading...</div>
  if(status === 'unauthenticated') return <div>Please Login</div>
   if(status === 'authenticated') return <Dashboard/>
}