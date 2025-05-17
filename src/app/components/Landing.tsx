import { Button } from "@/components/ui/button"



export default function Landing(){
  const videos = [{
    src : '/Piano.mp4'
  },
{
    src : '/drums.mp4'
  },
{
    src : '/Guitar1.mp4'
  },
{
    src : '/Guitar2.mp4'
  },
{
    src : '/Synth.mp4'
  },
  {
    src : '/Vocals.mp4'
  }
]
  return(<>
  <div
  className="min-h-screen  w-full bg-neutral-900">
<div className="flex justify-center items-center ">
  <div className="max-w-6xl pr-5 ">
    <h1 className="text-6xl  font-semibold text-neutral-200">Your Music, Reimagined</h1>
    <p className="text-neutral-400 pt-5 font-semibold">Experience music like never before with  our premium audio platform. 
      <br />
      Discover, stream, and share your favorite tracks with unparalleled  <br />sound quality.</p>

      <Button size={'lg'} className="bg-cyan-700 text-neutral-900 text-md p-6 mt-3">Start Free</Button>
    </div>


    <div className="grid grid-cols-2 w-fit gap-2  p-2">
      {videos.map((itm,index)=>( <div key={index} className="mask-y-from-98% mask-x-from-97% ">
        <video className="rounded-lg" width={360} height={100} autoPlay loop muted src={itm.src}></video>
      </div> ))}
      
       </div>
</div>

  </div>
  </>)
}