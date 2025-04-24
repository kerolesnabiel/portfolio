import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container m-auto">
        <Banner />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
