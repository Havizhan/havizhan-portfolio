"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export default function LanyardCard() {
    // Motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Menyimpan posisi relatif Y clip card ketika pertama kali di tekan
    const [clickOffset, setClickOffset] = useState({ x: 0, y: 0 });

    // Panjang tali
    const L = 90;

    // 1. Menghitung sudut rotasi tali agar mengikuti arah kartu
    const strapAngle = useTransform([x, y], ([latestX, latestY]) => {
        const lx = latestX as number;
        const ly = latestY as number;
        const angle = Math.atan2(-lx, L + ly);
        return (angle * 180) / Math.PI;
    });

    // 2. Menghitung panjang tali Lanyard agar elastis
    const strapHeight = useTransform([x, y], ([latestX, latestY]) => {
        const lx = latestX as number;
        const ly = latestY as number;
        return Math.sqrt(lx * lx + (L + ly) * (L + ly));
    });

    // Opacity Tali muncul ketika di tarik saja
    const strapOpacity = useTransform([x, y], ([latestX, latestY]) => {
        const lx = latestX as number
        const ly = latestY as number
        const dist = Math.sqrt(lx * lx + ly * ly);
        return Math.min(Math.max((dist - 4) / 16, 0), 1);
    });

    // 3. Menghitung rotassi ID card agar mengikuti arah tali
    const cardRotation = useTransform(strapAngle, (angle) => {
        return (angle as number) * 0.7 + clickOffset.y * 3;
    });;

    // Handler untuk mendeteksi posisi relatif klik kursor
    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        setClickOffset({ x: relX, y: relY });
    };

    return (
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex flex-col items-center select-none pt-0 overflow-visible">
            {/* 1. Titik jangkar tali */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 sm:w-7 h-2 sm:h-2.5 bg-[#0d0d0f] z-30 border-b border-white/10" />

            {/* 2. Tali Lanyard Hitam Bermotif HRA */}
            <motion.div
                style={{
                    rotate: strapAngle,
                    height: strapHeight,
                    transformOrigin: "top center",
                }}
                className="absolute top-0 left-[calc(50%-8px)] sm:left-[calc(50%-9px)] w-4 sm:w-[18px] bg-[#111113] border-x border-white/10 flex flex-col items-center justify-between py-3 z-10 shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
            >
                {/* Motif Logo HRA */}
                <span className="text-[5px] font-black text-white/30 tracking-widest select-none">HRA</span>
                <span className="text-[5px] font-black text-white/30 tracking-widest select-none">HRA</span>
                <span className="text-[5px] font-black text-white/30 tracking-widest select-none">HRA</span>
                <span className="text-[5px] font-black text-white/30 tracking-widest select-none">HRA</span>
            </motion.div>

            {/* 3. etak Kartu ID Card */}
            <motion.div
                style={{
                    x,
                    y,
                    rotate: cardRotation,
                    transformOrigin: "top center",
                }}
                drag
                dragConstraints={{ top: -10, left: -75, right: 75, bottom: 110 }}
                dragElastic={0.4}
                dragSnapToOrigin={true}
                onPointerDown={handlePointerDown}
                whileTap={{ cursor: "grabbing" }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="absolute top-[55px] sm:top-[68px] md:top-[82] lg:top-[92px] left-[calc(50%-72px)] sm:left-[calc(50%-88px)] md:left-[calc(50%-104px)] cursor-grab z-20 w-36 sm:w-44 md:w-52 lg:w-60 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-2xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-white/50 flex flex-col items-center"
            >
                {/* Gantungan Besi */}
                <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-3.5 h-4.5 sm:w-4 border-2 border-gray-400 rounded-full bg-gray-800 flex items-center justify-center shadow-md">
                        <div className="w-1.5 h-1.5 border border-gray-300 rounded-full"></div>
                    </div>
                </div>

                {/* Lubang kartu */}
                <div className="w-6 sm:w-7 h-1.5 sm:h-2 bg-black/90 mx-auto rounded-full mb-3 border border-gray-400/50 shadow-inner mt-1.5 "></div>

                {/* Frame Foto Profil */}
                <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-gray-900 rounded-xl overflow-hidden border border-black/20 shadow-md">
                    <Image
                        src="/profile-photo.jpeg"
                        alt="Profile Photo"
                        fill
                        sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
                        className="object-cover pointer-events-none"
                        priority
                    />
                </div>

                {/* Label di bawah kartu */}
                <div className="w-full pt-2 sm:pt-3 pb-1 px-1 flex justify-between items-end">
                    <div>
                        <p className="font-serif italic text-lg sm:text-base md:text-lg text-black font-extrabold tracking-tight opacity-90">
                            Student at UNS
                        </p>
                    </div>
                    <div className="text-[6px] sm:text-[8px] font-mono text-gray-700 uppercase tracking-widest font-bold">
                        VERIFIED ID
                    </div>
                </div>
            </motion.div>
        </div>
    );
}