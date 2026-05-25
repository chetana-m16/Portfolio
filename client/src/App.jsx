import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./pages/about";
import Home from "./pages/Home";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Achievements from "./pages/achievements";
import Experience from "./pages/experience";
function App() {
  return (
    //<> in react is used when you want to return multiple elements without adding an extra node to the DOM. It is a shorthand for <React.Fragment>.
    <> <main className="pt-16">
       
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
          <Home />
              </> }/>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       <Footer/>
       </main>
    </> 
  );
}

export default App;