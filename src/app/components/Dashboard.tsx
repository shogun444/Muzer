'use client'

import { Button } from "@/components/ui/button"
import axios from "axios"
import { Divide, LoaderCircle, Plus } from "lucide-react"
import Data from "./Data"
import { toast } from "sonner"
import  React, {  useEffect, useRef, useState } from "react"
import { useSession } from "next-auth/react"
import ReactPlayer from 'react-player'

interface Datas{
  description : string,
  name : string,
  videoId : string
}
export default function Dashboard() {
  const session = useSession()
  const Itmref = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const [currentIndex,setCurrentIndex] = useState(0)

  const [playing,setPlaying] = useState<Datas[]>([])

  useEffect(()=>{
    const fetch = async()=>{
      try {
          const play =  await axios.get('http://localhost:3000/api/Nowplaying')
     setPlaying(play.data.res)
      } catch (error) {
        console.log(error)
      }
   
     } 
     fetch()
  },[])
  async function sendReq() {
    try {
      setLoading(true)
      const link = Itmref.current?.value
      const email = session.data?.user?.email

      const id = await axios.post('http://localhost:3000/api/getId', { email: email as string })
      const userId = id.data.User.id

      await axios.post('http://localhost:3000/api/songs', { link, userId })
      toast.success('Song Added')
    } catch (error) {
      toast.error('Invalid Link')
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="flex flex-col justify-center items-center w-full  bg-neutral-100 px-4 py-10">
      
      <h1 className="text-4xl font-semibold text-neutral-800 ">Music Dashboard</h1>
      <div className="flex flex-col p-2 gap-10 w-full max-w-3xl">
        {/* Add Song Section */}
        <div className="shadow-lg px-6 pt-3 pb-6 rounded-2xl  mt-30 bg-white w-full">
          <h2 className="text-lg font-semibold text-neutral-700 mb-4">Add a Song</h2>
          <input
            ref={Itmref}
            className="w-full border border-neutral-300 shadow-sm rounded-lg bg-neutral-200 p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Paste song URL here"
          />
          <Button onClick={sendReq} className="w-full bg-cyan-600">
            {loading ? (
              <span className="animate-spin"><LoaderCircle /></span>
            ) : (
              <>
                <Plus className="mr-2" /> Add to Playlist
              </>
            )}
          </Button>
        </div>

        {/* Now Playing Section */}
        <div className="shadow-lg px-6 pt-4 pb-6 rounded-2xl bg-white w-full">

          
          <h2 className="text-lg font-semibold text-neutral-700 mb-4">Now Playing</h2>
          {playing.length > 0  && 
          <>
            <p className="text-md font-medium text-neutral-600 mb-3">
              {playing[currentIndex]?.description} - {playing[currentIndex]?.name}
          </p>
          <div className="w-160 h-90  bg-black rounded-md mb-4 mr-13 ml-9   " >
           <ReactPlayer 
           controls
           
           onEnded={()=>{
            if(currentIndex < playing.length-1) {
  setCurrentIndex(prev => prev+1)
            }
          else { 
            setCurrentIndex(0)
          }
           }}
           url={`https://www.youtube.com/watch?${playing[currentIndex]?.videoId}`} />

            </div>


          <Button className="w-full bg-cyan-600">
            {loading ? (
              <span className="animate-spin"><LoaderCircle /></span>
            ) : (
              <>Play</>
            )}
          </Button>
           </>
}
          
        </div>
      </div>

      {/* Playlist Section */}
      <div className="shadow-lg mt-10 px-6 pt-4 pb-6 rounded-2xl bg-white w-full max-w-4xl">
        <h2 className="text-lg font-semibold text-neutral-700 mb-4">Playlist</h2>
        <Data />
      </div>
    </div>
  )
}
