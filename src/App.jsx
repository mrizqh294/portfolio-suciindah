import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-surface text-on-surface font-body-md antialiased selection:bg-primary-container selection:text-on-primary">
      <Navbar />
      <main className="pt-24 pb-stack-lg">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
