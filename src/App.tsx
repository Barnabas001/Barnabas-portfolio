import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";

export default function App() {
  return (
    <main className=" bg-cyber-black min-h-screen">
      <Navbar />
      <Home />

      <div id="about" className="h-screen flex items-center justify-center">
        <p className="font-display text-cyber-muted text-2xl">
          About — Coming Next
        </p>
      </div>
      <div id="skills" className="h-screen flex items-center justify-center">
        <p className="font-display text-cyber-muted text-2xl">
          Skills — Coming Next
        </p>
      </div>
      <div id="projects" className="h-screen flex items-center justify-center">
        <p className="font-display text-cyber-muted text-2xl">
          Projects — Coming Next
        </p>
      </div>
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
