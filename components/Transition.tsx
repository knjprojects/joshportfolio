"use client";
import React , { useEffect, useState }from "react";
import { motion } from "framer-motion";

const TransitionVariants = {
  initial: {
    y: "100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "100%"],
    height: ["0%", "100%"],
  },
};


import { usePathname } from "next/navigation"


export default function Transition() {
  const pathname = usePathname()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)

    const t = setTimeout(() => setShow(false), 600)
    return () => clearTimeout(t)
  }, [pathname])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div>
      <motion.div
        className="fixed right-0 h-screen w-screen bottom-full z-30 bg-[#f8ffd1]"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed right-0 h-screen w-screen bottom-full z-20 bg-[#f5f2ff]"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed right-0 h-screen w-screen bottom-full z-10 bg-[#78ffe2]"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </div>
    </div>
  )
}
