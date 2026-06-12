"use client";

import { motion, AnimatePresence } from "framer-motion";

    type Props = {
    show: boolean;
    };

    const SplashScreen=({ show }: Props)=> {
    const words = [
        "Make",
        "anything",
        "possible",
        "with",
        "Software",
        "Development",
    ];

    return (
        <AnimatePresence>
        {show && (
            <motion.div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            >
            <div className="text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white flex flex-wrap justify-center gap-3">
                {words.map((word, index) => (
                    <motion.span
                    key={word}
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    animate={{
                        opacity: 1,
                        y: [50, -10, 0],
                    }}
                    transition={{
                        duration: 0.8,
                        delay: index * 0.12,
                    }}
                    className={
                        word === "Software" || word === "Development"
                        ? "text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-red-500"
                        : ""
                    }
                    >
                    {word}
                    </motion.span>
                ))}
                </h1>

                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 1.5,
                    duration: 1,
                }}
                className="mt-6 text-gray-400"
                >
                JoshTheDev
                </motion.p>
            </div>
            </motion.div>
        )}
        </AnimatePresence>
    );
}
export default SplashScreen