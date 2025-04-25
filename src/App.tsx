import { lazy, Suspense } from "react";
import LoadingThreeDotsPulse from "./components/LoadingThreeDotsPulse";

const Navbar = lazy(() => import("./components/Navbar"));
const Banner = lazy(() => import("./components/Banner"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingThreeDotsPulse />}>
        <Navbar />
        <main className="container m-auto">
          <Banner />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </Suspense>
    </div>
  );
}

export default App;
