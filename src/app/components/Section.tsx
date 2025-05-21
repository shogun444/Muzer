import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // ✅ Corrected import

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

  return (
    <>
      <div className="h-screen w-full bg-neutral-300">
        <h1 className="text-3xl text-center font-semibold text-neutral-800">
          Join the Sound Revolution  
        </h1>
 <h1 className="text-teal-600 text-center text-xl font-semibold pt-3">Start Sharing Today!</h1>
        <div className="flex justify-center">
          <Button size={"lg"} className="mt-5 text-md  ">
            Sign Up
          </Button>
        </div>

<div className="w-full overflow-hidden "> 
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
