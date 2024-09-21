import About from "./Components/About.jsx";
import Experience from "./Components/Experience.jsx";
import Hero from "./Components/Hero.jsx";
import Skills from "./Components/Skills.jsx";

function App() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto overflow-x-hidden relative">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="w-full flex flex-col">
        <Hero />
        {/* <About /> */}
        <Skills />
        <Experience />
      </div>
    </div>
  );
}

export default App;
