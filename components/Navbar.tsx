import { Socials } from "@/utils/lib/constants"
import Image from "next/image"
import React from "react"
import Link from "next/link"
import UserProfile from "./UserProfile"

const Navbar = () => {
  return (
    <nav className="border-2 border-b-blue-500  backdrop-blur-md bg-transparent  rounded-sm flex fixed top-0 z-40 w-full h-12 border-b border-white/10  items-center px-6 md:px-12 hover:bg-blend-hue">

      {/* LEFT SECTION */}
      <div className="flex flex-1 items-center gap-4 m-2">

        <Link href="/" className="text-xl font-semibold text-teal-400 hovers">
          JoshThe{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-red-500">
            Dev
          </span>
        </Link>

      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">

        {Socials.map((social) => (
          <Link
            key={social.name}
            href={social.link}
            target="_blank"
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:scale-110"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={36}
              height={28}
              className="animate-pulse object-contain"
            />
          </Link>
        ))}

        <UserProfile />
        

      </div>

    </nav>
  )
}

export default Navbar