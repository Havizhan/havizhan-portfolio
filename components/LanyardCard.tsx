"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { span } from "framer-motion/client";

export default function LanyardCard() {
    // Motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Menyimpan posisi relatif klik pertama (dipakai untuk sedikit bias saat menggantung)
    const [clickOffset, setClickOffset] = useState({ x: 0, y: 0 });
    const L = 20;

    // 1. Sudut rotasi TALI
    const strapAngle = useTransform([x, y], ([latestX, latestY]) => {
        const lx = latestX as number;
        const ly = latestY as number;
        const angle = Math.atan2(-lx, L + ly);
        return (angle * 180) / Math.PI;
    });

    // 2. Panjang tali (elastis mengikuti jarak tarik)
    const strapHeight = useTransform([x, y], ([latestX, latestY]) => {
        const lx = latestX as number;
        const ly = latestY as number;
        return Math.sqrt(lx * lx + (L + ly) * (L + ly));
    });

    // Opacity tali: hanya terlihat saat ditarik
    const strapOpacity = useTransform([x, y], ([latestX, latestY]) => {
        const lx = latestX as number;
        const ly = latestY as number;
        const dist = Math.sqrt(lx * lx + ly * ly);
        return Math.min(Math.max(dist / 12, 0), 1);
    });

    // 3. Rotasi KARTU
    const cardRotation = useTransform(strapAngle, (angle) => {
        return (angle as number) * 0.7 + clickOffset.y * 3;
    });

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        setClickOffset({ x: relX, y: relY });
    };

    return (
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex flex-col items-center select-none pt-0 overflow-visible">
            {/* Titik jangkar tali */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 sm:w-7 h-2 sm:h-2.5 bg-[#0d0d0f] z-30 border-b border-white/10" />

            {/* Tali Lanyard */}
            <motion.div
                style={{
                    rotate: strapAngle,
                    height: strapHeight,
                    opacity: strapOpacity,
                    transformOrigin: "top center",
                }}
                className="absolute top-0 left-[calc(50%-8px)] sm:left-[calc(50%-9px)] w-4 sm:w-[18px] bg-[#111113] border-x border-white/10 flex flex-col items-center justify-start gap-1.5 py-2 overflow-hidden z-10 shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
            >
                {Array.from({ length: 25 }).map((_, i) => (
                    <span key={i} className="text-[5px] font-black text-white/30 tracking-widest select-none shrink-0 leading-none">
                        HRA
                    </span>
                ))}
            </motion.div>

            {/* Kartu ID Card */}
            <motion.div
                style={{
                    x,
                    y,
                    rotate: cardRotation,
                    transformOrigin: "top center",
                }}
                drag
                dragConstraints={{ top: 0, left: -70, right: 70, bottom: 100 }}
                dragElastic={0.4}
                dragSnapToOrigin={true}
                onPointerDown={handlePointerDown}
                whileTap={{ cursor: "grabbing" }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="absolute top-[15px] sm:top-[18px] md:top-[22px] lg:top-[25px]
                    left-[calc(50%-72px)] sm:left-[calc(50%-88px)] md:left-[calc(50%-104px)] lg:left-[calc(50%-120px)]
                    cursor-grab z-20 w-36 sm:w-44 md:w-52 lg:w-60
                    bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-xl sm:rounded-2xl
                    p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-white/50
                    flex flex-col items-center"
            >
                {/* Gantungan Besi */}
                <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-gray-400 rounded-full bg-gray-800 flex items-center justify-center shadow-md">
                        <div className="w-1.5 h-1.5 border border-gray-300 rounded-full"></div>
                    </div>
                </div>

                {/* Lubang kartu */}
                <div className="w-6 sm:w-7 h-1.5 sm:h-2 bg-black/90 mx-auto rounded-full mb-2 sm:mb-3 border border-gray-400/50 shadow-inner mt-1.5"></div>

                {/* Frame Foto */}
                <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden border border-black/20 shadow-md">
                    <Image
                        src="/profile-photo.jpeg"
                        alt="Profile Photo"
                        fill
                        quality={100}
                        sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
                        className="object-cover pointer-events-none"
                        priority
                    />
                </div>

                {/* Label bawah */}
                <div className="w-full pt-2 sm:pt-3 pb-1 px-1 flex justify-between items-end">
                    <p className="font-serif italic text-sm sm:text-base md:text-lg text-black font-extrabold tracking-tight opacity-90">
                        Student at UNS
                    </p>
                    <div className="text-[6px] sm:text-[8px] font-mono text-gray-700 uppercase tracking-widest font-bold">
                        VERIFIED ID
                    </div>
                </div>
            </motion.div>
        </div>
    );
}