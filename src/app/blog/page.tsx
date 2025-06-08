'use client'

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Luthier from "./Luthier";
import Music from "./music";
import Intonation from "./intonation";
import Chords from "./chords";
import { useState } from 'react';
import Footer from '../components/Footer';

export default function Blog() {
  const [index, setIndex] = useState<number | null>(null);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState<any | null>(null);

  const blogs = [
    {
      heading: "Guitar Maintenance: Essential Tips for Keeping your Guitar in Tune and Ready to Play",
      content: `Regular maintenance is essential...`,
      src: '/maintain.webp',
      component: <Intonation />,
    },
    {
      heading: "The Role of a Luthier: Understanding the Craft Behind String Instruments",
      content: `Luthiery — the art of crafting and repairing...`,
      src: '/luthier.webp',
      component: <Luthier />,
    },
    {
      heading: "When Design Meets Music: Inside Moises' Journey to the Apple Design Awards Nomination",
      content: `How Human-centered Design Philosophy Empowers Creative Potential.`,
      src: '/design.webp',
      component: <Music />,
    },
    {
      heading: "The Magic Chords: Understanding the Basics of Chord Progressions",
      content: `Do you ever wonder how a song is born?...`,
      src: '/note.webp',
      component: <Chords />,
    },
  ];

  return (

                    
              
    <div className=" md:mx-23 px-5   bg-gradient-to-br from-[#141415] via-[#1e2022] to-[#111d20]  min-h-screen" onClick={() => modal && setModal(false)}>
      <Navbar />
      <h1 className="text-xl pt-15 text-center font-semibold text-cyan-700">
        WELCOME TO THE MOISES BLOG
      </h1>

      <h1 className="text-5xl text-center font-semibold text-neutral-300 my-4">
        Learn, Practice & Create Music
      </h1>

      <h2 className="text-lg font-semibold text-center text-neutral-500 mb-10">
        The latest news, tips, ideas, and tools surrounding Muser and the music community.
      </h2>

      <div className="flex flex-wrap justify-center gap-10 pb-10">
        {blogs.map((itm, idx) => (
          <motion.div
            key={idx}
            layoutId={`card-${idx}`}
            onClick={(e) => {
              e.stopPropagation();
              setIndex(idx);
              setData(itm.component);
              setModal(true);
            }}
            className="group md:w-140 sm:w-[300px]  rounded-2xl bg-gradient-to-l from-[#141415] via-[#1e2022] to-[#111d20] shadow-lg cursor-pointer"
          >
            <motion.img
              layoutId={`img-${idx}`}
              src={itm.src}
              alt=""
              className="rounded-t-2xl h-90  w-full object-cover group-hover:brightness-75 transition duration-300"
            />
            <div className="p-4">
              <h3 className="text-neutral-200 font-semibold group-hover:text-cyan-500 transition duration-300">
                {itm.heading}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {modal && index !== null && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-md bg-black/30"
          onClick={() => setModal(false)}
        >
          <motion.div
            layoutId={`card-${index}`}
            onClick={(e) => e.stopPropagation()}
            className="w-[90%] md:w-[700px] md:max-h-[90vh] h-130 overflow-y-auto rounded-2xl bg-gradient-to-bl from-[#141415] via-[#1e2022] to-[#111d20] p-6 shadow-2xl"
          >
            <motion.img
              layoutId={`img-${index}`}
              src={blogs[index].src}
              alt=""
              className="rounded-xl w-full h-60 object-cover mb-4"
            />
            <div className="text-white">
              {data}
            </div>
          </motion.div>
        </div>
      )}
      <Footer/>
    </div>
  );
}
