"use client"

import { motion } from "framer-motion";
import { span } from "framer-motion/client";
import { ExternalLink } from "lucide-react";

interface Tag {
    name: string;
    type: "nextjs" | "java" | "greenfoot" | "figma";
}

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: Tag[];
    visitUrl: string;
    codeUrl: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Cornel Adventure",
        description: "A simple maze adventure built with Greenfoot. Navigate through challenging mazes, avoid moving enemies like pigs and ghost pigs, and find your way to finish while overcoming various obstacles.",
        image: "/image/cornel-adventure.png",
        tags: [
            { name: "Java", type: "java" },
            { name: "Greenfoot", type: "greenfoot" },
        ],
        visitUrl: "https://www.greenfoot.org/scenarios/34060",
        codeUrl: "#"
    },
    {
        id: 2,
        title: "TOP Koveksi",
        description: "A full-featured e-commerce platform for Top Konveksi, enabling customers to browse, purchase, and order a wide variety of bags online. The website includes product catalogs, shopping cart functionality, secure checkout, and a responsive user experience.",
        image: "/image/top-koveksi.png",
        tags: [
            { name: "Figma", type: "figma" },
        ],
        visitUrl: "#",
        codeUrl: "#"
    }
];

const tagStyles: Record<Tag["type"], string> = {
    nextjs: "border-white/20 text-white",
    java: "border-red-500/40 text-red-400",
    greenfoot: "border-lime-500/40 text-lime-400",
    figma: "border-pink-500/40 text-pink-400",
};


export default function Projects() {
    return (
        <section
            id="project"
            className="relative w-full py-20 sm:py-28 px-4 scroll-mt-24 overflow-hidden"
        >
            <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center relative z-10">
                {/* Header Judul */}
                <div className="text-center mb-16 sm:mb-20">
                    <h2 className="text-4xl sm:text-5l font-extrabold text-white tracking-tight">
                        My Projects
                    </h2>

                    {/* Garis Pembatas */}
                    <div className="w-16 h-[1px] bg-white/20 mx-auto my-5">
                        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                            Check out some of my recent projects. Each project is uniquely designed and developed to meet specific needs.
                        </p>
                    </div>

                    {/* Grid Project */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: projects.id * 0.1 }}
                            className="bg-[#111113]/60 border border-white/5 backdrop-blur-md rounded-[24px] overflow-hidden flex flex-col group hover:border-white/15 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900/40 border-b border-white/5">
                                {/* Project Image */}
                                <img
                                    src="project.image"
                                    alt="project.title"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                                    <a
                                        href={projects.visitUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all text-sm active:scale-95 shadow-md"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span>Visit</span>
                                    </a>
                                    {!projects.toLocaleString.some((tag) => tag.type === "figma") && (
                                        <a
                                            href={projects.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm active:scale-95 shadow-md"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            <span>Code</span>
                                        </a>
                                    )}
                                </div>
                            </div>


                            {/* Content Container */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="felx felx-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag.name}
                                            className={`px-3 py-1 rounded text-xs font-semibold bg-transparent border ${tagStyles[tag.type]}`}
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}