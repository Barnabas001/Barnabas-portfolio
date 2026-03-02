import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <main className=" bg-cyber-black min-h-screen">
      <Navbar />

      <div className="h-screen flex items-center justify-center">
        <h1 className="font-display text-cyber-blue text-5xl">Coming Soon</h1>
      </div>
      <div className="h-screen flex items-center justify-center">
        <h1 className="font-display text-cyber-purple text-5xl">
          About Coming Soon
        </h1>
      </div>
    </main>
  );
}
