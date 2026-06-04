"use client"

import Hero from "@/components/Hero";
import { theme } from "@/utils/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className=" flex items-center w-full h-full bg-cover bg-center bg-my-bg-image "
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px] w-64 sm:w-[90%] md:w-[40%] lg:w-[32%] ">
          <h1 className={theme.textStyle.h1}>
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Software Development
            </span>
          </h1>
          <div className="h-200 w-full  flex flex-row">
            
          </div>
        
          <p className="text-gray-200 hidden md:block">
            Graphic Design, CopyWriting, UI and UX.
          </p>
          <div className="flex flex-row md:flex-col md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
      </div>

      

      <div className="absolute lg:bottom-0 right-0 z-[10] w-56 h-68 top-0">
        <Image
          src="/me.gif"
          alt="me coding"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image className="w-auto h-auto" src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10] w-auto h-auto"
        unoptimized
      />
    </main>
  );
}
