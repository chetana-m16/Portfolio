import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
function App() {
  return (
    //<> in react is used when you want to return multiple elements without adding an extra node to the DOM. It is a shorthand for <React.Fragment>.
    <> <main className="pt-16">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
          <Home />
         <About/>
              </> }/>
        <Route path="/about" element={<><About />  
        <About /> </>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       <Footer/>
       </main>
    </> 
  );
}

export default App;