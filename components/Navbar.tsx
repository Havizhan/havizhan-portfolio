import { head, header } from "framer-motion/client";

export default function Navbar() {
    return (
        <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="w-full max-w-[95%] xl:max-w-[1400px] bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-white font-extrabold text-xl tracking-wider select-none">
                        H<span className="text-gray-400">RA</span>
                    </span>
                </div>

                {/* Center Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <a href="#hero" className="hover:text-white transition-colors">Home</a>
                    <a href="#portofolio" className="hover:text-white transition-colors">About Me</a>
                    <a href="#tech" className="hover:text-white transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </div>

                {/* Right Pill Button */}
                <a href="https://instagram.com/havizhanrhaiya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black text-xs md:text-sm font-bold rounded-full px-5 py-2 hover:bg-gray-200 transition-all shadow-md active:scale-95"
                >
                    @havizhanrhaiya
                </a>
            </nav>
        </header>
    );
}