"use client";

import { Mail, MapPin, ArrowUpRight } from "lucide-react";

// Komponen SVG Github
const GithubIcon = ({ className }: { className?: string }) => {
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentCollor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
};

// Komponen SVG LinkedIn
const LinkedinIcon = ({ className }: { className?: string }) => {
    <svg>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
};

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative w-full py-20 sm:py-28 px-4 scroll-mt-24 overflow-hidden"
        >
            <div className="max-w-[1000px] w-full mx-auto flex flex-col items-center relative z-10 ">

                {/* Header Judul */}
                <div className="text-center mb-16 flex flex-col items-center select-none">
                    <span className="bg-[#ffe600] text-black font-mono font-bold px-4 py-1.5 rounded-full uppercase text-[10px] tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,1)] border-2 border-black mb-6">
                        CONTACT - VERIFIED
                    </span>
                    <h2 className="text-4xl sn:text-5xl font-extrabold text-white tracking-tight">
                        Hubungi Saya
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
                        Ada proyek desain atau ingin sekadar menyapa? Kartu ID di bawah selalu siap menerima pesan.
                    </p>
                </div>

                {/* Grid Utama */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-4xl mx-auto">

                    {/* Kartu Kiri: Mari bekerja sama */}
                    <div className="md:col-span-7 bg-white text-black border-[3px] border-black rounded-[24px] p-6 sm:p-8 flex flex-col justify-between shadow-[9px_8px_0px_#ffe600]">
                        <div>
                            <h3 className="text-gray-500 font-mono font-bold text-xs uppercase tracking-widest mb-4">
                                MARI BEKERJA SAMA
                            </h3>
                            <p className="font-sans font-bold text-base sm:text-lg leading-relaxed text-black">
                                Tertarik untuk berkolaborasi atau mendiskusikan proyek kreatif bersama? Saya selalu terbuka untuk berdiskusi tentang ide-ide baru, baik dalam pengembangan website modern maupun perancangan desain visual yang interaktif. Silakan hubungi saya melalui kontak di samping!
                            </p>
                        </div>

                        {/* Tombol Portofolio PPT  */}
                        <div className="mt-8 flex flex-col items-start">
                            <a
                                href="https://drive.google.com/YOUR_GOOGLE_DRIVE_PPT_LINK_HERE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#ffe600] text-black border-2 border-black font-mono text-xs sm:text-sm uppercase rounded-xl hover:bg-yellow-400 active:scale-95 transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] group cursor-pointer"
                            >
                                <span>
                                    Download PPT Portofolio
                                </span>
                                <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Kartu Kanan: Email & Lokasi */}
                    <div className="md:col-span-5 flex flex-col gap-6">

                        {/* Mail Card */}
                        <div className="bg-white text-black border-[3px] border-black rounded-[24px] p-5 flex items-center gap-4 shadow-[5px_5px_0px_rgba(0,0,0,1)]">
                            <div className="w-10 h-10 shrink-0 bg-[#ffe600] border-2 border-black rounded-xl flex items-center justify-center text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                <Mail className="w-5 h-5" strokeWidth={2.5} />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-gray-500 font-mono text-[9px] uppercase font-bold tracking-wider">
                                    EMAIL
                                </p>
                                <a href="mailto:havizhanrhaiya@gmail.com" className="font-bold text-sm sm:text-base hover:underline block truncate select-all">havizhanrhaiya@gmail.com</a>
                            </div>
                        </div>

                        {/* Lokasi Card */}
                        <div className="bg-white text-black border-[3px] border-black rounded-[24px] p-5 flex items-center gap-4 shadow-[5px_5px_0px_rgba(0,0,0,1)]">
                            <div className="w-10 h-10 shrink-0 bg-[#ffe600] border-2 border-black rounded-xl flex items-center justify-center text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                                <MapPin className="w-5 h-5" strokeWidth={2.5} />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-gray-500 font-mono text-[9px] uppercase font-bold tracking-wider">
                                    LOKASI
                                </p>
                                <a href="mailto:havizhanrhaiya@gmail.com" className="font-bold text-sm sm:text-base hover:underline block truncate select-all">Surakarta, Indonesia</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bagian Bawah */}
                <div className="w-full max-w-4xl mx-auto mt-12 flex flex-col items-stretch">
                    <p className="text-gray-500 font-mono font-bold text-xs uppercase tracking-widest mb-4">
                        TERHUBUNG DENGAN SAYA
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* GITHUB CARD */}
                        <a
                            href="https://github.com/Havizhan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black border-[3px] border-black rounded-[24px] p-5 flex items-center justify-between shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:bg-gray-50 transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 shrink-0 bg-black text-white border-2 border-black rounded-xl flex items-center justify-center">
                                    <GithubIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm sm:text-base">
                                        Github
                                    </p>
                                    <p className="text-gray-500 text-xs font-mono">
                                        @havizhanrhaiya
                                    </p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-black shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
                        </a>

                        {/* LINKEDIN CARD */}
                        <a
                            href="linkedin.com/in/havizhan-rhaiya-ardhana-931179296"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black border-[3px] border-black rounded-[24px] p-5 flex items-center justify-between shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:bg-gray-50 transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 shrink-0 bg-black text-white border-2 border-black rounded-xl flex items-center justify-center">
                                    <LinkedinIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm sm:text-base">
                                        LinkedIn
                                    </p>
                                    <p className="text-gray-500 text-xs font-mono">
                                        @Havizhan Rhaiya Ardhana
                                    </p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-black shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <div className="w-full max-w-4xl mx-auto h-[1px] bg-white/10 my-16" />

                {/* Copyright */}
                <p className="text-center text-gray-500 text-xs font-mono tracking-widest select-none">
                    © 2026 Havizhan Rhaiya Ardhana. All rights reserved.
                </p>
            </div>
        </section >
    );
}