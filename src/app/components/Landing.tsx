"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
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
      heading: "Powerful Features for Musicians",
      description:
        "Our app is designed to help musicians practice, learn, and create with powerful AI-driven tools.",
      bg: "bg-purple-800",
      textColor: "text-white",
    },
    {
      heading: "AI-Powered Separation",
      description:
        "Isolate vocals, drums, bass, and other instruments with our advanced AI technology.",
      bg: "bg-neutral-50",
      textColor: "text-neutral-900",
    },
    {
      heading: "Key & Tempo Control",
      description:
        "Change the key and tempo of any song without affecting the quality.",
      bg: "bg-teal-500",
      textColor: "text-white",
    },
    {
      heading: "Cloud Library",
      description:
        "Access your music from anywhere with our secure cloud storage.",
      bg: "bg-neutral-800",
      textColor: "text-white",
    },
  ];

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.6,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            // markers: true, // Uncomment to debug scroll triggers
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-neutral-900 text-white">
      {/* Hero Section */}
      <div className="flex justify-center items-center pt-20 px-4">
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

        <div className="flex gap-2 p-2">
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

      <div className="text-center">
        <h1 className="text-neutral-200 text-5xl pt-10">
          More than an app: a music partner
        </h1>
        <h1 className="text-neutral-500 text-2xl pt-5">
          Your private library accessible from any device, stored securely in
          the cloud.
        </h1>
      </div>

      {/* Staggered Overlapping Card Section */}
      <div className="relative w-full mt-32 h-screen">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={`absolute left-1/2 transform -translate-x-1/2 h-100 w-[70%] py-20 px-10 rounded-3xl shadow-2xl ${
              feature.bg
            } ${feature.textColor}`}
            style={{
              top: `${index * 50}px`,
              zIndex: index + 1,
            }}
          >
            <h2 className="text-4xl font-bold text-center">{feature.heading}</h2>
            <p className="text-lg pt-4 text-center max-w-xl mx-auto">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
