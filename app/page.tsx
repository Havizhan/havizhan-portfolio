import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-dark-grid min-h-screen text-white relative flex flex-col justify-center items-center overflow-x-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}
