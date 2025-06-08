'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import { motion } from "motion/react"
import Link from "next/link"

export default function User() {
  const { data: session } = useSession()

  return (
    <motion.div className="flex flex-col md:flex-row md:space-x-2 gap-2 items-center">
      {/* SignOut Button */}
      {session && (
        <button
          className="font-semibold text-sm"
          onClick={() => signOut()}
        >
          <motion.h1 className="hover:bg-neutral-200 hover:text-neutral-800 hover:rounded-xl px-3 py-2 hover:cursor-pointer">
            Sign Out
          </motion.h1>
        </button>
      )}

      {/* Login & Get Started buttons */}
      {!session && (
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <div
            onClick={() => signIn()}
            className="font-semibold text-sm hover:bg-neutral-200 hover:text-neutral-800 hover:rounded-xl px-3 py-2 hover:cursor-pointer"
          >
            Login
          </div>

          <Link
            href="/signUp?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2FsignUp"
            className="px-3 py-2 text-sm rounded-3xl bg-neutral-950 hover:bg-neutral-200 hover:text-neutral-800 font-semibold"
          >
            Get Started
          </Link>
        </div>
      )}
    </motion.div>
  )
}
