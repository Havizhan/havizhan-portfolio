"use client";

import { useRef, useState, useEffect, unstable_startGestureTransition } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { User, GraduationCap, Briefcase, MapPin, MouseRightIcon } from "lucide-react";
import { devIndicatorServerState } from "next/dist/server/dev/dev-indicator-server-state";
import { div, img, section, svg } from "framer-motion/client";
import { Chocolate_Classical_Sans } from "next/font/google";

// Effect Bintang Jatuh
function ShootingStars() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // 12 Bintang Jatuh
    const stars = Array.from({ length: 12 }).map((_, i) => ({
        top: Math.random() * 50,
        left: 20 + Math.random() * 70,
        delay: Math.random() * 8,
        duration: 2 + Math.random() * 3,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10" >
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

// Komponen Alight Motion
function AlightMotionIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7 relative z-10" fill="none" xmlns="http:www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" fill="url(#amGrad)" />
            <path
                d="M6 12C6 8.686 8.686 6 12 6C15.314 6 18 8.686 18 12C18 15.314 14 18 10 18C7.5 18 6 15 6 12Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
            <defs>
                <linearGradient id="amGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00f2fe" />
                    <stop offset="1" stopColor="#4facfe" />
                </linearGradient>
            </defs>
        </svg >
    );
}

// Wrapper Planet / icon teknologi
interface Skill {
    name: string;
    icon?: string;
    glow: string;
    filter?: string;
    isCustom?: boolean;
}

function OrbitItem({ radius, angle, skill }: { radius: any; angle: number; skill: Skill }) {
    // Menghitung koordinat X & Y
    const x = useTransform(radius, (r: number) => r * Math.cos(angle));
    const y = useTransform(radius, (r: number) => r * Math.sin(angle));

    return (
        <motion.div
            style={{ x, y }}
            whileHover={{ scale: 1.15 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#111113]/95 border border-white/10 flex flex-center justify-center shadow-md ralative group cursor-pointer transition-all duration-300" >
                {/* Effect Glow ketika di hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md pointer-events-none" />
                {skill.isCustom ? (
                    <AlightMotionIcon />
                ) : (
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5 sm:w-7 sm:h-7 object-contain relative z-10 transition-transform duration-300"
                        style={{ filter: skill.filter }}
                    />
                )}

                {/* Tooltio nama Teknologi */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-[#0d0d0f] border border-white/10 text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-lg whitespace-nowrap z-50 ">
                    {skill.name}
                </div>
            </div>
        </motion.div>
    );
}

// Wrapper Kartu informasi 
function InfoCard({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
    return (
        <motion.div
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-[#161618]/60 border border-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] raltive overflow-hidden group hover:border-white/10 transition-colors"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none " />

            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-cl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
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
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Mengubah radius orbit
    const innerRadius = useTransform(scrollYProgress, [0.1, 0.55], [35, 110]);
    const middleRadius = useTransform(scrollYProgress, [0.1, 0.55], [50, 170]);
    const outerRadius = useTransform(scrollYProgress, [0.1, 0.55], [65, 230]);

    // Data planet di Orbit
    // Dalam - Backend & AI
    const orbit1Skills: Skill[] = [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", glow: "rgba(51, 153, 51, 0.4)" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", glow: "rgba(225, 255, 255, 0.4)", filter: "invert(1)" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", glow: "rgba(55, 118, 171, 0.4)" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", glow: "rgba(255, 255, 255, 0.4)", filter: "invert(1)" }
    ];

    // Tengah - Frontend
    const orbit2Skills: Skill[] = [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", glow: "rgba(227, 79, 38, 0.4)" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", glow: "rgba(21, 114, 182, 0.4)" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", glow: "rgba(247, 223, 30, 0.4)" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", glow: "rgba(97, 218, 251, 0.4)" }
    ];

    // Luar - Design
    const orbit3Skills: Skill[] = [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", glow: "rgba(242, 78, 30, 0.4)" },
        { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg", glow: "rgba(234, 119, 255, 0.4)" },
        { name: "Capcut", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/capcut.svg", glow: "rgba(255, 255, 255, 0.4)" },
        { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", glow: "rgba(0, 196, 204, 0.4)" },
        { name: "Alight Motion", isCustom: true, glow: "rgba(0, 245, 212, 0.4)" }
    ];

    // CSS Dinamis untuk label kategori orbit
    const frontendY = useTransform(middleRadius, (r) => -r - 24);
    const backendX = useTransform(middleRadius, (r) => -r - 32);
    const designY = useTransform(outerRadius, (r) => r + 24);
    const aiX = useTransform(innerRadius, (r) => r + 24);

    return (
        <section
            id="portofolio"
            ref={containerRef}
            className="relative w-full py-24 px-4 overflow-hidden bg-[#0d0d0f] border-t border-white/5 flex flex-col items-center justify-center"
        >
            {/* Background Bintang Jatuh */}
            <ShootingStars />

            <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center relative z-10">
                {/* Header Judul */}
                <div className="text-center mb-16 relative z-10">
                    <span className="text-b;ue-400 texy-xs font-semibold tracking-widest uppercase pb-1 border-b-2 border-blue-400/30">
                        ABOUT ME
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 text-white tracking-tight">
                        What I Use to Build & Create
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto ">
                        Technologies and tools that I use to bring ideas lo life.
                    </p>
                </div>

                {/* Planet & Orbit */}
                <div className="relative w-full h-[320px] sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-visible select-none">
                    {/* Garis Lintasan Orbit */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        {/* Orbit Dalam */}
                        <motion.circle
                            cx="50%"
                            cy="50%"
                            r={innerRadius}
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.05"
                            strokeWidth="1"
                            strokeDasharray="4.4"
                        />
                        {/* Orbit Tengah */}
                        <motion.circle
                            cx="50%"
                            cy="50%"
                            r={middleRadius}
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.04"
                            strokeWidth="1"
                        />
                        {/* Orbit Luar */}
                        <motion.circle
                            cx="50%"
                            cy="50%"
                            r={outerRadius}
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.02"
                            strokeWidth="1.5"
                        />
                    </svg>

                    {/* Kategori Orbit */}
                    <motion.div style={{ y: frontendY, x: 0 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400/70 font-bold text-[9px] sm:text-[11px] tracking-widest pointer-events-none uppercase">
                        Frontend
                    </motion.div>
                    <motion.div style={{ x: backendX, y: 0 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-400/70 font-bold text-[9px] sm:text-[11px] tracking-widest pointer-events-none uppercase">
                        Backend
                    </motion.div>
                    <motion.div style={{ y: designY, x: 0 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-400/70 font-bold text-[9px] sm:text-[11px] tracking-widest pointer-events-none uppercase">
                        Design
                    </motion.div>
                    <motion.div style={{ x: aiX, y: 0 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-400/70 font-bold text-[9px] sm:text-[11px] tracking-widest pointer-events-none uppercase">
                        AI
                    </motion.div>

                    {/* Pusat Matahari Orbit */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#1b1b1f] to-[#0c0c0e] border border-white/10 shadow-[0_0_50px_rgba(129, 175, 255, 0.12)] flex flex-col items-center justify-center p-4">
                        <h3 className="text-xl sm:text-3xl font-extrabold tracking-widest text-white leading-none">HRA</h3>
                        <div className="h-[1.5px] w-6 bg-blue-400 my-2" />
                        <p className="text-[7px] sm:text-[9px] text-gray-400 font-mono tracking-widest text-center uppercase">
                            Developer & Creator
                        </p>
                    </div>

                    {/* Planet & Orbit */}
                    {/* Orbit 1: Backkend/AI */}
                    {orbit1Skills.map((skill, index) => {
                        const angle = (index * 2 * Math.PI) / orbit1Skills.length + Math.PI / 6;
                        return <OrbitItem key={skill.name} radius={innerRadius} angle={angle} skill={skill} />;
                    })}

                    {/* Orbit 2: Frontend */}
                    {orbit2Skills.map((skill, index) => {
                        const angle = (index * 2 * Math.PI) / orbit2Skills.length + Math.PI / 3;
                        return <OrbitItem key={skill.name} radius={middleRadius} angle={angle} skill={skill} />;
                    })}

                    {/* Orbit 3: Design */}
                    {orbit3Skills.map((skill, index) => {
                        const angle = (index * 2 * Math.PI) / orbit3Skills.length;
                        return <OrbitItem key={skill.name} radius={outerRadius} angle={angle} skill={skill} />;
                    })}

                </div>

            </div>
        </section >
    )


}