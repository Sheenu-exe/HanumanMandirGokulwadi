import Link from "next/link"
import BajrangBali from "../../img/Hanumanji gys.jpg"
import Image from "next/image"
export const Sidebar = () => {
    return(
        <div className="drawer sm:hidden absolute z-50">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    
    
    <ul className="menu p-4 w-80 gap-y-3 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <div className="w-full gap-y-3 flex justify-center items-center flex-col">
      <Image alt="hanuman" className="h-[10vh] w-[10vh] rounded-full" src={BajrangBali}/>
      <p className="text-xl">श्री गोकुलवाड़ी हनुमानजी मंदिर</p>
      </div>
      <li>
        <Link href={"/Donations"}>Aarti / Prasadi Booking</Link>
      </li>
      <li><Link href={"/Members"}>Members</Link></li>
    </ul>
  </div>
</div>
    )
}