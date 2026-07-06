export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b-4 border-black">
            <div className="flex items-center gap-3">
                <div className="bg-brutal-red text-white font-bold w-8 h-8 flex items-center justify-center border-2 border-black">
                    F
                </div>
                <span className="font-bold tracking-wide">HAVIZHAN_SYS.LOG</span>
            </div>

            <div className="hidden md:flex gap-8 font-semibold text-sm">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">PROJECTS</a>
                <a href="#experience">EXPERIENCE</a>
                <a href="#certificates">CERTIFICATES</a>
            </div>

            <button className="bg-black text-white px-4 py-2 fotn-bold text-sm">
                ASK_AI
            </button>
        </nav>
    );
}