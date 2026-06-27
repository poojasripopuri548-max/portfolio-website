import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Github from "@/sections/Github";
import Projects from "@/sections/Projects";
import Achievements from "@/sections/Achievements";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Github />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}