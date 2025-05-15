'use client'

import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";



export default function Session({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
return(<>
<div>
  <SessionProvider> 
  {children}
        <Toaster />
  </SessionProvider>
</div>
</>)
}