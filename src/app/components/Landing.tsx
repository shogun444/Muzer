"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";
import Image from "next/image";
import Section from "./Section";

export default function Landing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const videos = [
    { src: "/Piano.mp4" },
    { src: "/drums.mp4" },
    { src: "/Guitar1.mp4" },
    { src: "/Guitar2.mp4" },
    { src: "/Synth.mp4" },
    { src: "/Vocals.mp4" },
  ];

  const features = [
  {
    heading: "Features for Musicians",
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


  const nav = [
    { name: "Features for Musicians" },
    { name: "AI-Powered Separation" },
    { name: "Key & Tempo Control" },
    { name: "Cloud Library" },
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.min(
        features.length - 1,
        Math.floor(latest * features.length)
      );
      setActiveIndex(newIndex);
    });
    return () => unsubscribe();
  }, [features.length, scrollYProgress]);

  return (
    <div className="min-h-screen w-full bg-neutral-900 text-white">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center pt-20 px-4">
        <div className="max-w-6xl pr-5">
          <h1 className="text-6xl font-semibold text-neutral-200">
            Your Music, Reimagined
          </h1>
          <p className="text-neutral-400 pt-5 font-semibold text-lg">
            Experience music like never before with our premium audio platform.
            <br />
            Discover, stream, and share your favorite tracks with unparalleled
            <br />
            sound quality.
          </p>
          <Button
            size={"lg"}
            className="bg-cyan-600 text-neutral-900 text-md p-6 mt-6"
          >
            Start Free
          </Button>
        </div>

        <div className="flex gap-2 p-2 mt-10 lg:mt-0">
          <div className="flex flex-col">
            {videos
              .filter((_, i) => i % 2 === 0)
              .map((itm, i) => (
                <div key={i} className={`${i === 0 ? "pt-20" : "pt-0"} my-2`}>
                  <video
                    autoPlay
                    loop
                    muted
                    className="rounded-xl"
                    width={300}
                    src={itm.src}
                  />
                </div>
              ))}
          </div>
          <div className="flex flex-col">
            {videos
              .filter((_, i) => i % 2 !== 0)
              .map((itm, i) => (
                <div key={i} className={`${i === 0 ? "pt-8" : "pt-0"} my-2`}>
                  <video
                    autoPlay
                    loop
                    muted
                    className="rounded-xl"
                    width={300}
                    src={itm.src}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="text-center px-4">
        <h1 className="text-neutral-200 text-5xl pt-10">
          More than an app: a music partner
        </h1>
        <h1 className="text-neutral-500 text-2xl pt-5">
          Your private library accessible from any device, stored securely in
          the cloud.
        </h1>
      </div>

      {/* Features Section */}
      <div ref={containerRef} className="mt-32 h-[250vh] bg-neutral-300 relative px-4 pb-32">
        <div className="sticky pt-10 top-5 flex flex-col items-center space-y-20">
          <div className="flex gap-2 flex-wrap justify-center">
            {nav.map((itm, index) => (
              <div
                key={index}
                className={`rounded-2xl border px-3 py-1 text-xs transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-black text-white border-black"
                    : "border-black text-black"
                }`}
              >
                {itm.name}
              </div>
            ))}
          </div>

          <div className="relative w-full max-w-4xl h-[500px] mb-32">
            {features.slice(0, activeIndex + 1).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                animate={{ 
                  opacity: 1, 
                  y: index * 10 - (scrollYProgress.get() * features.length * 20)
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ zIndex: index }}
                className={`absolute w-full top-0 grid grid-cols-2 left-0 h-full py-10 rounded-3xl shadow-2xl ${feature.bg} ${feature.textColor}`}
              >
                <div className="flex flex-col justify-start py-20 px-10">
                   <h2 className="text-3xl font-semibold text-neutral-200 text-center">
                  {feature.heading}
                </h2>
                <p className="text-sm pt-4 text-center text-neutral-400 max-w-xl mx-auto">
                  {feature.description}
                </p>
                <Button variant={'outline'} className="w-fit text-neutral-800 mx-auto mt-6">Learn More</Button>
                </div>
               
                <img  height={100} width={500} src={feature.src}/>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
<Section/>
      <Footer />
    </div>
  );
}