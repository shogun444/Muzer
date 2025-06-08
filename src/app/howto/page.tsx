import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";


export default function Howto(){
  return(<>
  <div className="md:mx-23 px-10 bg-gradient-to-br from-[#141415] via-[#1e2022] to-[#111d20] ">
         <Navbar />


        <h1 className="text-5xl text-center font-semibold text-neutral-300 my-10">How to Add Videos: Step-by-Step Guide</h1>

        <h2 className="max-w-4xl text-lg  font-semibold mx-auto text-neutral-400  mt-15">Looking to add your favorite YouTube videos to Muser? Whether you're curating playlists or just exploring content, adding a video is fast and effortless with Muser’s user-friendly interface.
          </h2>
          <h2 className="max-w-4xl   mx-auto text-neutral-400  mt-3">
<br /><br />
Follow the simple steps below to get started:
<br />
<br />
1. Open YouTube in Your Browser
Head over to https://youtube.com using any modern browser.
Search for the video you want to add to your Muser library and open it.
<br />
<br />
2. Copy the YouTube Video URL
Once the video is open, navigate to the browser’s address bar.
Copy the full YouTube link (e.g., https://www.youtube.com/watch?v=abc123xyz).

<img className="mt-8 rounded-2xl" src='/howtodo.PNG' alt="" />
<br />
<br />
3. Launch the Muser Web App
Open https://muzer-taupe.vercel.app/  in a new tab.
Make sure you're logged in to your account to access the full feature set.
<br />
<br />
4. Add Your Video
Inside the Muser dashboard, click on the “Add Video” or “+” button—usually found on the top right or in your video library section.
Paste the copied YouTube link into the input field provided.
<br />
<br />

<img className="my-8 rounded-2xl " src="add.png" alt="" />
5. Submit and View
Click the “Submit” or “Add” button to finalize the upload.
Muser will automatically fetch the video metadata and display it in your library or feed. You’re all set!
<br />
<br />
Bringing Creativity to Life
Whether you're adding reference content, remixing audio, or building your next viral clip, Muser makes video management effortless. Our app is built to support your creative flow—so go ahead and bring your ideas to life. Start adding videos today and make your mark in the Muser community.</h2>
<Link className="flex justify-center pb-10" href='/signUp'>
<Button className="mt-10 bg-cyan-800" size={'lg'} variant={'default'}>Sign up for FREE now!</Button>
</Link>
<Footer/>
        </div>
  </>)
}