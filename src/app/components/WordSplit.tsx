'use client'

import { delay, motion } from "motion/react";



export default function WordSplit( {text} :any ){

  const wordParentVariant = {
  initial: {
    y : 20
  },
  animate: {
    y : 0,
    transition: {
      ease : 'easeIn',
      
            staggerChildren: 0.01, // time between each word
    },
  },
};

const wordChildVariant = {
  initial: {
    opacity: 0,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};


const SplitText :string[] = text.split('')

return(<>
<motion.div
variants={wordParentVariant}
initial='initial'
animate='animate'
>

{SplitText.map((itm,idx)=>(
  <motion.span 
  variants={wordChildVariant}
  key={idx}>{itm}</motion.span>
))}
</motion.div>
</>)

}