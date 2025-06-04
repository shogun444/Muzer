'use client'

import useSWR from 'swr'
import { Button } from "@/components/ui/button"
import axios from "axios"
import { LoaderCircle, ThumbsUp } from "lucide-react"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { toast } from "sonner"
import { motion } from 'motion/react'


interface Data {
  thumbnail: string,
  description: string,
  name: string,
  _count: any,
  id: string
}

interface props {
  mutated: () => void
}

export default function Data({ mutated }: props) {
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set())
  const [visible,setVisible] = useState(false)
  const [index,setIndex] =  useState<string>()
  const [mload,setMload] = useState(false)
  const [loading,setLoading] = useState(false)
  const [lindex,setlindex] = useState <string | null>(null)
  const session = useSession()
  const [modal,setModal] = useState<Data | null>(null)
  const fetcher = (url: string) => axios.get(url).then(res => res.data.AllSongs)

  const { data, error, isLoading, mutate } = useSWR<Data[]>('/api/songs', fetcher)

  // Optional: Initialize votedIds from backend if possible, for now assume empty

  async function sendUp(id: string) {
    try {
      setLoading(true)
      setlindex(id)
      const email = session.data?.user?.email
      if (!email) return

      const res = await axios.post('/api/getId', { email })
      const userId = res.data.User.id

      const vote = await axios.post('/api/upvote', {
        songId: id,
        userId: userId
      })

      if (vote.data.status === 'voted') {
        toast.success('Voted')
        setVotedIds(prev => new Set(prev).add(id))  // Add id immediately
      } else if (vote.data.status === 'removed') {
        toast.success('Vote Removed')
        setVotedIds(prev => {
          const copy = new Set(prev)
          copy.delete(id)
          return copy
        })
      }

      mutated()  // Call outside mutation if needed
      mutate()   // Refresh song data count

    } catch (error) {
      console.log(error)
    }
    finally { 
      setLoading(false)
      setlindex(null)
    }
  }
async function getDetails(id : string){
  try {
    setMload(true)
      const findSong = await axios.get(`/api/song/${id}`)
  return findSong.data.song
  } catch (error) {
    console.error()
  }
finally{
  setMload(false)
}
}

  return (
    <div >
      {isLoading &&
        <div className="w-full rounded-md">
          <div className="flex flex-col animate-pulse space-x-4">
            {[...Array(4)].map((_, i) =>
              <div key={i} className="flex-1 space-y-7 py-1">
                <div className="h-20 rounded-2xl bg-gray-200"></div>
              </div>
            )}
          </div>
        </div>}

      {data && <>
        {data.map((itm,index) => (
          <motion.div
            onClick={async ()=>{
            setIndex(itm.id)
            setVisible(prev =>!prev)
            setModal(null)
            const data = await getDetails(itm.id)
            setModal(data)
            }}
            key={itm.id}
            className="grid grid-cols-6 overflow-y-auto mt-3 items-center justify-around rounded-2xl bg-neutral-200 p-3  m-3">
            <motion.img 
            layoutId={`card-${itm.id}`}
            className="w-100  rounded-lg overflow-hidden " src={itm.thumbnail} alt="" />
            <div 
          
            className="pl-3 col-start-2 col-end-5 font-semibold text-neutral-900">
              <h1 className="text-xs font-semibold text-neutral-900">{itm.description}</h1>
              <h1 className="text-xs font-semibold text-neutral-700">{itm.name}</h1>
            </div>


            <div
            
            className="col-start-6 flex items-center">
              <button
              onClick={(e) => {
                sendUp(itm.id)
                
                e.stopPropagation()
              }}>
                {  lindex === itm.id ?  <LoaderCircle className='animate-spin' /> :  <ThumbsUp
                  className={`${votedIds.has(itm.id) ? 'text-cyan-500' : 'text-neutral-600'} transition-all`} />}
               
              </button>
              <h1 className="font-semibold text-sm px-2">{itm._count.upvotes}</h1>
            </div>
          </motion.div>
        ))}
      </>}
      {visible && 
      <>
      <div 
      onClick={()=>setVisible(false)}
      className=' inset-0 fixed bg-black/10 backdrop-blur-sm z-10'/>
      <motion.div
      layoutId={`card-${index}`}
      className='bg-neutral-300 backdrop-blur-2xl rounded-2xl  absolute top-200 left-20 w-86 h-75 md:left-200 md:top-70 md:w-[35%] z-10 md:h-85'>
      {mload && <div className="w-full rounded-md">
          <div className="flex flex-col animate-pulse space-x-4">
            {[...Array(1)].map((_, i) =>
              <div key={i} className="flex-1 space-y-7 py-1">
                <div className="mt-5 ml-5 animate-pulse h-50  w-70 rounded-lg bg-gray-200"></div>
                 <div className=" ml-5 animate-pulse h-10  w-70 rounded-lg bg-gray-200"></div>
                 
              </div>
            )}
          </div>
          </div>}
        {modal &&   <div className='pl-5 pt-5'>
          <div className='grid grid-cols-3'>
   <div className='col-span-2'> <img className="w-70   rounded-lg overflow-hidden object-cover " src={modal.thumbnail} alt="" /> </div>
        <div className='col-start-3 flex pl-5 items-center'>
          <button onClick={async() => {
               await sendUp(modal.id)
               setModal(null) 
               const updatedData = await getDetails(modal.id)
               setModal(updatedData)
              }}>
                {lindex != null ?  <LoaderCircle className='animate-spin' /> :  <ThumbsUp size={38}
                  className={`${votedIds.has(modal.id) ? 'text-cyan-500' : 'text-neutral-600'} bg-neutral-500 p-2 rounded-md transition-all`} />}
               
              </button>
              <h1 className="font-semibold text-lg px-2">{modal._count.upvotes}</h1>
          </div>
          </div>
       
         
            <div 
            className="font-semibold text-neutral-900">
              <h1 className="text-lg font-semibold text-neutral-900">{modal.name}</h1>
              <h1 className="text-sm font-semibold text-neutral-700">{modal.description}</h1>
            </div>  </div>}
      </motion.div>
      </>
    }  </div>
  )
}
