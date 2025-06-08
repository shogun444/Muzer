'use client'

import { Button } from "@/components/ui/button"
import useSWR, { mutate as globalMutate } from "swr"
import axios from "axios"
import { LoaderCircle, Search, X } from "lucide-react"
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
  const [inputValue, setInputValue] = useState('')
  const Itmref = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [start, setStart] = useState(false)
  const [playing, setPlaying] = useState<Datas[]>([])

  const fetcher = (url: string) => axios.get(url).then((res) => res.data.res)
  const { data, isLoading, mutate } = useSWR<Datas[]>('/api/Nowplaying', fetcher)

  async function sendReq() {
    try {
      setLoading(true)
      const link = Itmref.current?.value
      const email = session.data?.user?.email
      const id = await axios.post('/api/getId', { email: email as string })
      const userId = id.data.User.id
      const res = await axios.post('/api/songs', { link, userId })
      toast.success('Song Added')
    } catch (error: any) {
      if (error.response?.data?.msg) {
        toast.error(error.response.data.msg)
      } else {
        toast.error('Invalid Link')
      }
    } finally {
      setLoading(false)
      globalMutate('/api/songs')
    }
  }

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col items-center w-full md:pt-10 px-4 pt-10 bg-neutral-100">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4 mb-6">
        <h1 className="text-3xl font-semibold text-neutral-800 pl-18">Music Dashboard</h1>

        <div className="relative w-full md:w-auto flex flex-col sm:flex-row items-center gap-2 md:pr-16">
          <Search className={`${inputValue && 'opacity-70'} absolute left-3 top-2 text-neutral-500`} />

          <motion.input
            onChange={(e) => setInputValue(e.target.value)}
            ref={Itmref}
            value={inputValue}
            className="w-full sm:w-[300px] border border-neutral-300 rounded-lg bg-neutral-200 pl-10 pr-10 p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
            type="text"
            placeholder="Paste the URL"
          />

          {inputValue && (
            <X
            size={28}
              onClick={() => setInputValue('')}
              className="absolute right-4 top-2 md:right-50 text-neutral-500 cursor-pointer"
            />
          )}

          <Button onClick={sendReq} className="w-full sm:w-auto bg-cyan-600 mt-2 sm:mt-0">
            {loading ? (
              <div className="animate-spin px-9"><LoaderCircle /></div>
            ) : (
              <>Add to Playlist</>
            )}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6 mb-10">
        {/* Now Playing */}
        <div className="shadow-lg px-4 py-4 rounded-2xl bg-white w-full md:w-1/2">
          <h2 className="text-lg font-semibold text-neutral-700 mb-4">Now Playing</h2>

          {isLoading && (
            <div className="w-full animate-pulse space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-72 bg-gray-200 rounded"></div>
              <div className="h-2 bg-gray-200 rounded w-5/6"></div>
            </div>
          )}

          {data && (
            <>
              <p className="text-sm font-medium text-neutral-600 mb-3">
                {data[currentIndex]?.description} - {data[currentIndex]?.name}
              </p>
              <div className="w-full bg-black rounded-md mb-4 overflow-hidden">
                <ReactPlayer
                  playing={start}
                  controls
                  height={320}
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
              <Button onClick={() => setStart(prev => !prev)} className="w-full mt-4 bg-cyan-600">
                {start ? <>Pause</> : <>Play</>}
              </Button>
            </>
          )}
        </div>

        {/* Playlist */}
        <div className="shadow-lg px-4 py-4 rounded-2xl bg-white w-full md:w-1/2 max-h-[500px] overflow-y-auto">
          <h2 className="text-lg font-semibold text-neutral-700 mb-4">Playlist</h2>
          <Data mutated={mutate} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
