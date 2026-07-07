"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProfileCard() {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="flex flex-col items-center select-none">
            <div className="[perspective:1500px] rotate-3 hover:rotate-0 transition-transform duration-300">
                <div
                    onClick={() => setFlipped(!flipped)}
                    className={`relative w-80 h-[380px] cursor-pointer transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""
                        }`}
                >
                    {/* SISI DEPAN (Red branding card with FaRIL DEV) */}
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 flex flex-col justify-between">
                        <div className="w-full h-full bg-brutal-red border-2 border-black flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="text-center select-none">
                                <h2 className="text-white text-6xl font-black italic tracking-tighter leading-none select-none">
                                    <span className="text-4xl font-extrabold not-italic">HA</span>VIZ
                                </h2>
                                <div className="flex items-center justify-center gap-2 mt-2 w-full">
                                    <div className="h-[2px] w-8 bg-white/60"></div>
                                    <span className="text-white text-xs font-mono tracking-widest opacity-80 select-none">DEV</span>
                                    <div className="h-[2px] w-8 bg-white/60"></div>
                                </div>
                            </div>
                            <span className="absolute bottom-4 left-4 bg-black text-white text-[11px] font-bold px-2 py-0.5 border border-black shadow-[1.5px_1.5px_0px_0px_rgba(255,255,255,1)]">
                                Student
                            </span>
                        </div>
                    </div>

                    {/* SISI BELAKANG FOTO */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 flex flex-col overflow-hidden">
                        <div className="w-full h-full bg-gray-100 border-2 border-black relative overflow-hidden">
                            <Image
                                src="/profile-photo.jpeg"
                                alt="Havizhan"
                                fill
                                className="object-cover"
                                priority
                            />
                            <span className="absolute bottom-4 left-4 bg-black text-white text-xs font-bold px-2 py-0.5 border border-black z-10">
                                Havizhan Dev
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-xs mt-6 font-extrabold text-black/60 tracking-wider uppercase bg-white border-2 border-black px-3 py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] animate-bounce cursor-pointer active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                klik kartu untuk lihat foto
            </p>
        </div>
    );
}