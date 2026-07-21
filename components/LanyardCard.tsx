"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { use } from "framer-motion/m";
import Image from "next/image";

export default function LanyardCard() {
    // Motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Mengkalkulasi lintasan SVG Tali Lanyard ketika menarik kartu
    const pathID = useTransform([x, y], ([latestX, latestY]) => {
        const startX = 144;
        const startY = 32;
        const endX = 144 + (latestX as number);
        const endY = 56 + (latestY as number);

        // Kelengkungan tali saat ditarik ke samping
        const controlX = (startX + endX) / 2;
        const controlY = (startY + endY) / 2 + Math.abs(latestX as number) * 0.15;

        return `M ${startX} Q ${controlX} ${controlY} ${endX} ${endY}`;
    });

    return (
        <div className="relative flex flex-col items-center select-none pt-4 w-72 md:w-80 mx-auto">
            {/* Top Clip Strap Hanging from Container Header */}
            <div className="relative z-30 flex flex-col items-center">
                {/* Black Strap Attachment */}
                <div className="w-10 h-7 bg-[#111113] border border-white/20 rounded-t-sm flex items-center justify-center shadow-lg">
                    <span className="text-[9px] font-black text-white tracking-tighter">HRA</span>
                </div>

                {/* Silver Ring / Hook */}
                <div className="w-5 h-5 border-2 border-gray-400 rounded-full -mt-1 shadow-inner flex items-center justify-center">
                    <div className="w-2 h-2 border border-gray-300 rounded-full"></div>
                </div>
            </div>

            {/* Dynamic lanyand Rope SVG */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 overflow-visible">
                <motion.path
                    d={pathID}
                    stroke="#a1a1aa"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    className="drop-shadow-md"
                />
            </svg>


            {/* Draggable ID Badge Card */}
            <motion.div
                style={{ x, y }}
                drag
                dragConstraints={{ top: 0, left: -70, right: 70, bottom: 120 }}
                dragElastic={0.5}
                dragSnapToOrigin={true}
                whileTap={{ cursor: "grabbing" }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="cursor-grab relative z-10 -mt-2.5 w-64 md:w-72 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-2xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-white/50"
            >
                {/* Hole Slot at top of card */}
                <div className="w-8 h-2.5 bg-black/90 mx-auto rounded-full mb-3 border border-gray-400/50 shadow-inner"></div>

                {/* Photo Container */}
                <div className="relative w-full h-72 md:h-80 bg-gray-900 rounded-xl overflow-hidden border border-black/20 shadow-md">
                    <Image
                        src="/profile-photo.jpeg"
                        alt="Profile Photo"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover pointer-events-none"
                        priority
                    />
                </div>

                {/* Bottom Handwritter Signature / Label  */}
                <div className="pt-3 pb-1 px-1 flex justify-between items-end">
                    <div>
                        <p className="font-serif italic text-2xl text-black font-extrabold tracking-tight opacity-90">Student at UNS
                        </p>
                    </div>
                    <div className="text-[10px] font-mono text-gray-700 uppercase tracking-widest font-bold">
                        VERIFIED ID
                    </div>
                </div>
            </motion.div>
        </div>
    );
}