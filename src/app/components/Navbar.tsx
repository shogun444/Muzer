"use client"

import Link from "next/link"
import User from "./User"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react"
import { Tally3, X } from "lucide-react"
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const session = useSession()

  const staticLinks = [
    { href: "/howto", heading: "Howto" },
    { href: "/blog", heading: "Blog" },
    { href: "/features", heading: "Features" },
    { href: "/about", heading: "About" },
  ]

  // Dynamic links based on session
  const Links = [
    ...staticLinks,
    ...(session.data
      ? [{ href: "/signOut", heading: "Sign Out" }]
      : [
          { href: "/signIn", heading: "Login" },
          { href: "/signUp", heading: "Get Started" },
        ]),
  ]

  // For small screen menu, use same Links array
  const Linking = Links

  const [visible, setVisible] = useState(false)
  const [small, setSmall] = useState(false)
  const [hovered, setHovered] = useState<null | number>(null)

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setSmall(true)
    } else setSmall(false)
  })

  return (
    <>
      <motion.div
        style={{
          maxWidth: small ? "80%" : "100%",
        }}
        layoutId="Scrolled"
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className={`${
          small ? "rounded-lg border-1" : ""
        } items-center z-20 sticky mx-auto top-2 left-0 pt-2 flex text-neutral-50 justify-around bg-neutral-900 border-neutral-800 h-15 w-full`}
      >
        <Link className="flex items-center" href={"/"}>
          <img className="h-8 rounded-md" src={"/phto.jpeg"} alt="" />
          <h1 className="pl-2">Muzer</h1>
        </Link>

        {/* Large screen menu */}
        <div onMouseLeave={() => setHovered(null)} className="flex">
          {staticLinks.map((itm, index) =>
            itm.heading === "Sign Out" ? (
              <div
                key={index}
                onClick={() => signOut()}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="hidden md:block md:text-sm md:relative md:px-5 md:py-2 md:mx-3 text-neutral-600 font-semibold relative z-10 cursor-pointer"
              >
                {itm.heading}
                {hovered === index && (
                  <motion.span
                    layoutId="Hover-Span"
                    className="bg-neutral-200 text-neutral-900 px-3 py-1 absolute inset-0 rounded-2xl"
                  />
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={itm.href}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="hidden md:block md:text-sm md:relative md:px-5 md:py-2 md:mx-3"
              >
                <h1 className="text-neutral-600 font-semibold relative z-10">{itm.heading}</h1>
                {hovered === index && (
                  <motion.span
                    layoutId="Hover-Span"
                    className="bg-neutral-200 text-neutral-900 px-3 py-1 absolute inset-0 rounded-2xl"
                  />
                )}
              </Link>
            )
          )}
        </div>

        <div>
          <span
            onClick={() => setVisible((prev) => !prev)}
            className="md:hidden hover:cursor-pointer block rotate-90"
          >
            <AnimatePresence mode="wait">
              {!visible ? (
                <motion.span
                  key="tall"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  transition={{
                    ease: "easeIn",
                  }}
                >
                  <Tally3 />
                </motion.span>
              ) : (
                <motion.span
                  key="Cool"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  transition={{
                    ease: "easeIn",
                  }}
                >
                  <X />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
          <span className="md:block hidden">
            <User />
          </span>
        </div>

        {/* Small screen dropdown */}
        {visible && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="absolute top-15 bg-gradient-to-br from-[#121212] via-[#1e1e1e] to-[#0f0f0f] w-full h-45 text-center"
          >
            {Linking.map((itm, index) => (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative"
              >
                {itm.heading === "Sign Out" ? (
                  <div
                    onClick={() => signOut()}
                    className="text-neutral-500 z-10 relative font-semibold text-lg cursor-pointer"
                  >
                    {itm.heading}
                  </div>
                ) : (
                  <Link href={itm.href}>
                    <h1 className="text-neutral-500 z-10 relative font-semibold text-lg">
                      {itm.heading}
                    </h1>
                  </Link>
                )}

                {hovered === index && (
                  <motion.span
                    layoutId="hover"
                    className="absolute bg-neutral-200 w-full h-6 left-0 bottom-0"
                  />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </>
  )
}
