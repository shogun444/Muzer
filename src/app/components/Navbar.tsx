import Link from "next/link";
import User from "./User";

export default function Navbar(){

  return(<>
  <div className="items-center flex text-neutral-50 justify-around bg-neutral-800 h-15 w-full">
<h1>Muzer</h1>
    <div className="flex space-x-10"> 
    <Link href={'/pricing'}>Pricing</Link>
    <Link href={'/music'}>Music</Link >
    <Link href={'/products'}>Products</Link >
    <Link href={'/Dashboard'}>Dashboard</Link >
    <Link href={'/Features'}>Features</Link >
    </div>

    <div>
<User/>
    </div>
  </div>
  </>)
}