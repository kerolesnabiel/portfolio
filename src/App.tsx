import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container m-auto">
        <Banner />
        <About />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

export default App;
