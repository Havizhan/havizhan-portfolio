"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export default function LanyardCard() {
    // Motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Menyimpan posisi relatif klik pertama (dipakai untuk sedikit bias saat menggantung)
    const [clickOffset, setClickOffset] = useState({ x: 0, y: 0 });

    // [PERUBAHAN] Panjang tali dikecilkan (120 -> 90) mengikuti ukuran lanyard yang lebih kecil
    const L = 90;

    // 1. Sudut rotasi TALI
    // Vektor dari anchor (0,0) ke titik gantung kartu = (lx, L+ly).
    // PEMBUKTIAN ARAH (biar tidak salah lagi):
    //   Contoh: lx = +80 (ditarik ke KANAN), ly = 0
    //   angle = atan2(-80, 90) ≈ -41.6°  (NEGATIF)
    //   CSS rotate(θ) memutar SEARAH JARUM JAM untuk θ positif.
    //   Titik ujung tali (awalnya lurus ke bawah) setelah dirotasi:
    //     ujungX = -sin(θ)
    //   Untuk θ = -41.6°:  ujungX = -sin(-41.6°) = +0.66  -> POSITIF -> ujung tali ke KANAN.
    //   Jadi θ negatif -> ujung tali condong ke KANAN. Ini SUDAH BENAR
    //   dan cocok dengan arah tarikan (kanan -> tali ikut ke kanan).
    const strapAngle = useTransform([x, y], ([latestX, latestY]) => {
        const lx = latestX as number;
        const ly = latestY as number;
        const angle = Math.atan2(-lx, L + ly);
        return (angle * 180) / Math.PI;
    });

    // 2. Panjang tali (elastis mengikuti jarak tarik)
    const strapHeight = useTransform([x, y], ([latestX, latestY]) => {
        const lx = latestX as number;
        const ly = latestY as number;
        return Math.sqrt(lx * lx + (L + ly) * (L + ly));
    });

    // Opacity tali: hanya terlihat saat ditarik
    const strapOpacity = useTransform([x, y], ([latestX, latestY]) => {
        const lx = latestX as number;
        const ly = latestY as number;
        const dist = Math.sqrt(lx * lx + ly * ly);
        return Math.min(Math.max((dist - 4) / 16, 0), 1);
    });

    // 3. Rotasi KARTU
    // [PERUBAHAN] SEBELUMNYA: cardRotation dihitung dari beberapa suku
    // yang arahnya saling berlawanan (strapAngle*0.5 + lx*0.01 + torque),
    // jadi hasil akhirnya kadang malah kebalik dari strapAngle -> BUG.
    // SEKARANG: cardRotation murni turunan langsung dari strapAngle
    // (dikalikan 0.7), jadi kartu SELALU condong searah dengan tali,
    // persis seperti lanyard sungguhan (kartu = kelanjutan dari tali).
    // clickOffset.y hanya memberi bias kecil & konstan (tidak tergantung
    // arah tarik) agar kartu terasa sedikit berbeda tergantung dipegang
    // dari atas/bawah, tanpa mengganggu arah utama.
    const cardRotation = useTransform(strapAngle, (angle) => {
        return (angle as number) * 0.7 + clickOffset.y * 3;
    });

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        setClickOffset({ x: relX, y: relY });
    };

    return (
        // [PERUBAHAN] Semua ukuran dikecilkan satu tingkat di tiap breakpoint
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex flex-col items-center select-none pt-0 overflow-visible">
            {/* Titik jangkar tali */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 sm:w-7 h-2 sm:h-2.5 bg-[#0d0d0f] z-30 border-b border-white/10" />

            {/* Tali Lanyard */}
            <motion.div
                style={{
                    rotate: strapAngle,
                    height: strapHeight,
                    opacity: strapOpacity,
                    transformOrigin: "top center",
                }}
                className="absolute top-0 left-[calc(50%-8px)] sm:left-[calc(50%-9px)] w-4 sm:w-[18px] bg-[#111113] border-x border-white/10 flex flex-col items-center justify-between py-3 z-10 shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
            >
                <span className="text-[5px] font-black text-white/30 tracking-widest select-none">HRA</span>
                <span className="text-[5px] font-black text-white/30 tracking-widest select-none">HRA</span>
                <span className="text-[5px] font-black text-white/30 tracking-widest select-none">HRA</span>
                <span className="text-[5px] font-black text-white/30 tracking-widest select-none">HRA</span>
            </motion.div>

            {/* Kartu ID Card */}
            <motion.div
                style={{
                    x,
                    y,
                    rotate: cardRotation,
                    transformOrigin: "top center",
                }}
                drag
                // [PERUBAHAN] Batas drag diperkecil proporsional dengan L yang baru
                dragConstraints={{ top: -18, left: -75, right: 75, bottom: 110 }}
                dragElastic={0.4}
                dragSnapToOrigin={true}
                onPointerDown={handlePointerDown}
                whileTap={{ cursor: "grabbing" }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                // [PERUBAHAN] Hanya SATU deklarasi `left` (tidak ada lagi
                // `left-1/2` yang tabrakan). Ukuran kartu dikecilkan.
                className="absolute top-[55px] sm:top-[68px] md:top-[82px] lg:top-[92px]
                    left-[calc(50%-72px)] sm:left-[calc(50%-88px)] md:left-[calc(50%-104px)] lg:left-[calc(50%-120px)]
                    cursor-grab z-20 w-36 sm:w-44 md:w-52 lg:w-60
                    bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-xl sm:rounded-2xl
                    p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-white/50
                    flex flex-col items-center"
            >
                {/* Gantungan Besi */}
                <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-gray-400 rounded-full bg-gray-800 flex items-center justify-center shadow-md">
                        <div className="w-1.5 h-1.5 border border-gray-300 rounded-full"></div>
                    </div>
                </div>

                {/* Lubang kartu */}
                <div className="w-6 sm:w-7 h-1.5 sm:h-2 bg-black/90 mx-auto rounded-full mb-2 sm:mb-3 border border-gray-400/50 shadow-inner mt-1.5"></div>

                {/* [PERUBAHAN] Frame foto: ukuran fisik dikecilkan, tapi
                    - sumber gambar tetap file aslinya (tidak dikompres)
                    - quality={100} dipasang eksplisit
                    - `sizes` disesuaikan dengan lebar render sebenarnya
                    sehingga Next.js tetap mengambil resolusi yang pas
                    tajam untuk ukuran tampil yang baru, bukan yang buram. */}
                <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-gray-900 rounded-lg sm:rounded-xl overflow-hidden border border-black/20 shadow-md">
                    <Image
                        src="/profile-photo.jpeg"
                        alt="Profile Photo"
                        fill
                        quality={100}
                        sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
                        className="object-cover pointer-events-none"
                        priority
                    />
                </div>

                {/* Label bawah */}
                <div className="w-full pt-2 sm:pt-3 pb-1 px-1 flex justify-between items-end">
                    <p className="font-serif italic text-sm sm:text-base md:text-lg text-black font-extrabold tracking-tight opacity-90">
                        Student at UNS
                    </p>
                    <div className="text-[6px] sm:text-[8px] font-mono text-gray-700 uppercase tracking-widest font-bold">
                        VERIFIED ID
                    </div>
                </div>
            </motion.div>
        </div>
    );
}