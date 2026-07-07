export default function Marquee() {
    const text =
        "UNIVERSITAS SEBELAS MARET • SOFTWARE ENGINEER • UI/UX DESIGNER • ";

    return (
        <div className="bg-black text-white py-3.5 overflow-hidden whitespace-nowrap border-y-4 border-black select-none">
            <div className="inline-block animate-marquee font-black text-sm md:text-base tracking-wider uppercase">
                {text.repeat(10)}
            </div>
        </div>
    );
}