import Hero from "./Components/Hero.jsx";
import Skills from "./Components/Skills.jsx";

function App() {
  return (
    <div class="w-full max-w-screen-2xl mx-auto bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex flex-col">
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
