"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Footer from "./Footer";
import Image from "next/image";
import Section from "./Section";
import Bento from "./Bento";

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

const card =[
  {
svg : "",
  heading : "AI Audio Separation",
  desription : "Separate vocals, drums, guitar, bass, and other instruments from any song. Isolate instruments or mute tracks in one click. "
  },
  {
svg : "",
  heading : "Smart Metronome & Audio Speed Changer",
  desription : "Instantly generate metronome counts in sync with your favorite song, whether recorded in studio or live. Slow down or speed up any song with 1-click. The App instantly detects and displays the BPM of any song. "
  },
  {
svg : "",
  heading : "Chord Detection",
  desription : "Quickly detect easy to advanced chords. Use the Pitch Changer to instantly transpose chords in real time to your key of choice."
  }
,
   {
svg : "",
  heading : " Choose your favorite song and upload it",
  desription : "Upload any song from your library or any public URL. "
  }
  ,
   {
svg : "",
  heading : "Easily find and keep up with any song’s chords",
  desription : "Our Chord Finder identifies and displays chords in real-time, offering unprecedented accuracy. This is particularly useful for learning new songs, understanding chord progressions, and enhancing musical knowledge. "
  }
]








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
    <div className="min-h-screen w-full bg-neutral-900 text-white rounded-xl">
      {/* Hero Section */}
      <div className="flex flex-col  lg:flex-row justify-center items-center  px-4">
        <div className="max-w-6xl pr-5 pb-30">
          <h1 className="text-6xl font-semibold text-neutral-200">
            The Musician's App
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
            className="bg-teal-600 text-neutral-900 text-lg p-6 mt-6"
          >
            Start Free
          </Button>
        </div>

        <div className="flex gap-2 p-2 pt-5 lg:mt-0 relative">
          <div className="flex flex-col">
            {videos
              .filter((_, i) => i % 2 === 0)
              .map((itm, i) => (
                <div key={i} className={`${i === 0 ? "pt-20" : "pt-0"} my-2`}>
                  <video
                    autoPlay
                    loop
                    muted
                    className="rounded-xl mask-b-from-10%"
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
                    className="rounded-xl mask-b-from-0%"
                    width={300}
                    src={itm.src}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="text-center px-64 mt-10 pb-10">
        <h1 className="text-neutral-200 text-5xl pt-10">
          Everything in one place

        </h1>
        <h1 className="text-neutral-500 text-2xl pt-5">
          Your private library accessible from any device, stored securely in
          the cloud.
        </h1>
<div className="grid grid-cols-3 w-full pt-20 text-left "> 
        <Bento className="flex flex-col col-span-2 justify-start">
<svg 
height={86}
width={65}
xmlns="http://www.w3.org/2000/svg" fill="#024f52" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g></svg>

          <h1 className="text-xl font-semibold text-neutral-200 text-left"> Choose your favorite song and upload it </h1>
          <h1 className="font-semibold text-sm text-neutral-500 text-left">Upload any song from your library or any public URL. We have all you need to master your craft right in your hand with the Moises App. Enjoy our collective set of features that will make your music experience seamless. We're constantly evolving, innovating, and updating our App. Stay tuned!</h1>
          </Bento>

           <Bento className="flex flex-col col-span-1">
            <svg
  fill="#024f52"
  viewBox="0 0 32 32"
  width="80"
  height="80"
  id="icon"
  xmlns="http://www.w3.org/2000/svg"
>
  <g strokeWidth="0"></g>
  <g strokeLinecap="round" strokeLinejoin="round"></g>
  <g>
    <defs>
      <style>{`.cls1{fill:none;}`}</style>
    </defs>
    <title>letter--Bb</title>
    <path d="M23,13H19V9H17V23h6a2,2,0,0,0,2-2V15A2,2,0,0,0,23,13Zm-4,8V15h4v6Z"></path>
    <path d="M15,12a3,3,0,0,0-3-3H7V23h5a3,3,0,0,0,3-3V18a3,3,0,0,0-.78-2A3,3,0,0,0,15,14ZM9,11h3a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H9Zm4,9a1,1,0,0,1-1,1H9V17h3a1,1,0,0,1,1,1Z"></path>
    <rect
      className="cls1"
      width="32"
      height="32"
    ></rect>
  </g>
</svg>

          <h1 className="text-xl font-semibold text-neutral-200"> Easily find and keep up with any song’s chords </h1>
          <h1  className="font-semibold text-sm text-neutral-500">Our Chord Finder identifies and displays chords in real-time, offering unprecedented accuracy. This is particularly useful for learning new songs, understanding chord progressions, and enhancing musical knowledge. </h1>
          </Bento>
          </div>

<div className="grid grid-cols-3  text-left">
  <Bento className="">
<svg 
height={70}
fill="#024f52" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" d="M20,19 C20,20.1045695 19.1045695,21 18,21 L6,21 C4.8954305,21 4,20.1045695 4,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,7 C1,5.8954305 1.8954305,5 3,5 L4,5 C4,3.8954305 4.8954305,3 6,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L21,5 C22.1045695,5 23,5.8954305 23,7 L23,17 C23,18.1045695 22.1045695,19 21,19 L20,19 Z M18,19 L18,5 L6,5 L6,19 L18,19 Z M12,12.1404647 L12,7.13148291 L16.5547002,10.1679497 L15.4452998,11.8320503 L14,10.8685171 L14,14.5 C14,15.9534271 12.6045695,17 11,17 C9.3954305,17 8,15.9534271 8,14.5 C8,13.0465729 9.3954305,12 11,12 C11.3471248,12 11.6844618,12.0489806 12,12.1404647 Z M4,7 L3,7 L3,17 L4,17 L4,7 Z M20,7 L20,17 L21,17 L21,7 L20,7 Z M11,15 C11.6045695,15 12,14.7034271 12,14.5 C12,14.2965729 11.6045695,14 11,14 C10.3954305,14 10,14.2965729 10,14.5 C10,14.7034271 10.3954305,15 11,15 Z"></path> </g></svg>
            <h1 className="text-xl font-semibold text-neutral-200">AI Audio Separation</h1>
            <h1  className="font-semibold text-sm text-neutral-500">Separate vocals, drums, guitar, bass, and other instruments from any song. Isolate instruments or mute tracks in one click. </h1>
          </Bento>

           <Bento className="">
<svg 
height={70}
fill="#024f52" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m 5.9969073,12.312375 c -0.2986609,-0.048 -0.8783415,-0.2811 -1.1885332,-0.479 -0.1742322,-0.1111 -0.3310132,-0.2022 -0.3484044,-0.2022 -0.017401,0 -0.227916,0.1326 -0.4678528,0.2945 l -0.4362505,0.2943 -0.1408498,-0.2055 c -0.077506,-0.113 -0.1301692,-0.2145 -0.1171382,-0.2256 0.013001,-0.011 0.2040742,-0.1398 0.4245397,-0.2863 l 0.400828,-0.2662 -0.2070145,-0.3283 c -0.1138679,-0.1806 -0.2518376,-0.4705 -0.3066014,-0.6442 l -0.099607,-0.3160001 -0.3497445,0 -0.3497345,0 0,1.0220001 0,1.0221 -0.2705389,0 -0.2705389,0 0,-1.0386 0,-1.0385001 -0.4498115,-0.072 c -0.2473973,-0.039 -0.5330273,-0.1146 -0.6347345,-0.1672 l -0.1849229,-0.096 0.035403,-1.0338 c 0.019401,-0.5685 0.050303,-1.2547 0.068605,-1.5249 l 0.033202,-0.4911 0.2805696,-0.063 c 0.1543108,-0.035 0.4090787,-0.081 0.5661397,-0.1018 l 0.28557,-0.039 -0.002,-1.6014 -0.002,-1.6013 -0.3011811,-0.2045 c -0.3978879,-0.2699 -0.8981129,-0.8217 -0.8981129,-0.9908 0,-0.2925 0.2508676,-0.3458 0.8741312,-0.1856 0.9923395,0.255 2.2833499,1.123 2.4907844,1.6748 0.053304,0.1417 0.046703,0.1944 -0.035902,0.2856 -0.1759624,0.1944 -0.6677868,0.122 -1.4803537,-0.2178 -0.098507,-0.041 -0.1052073,0.048 -0.1052073,1.4053 l 0,1.4493 0.1653315,9e-4 c 0.090906,4e-4 0.2261459,0.017 0.3004911,0.037 0.1230686,0.033 0.1319392,0.02 0.099107,-0.1439 -0.031702,-0.1585 0.098307,-1.433 0.1937136,-1.8991 0.1176382,-0.5745 1.9799886,-0.558 2.6831678,0.024 0.1329893,0.11 0.2258658,0.2403 0.2264659,0.3175 8.9e-4,0.1149 0.016001,0.1075 0.1238586,-0.061 0.1901133,-0.2969 0.5958217,-0.4644 1.1874531,-0.4904 0.8467893,-0.037 1.2728191,0.2152 1.2728191,0.7543 0,0.2552 0.007,0.2656 0.1653316,0.2474 l 0.1653316,-0.019 0.016801,-0.7966 0.016801,-0.7965 -0.3173722,-0.001 c -0.4102687,-10e-4 -1.129539,-0.1541 -1.2384367,-0.263 -0.1703419,-0.1703 0.28526,-0.3398 1.1465103,-0.4263 0.2231956,-0.022 0.4058084,-0.066 0.4058084,-0.096 0,-0.073 0.5252668,-0.072 0.5510986,0 0.011001,0.031 0.2587173,0.086 0.5504493,0.1225 0.532717,0.066 1.002639,0.2095 1.002639,0.3066 0,0.1467 -0.766123,0.3557 -1.303611,0.3557 l -0.259498,0 0,0.7214 c 0,0.8012 -0.026702,0.7594 0.435861,0.6829 l 0.225456,-0.037 0,-0.5934 0,-0.5933 0.240477,0 0.240475,0 0,0.573 c 0,0.4074 0.0217,0.5791 0.07521,0.5938 0.0413,0.011 0.27553,0.052 0.520446,0.09 0.244917,0.038 0.637195,0.1136 0.871732,0.1681 l 0.426439,0.099 -0.243657,0.073 c -0.134009,0.04 -0.560109,0.1345 -0.946886,0.2101 l -0.703229,0.1376 0,3.1463 0,3.1462001 -0.240476,0 -0.240477,0 0,-3.1564001 c 0,-2.9656 -0.006,-3.1563 -0.105219,-3.1569 -0.0579,-4e-4 -0.206654,-0.017 -0.330653,-0.038 l -0.225445,-0.037 0,0.3084 c 0,0.2625 0.017001,0.3086 0.113578,0.3086 0.0625,0 0.171862,0.047 0.243097,0.1052 0.118729,0.096 0.128049,0.1528 0.111868,0.6763 l -0.0177,0.5712 -0.225446,0.1101 -0.225446,0.1102 0,2.2194 0,2.2195001 -0.2602482,0 c -0.2232257,0 -0.3197224,-0.046 -0.6783675,-0.3248 l -0.4181193,-0.325 -0.2384567,0.1798 c -0.6778374,0.5107 -1.5643195,0.7386 -2.3727161,0.6101 z m 1.114618,-0.6536 c 0.7369916,-0.1908 1.2703889,-0.6371 1.6132729,-1.3501 0.1754023,-0.3649001 0.1879132,-0.4349001 0.1879132,-1.0521001 0,-0.6173 -0.012601,-0.6881 -0.1894433,-1.0613 -0.314372,-0.6634 -0.7668036,-1.0314 -1.5047053,-1.2236 -1.2067145,-0.3143 -2.3520346,0.1929 -2.8890222,1.2794 -0.2185453,0.4422 -0.2264059,0.4801 -0.2264059,1.0925 0,0.5624 0.018301,0.6733001 0.1611313,0.9782001 0.500225,1.0672 1.7044593,1.6327 2.8472593,1.337 z m 2.3121719,-0.7941 -3e-5,-0.6462 -0.2300661,0.4509 -0.2300662,0.4508 0.2150751,0.1932 c 0.1182783,0.1062 0.2218255,0.1941 0.2300961,0.1953 0.008,10e-4 0.015001,-0.2885 0.015001,-0.644 z m 4e-5,-2.7504001 c 0,-0.2906 -0.014601,-0.3307 -0.1202385,-0.3307 -0.066105,0 -0.1202484,0.017 -0.1202484,0.037 0,0.053 0.2054444,0.6243 0.2245357,0.6243 0.009,0 0.016001,-0.1488 0.016001,-0.3307 z m -4.899763,-1.1123 c 0.1056174,-0.1167 0.1050073,-0.1202 -0.020701,-0.1202 -0.089506,0 -0.129559,0.037 -0.129559,0.1202 0,0.066 0.009,0.1203 0.020701,0.1203 0.011401,0 0.069705,-0.054 0.1295591,-0.1203 z m 2.0414929,-1.2428 c -0.067005,-0.8048 -0.1200884,-0.9144 -0.1696219,-0.3503 -0.023202,0.2645 -0.057904,0.5689 -0.077005,0.6764 -0.032102,0.1807 -0.022602,0.1953 0.127639,0.1953 l 0.1623913,0 -0.043403,-0.5214 z m 2.8582701,0.017 c 0,-0.2402 -0.024702,-0.3337 -0.095107,-0.3607 -0.1758923,-0.067 -0.2055044,-0.037 -0.2055044,0.2079 0,0.283 0.086406,0.4771 0.2125349,0.4771 0.066405,0 0.088106,-0.08 0.088106,-0.3243 z"></path></g></svg>
            <h1 className="text-xl font-semibold text-neutral-200">Chord Detection</h1>
            <h1  className="font-semibold text-sm text-neutral-500">Quickly detect easy to advanced chords. Use the Pitch Changer to instantly transpose chords in real time to your key of choice. </h1>
          </Bento>

           <Bento className="">
<svg 
height={70}
fill="#024f52" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m 8.7649297,10.258106 c -0.06672,-0.012 -0.251234,-0.045 -0.410022,-0.074 -0.369673,-0.067 -0.834974,-0.2526004 -1.773682,-0.7076004 -0.839519,-0.4069 -1.50786,-0.6468 -2.159441,-0.7749 -0.240207,-0.047 -0.445311,-0.092 -0.455787,-0.099 -0.08336,-0.056 0.487085,-0.3987 0.783343,-0.4702 0.0734,-0.018 0.133449,-0.06 0.133449,-0.094 0,-0.095 -0.437588,-0.4972 -0.665716,-0.6112 -0.706754,-0.353 -2.050206,-0.313 -2.904314,0.087 l -0.312756,0.1464 0.03102,-0.1311 c 0.04281,-0.1808 0.287392,-0.4939 0.533307,-0.6827 0.120741,-0.093 0.424667,-0.2323 0.73711,-0.3387 0.79783,-0.2715 1.08279,-0.5007 0.856299,-0.6887 -0.0904,-0.075 -0.696164,-0.076 -0.940712,0 -0.09165,0.028 -0.174881,0.043 -0.184967,0.032 -0.04637,-0.046 0.318423,-0.3867 0.52877,-0.4933 0.394476,-0.1999 0.82503,-0.2773 1.545526,-0.278 0.744603,0 1.172829,0.056 2.038124,0.2672 0.644593,0.1578 1.251832,0.1965 1.44649,0.092 0.05787,-0.031 0.119186,-0.1119 0.136256,-0.18 0.07813,-0.3113 -0.286355,-0.5603 -0.877835,-0.5998 l -0.386941,-0.026 0.189578,-0.1892 c 0.477445,-0.4766 1.732383,-0.8007 2.71962,-0.7024 0.213593,0.021 0.582648,0.095 0.8201203,0.1637 1.212951,0.3515 2.100762,1.0041 2.504316,1.8407 0.228698,0.4741 0.299034,0.7615 0.303718,1.2408 0.0047,0.4849 -0.07553,0.8059 -0.339341,1.3571 -0.184322,0.3851 -0.283979,0.5227 -0.616276,0.8513 -0.459869,0.4547 -1.044721,0.7888 -1.664598,0.9507004 -0.363151,0.095 -1.3332763,0.1625 -1.6146623,0.1126 z M 10.808048,8.3567056 c 0.528381,-0.2342 0.768623,-0.5942 0.770367,-1.1545 0.0018,-0.5682 -0.284805,-1.0057 -0.821423,-1.254 -0.175216,-0.081 -0.311058,-0.1015 -0.657577,-0.099 -0.3897073,0 -0.4847933,0.023 -0.8829603,0.186 -0.245421,0.1006 -0.675243,0.3191 -0.955161,0.4856 -0.343032,0.204 -0.656324,0.3465 -0.961055,0.4369 -0.248664,0.074 -0.479412,0.1425 -0.512774,0.1527 -0.03336,0.01 -0.06014,0.036 -0.0595,0.056 0.0015,0.05 1.418065,0.8125 1.885992,1.0147 0.609972,0.2635 0.841988,0.3105 1.4369333,0.2913 0.403849,-0.013 0.58817,-0.041 0.75716,-0.1162 z"></path></g></svg>
            <h1 className="text-xl font-semibold text-neutral-200">Ad-Free</h1>
            <h1  className="font-semibold text-sm text-neutral-500">Enjoy your Music seamlessly without any Adds.</h1>
          </Bento>
   </div>
          
      </div>

      {/* Features Section */}
      <div ref={containerRef} className="mt-32 h-[250vh] bg-neutral-300 relative px-4 pb-32">
        <div className="sticky pt-20 top-5 flex flex-col items-center space-y-20">
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