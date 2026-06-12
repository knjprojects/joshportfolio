"use client"

import React, { useState } from "react"
import Link from "next/link"
import clsx from "clsx";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"
interface Props {
    image: string
    title: string
    description: string
    link: string
    }

const ProjectCard = ({ title, description, image, link }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const rotate = useMotionValue(0)

    const background = useMotionTemplate`
    linear-gradient(
    135deg,
    #8b5cf6,
    #06b6d4,
    #ec4899,
    #8b5cf6
)
`

        const handleFlip = () => {
            if (isAnimating) return
            setIsFlipped((prev) => !prev)
            setIsAnimating(true)
        }

        return (
                    <motion.div
            onClick={handleFlip}
                whileHover={{
                    boxShadow:
                    "0px 0px 25px rgba(139,92,246,.4), 0px 0px 35px rgba(6,182,212,.3)",
                    scale: 1.3,
                    }}
                className="w-75 h-70 rounded-xl cursor-pointer 
                perspective p-1"
        style={{
            background,
        }}
        animate={{
            
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
        }}
        onUpdate={(latest) => {
            if (latest.rotate !== undefined) {
            rotate.set(Number(latest.rotate))
            }
        }}
       // className="w-[450px] h-[280px] rounded-md cursor-pointer perspective"
        >
        <motion.div
            className="relative w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={() => setIsAnimating(false)}
        >

            {/* FRONT */}
            <div
                style={{ backgroundImage: `url(${image})` }}
                className={clsx(
                    
                    "absolute w-full h-full backface-hidden bg-cover bg-center rounded-2xl overflow-hidden"
                )}
                >
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-0 p-3">
                    <p className="text-sm font-semibold">{title}</p>
                </div>
            </div>

        {/* BACK */}
        <div
            style={{ backgroundImage: `url(${image})` }}
            className={clsx(
                
                "absolute w-full h-full rotate-y-180 backface-hidden bg-cover bg-center rounded-2xl overflow-hidden"
            )}
            >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <div className="relative p-3 flex flex-col gap-2">
                <h1 className="text-sm font-semibold">{title}</h1>

                <p className="text-xs text-gray-200 line-clamp-4">
                {description}
                </p>

                <Link
                href={link}
                className="text-xs text-purple-300 hover:text-purple-200 mt-auto"
                >
                View project →
                </Link>
            </div>
        </div>

    </motion.div>
</motion.div>
    )
}

export default ProjectCard