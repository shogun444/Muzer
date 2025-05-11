import User from "./User";

export default function Navbar(){

  return(<>
  <div className="items-center flex text-neutral-50 justify-around bg-neutral-800 h-12 w-full">
<h1>Muzer</h1>
    <div className="flex space-x-3"> 
    <h1>Pricing</h1>
    <h1>Music</h1>
    <h1>Products</h1>
    <h1>Dashboard</h1>
    <h1>Features</h1>
    </div>

    <div>
<User/>
    </div>
  </div>
  </>)
}