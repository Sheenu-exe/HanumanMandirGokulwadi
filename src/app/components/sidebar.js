import Link from "next/link"
import BajrangBali from "../../img/Hanumanji gys.jpg"
import Image from "next/image"
import { FaHome } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { GrGallery } from "react-icons/gr";




export const Sidebar = () => {
    return(
        <div className="drawer sm:hidden absolute z-50">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    
    
    <div className="menu p-4 w-80 gap-y-3 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <div className="w-full gap-y-3 flex justify-center gap-2 items-center ">
      <Image alt="hanuman" className="h-[8vh] w-[8vh] rounded-full" src={BajrangBali}/>
      <p className="text-2xl">गोकुल युवा संगठन</p>
      </div>
      <ul>
      <li>
        <Link href={"/"} className="flex gap-x-2 items-center"><FaHome className="text-lg"/> Home</Link>
      </li>
      <li>
        <Link href={"/Donations"} className="flex gap-x-2 items-center"> <FaBowlFood className="text-lg"/> Aarti / Prasadi Booking</Link>
      </li>
      <li><Link href={"/Members"} className="flex gap-x-2 items-center"> <GrGroup className="text-lg"/> Members</Link></li>
      <li><Link href={"/Gallery"} className="flex gap-x-2 items-center"> <GrGallery className="text-lg"/> Gallery</Link></li>
      </ul>
    </div>
  </div>
</div>
    )
}