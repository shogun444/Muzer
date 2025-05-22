'use client'

import { Button } from "@/components/ui/button"
import axios from "axios"
import { LoaderCircle, ThumbsDown, ThumbsUp } from "lucide-react"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { toast } from "sonner"
import { prisma } from "../../../prisma/prisma"

interface Data{
  thumbnail : string,
  description : string,
  name : string,
  _count : any,
  id : string
}

export default  function Data(){
 
  const [data,setData] = useState<Data[]>([])
  const [loading,setLoading] = useState(false)
  const session = useSession()
  useEffect(()=>{
    const fetch = async () =>{
      try {
        setLoading(true)
              const res = await axios.get('http://localhost:3000/api/songs')
   
      setData(res.data.AllSongs)
      } catch (error) {
        console.log(error)
      }
      finally{
        setLoading(false)
      }

    }
    fetch()

    
  },[])
  async function sendUp(id : string){   
try {
const email = session.data?.user?.email
console.log(email)
const res = await axios.post('http://localhost:3000/api/getId',{
  email : email
})
const userId = res.data.User.id
console.log(userId)

const vote = await axios.post('http://localhost:3000/api/upvote',{
songId : id,
userId : userId
})
if(vote.data.status === 'voted'){
  toast.success('Voted') 
  
}
else if (vote.data.status === 'removed'){ 
toast.success('Vote Removed') 

}

} catch (error) {
console.log(error)

}


 }

return(<>
<div>
  {loading &&
  <div className="w-full rounded-md">
              
              <div className="flex flex-col animate-pulse space-x-4">
                <div className="flex-1 space-y-7 py-1">
                  <div className="h-20 rounded-2xl bg-gray-200"></div>
                </div>
                 <div className="flex-1 space-y-7 py-1">
                  <div className="h-20 rounded-2xl bg-gray-200"></div>
                </div>
                 <div className="flex-1 space-y-7 py-1">
                  <div className="h-20 rounded-2xl bg-gray-200"></div>
                </div>
                 <div className="flex-1 space-y-7 py-1">
                  <div className="h-20 rounded-2xl bg-gray-200"></div>
                </div> 
              </div>
            </div>


  }
  
  {data.length> 0 && <> {data.map((itm,index)=>(<div className="grid grid-cols-6 overflow-y-auto mt-3 items-center justify-around rounded-2xl bg-neutral-200 p-3  m-3" key={itm.id}>
  <img className="w-100  rounded-lg " src={itm.thumbnail} alt="" />
  <div className=" pl-3 col-start-2 col-end-5 font-semibold text-neutral-900">
    <h1 className="text-xs font-semibold text-neutral-900">{itm.description}</h1>
  <h1 className="text-xs font-semibold text-neutral-700">{itm.name}</h1>
     </div>

     <div className="col-start-6 flex items-center">
    <Button  onClick={()=>sendUp(itm.id)}>{  <ThumbsUp className="text-cyan-500" />}</Button>
    <h1 className="font-semibold text-sm px-2">{itm._count.upvotes}</h1>
     </div>
  
</div>))} </>}</div>
</>)
}