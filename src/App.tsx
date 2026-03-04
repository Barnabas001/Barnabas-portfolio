import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";

export default function App() {
  return (
    <main className=" bg-cyber-black min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />

      <div
        id="experience"
        className="h-screen flex items-center justify-center"
      >
        <p className="font-display text-cyber-muted text-2xl">
          Experience — Coming Next
        </p>
      </div>
      <div id="contact" className="h-screen flex items-center justify-center">
        <p className="font-display text-cyber-muted text-2xl">
          Contact — Coming Next
        </p>
      </div>
    </main>
  );
}
