"use client";

import { motion, scale } from "framer-motion";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function LanyardCard() {
    return (
        <div className="relatice flex flex-col items-center select-none pt-4">
            {/* Top Clip Strap Hanging from Container Header */}
            <div className="relative z-20 flex flex-col items-center">
                {/* Black Strap Attachment */}
                <div className="w-10 h-7 bg-[#111113] border border-white/20 rounded-t-sm flex items-center justify-center shadow-lg">
                    <span className="text-[9px] font-black text-white tracking-tighter">HRA</span>
                </div>

                {/* Silver Ring / Hook */}
                <div className="w-5 h-5 border-2 border-gray-400 rounded-full -mt-1 shadow-inner flex items-center justify-center">
                    <div className="w-2 h-2 border border-gray-300 rounded-full"></div>
                </div>
            </div>

            {/* Draggable ID Badge Card */}
            <motion.div
                drag
                dragConstraints={{ top: 0, left: -60, right: 60, bottom: 100 }}
                dragElastic={0.6}
                dragSnapToOrigin={true}
                whileTap={{ cursor: "grabbing" }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="cursor-grab relative z-10 -mt-2.5 w-64 md:w-72 bg-gradient-to-b from-gray-200 to-gray-300 rounded-2xl p-x shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/40"
            >
                {/* Hole Slot at top of card */}
                <div className="w-8 h-2.5 bg-black/90 mx-auto rounded-full mb-3 border border-gray-400/50 shadow-inner"></div>

                {/* Photo Container */}
                <div className="relative w-full h-72 md:h-80 bg-gray-900 rounded-xl overflow-hidden border border-black/20 shadow-md">
                    <Image
                        src="/profile-photo.jpeg"
                        alt="Profile Photo"
                        fill
                        className="object-cover pointer-events-none"
                        priority
                    />
                </div>

                {/* Bottom Handwritter Signature / Label  */}
                <div className="pt-3 pb-1 px-1 flex justify-between items-end">
                    <div>
                        <p className="font-serif italic text text-2xl text-black font-extrabold tracking-tight opacity-90">Student at UNS
                        </p>
                    </div>
                    <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest font-bold">
                        VERIFIED ID
                    </div>
                </div>
            </motion.div>
        </div>
    );
}