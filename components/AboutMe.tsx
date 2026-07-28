"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, GraduationCap, Briefcase, MapPin } from "lucide-react";

// Effect Bintang Jatuh
function ShootingStars() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // 14 Bintang Jatuh
    const stars = Array.from({ length: 14 }).map((_, i) => ({
        top: Math.random() * 55,
        left: 20 + Math.random() * 90,
        delay: Math.random() * 8,
        duration: 2.5 + Math.random() * 3,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" >
            {
                stars.map((star, i) => (
                    <div
                        key={i}
                        className="absolute shooting-star"
                        style={{
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            animationDelay: `${star.delay}s`,
                            animationDuration: `${star.duration}s`,
                        }}
                    >
                    </div>
                ))
            }
        </div >
    );
}

function BackgroundStars() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const stars = Array.from({ length: 80 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.8,
        opacity: 0.2 + Math.random() * 0.8,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star, i) => (
                <div
                    key={i}
                    className="absolute bg-white rounded-full animate-pulse"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`,
                    }}
                />
            ))}
        </div>
    );
}

// Wrapper Kartu informasi 
function InfoCard({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
    return (
        <motion.div
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-[#161618]/60 border border-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative overflow-hidden group hover:border-white/10 transition-colors"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none " />

            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-gray-200 tracking-wider uppercase">
                    {title}
                </h4>
            </div>

            <div className="text-sm text-gray-400 space-y-2 leading-relaxed relative z-10">
                {children}
            </div>
        </motion.div>
    );
}

export default function Aboutme() {
    return (
        <section
            id="aboutMe"
            className="relative w-full bg-dark-grid py-20 sm:py-28 overflow-hidden"
        >
            {/* Background */}
            <BackgroundStars />
            <ShootingStars />

            <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center relative z-10">
                {/* Header Judul */}
                <div className="text-center mb-10 sm:mb-16">
                    <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase pb-1 border-b-2 border-blue-400/30">
                        ABOUT ME
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 text-white tracking-tight">
                        What I Use to Build & Create
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto ">
                        Technologies and tools that I use to bring ideas lo life.
                    </p>
                </div>

                {/* Grid Informasi Kartu */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full">
                    {/* 1. About Me */}
                    <InfoCard icon={User} title="ABOUT ME">
                        Saya Seorang Informatics Student yang tertarik dalam membangun web modern, membuat desain yang menarik, dan mengeksplorasi AI untuk menciptakan solusi kreatif.
                    </InfoCard>

                    {/* 2. EDUCATION */}
                    <InfoCard icon={GraduationCap} title="EDUCATION ">
                        <div className="space-y-1">
                            <p className="font-semibold text-white">Informatika</p>
                            <p>Universitas Sebelas Maret</p>
                            <p className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full inline-block mt-1">2023 - Sekarang</p>
                        </div>
                    </InfoCard>

                    {/* 3. EXPERIENCE */}
                    <InfoCard icon={Briefcase} title="EXPERIENCE">
                        <div className="space-y-1">
                            <p className="font-semibold text-white">Web Developer & Designer</p>
                            <p>Freelance Project</p>
                            <p className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full inline-block mt-1">2026 - Sekarang</p>
                        </div>
                    </InfoCard>

                    {/* 4. LOCATION */}
                    <InfoCard icon={MapPin} title="LOCATION">
                        <div className="space-y-1">
                            <p className="font-semibold text-white">Surakarta, Indonesia</p>
                            <p className="text-xs text-gray-500">Zona Waktu: UTC +7</p>
                        </div>
                    </InfoCard>
                </div>
            </div>
        </section >
    );
}