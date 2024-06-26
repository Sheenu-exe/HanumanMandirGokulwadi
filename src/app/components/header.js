import BajrangBali from "../../img/Hanumanji gys.jpg"
import Image from "next/image"
import { Sidebar } from "./sidebar";
import { IoMenu } from "react-icons/io5";


export const Header = () => {
    return(
		<header className="bg- sm:h-[10vh] h-[8vh] z-20 backdrop-brightness-50 sticky backdrop-blur-md">
		<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
		  <div className="flex h-16 items-center justify-between">
			<div className="md:flex flex items-center justify-center md:items-center md:gap-12">
			  <a className=" h-[10vh] w-auto header-title flex justify-center items-center text-xl gap-2 text-white" href="/">
				<span className="sr-only">Home</span>
				<Image src={BajrangBali} alt="hanumanji" className="sm:h-[8vh] h-[6vh] w-[6vh] font-extrabold object-cover sm:w-[8vh] rounded-full"/>गोकुल युवा संगठन
			  </a>
			</div>
	  
			<div className="hidden md:block">
			  <nav aria-label="Global">
				<ul className="flex items-center gap-6 text-sm">
				  <li>
					<a className="text-white transition font-bold hover:text-gray-500/75" href="/"> Home </a>
				  </li>
	  
				  <li>
					<a className="text-white transition font-bold hover:text-gray-500/75" href="/Donations">Aarti / Prasadi Booking </a>
				  </li>
	  
				  <li>
					<a className="text-white transition font-bold hover:text-gray-500/75" href="/aarti">Bhajan Sangrah</a>
				  </li>
	  
				  <li>
					<a className="text-white transition font-bold hover:text-gray-500/75" href="#"> Members </a>
				  </li>
				</ul>
			  </nav>
			</div>
	  
			<div className="flex items-center gap-4">
			  <div className="sm:flex sm:gap-4">
	  
				<div className="hidden sm:flex">
				  <a
					className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-orange-400"
					href="#"
				  >
					Register
				  </a>
				</div>
			  </div>
	  
			  <label htmlFor="my-drawer" className="bg-red-100 p-1.5 rounded drawer-button sm:hidden text-3xl"><IoMenu/></label>
			</div>
		  </div>
		</div>
		<Sidebar/>
	  </header>
    )
}