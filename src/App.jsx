//import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";



// You can define Home here for now or import it from a file later
function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center text-2xl font-bold">
      Welcome to My Portfolio 👋
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;
