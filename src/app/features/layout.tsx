import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export  default function Layout({children} : any){
return(<>
<div className="min-h-screen   w-full pt-2 bg-gradient-to-tr from-[#141415] via-[#1e2022] to-[#111d20] text-white">
  {children}
  
</div>
</>)
}