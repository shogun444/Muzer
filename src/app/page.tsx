'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";

import Content from "./components/Content";
import Dashboard from "./components/Dashboard";

export default function Home() {

  
  return (
    <div className="min-h-screen w-full bg-neutral-800 px-25 pb-1 pt-2 ">  
    
    <Navbar/>
    <Content/>
    </div>
  
  );
}
