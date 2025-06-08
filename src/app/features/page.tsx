'use client'

import { motion } from "motion/react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";

export default function Features(){
  

  const features = [
  {
    heading: "For Musicians",
    description:
      "Whether you're a beginner or a professional, our app offers a suite of cutting-edge tools designed to enhance every aspect of your musical journey. From smart practice modes to composition aids, everything is powered by intelligent algorithms to make learning and creating music more intuitive, efficient, and fun.",
    bg: "bg-[#121212]",
    textColor: "text-white",
    src: "2.webp",
  },
  {
    heading: "AI-Powered Separation",
    description:
      "Easily extract individual elements like vocals, drums, bass, and other instruments from any track. Our state-of-the-art AI separation technology lets you remix, learn, or sample parts of a song with unmatched clarity—perfect for DJs, producers, and educators.",
    bg: "bg-[#1c1c1c]",
    textColor: "text-white",
    src: "3.webp",
  },
  {
    heading: "Key & Tempo Control",
    description:
      "Adjust the pitch and speed of any audio file without compromising its quality. Whether you're transposing for a vocal range, slowing down a solo to practice, or remixing a track, our precise key and tempo controls give you complete creative flexibility.",
    bg: "bg-[#262626]",
    textColor: "text-white",
    src: "4.webp",
  },
  {
    heading: "Cloud Library",
    description:
      "Securely upload, organize, and access your entire music collection from any device, at any time. Our cloud-based system ensures your projects are always backed up and available whenever inspiration strikes—no USBs or hard drives required.",
    bg: "bg-[#2e2e2e]",
    textColor: "text-white",
    src: "1.webp",
  },
];




  return(<div className="md:mx-23 px-5 bg-gradient-to-r from-[#121212] via-[#1e1e1e] to-[#0f0f0f]">
  <Navbar/>
<h1 className="text-5xl text-center font-semibold text-neutral-300 my-10">  Explore all Moises features</h1>
<h1 className="max-w-4xl mx-auto text-neutral-400  mt-10 text-lg font-semibold text-center"> Unlock your creative potential with features designed to revolutionize how you create, practice, and produce music. </h1>
<div className="flex flex-wrap justify-center gap-6 px-4 py-10">
  {features.map((itm, idx) => (
    <motion.div
      key={idx}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.1 }}
      className="bg-gradient-to-br cursor-pointer from-[#141415] via-[#1e2022] to-[#111d20] rounded-2xl shadow-lg w-[320px] p-6 hover:shadow-cyan-700/30 transition-shadow duration-300"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-cyan-500 text-center mb-3">
        {itm.heading}
      </h2>
      <p className="text-sm text-neutral-400 text-center leading-relaxed">
        {itm.description}
      </p>
      <div className="mt-6 text-center">
        <button className="px-4 py-2 rounded-xl bg-neutral-900 text-cyan-400 border border-cyan-700 hover:bg-cyan-700 hover:text-white transition duration-300 text-sm font-medium">
          Learn More
        </button>
      </div>
    </motion.div>
  ))}
</div>

  <Footer/>
  </div>)
}