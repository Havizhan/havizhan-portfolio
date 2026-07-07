import { ArrowUpRight, RotateCw } from "lucide-react";
import ProfileCard from "./ProfileCard";

export default function Hero() {
    return (
        <section className="relative px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center overflow-hidden max-w-7xl mx-auto">
            <div>
                {/* Badges/Tags */}
                <div className="flex flex-wrap gap-3 mb-8 select-none">
                    <span className="bg-brutal-pink text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-3 py-1.5 text-xs font-black tracking-wide flex items-center gap-1.5">
                        #2 HTML NGAWI <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-6xl md:text-7xl font-black leading-none mb-3 text-black tracking-tight select-none">
                    HALO
                </h1>
                <h1 className="text-5xl md:text-6xl font-black bg-black text-white inline-block px-2 mb-6">
                    SAYA HAVIZHAN
                </h1>

                <p className="text-lg max-w-md mb-8">
                    UI/UX Developer @{" "}
                    <span className="bg-brutal-blue fotn-bold px-1">
                        Mahasiswa Informatika
                    </span>{" "}
                    @ Universitas Sebelas Maret.
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <button className="bg-black text-white px-8 py-3.5 font-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer text-base uppercase">
                        BIO_LOG
                    </button>
                    <button className="bg-white text-black px-8 py-3.5 font-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer text-base uppercase">
                        PROJECTS
                    </button>
                </div>
            </div>

            {/* Profile Card wrapper */}
            <div className="flex justify-center md:justify-end items-center py-8">
                <ProfileCard />
            </div>
        </section>
    );
}