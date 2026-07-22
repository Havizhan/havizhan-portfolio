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
    const L = 120;

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
        return Math.min(Math.max((dist - 5) / 20, 0), 1);
    });

    // 3. Menghitung rotassi ID card agar mengikuti arah tali
    const cardRotation = useTransform([x, y], ([latestX, latestAngle]) => {
        const lx = latestX as number;
        const angle = latestAngle as number;
        const torque = clickOffset.x * -6;
        return angle * 0.5 + lx * 0.01 + torque * 0.02;
    });

    // Handler untuk mendeteksi posisi relatif klik kursor
    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        setClickOffset({ x: relX, y: relY });
    };

    return (
        <div className="relative w-full h-[360px] sm:h-[400px] md:h-[480px] lg:h-[520px] flex flex-col items-center select-none pt-0 overflow-visible">
            {/* 1. Titik jangkar tali */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-2.5 sm:h-3 bg-[#0d0d0f] z-30 border-b border-white/10" />

            {/* 2. Tali Lanyard Hitam Bermotif HRA */}
            <motion.div
                style={{
                    rotate: strapAngle,
                    height: strapHeight,
                    transformOrigin: "top center",
                }}
                className="absolute top-0 left-[calc(50%-12px)] w-6 bg-[#111113] border-x border-white/10 flex flex-col items-center justify-between py-4 z-10 shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
            >
                {/* Motif Logo HRA */}
                <span className="text-[6px] font-black text-white/30 tracking-widest select-none">HRA</span>
                <span className="text-[6px] font-black text-white/30 tracking-widest select-none">HRA</span>
                <span className="text-[6px] font-black text-white/30 tracking-widest select-none">HRA</span>
                <span className="text-[6px] font-black text-white/30 tracking-widest select-none">HRA</span>
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
                dragConstraints={{ top: -25, left: -100, right: 100, bottom: 150 }}
                dragElastic={0.4}
                dragSnapToOrigin={true}
                onPointerDown={handlePointerDown}
                whileTap={{ cursor: "grabbing" }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="absolute top-[900px] sm:top-[105px] md:top-[120px] left-[calc(50%-104px)] sm:left-[calc(50%-120px)] md:left-[calc(50%-144px)] cursor-grab z-20 w-52 sm:w-60 md:w-72 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-2xl p-4 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-white/50 flex flex-col items-center"
            >
                {/* Gantungan Besi */}
                <div className="absolute -top-3 sm:top-3.5 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-400 rounded-full bg-gray-800 flex items-center justify-center shadow-md">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 border border-gray-300 rounded-full"></div>
                    </div>
                </div>

                {/* Lubang kartu */}
                <div className="w-7 sm:w-8 h-2 sm:h-2.5 bg-black/90 mx-auto rounded-full mb-3 border border-gray-400/50 shadow-inner mt-2 "></div>

                {/* Frame Foto Profil */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 bg-gray-900 rounded-xl overflow-hidden border border-black/20 shadow-md">
                    <Image
                        src="/profile-photo.jpeg"
                        alt="Profile Photo"
                        fill
                        sizes="(max-width: 640px) 208px, (max-width: 768px) 240px, 288px"
                        className="object-cover pointer-events-none"
                        priority
                    />
                </div>

                {/* Label di bawah kartu */}
                <div className="w-full pt-3 pb-1 px-1 flex justify-between items-end">
                    <div>
                        <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-black font-extrabold tracking-tight opacity-90">
                            Student at UNS
                        </p>
                    </div>
                    <div className="text-[8px] sm:text-[10px] font-mono text-gray -700 uppercase tracking-widest font-bold">
                        VERIFIED ID
                    </div>
                </div>
            </motion.div>
        </div>
    );
}