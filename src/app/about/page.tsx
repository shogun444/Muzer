import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";


export default function About(){


const headings = [
  {
title : 'Respect others',
description : 'Muser is a tech company, but we are also musicians. We respect our fellow musicians, vocalists, composers, and rights holders.'
  },
   {
title : 'Do no harm',
description : 'We believe AI can effectively add value to music and audio without infringing upon the rights of creators, rightsholders, or individuals.'
  },
   {
title : 'Tools, not replacements',
description : 'Our goal is to build tools to complement the creative processes in audio and music, not to replace people.'
  },
   {
title : 'Creative synergy',
description : 'We embrace the power of AI as a collaborative tool and honor creativity.'
  },
]





  return(<>
  <div className="md:mx-23 px-10  bg-gradient-to-br from-[#141415] via-[#1e2022] to-[#111d20] ">
         <Navbar />

<h1 className="text-5xl max-w-4xl mx-auto text-center font-semibold text-neutral-300 my-10">
    Our Ethical Approach

</h1>
<h1  className="text-lg font-semibold max-w-4xl mx-auto text-neutral-500 mb-10">
  At Muser, ethics aren’t just a checkbox they’re the backbone of everything we create. From how we train our AI to the partners we work with, we stay true to one mission: to be the most trusted name in Music AI.
We train only on licensed content, and we collaborate only with those who share our commitment to responsible, transparent, and ethical AI.
Muser is here to power the future of music  with integrity at every beat.


</h1>

<div className="flex flex-wrap  md:px-16 gap-5 justify-center items-center pb-10">
  {headings.map((itm,idx)=>(<div key={idx} className="rounded-2xl h-40 border-1 border-neutral-700 w-100 p-5 bg-gradient-to-tr from-neutral-800 to bg-neutral-900 via-neutral-950">
    <h1 className="font-semibold text-neutral-400 text-2xl">{itm.title}  </h1>
    <h2 className="text-neutral-500 mt-3">{itm.description}  </h2>

   
  </div>))}
</div>
        <Footer/>
        </div>
  </>)
}