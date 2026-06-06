"use client"

import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

export default function Home() {
  return (
    <main className="w-screen min-h-screen relative flex flex-col">

      {/* HERO SECTION */}
      <div className="w-full flex items-center justify-center px-6 py-10">
        
        <div className={clsx(
          "w-full sm:w-[80%] max-w-[750px] flex flex-col gap-5",
          "backdrop-blur-md border border-white/10 rounded-2xl",
          "p-6 shadow-lg shadow-black/20"
        )}>

          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Make anything possible with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Software Development
            </span>
          </h1>

          <p className="text-sm text-white/70">
            Graphic Design, CopyWriting, UI and UX.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-row md:flex-col gap-5">

            <Link
              href="/my-skills"
              className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              Learn more
            </Link>

            <Link
              href="/my-projects"
              className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-white hover:opacity-80 transition-all"
            >
              My projects
            </Link>

            <Link
              href="/contact-me"
              className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-white hover:opacity-80 transition-all"
            >
              Contact me
            </Link>

            <Link
              href="/blog"
              className="text-sm text-white/60 hover:text-white transition-all"
            >
              Blog
            </Link>

          </div>
        </div>
      </div>

      {/* IMAGES */}
      <div className="absolute lg:bottom-0 right-0 z-[10] w-56 h-68 top-0">
        {/*<Image
          src="/me.gif"
          alt="me coding"
          height={300}
          width={300}
          className="absolute right-10 top-40"
        />*/}

        {/*} <Image
          src="/cliff.webp"
          alt="cliff"
          width={480}
          height={480}
          className="w-auto h-auto"
        />*/}
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        {/*<Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />*/}
      </div>

      {/*<Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10] w-auto h-auto"
        unoptimized
      />*/}

    </main>
  )
}