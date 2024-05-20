import { RiInstagramFill, RiYoutubeFill } from "react-icons/ri"
import Shila from "../../img/photo 1 Hanumanji.jpg"
import Image from "next/image"

export const Footer = () => {
    return(
        <footer className="bg-orange-100 lg:grid lg:grid-cols-5">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <Image
      src={Shila}
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p className="text-3xl mb-3 font-semibold">गोकुल युवा संगठन </p>
        <p>
          <span className="text-xs uppercase tracking-wide text-gray-500"> Call us </span>

          <a href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
           +91 9828190164
          </a>
        </p>

        <ul className="mt-8 space-y-1 text-sm text-gray-700">
          <li>हर दिन सुबह : 8:00 AM - 1:00 PM</li>
          <li>व शाम : 5:00 PM - 11:00 PM</li>
        </ul>

        <ul className="mt-8 flex justify-evenly">
          <li>
            <a
              href="https://www.facebook.com/gokulyuvasangathan"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Facebook</span>

              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/gokulyuvasangathan/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Instagram</span>

              <RiInstagramFill className="h-6 w-6"/>
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/@GokulYuvaSangathan"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Twitter</span>

              <RiYoutubeFill className="h-6 w-6"/>
            </a>
          </li>

        

  
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
          <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="/Donations">आरती बुकिंग</a>
      </li>

      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="/Members"> गोकुल युवा संगठन मेम्बरशिप </a>
      </li>

      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="#"> भजन संग्रह </a>
      </li>

      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="#"> मेंबर्स </a>
      </li>
      <li>
        <a class="text-gray-700 transition hover:text-gray-700/75" href="/Gallery"> गैलरी </a>
      </li>
          </ul>
        </div>

        {/* <div>
          <p className="font-medium text-gray-900 text-xl">गोकुल युवा संगठन </p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#about" className="text-gray-700 transition hover:opacity-75"> About </a>
            </li> */}

            {/* <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
            </li> */}
          {/* </ul>
        </div> */}
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; 2024. Gokul Yuva Sangathan. All rights reserved.
        </p>
        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          Designer & Developer : Sachin Suresh Parihar <br/>
          Mail: pariharsachin5002@gmail.com
        </p>
      </div>
    </div>
  </div>
</footer>
    )
}