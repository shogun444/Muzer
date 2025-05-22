'use client'

import { Button } from "@/components/ui/button"
import axios from "axios"
import { LoaderCircle, Plus, Search } from "lucide-react"
import Data from "./Data"
import { toast } from "sonner"
import React, { useEffect, useRef, useState } from "react"
import { useSession } from "next-auth/react"
import ReactPlayer from 'react-player'
import Footer from "./Footer"

interface Datas {
  description: string,
  name: string,
  videoId: string
}

export default function Dashboard() {
  const session = useSession()
  const Itmref = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [data, setData] = useState(false)
  const [playing, setPlaying] = useState<Datas[]>([])

  useEffect(() => {
    const fetch = async () => {
      try {
        setData(true)
        const play = await axios.get('http://localhost:3000/api/Nowplaying')
        setPlaying(play.data.res)
      } catch (error) {
        console.log(error)
      } finally {
        setData(false)
      }
    }
    fetch()
  }, [])

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
    <div className="flex flex-col justify-center items-center w-full pt-10 bg-neutral-100">
      <div className="flex justify-between w-full px-10">
        <div>
          <h1 className="text-4xl font-semibold text-neutral-800">Music Dashboard</h1>
        </div>

        <div className="flex justify-center items-center">
          <Search className="absolute text-neutral-500 mx-5" />
          <input
            ref={Itmref}
            className="w-full border border-neutral-300 rounded-lg bg-neutral-200 pl-10 p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
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

      <div className="flex w-full max-w-7xl px-10 gap-4 mt-10 mb-5">
        {/* Now Playing Section */}
        <div className="shadow-lg px-4 py-4 rounded-2xl bg-white w-1/2">
          <h2 className="text-lg font-semibold text-neutral-700 mb-4">Now Playing</h2>
          {data &&
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
          {playing.length > 0 && (
            <>
              <p className="text-sm font-medium text-neutral-600 mb-3">
                {playing[currentIndex]?.description} - {playing[currentIndex]?.name}
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
                  url={`https://www.youtube.com/watch?${playing[currentIndex]?.videoId}`}
                />
              </div>
              <Button className="w-full bg-cyan-600">
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
        <div className="shadow-lg px-4 py-4 rounded-2xl bg-white w-1/2">
          <h2 className="text-lg font-semibold text-neutral-700 mb-4">Playlist</h2>
          <Data />
        </div>
      </div>

      <Footer />
    </div>
  )
}
