export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b-4 border-black bg-white text-black select-none sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <div className="bg-brutal-red text-white font-black w-8 h-8 flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    H
                </div>
                <span className="font-bold tracking-wide">HAVIZHAN_SYS.LOG</span>
            </div>

            <div className="hidden md:flex gap-8 font-extrabold text-sm">
                <a href="#home" className="hover:text-brutal-purple hover:underline underline-offset-4 decoration-2 transition-all">Home</a>
                <a href="#about" className="hover:text-brutal-purple hover:underline underline-offset-4 decoration-2 transition-all">About</a>
                <a href="#projects" className="hover:text-brutal-purple hover:underline underline-offset-4 decoration-2 transition-all">PROJECTS</a>
                <a href="#experience" className="hover:text-brutal-purple hover:underline underline-offset-4 decoration-2 transition-all">EXPERIENCE</a>
                <a href="#certificates" className="hover:text-brutal-purple hover:underline underline-offset-4 decoration-2 transition-all">CERTIFICATES</a>
            </div>

            <button className="bg-black text-white px-5 py-2 font-black text-xs md:text-sm border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer">
                ASK_AI
            </button>
        </nav>
    );
}