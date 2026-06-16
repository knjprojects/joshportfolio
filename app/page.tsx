"use client"
import { useState,useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import HeroSection from "@/components/Hero"
import SplashScreen from "@/components/SpashScreen"
import Section from "@/components/Section"
const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
   
  return (

  
      
      <main className="w-full h-auto flex flex-col bg-linear-to-tr from-emerald-800 to-blue-500">
      {/*<SplashScreen show={showSplash}  */} 
      <SplashScreen show={showSplash} />
      {/* HERO SECTION */}
      <HeroSection />
   
      <Section bg="bg-black text-white">Home</Section>
      <Section bg="bg-blue-500 text-white">About</Section>
      <Section bg="bg-purple-500 text-white">Projects</Section>
    
      <section className="w-full flex items-center justify-center h-screen snap-start ">
        <div >
        
        <div className={clsx(
          "w-full sm:w-[80%] max-w-187.5 flex flex-col gap-5",
          "backdrop-blur-md border border-white/10 rounded-2xl",
          "p-6 shadow-lg shadow-black/20"
        )}>

          <p className="text-md font-semibold">
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
              className="px-4 py-2 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/20 transition-all"
            >
              My projects
            </Link>

            <Link
              href="/contact-me"
              className="px-4 py-2 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/20 transition-all"
            >
              Contact me
            </Link>

            <Link
              href="/blog"
              className="px-4 py-2 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/20 transition-all"
            >
              Blog
            </Link>

          </div>
        </div>
      </div></section>
    

      {/* IMAGES */}
     

      
    
      

    </main>
   
  )
}
export default Home