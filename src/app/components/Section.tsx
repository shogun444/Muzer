import { Button } from "@/components/ui/button";
import { motion } from "motion/react"; // ✓ Corrected import
import { BorderTrail } from "@/components/ui/border-trail";
export default function Section() {
  const testimonials = [
    {
      name: "Maya L.",
      role: "Indie Pop Singer-Songwriter",
      quote:
        "This platform gave my music the audience it deserved. Within weeks of uploading, I connected with fans from around the world—and even landed a collab with a producer I admired!",
    },
    {
      name: "DreWave",
      role: "Electronic Producer",
      quote:
        "Being able to separate stems and experiment with remixes has been a game-changer. The AI tools are incredibly accurate, and the community feedback has helped me grow as a producer.",
    },
    {
      name: "Aiden P.",
      role: "Music School Student",
      quote:
        "I use this platform to break down songs and practice by isolating instruments. It’s like having a virtual music teacher and studio in one. Absolutely essential for learning!",
    },
    {
      name: "DJ Neura",
      role: "Club DJ",
      quote:
        "Finally, a platform that lets me adjust tempo and key without killing the vibe. The seamless tools and cloud access make live sets and edits smoother than ever.",
    },
    {
      name: "Tasha V.",
      role: "R&B Vocalist",
      quote:
        "I’ve always struggled to find the right key to practice with. Now I can shift any track to match my range perfectly. It’s boosted my confidence big time!",
    },
    {
      name: "Liam S.",
      role: "Music Lover",
      quote:
        "I’m not a musician, but I love discovering raw and original music here. It feels personal—like I'm part of something before it blows up.",
    },
    
    
  ];

  const plans = [
  {
    name: "Starter",
    price: "$0",
    priceNote: "/mo",
    highlight: false,
    description: "Great for testing the waters.",
    features: [
      "✓ Unlimited listening",
      "✓ Basic uploads",
      "✗ No analytics",
    ],
    button: "Get Started",
    bg: "bg-neutral-50",
    ring: "",
    border: "border-neutral-200",
    textColor: "text-neutral-400",
    buttonVariant: "default",
  },
  {
    name: "Pro",
    price: "$12",
    priceNote: "/mo",
    highlight: true,
    description: "For creators growing an audience.",
    features: [
      "✓ Everything in Free",
      "✓ Advanced uploads",
      "✓ Access to insights",
      "✓ Early feature access",
    ],
    button: "Start Free Trial",
    bg: "bg-white",
    
    textColor: "text-teal-600",
    buttonVariant: "outline",
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "",
    highlight: false,
    description: "Tailored for large teams or brands.",
    features: [
      "✓ Everything in Pro",
      "✓ Dedicated account manager",
      "✓ Team collaboration tools",
      "✓ Custom integrations",
    ],
    button: "Contact Us",
    bg: "bg-neutral-50",
    ring: "",
    border: "border-neutral-200",
    textColor: "text-neutral-400",
    buttonVariant: "default",
  },
];


  return (
    <>
      <div className="pt-300  pb-10 md:pt-2 md:pb-390 md:mt-0 bg-neutral-300  md:h-screen md:w-full md:bg-neutral-300">

   <div className="bg-neutral-900 py-20">
    <motion.h2
whileInView={{
  y:0,
  opacity:1
}}
initial={{
  y:50,
  opacity:0
}}
transition={{
  ease : 'easeInOut'
}}
className="text-neutral-200 text-3xl md:text-5xl font-semibold pt-10 text-center">
  Choose Your Plan
</motion.h2>
<motion.p 
whileInView={{
  y:0,
  opacity:1
}}
initial={{
  y:50,
  opacity:0
}}
transition={{
  ease : 'easeInOut'
}}
className="font-semibold md:text-[15px] text-xs  text-neutral-500  pt-5 text-center">
  Whether you're just getting started or looking to grow your sound brand, we've got a plan for you.
</motion.p>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-90 items-center md:w-6xl mx-auto">
  {plans.map((plan, index) => (
    <motion.div
      whileInView={{
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
      }}
      initial={{
        y: 50,
        opacity: 0,
        filter: 'blur(10px)',
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        ease: 'easeInOut',
      }}
      key={index}
      className={`relative overflow-hidden  bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-900 rounded-2xl p-8 ${
        plan.name === 'Pro' ? 'h-140' : 'h-120'
      } shadow-sm ${plan.bg} flex flex-col justify-between`}
    >
      {/* ✓ Only Pro card gets animated border */}
      {plan.name === 'Pro' && (
        <BorderTrail
          className="bg-neutral-500 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700"
          size={150}
        />
      )}

      <div >
        <h3 className={`text-xl font-semibold  ${plan.textColor}`}>{plan.name}</h3>
        <p className="mt-2 text-sm text-neutral-300">{plan.description}</p>
        <p className="mt-6 text-4xl font-bold text-neutral-600">
          {plan.price}
          {plan.priceNote && (
            <span className="text-base font-medium text-neutral-500">{plan.priceNote}</span>
          )}
        </p>
      </div>

      <ul className="mt-6 space-y-2 text-sm text-neutral-600">
        {plan.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>

      <Button className="mt-6 w-full bg-neutral-800 text-neutral-400" variant={'default'}>
        {plan.button}
      </Button>
    </motion.div>
  ))}
</div>

    </div> 


        <h1 className="pt-20 text-3xl text-center font-semibold text-neutral-800  md:text-neutral-800">
          Join the Sound Revolution  
        </h1>
 <h1 className="text-teal-600 text-center text-xl font-semibold pt-3">Start Sharing Today!</h1>
        <div className="flex justify-center">
          <Button size={"lg"} className=" mt-5 text-md  ">
            Sign Up
          </Button>
        </div>

<div className="w-full overflow-hidden relative  "> 
        {/* Testimonial Marquee */}
        <motion.div
          
          animate={{ x: ["0%","-50%"] }} // Moves 100% of the width of the container
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          }}
          className="flex  gap-5 mt-20 w-full"
        >
          {/* Duplicating the testimonials array to ensure seamless loop */}
          {[...testimonials, ...testimonials].map((test, idx) => (
            <div
              className="p-6 rounded-xl shadow-md w-80 flex-shrink-0 flex flex-col justify-between bg-white"
              key={idx}
            >
              <img className="pb-10" width={20} src={'/quote.svg'} alt="" />
              <p className="text-neutral-700 text-sm mb-6 leading-relaxed">
                "{test.quote}"
              </p>
              <div className="mt-auto">
                <h2 className="font-semibold text-neutral-800">{test.name}</h2>
                <p className="text-xs text-neutral-600 font-medium">{test.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
        </div>
      </div>
      

    </>
  );
}
