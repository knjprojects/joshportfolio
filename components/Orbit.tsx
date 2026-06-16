"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SkillData } from "@/utils/lib/constants";
import { useEffect, useState } from "react";

export default function SkillsOrbit() {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
        setActiveIndex((prev) =>
            (prev + 1) % SkillData.length
        );
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    const radius = 220;

    return (
        <div className="relative w-175 h-1175 flex items-center justify-center">

        {SkillData.map((skill, index) => {
            const angle =
            ((360 / SkillData.length) * index) -
            ((360 / SkillData.length) * activeIndex);

            const x =
            radius *
            Math.sin((angle * Math.PI) / 180);

            const y =
            radius *
            Math.cos((angle * Math.PI) / 180);

            const isActive = angle === 0;

            return (
            <motion.div
                key={skill.name}
                animate={{
                x,
                y,
                scale: isActive ? 1.4 : 0.8,
                opacity: isActive ? 1 : 0.4,
                }}
                transition={{
                duration: 1,
                }}
                className="absolute"
            >
                <Image
                src={skill.Image}
                alt={skill.name}
                width={70}
                height={70}
                />
            </motion.div>
            );
        })}

        <motion.div
            key={SkillData[activeIndex].name}
            initial={{
            opacity: 0,
            y: -20,
            }}
            animate={{
            opacity: 1,
            y: 0,
            }}
            className="
            absolute
            bottom-10
            w-[320px]
            p-6
            rounded-2xl
            bg-white/10
            backdrop-blur-md
            border
            border-white/10
            "
        >
            <h2 className="text-2xl font-bold text-white">
            {SkillData[activeIndex].name}
            </h2>

            <p className="text-gray-300 mt-2">
            {SkillData[activeIndex].description}
            </p>
        </motion.div>
        </div>
    );
}