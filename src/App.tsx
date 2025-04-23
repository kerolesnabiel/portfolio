import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Banner />
      <About />
    </div>
  );
}

export default App;
