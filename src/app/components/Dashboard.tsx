'use client'

import { Button } from "@/components/ui/button"
import useSWR from "swr"
import axios from "axios"
import { LoaderCircle, Plus, Search } from "lucide-react"
import Data from "./Data"
import { toast } from "sonner"
import React, { useEffect, useRef, useState } from "react"
import { useSession } from "next-auth/react"
import ReactPlayer from 'react-player'
import Footer from "./Footer"
import { motion } from "motion/react"

interface Datas {
  description: string,
  name: string,
  videoId: string
}

export default function Dashboard() {
 
  const session = useSession()
   const [inputValue,setInputValue] = useState('')
  const [size,setSize] = useState(false)
  const Itmref = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
 
  const [playing, setPlaying] = useState<Datas[]>([])
  const fetcher = (url : string) => axios.get(url).then((res)=>res.data.res)

  const{data,isLoading,mutate,error} = useSWR<Datas[]>('/api/Nowplaying',fetcher)
  



  async function sendReq() {
    try {
      setLoading(true)
      const link = Itmref.current?.value
      const email = session.data?.user?.email
      const id = await axios.post('/api/getId', { email: email as string })
      const userId = id.data.User.id
      await axios.post('/api/songs', { link, userId })
      toast.success('Song Added')
      mutate()
    } catch (error) {
      toast.error('Invalid Link')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div

    className="flex flex-col justify-center items-center w-full pt-10 bg-neutral-100">
      <div className="flex justify-between w-full px-10">
        <div>
          <h1 className="text-4xl font-semibold text-neutral-800">Music Dashboard</h1>
        </div>

        <div className="flex justify-center items-center">
          <Search className={`${size || inputValue ? 'opacity-0' : 'opacity-70'} absolute text-neutral-500 mx-5 `}/>
          <motion.input
          onMouseEnter={()=>setSize(true)}
          onMouseLeave={()=>setSize(false)}
          onChange={(e)=>setInputValue(e.target.value)}
            ref={Itmref}
            value={inputValue}
            style={{
              width : size ? '400px' : ''

            }}
            className={`${size ? 'animate-in transition-all ' : 'animate-out transition-all'} w-full border border-neutral-300 rounded-lg bg-neutral-200 pl-10 p-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
            type="text"
            placeholder="Paste the URL"
          />
          <Button onClick={sendReq} className="w-fit ml-5 bg-cyan-600">
            {loading ? (
              <span className="animate-spin"><LoaderCircle /></span>
            ) : (
              <>Add to Playlist</>
            )}
          </Button>
        </div>
      </div>

      <div className="flex w-full max-w-7xl px-10 gap-8  mt-10 mb-5">
        {/* Now Playing Section */}
        <div className="shadow-lg px-4 py-4 rounded-2xl bg-white w-1/2">
          <h2 className="text-lg font-semibold text-neutral-700 mb-4">Now Playing</h2>
          {isLoading   &&
            <div className="w-full rounded-md">
              <div className="h-6 rounded mb-4 bg-gray-200 w-3/4"></div>
              <div className="flex animate-pulse space-x-4">
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-72 rounded bg-gray-200"></div>
                  <div className="space-y-3">
                    <div className="h-2 rounded bg-gray-200 w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          }
          {data && (
            <>
              <p className="text-sm font-medium text-neutral-600 mb-3">
                {data[currentIndex]?.description} - {data[currentIndex]?.name}
              </p>
              <div className="w-full bg-black rounded-md mb-4 overflow-hidden">
                <ReactPlayer
                  controls
                  height={350}
                  width="100%"
                  onEnded={() => {
                    if (currentIndex < playing.length - 1) {
                      setCurrentIndex(prev => prev + 1)
                    } else {
                      setCurrentIndex(0)
                    }
                  }}
                  url={`https://www.youtube.com/watch?${data[currentIndex]?.videoId}`}
                />
              </div>
              <Button className="w-full mt-5 bg-cyan-600">
                {loading ? (
                  <span className="animate-spin"><LoaderCircle /></span>
                ) : (
                  <>Play</>
                )}
              </Button>
            </>
          )}
        </div>

        {/* Playlist Section */}
        <div className="shadow-lg px-4 py-4 h-138 rounded-2xl bg-white w-1/2 overflow-y-auto mask-b-from-88% pb-10 pr-2">
          <h2 className="text-lg font-semibold text-neutral-700 mb-4">Playlist</h2>
          <Data  mutated={mutate}/>
        </div>
      </div>

      <Footer />
    </div>
  )
}
