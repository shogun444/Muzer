'use cient'

import { useSession } from "next-auth/react"
import Dashboard from "./Dashboard";
import Landing from "./Landing";



export default function Content(){
 const {status} = useSession();
    if(status === 'authenticated') return <Dashboard/>

if(status ==='loading' || status === 'unauthenticated')
    return <Landing/>

}