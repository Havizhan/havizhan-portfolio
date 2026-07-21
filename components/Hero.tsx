"use client";

import { useState, useEffect } from "react";
import LanyardCard from "./LanyardCard";
import { ArrowDownCircle } from "lucide-react";
import { useSegmentState } from "next/dist/next-devtools/userspace/app/segment-explorer-node";

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
            }, 3500) // jeda diam selama 3.5 detik sebelum terhapus
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
        <section className="w-full max-w-6xl mx-auto pt-28 pb-12 px-4">
            {/* Main Container Card {Responsive}: Stacked di HP, Kiri-kanan di PC*/}
            <div className="bg-[#161618] border border-white/10 rounded-[36px] p-6 md:p-12 lg:p-14 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                {/* Background Subtle Gradient Glow */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

                {/* Left Side: Lanyard Card */}
                <div className="lg:col-span-5 flex justify-center items-center">
                    <LanyardCard />
                </div>

                {/* Rigth Side: Hero Content */}
                <div className="lg:col-span-7 flex flex-col justify-center items-start text-left space-y-5">
                    <p className="text-gray-300 text-lg md:text-xl font-medium">
                        Halo! Saya <span className="font-bold text-white">Havizhan</span>
                    </p>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold  text-white tracking-tight leading-none">
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
                    <div className="pt-4">
                        <a href="#portofolio"
                            className="inline-flex items-center gap-3 bg-white text-black font-bold text-sm md:text-base px-7 py-3.5 rounded-full hover:bg-gray-200 transition-all shadow-lg active:scale-95 group">
                            <span>Portofolio</span>
                            <ArrowDownCircle className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}