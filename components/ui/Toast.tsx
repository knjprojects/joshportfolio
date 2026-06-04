"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ToastType = "success" | "error" | "info";

type Toast = {
    id: number;
    type: ToastType;
    message: string;
    };

    type ToastContextType = {
    showToast: (message: string, type?: ToastType) => void;
    };

    const ToastContext = createContext<ToastContextType | null>(null);

    export const useToast = () => {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error("useToast must be used inside ToastProvider");
    return ctx;
    };

    export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = (message: string, type: ToastType = "info") => {
        const id = Date.now();

        setToasts((prev) => [...prev, { id, message, type }]);

        setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
        {children}

        {/* TOAST CONTAINER */}
        <div className="fixed top-4 right-4 z-[9999] space-y-2">
            <AnimatePresence>
            {toasts.map((toast) => (
            <motion.div
                    key={toast.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, scale: 0.85, y: -20, filter: "blur(6px)" , x: 40,}}
                    animate={{
                        x: 0,//subste stack mtin
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.9,
                        y: -10,
                        filter: "blur(4px)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        mass: 0.8,
                    }}
                    className={`
                        px-4 py-2 rounded-xl shadow-2xl backdrop-blur-md
                        border border-white/10
                        ${toast.type === "success" && "bg-green-500/10 text-green-300"}
                        ${toast.type === "error" && "bg-red-500/10 text-red-300"}
                        ${toast.type === "info" && "bg-blue-500/10 text-blue-300"}
                    `}
                    />
            ))}
            </AnimatePresence>
        </div>
        </ToastContext.Provider>
    );
};