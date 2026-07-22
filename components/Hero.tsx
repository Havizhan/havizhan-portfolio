"use client";

import { useState, useEffect } from "react";
import LanyardCard from "./LanyardCard";
import { ArrowDownCircle } from "lucide-react";

function GridBackground({ cols = 26, rows = 16 }: { cols?: number; rows?: number }) {
    const duration = 3.4;
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
                {cells.map((_, i) => {
                    const col = i % cols;
                    const delay = (col / cols) * duration;
                    return (
                        <span
                            key={i}
                            className="grid-cell rounded-[2px]"
                            style={{
                                animationDelay: `${delay}s`,
                                animationDuration: `${duration}s`,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    )
}


export default function Hero() {
    const fullText = "Pengalaman lebih dari 1 tahun mendesain visual yang modern, kreatif, dan berorientasi pada hasil nyata bagi berbagai brand, bisnis, serta content creator demi meningkatkan performa brand Anda.";

    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    // Effect Animasi Mengetik dan Menghapus (loop)
    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (!isDeleting && index < fullText.length) {
            timer = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 35); // kecepatan Mengetik
        } else if (!isDeleting && index === fullText.length) {
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, 5000) // jeda diam selama 5 detik sebelum terhapus
        } else if (isDeleting && index > 0) {
            timer = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
                setIndex((prev) => prev - 1);
            }, 15); // Kecepatan Menghapus
        } else if (isDeleting && index === 0) {
            setIsDeleting(false);
        }
        return () => clearTimeout(timer);
    }, [index, isDeleting, fullText]);

    return (
        <section className="w-full max-w-[95%] xl:max-w-[1400px] mx-auto pt-28 pb-12 px-4">
            {/* Main Container Card {Responsive}: Stacked di HP, Kiri-kanan di PC*/}
            <div className="bg-[#161618] border border-white/10 rounded-[36px] p-6 pb-12 md:p-12 md:pb-20 lg:p-14 lg:pb-24 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[560px] md:min-h-[620px] lg:min-h-[680px]">

                {/* Background Subtle Gradient Glow */}
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

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
                        Desainer Grafis.
                    </h1>

                    {/* Deskripsi Teks dengan Animasi */}
                    <div className="min-h-[4.5rem] md:min-h-[3.5rem] flex items-start">
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                            {displayedText}
                            <span className="inline-block w-2 h-4 ml-1 bg-white animate-pulse"></span>
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4 w-full max-w-lg">
                        <a href="#portofolio"
                            className="flex items-center justify-between gap-3 w-full bg-white text-black font-bold text-base md:text-lg px-8 py-4 rounded-full hover:bg-gray-200 transition-all shadow-lg active:scale-95 group">
                            <span>Portofolio</span>
                            <ArrowDownCircle className="w-5 h-5 md:h-6 transition-transform group-hover:translate-y-0.5" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}