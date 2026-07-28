"use client";

import { Brain, Clapperboard } from "lucide-react";

interface TechItem {
    name: string;
    icon?: string;
    filter?: string;
    isBrain?: boolean;
    isFallbackIcon?: boolean;
}

interface Category {
    label: string;
    color: string;
    items: TechItem[];
}

const ALIGHT_MOTION_ICON = "/icons/alight-motion.png";
const CAPCUT_ICON = "/icons/capcut.png";

const categories: Category[] = [
    {
        label: "FRONTEND",
        color: "text-sky-400",
        items: [
            { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        ],
    },
    {
        label: "BACKEND & AI",
        color: "text-purple-400",
        items: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        ],
    },
    {
        label: "DESIGN",
        color: "text-indigo-400",
        items: [
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" },
            { name: "Capcut", icon: CAPCUT_ICON, isFallbackIcon: true },
            { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
            { name: "Alight Motion", icon: ALIGHT_MOTION_ICON },
        ],
    },
];

function TechIcon({ item }: { item: TechItem }) {
    return (
        <div className="flex flex-col items-center gap-2 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#111113]/90 border border-white/10 flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-white/25 ">
                {item.isBrain ? (
                    <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" strokeWidth={1.5} />
                ) : item.isFallbackIcon ? (
                    <Clapperboard className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" />
                ) : (
                    <img
                        src={item.icon}
                        alt={item.name}
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
                        style={{ filter: item.filter }}
                    />
                )}
            </div>
            <span className="text-[11px] sm:text-xs md:text-sm text-gray-300 font-medium whitespace-nowrap">
                {item.name}
            </span>
        </div>
    );
}


export default function TechStack() {
    return (
        <section
            id="techstack"
            className="relative w-full py-20 sm:py-28 px-4 scroll-mt-24 overflow-hidden"
        >
            <div className="max-w-[1100px] w-full mx-auto flex flex-col items-center relative z-10">
                <div className="text-center mb-14 sm:mb-20">
                    <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase pb-1 border-b-2 border-blue-400/30">
                        TECH STACK
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold-mt-4 text-white tracking-tight">
                        What I Use to Build & Create
                    </h2>
                </div>

                <div className="w-full flex flex-col gap-12 sm:gap-16">
                    {categories.map((cat) => (
                        <div key={cat.label} className="flex flex-col items-center gap-5 sm:gap-6 w-full">
                            <h3 className={`text-xs sm:text-sm font-bold tracking-widest uppercase ${cat.color}`}>
                                {cat.label}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
                                {cat.items.map((item) => (
                                    <TechIcon key={item.name} item={item} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <p className="text-[10px] text-gray-600 text-center mt-10 relative z-10">
                Alight Motion icon from{" "}
                href="https/::www.freeiconspng.com/img/49835"
                target:"_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400"
                <a>
                    freeiconspng.com
                </a>
            </p>
        </section >
    );
}