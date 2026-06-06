import { Socials } from "@/utils/lib/constants"
import Image from "next/image"
import React from "react"
import Link from "next/link"
import UserProfile from "./UserProfile"

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[60px] bg-black/40 backdrop-blur-md border-b border-white/10 flex items-center px-6 md:px-12">

      {/* LEFT SECTION */}
      <div className="flex flex-1 items-center gap-4">

        <Link href="/" className="text-white text-xl font-semibold">
          JoshThe{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
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
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:scale-110 transition-transform"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={22}
              height={22}
            />
          </Link>
        ))}

        <UserProfile />

      </div>

    </div>
  )
}

export default Navbar