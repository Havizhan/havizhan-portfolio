import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-dark-grid min-h-screen text-white relative flex flex-col justify-center items-center overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
    </main>
  );
}
