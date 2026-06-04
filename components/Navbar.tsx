import { Socials } from "@/utils/lib/constants";
import Image from "next/image";
import React from "react";
import Link from 'next/link'
import ThemeSwitcher from "./ThemeSwitcher";
import UserProfile from "./UserProfile";
const Navbar = () => {
  return (
    <div className="bg-gradient-to-bl from-emerald-800 to-blue-600 fixed top-0 z-[40] w-full h-[50px] bg-transparent flex justify-end items-center px-10 md:px-20 ">
      <div className="flex flex-row flex-1 gap-3 items-center">
        <div className="relative">
          {/* <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          /> */}
        </div>
        <Link href={'/'} className="text-white text-[25px] font-semibold">
          JoshThe{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Dev{" "}
          </span>
        </Link>
      </div>

      <div className="flex flex-row flex-3 gap-5 items-center ">
        {Socials.map((social) => (
          <Link className="w-6 sm:h-6 rounded-xl justify-center m-3 hover:scale-150 animate-pulse dark:animate-none h-6" href={social.link} key={social.name}><Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          /></Link>
          
        ))}
        <ThemeSwitcher />
        <UserProfile/>
      </div>
    </div>
  );
};

export default Navbar;
