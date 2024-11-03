import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsList from "./components/ProjectList";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-4xl mx-auto p-4">
          <Navbar />
          <Hero />
          <ProjectsList />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
