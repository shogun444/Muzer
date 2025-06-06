'use client'

import { motion } from "motion/react";



export default function WordSplit( {text} :any ){

  const wordParentVariant = {
  initial: {
    y : 10
  },
  animate: {
    y : 0,
    transition: {
      staggerChildren: 0.01, // time between each word
    },
  },
};

const wordChildVariant = {
  initial: {
    opacity: 0,
    y: 10,
    filter: 'blur(4px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.4,
      ease: 'easeOut',
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