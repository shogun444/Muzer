'use client'

import useSWR from 'swr'
import { Button } from "@/components/ui/button"
import axios from "axios"
import { ThumbsUp } from "lucide-react"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { toast } from "sonner"


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

  const session = useSession()

  const fetcher = (url: string) => axios.get(url).then(res => res.data.AllSongs)

  const { data, error, isLoading, mutate } = useSWR<Data[]>('http://localhost:3000/api/songs', fetcher)

  // Optional: Initialize votedIds from backend if possible, for now assume empty

  async function sendUp(id: string) {
    try {
      const email = session.data?.user?.email
      if (!email) return

      const res = await axios.post('http://localhost:3000/api/getId', { email })
      const userId = res.data.User.id

      const vote = await axios.post('http://localhost:3000/api/upvote', {
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
  }

  return (
    <div>
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
        {data.map((itm) => (
          <div
            key={itm.id}
            className="grid grid-cols-6 overflow-y-auto mt-3 items-center justify-around rounded-2xl bg-neutral-200 p-3  m-3">
            <img className="w-100  rounded-lg " src={itm.thumbnail} alt="" />
            <div className="pl-3 col-start-2 col-end-5 font-semibold text-neutral-900">
              <h1 className="text-xs font-semibold text-neutral-900">{itm.description}</h1>
              <h1 className="text-xs font-semibold text-neutral-700">{itm.name}</h1>
            </div>

            <div className="col-start-6 flex items-center">
              <Button onClick={() => sendUp(itm.id)}>
                <ThumbsUp
                  className={`${votedIds.has(itm.id) ? 'text-cyan-500' : 'text-neutral-600'} transition-all`} />
              </Button>
              <h1 className="font-semibold text-sm px-2">{itm._count.upvotes}</h1>
            </div>
          </div>
        ))}
      </>}
    </div>
  )
}
