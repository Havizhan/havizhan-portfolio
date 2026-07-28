interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
    return (
        <a
            href={href}
            className="group relative inline-block h-6 overflow-hidden"
        >
            {/* Wrapper Teks */}
            <span className="block transition-transform duration-300 group-hover:-translate-y-6">
                <span className="block h-6 leading-6 text-gray-300">
                    {children}
                </span>

                <span className="block h-6 leading-6 text-white">
                    {children}
                </span>
            </span>

            {/* Underline */}
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
        </a>
    );
}

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
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <NavLink href="#hero">Home</NavLink>
                    <NavLink href="#aboutMe">About Me</NavLink>
                    <NavLink href="#techstack">Tech</NavLink>
                    <NavLink href="#project">Project</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
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