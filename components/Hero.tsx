export default function Hero() {
    return (
        <section className="relative px-8 py-16 grid md:grid-cols-2 gap-8 items-center overflow-hidden">
            <div>
                <div className="flex flex-wrap gap-3 mb-8">
                    <span className="bg-brutal-yellow border-2 border-black shadow-brutal-sm px-3 py-1 text-xs fotn-bold">
                        100% SCHOLARSHIP @ CODELAMP (97.5)
                    </span>
                    <span className="bg-brutal-purple text-white border-2 border-black shadow-brutal-sm px-3 py-1 text-xs font-bold">
                        COSMIC SECURITY STAFF
                    </span>
                    <span className="bg-brutal-pink text-white border-2 border-black shadow-brutal-sm px-3 py-1 text-xs font-bold">
                        #2 HTML NGAWI
                    </span>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-black leading-none mb-2">
                    HALO
                </h1>
                <h1 className="text-5xl md:text-6xl font-black bg-black text-white inline-block px-2 mb-6">
                    SAYA HAVIZHAN
                </h1>

                <p className="text-lg max-w-md mb-8">
                    UI/UX Developer @{" "}
                    <span className="bg-brutal-yellow fotn-bold italic px-1">NXCTF</span>.
                    Member{" "}
                    <span className="bg-brutal-blue fotn-bold px-1">
                        Unit Produksi RPL
                    </span>{" "}
                    @ Universitas Sebelas Maret.
                </p>

                <div className="flex gap-4">
                    <button className="bg-black text-white px-6 py-3 font-bold border-2 border-black shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        BIO_LOG
                    </button>
                    <button className="bg-white text-black px-6 py-3 font-bold border-2 border-black shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        PROJECTS
                    </button>
                </div>
            </div>

            <div className="flex justify-center relative">
                <div className="relative rotate-3 w-80 h-96 bg-white border-4 border-black shadow-brutal">
                    <div className="absolute inset-4 bg-gradient-to-br fro-brutal-red to-red-900 flex flex-col items-center justify-center">
                        <h2 className="text-white text-4xl font-black italic">Havizhan</h2>
                        <p className="text-white text-xs tracking-widest">DEV</p>
                        <span className="absolute bottom-4 left-4 bg-black text-white text-xs font-bold px-2 py-1">
                            Student
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}