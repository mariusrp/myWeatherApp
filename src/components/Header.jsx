import Image from "next/image"
import Link from "next/link"
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import "../app/globals.css"
export default function Header() {
  return (
    <header className="p-5 h-40">
        <div className='flex justify-between items-center max-w-7xl mx-auto mt-6'>
          <div className="flex items-center space-x-6">
            <Image 
              width="60"
              height="60"
              src="https://cdn.freebiesupply.com/logos/large/2x/weather-ios-logo-png-transparent.png"
              alt="weather logo"
              className=""
            />
            <h2 className="font-bold font-mono sm:text-5xl text-blue-400 sm:inline-block text-3xl">Weather</h2>
          </div>
          <div className="flex sm:space-x-2 space-x-4">
            <Link
            href="#"
            className="link"
            >
              <AiOutlineSearch className="sm:text-lg text-4xl"/>
              <span className="hidden sm:inline">Søk</span>
            </Link>

            <Link
            href="#"
            className="link"
            >
              <AiOutlineMenu className="sm:text-xl text-4xl"/>
              <span className="hidden sm:inline">Menu</span>
            </Link>
          </div>


        </div>
    </header>
  )
}
