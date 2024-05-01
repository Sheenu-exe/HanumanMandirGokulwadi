import BajrangBali from "../../img/Hanumanji gys.jpg"
import Image from "next/image"
export const Header = () => {
    return(
		<header className="bg- h-[10vh] z-20 fixed w-[100vw] backdrop-blur-md">
		<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
		  <div className="flex h-16 items-center justify-between">
			<div className="md:flex flex items-center justify-center md:items-center md:gap-12">
			  <a className=" h-[10vh] w-auto header-title flex justify-center items-center text-xl gap-2 text-black" href="#">
				<span className="sr-only">Home</span>
				<Image src={BajrangBali} className="h-[8vh] font-extrabold object-cover w-[8vh] rounded-full"/>श्री गोकुलवाड़ी हनुमान मंदिर
			  </a>
			</div>
	  
			<div className="hidden md:block">
			  <nav aria-label="Global">
				<ul className="flex items-center gap-6 text-sm">
				  <li>
					<a className="text-white transition font-bold hover:text-gray-500/75" href="#"> Home </a>
				  </li>
	  
				  <li>
					<a className="text-white transition font-bold hover:text-gray-500/75" href="/aarti"> Aarti </a>
				  </li>
	  
				  <li>
					<a className="text-white transition font-bold hover:text-gray-500/75" href="#"> Donation </a>
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
	  
			  <div className="block md:hidden">
				<button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
				  <svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
				  >
					<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				  </svg>
				</button>
			  </div>
			</div>
		  </div>
		</div>
	  </header>
    )
}