"use client";

import { useState, useEffect } from "react";
import LanyardCard from "./LanyardCard";
import { ArrowDownCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { p } from "framer-motion/client";

// Interface untuk data pop up
interface Popup {
    id: number;
    x: number;
    y: number;
    rotation: number;
    scale: number;
}

function GridBackground({ cols = 26, rows = 16 }: { cols?: number; rows?: number }) {
    const cells = Array.from({ length: cols * rows });

    return (
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[36px] pointer-events-none">
            <div
                className="grid w-full h-full opacity-70"
                style={{
                    gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`,
                    gap: "6px",
                    padding: "16px",
                }}
            >
                {cells.map((_, i) => (
                    <span key={i} className="grid-cell rounded-[2px]" />
                ))}
            </div>
        </div>
    );
}

export default function Hero() {
    const fullText = "A sixth-semester Informatics student at Sebelas Maret University with experience in front-end web development and web design. Proficient in HTML, CSS, and JavaScript, and currently learning React. Passionate about building real-world applications, contributing to research projects, and always ready to learn new technologies and skills.";

    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    const [isHovered, setIsHovered] = useState(false);

    const [stage, setStage] = useState<'idle' | 'error' | 'confirmed' | 'active'>('idle');
    const [popups, setPopups] = useState<Popup[]>([]);

    // Animasi Ganti Teks: UNS, Desainer, Frontend
    const roles = ["Student at UNS", "Desainer Grafis", "Frontend Dev"];
    const [roleIndex, setRoleIndex] = useState(0);

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };

    // Effect Looping Ganti Teks (3 detik sekali)
    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const triggerDiagnostics = () => {
        if (stage !== 'idle') return;
        setStage('error');
        setPopups([]);

        let count = 0;
        const maxPopups = 16;

        // Effect Popup Error
        const interval = setInterval(() => {
            if (count >= maxPopups) {
                clearInterval(interval);
                setTimeout(() => {

                    setStage('confirmed');
                    setPopups([]);

                    // Tampilan Confirmed
                    setTimeout(() => {
                        setStage('active');
                    }, 1500);
                }, 800);
                return;
            }

            const x = 25 + Math.random() * 50;
            const y = 25 + Math.random() * 50;
            const rotation = (Math.random() - 0.5) * 24;
            const scale = 0.85 + Math.random() * 0.25;

            setPopups((prev) => [...prev, { id: count, x, y, rotation, scale }]);
            count++;
        }, 100);
    };


    // Effect Animasi Mengetik dan Menghapus (loop)
    useEffect(() => {
        if (stage !== 'active') return;

        let timer: NodeJS.Timeout;

        if (!isDeleting && index < fullText.length) {
            timer = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 30); // kecepatan Mengetik
        } else if (!isDeleting && index === fullText.length) {
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, 8000) // jeda diam selama 5 detik sebelum terhapus
        } else if (isDeleting && index > 0) {
            timer = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
                setIndex((prev) => prev - 1);
            }, 12); // Kecepatan Menghapus
        } else if (isDeleting && index === 0) {
            setIsDeleting(false);
        }
        return () => clearTimeout(timer);
    }, [index, isDeleting, fullText, stage]);

    return (
        <section id="hero" className="w-full max-w-[95%] xl:max-w-[1400px] mx-auto pt-28 pb-12 px-4 scroll-mt-28">
            {/* Main Container Card {Responsive}: Stacked di HP, Kiri-kanan di PC*/}
            <div
                onPointerMove={handlePointerMove}
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}
                className="bg-[#161618] border border-white/10 rounded-[36px] p-6 pb-16 md:p-12 md:pb-20 lg:p-14 lg:pb-24 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[560px] md:min-h-[620px] lg:min-h-[680px]">

                {/* Background Subtle Gradient Glow */}
                <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
                    style={{
                        background: `radial-gradient(
                            circle 250px at var(--mouse-x, 0px) var(--mouse-y, 0px),
                            rgba(129, 175, 255, 0.15),
                            transparent 80% 
                        )`,
                        opacity: isHovered ? 1 : 0,
                    }}
                />

                {/* Background Subtle gradient Glow */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none z-0"></div>

                {/* Grid background */}
                <GridBackground />

                {/* Left Side: Lanyard Card */}
                <div className="relative z-10 lg:col-span-4 flex justify-center items-center">
                    <LanyardCard />
                </div>

                {/* Rigth Side: Hero Content */}
                <div className="relative z-10 lg:col-span-8 flex flex-col justify-center items-start text-left space-y-5 lg:pl-6 xl:pl-12">
                    <p className="text-gray-300 text-lg md:text-xl font-medium">
                        Halo! Saya <span className="font-bold text-white">Havizhan</span>
                    </p>

                    {/* Kemampuan Saya */}
                    <div className="h-[4rem] md:h-[5.5rem] lg:h-[6.5rem] relative overflow-hidden w-full select-none">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={roleIndex}
                                initial={{ y: 24, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -24, opacity: 0 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="absolute left-0 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white"
                            >
                                {roles[roleIndex]}.
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    {/* Deskripsi Teks & Tombol Interaktif */}
                    <div>
                        {stage === 'idle' && (
                            <button
                                onClick={triggerDiagnostics}
                                className="bg-white/5 border border-white/10 hover:border-white/30 text-white font-mono text-xs md:text-sm px-5 py-3 rounded-xl flex items-center gap-3 transition-all hover:bg-white/10 active:scale-95 group cursor-pointer shadow-lg"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
                                </span>
                                <span>Decrypt Developer Profile</span>
                            </button>
                        )}

                        {stage === 'error' && (
                            <p className="text-yellow-400 font-mono text-xs sm:text-sm tracking-wide animate-pulse">
                                System Scanning: Spawning Diagnostics Subprocesses...
                            </p>
                        )}

                        {stage === 'confirmed' && (
                            <p className="text-green-400 font-mono text-xs sm:text-sm tracking-wide">
                                Decryption Successful. Accessing Profile Info...
                            </p>
                        )}

                        {stage === 'active' && (
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                                {displayedText}
                                <span className="inline-block w-2 h-4 ml-1 bg-white animate-pulse"></span>
                            </p>
                        )}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4 w-full max-w-lg">
                        <a href="#aboutMe"
                            className="flex items-center justify-between gap-3 w-full bg-white text-black font-bold text-base md:text-lg px-8 py-4 rounded-full hover:bg-gray-200 transition-all shadow-lg active:scale-95 group">
                            <span>About Me</span>
                            <ArrowDownCircle className="w-5 h-5 md:h-6 transition-transform group-hover:translate-y-0.5" />
                        </a>
                    </div>
                </div>

                <AnimatePresence>
                    {stage === 'error' && popups.map((popup) => (
                        <motion.div
                            key={popup.id}
                            initial={{ opacity: 0, scale: 0.4 }}
                            animate={{ opacity: 1, scale: popup.scale }}
                            exit={{ opacity: 0, scale: 0.2 }}
                            transition={{ type: "spring", stiffness: 350, damping: 18 }}
                        >
                            <div>
                                <div>
                                    X
                                </div>
                                <div />
                            </div>

                            {/* Window Content */}
                            <div>
                                <svg>
                                    <path />
                                    <rect />
                                </svg>
                                <span>
                                    Error!
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

            </div>
        </section >
    );
}