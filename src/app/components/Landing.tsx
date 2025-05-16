export default function Landing(){
  const videos = [{
    src : '/Piano.mp4'
  },
{
    src : '/drums.mp4'
  },
{
    src : '/Production.mp4'
  },
{
    src : '/Singing.mp4'
  },
{
    src : '/AcousticGuitar.mp4'
  }
]
  return(<>
  <div
  className="min-h-screen  w-full bg-neutral-900">
<div className="flex justify-center items-center pr-10">
  <div className="max-w-6xl pr-50">
    <h1 className="text-5xl  font-semibold text-neutral-300">Your Music, Reimagined</h1>
    <p className="text-neutral-600 font-semibold">Experience music like never before with our premium audio platform. 
      <br />
      Discover, stream, and share your favorite tracks with unparalleled sound quality.</p>
    </div>

    <div className="grid grid-cols-2 w-fit gap-2  p-5">
      {videos.map((itm,index)=>( <div key={index} className="">
        <video className="rounded-lg" width={100} height={50} autoPlay loop muted src={itm.src}></video>
      </div> ))}
      
       </div>
</div>

  </div>
  </>)
}