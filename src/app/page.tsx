'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";

import Content from "./components/Content";
import Dashboard from "./components/Dashboard";

export default function Home() {

  
  return (
    <div className="min-h-screen w-full bg-neutral-300">  
    
    <Navbar/>
    <Content/>
    </div>
  
  );
}
